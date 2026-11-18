'use strict';

const $ = selector => document.querySelector(selector);
const weeks = [15, 16, 17];
const key = 'medicina-n3-2026-2';
const { subjects, topics, questions, sources, archivedTopics = [], archivedQuestions = [] } = content;
const subjectById = new Map(subjects.map(subject => [subject.id, subject]));
const topicById = new Map([...topics, ...archivedTopics].map(topic => [topic.id, topic]));
const questionById = new Map([...questions, ...archivedQuestions].map(question => [question.id, question]));
const sourceById = new Map(sources.map(source => [source.id, source]));
const studying = [['study', 'Estudado'], ['review', 'Revisado'], ['practice', 'Praticado']];
const ui = {
  subject: 'all', week: 'all', search: '', bankSearch: '', bankPage: 1, origin: 'advanced',
  examSize: 'n3', examOrigin: 'advanced', timer: true, timerMode: 'up', timerMinutes: 90
};
const fresh = () => ({ version: 1, topics: {}, bank: {}, highlights: {}, active: null, history: [] });
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const id = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
const folded = value => String(value).normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const percent = (count, total) => total ? Math.round(count / total * 100) : 0;
const empty = text => `<p class="empty">${esc(text)}</p>`;
const href = path => `#${path}`;
const badge = item => {
  const block = topicById.get(item.topic ?? item.id).block;
  const label = block === 'cirurgico' ? 'HAM V, cirúrgico' : block === 'clinico' ? 'HAM V, clínico' : subjectById.get(item.subject).label;
  return `<span class="chip subject-${item.subject}">${label}</span><span class="chip">${item.week == null ? 'Semana não indicada' : `Semana ${item.week}`}</span>`;
};
const heading = (title, text = '') => `<div class="section-title"><h1>${title}</h1>${text ? `<p>${text}</p>` : ''}</div>`;
const metric = (title, value, label) => `<div class="metric"><small>${title}</small><strong>${value}</strong><span>${label}</span></div>`;
const originLabel = question => {
  if (question.origin === 'historical') return 'Prova anterior';
  if (question.discursive) return question.advanced ? 'Discursiva difícil' : 'Discursiva inédita';
  return question.advanced ? 'Inédita difícil' : 'Questão inédita';
};
const examDate = new Date('2026-11-23T07:00:00-04:00');
const n3Format = { soi: 13, ham: 8, iesc: 8 };
const hasAnswer = question => Number.isInteger(question.answer) && question.answer >= 0 && question.answer < (question.options?.length ?? 0);
const option = (value, text, selected) => `<option value="${value}"${String(value) === String(selected) ? ' selected' : ''}>${text}</option>`;
const planStatus = topic => state.topics[topic.id] ?? {};
const hosted = location.protocol !== 'file:' && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
const safeLink = url => typeof url === 'string' && /^(https:\/\/|docs\/)/.test(url);
let state = fresh();
let route = 'inicio';
let ticker;

function pruneRemoved(data) {
  // Questões retiradas do banco: limpa referências antigas sem descartar o restante do progresso.
  const fix = attempt => {
    if (!attempt || typeof attempt !== 'object' || !Array.isArray(attempt.ids)) return attempt;
    const current = attempt.ids[attempt.index];
    attempt.ids = attempt.ids.filter(k => questionById.has(k));
    if (!attempt.ids.length) return null;
    const pos = attempt.ids.indexOf(current);
    attempt.index = pos >= 0 ? pos : Math.min(Number.isInteger(attempt.index) ? attempt.index : 0, attempt.ids.length - 1);
    if (attempt.entries && typeof attempt.entries === 'object') for (const k of Object.keys(attempt.entries)) if (!questionById.has(k)) delete attempt.entries[k];
    return attempt;
  };
  if (data && typeof data === 'object') {
    if (data.active) data.active = fix(data.active);
    if (Array.isArray(data.history)) data.history = data.history.map(fix).filter(Boolean);
    if (data.bank && typeof data.bank === 'object') for (const k of Object.keys(data.bank)) if (!questionById.has(k)) delete data.bank[k];
  }
  return data;
}

function validProgress(data) {
  pruneRemoved(data);
  const dict = value => value && typeof value === 'object' && !Array.isArray(value);
  const validEntry = item => dict(item) && (item.answer == null || Number.isInteger(item.answer))
    && (item.cuts == null || Array.isArray(item.cuts) && item.cuts.every(Number.isInteger));
  const validAttempt = attempt => dict(attempt) && typeof attempt.id === 'string' && /^[a-z0-9-]+$/i.test(attempt.id)
    && Array.isArray(attempt.ids) && attempt.ids.length > 0 && attempt.ids.every(k => questionById.has(k))
    && Number.isInteger(attempt.index) && attempt.index >= 0 && attempt.index < attempt.ids.length
    && dict(attempt.entries) && Object.values(attempt.entries).every(validEntry)
    && Number.isFinite(attempt.elapsed) && attempt.elapsed >= 0
    && (attempt.runningSince == null || Number.isFinite(attempt.runningSince));
  return dict(data) && data.version === 1 && dict(data.topics) && Object.values(data.topics).every(dict)
    && dict(data.bank) && Object.values(data.bank).every(validEntry) && dict(data.highlights)
    && Object.values(data.highlights).every(entries => Array.isArray(entries) && entries.every(mark => dict(mark)
      && Number.isInteger(mark.start) && Number.isInteger(mark.end) && ['yellow', 'green', 'pink'].includes(mark.color)))
    && (data.active === null || validAttempt(data.active))
    && Array.isArray(data.history) && data.history.every(attempt => validAttempt(attempt) && Number.isFinite(attempt.finished));
}

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove('show'), 3200);
}

function storageStatus(ok) {
  const node = $('#storage-status');
  node.textContent = ok ? 'Progresso salvo neste navegador' : 'Não foi possível salvar o progresso neste navegador';
  node.classList.toggle('storage-warning', !ok);
}

function save() {
  try {
    localStorage.setItem(key, JSON.stringify(state));
    storageStatus(true);
  } catch {
    storageStatus(false);
  }
}

try {
  const raw = localStorage.getItem(key);
  if (raw) {
    const data = JSON.parse(raw);
    if (validProgress(data)) state = data;
    else toast('O progresso salvo está incompatível. Tente restaurar um backup.');
  }
} catch {
  storageStatus(false);
}

function subjectFilter() {
  const rows = [...subjects.map(s => [s.id, s.label]), ['clinico', 'HAM V, clínico'], ['cirurgico', 'HAM V, cirúrgico']];
  return `<label>Disciplina <select data-filter="subject">${option('all', 'Todas', ui.subject)}${rows.map(([id, label]) => option(id, label, ui.subject)).join('')}</select></label>`;
}

function weekFilter() {
  return `<label>Semana <select data-filter="week">${option('all', 'Todas', ui.week)}${weeks.map(w => option(w, `Semana ${w}`, ui.week)).join('')}${option('recorte', 'Sem semana indicada', ui.week)}</select></label>`;
}

function inScope(item) {
  const block = topicById.get(item.topic ?? item.id).block;
  const subjectMatches = ui.subject === 'all' || ui.subject === item.subject || ui.subject === block;
  const weekMatches = ui.week === 'all' || (ui.week === 'recorte' ? item.week == null : Number(ui.week) === item.week);
  return subjectMatches && weekMatches;
}

function go(path) {
  if (location.hash === href(path)) render();
  else location.hash = path;
}

function progressCard() {
  const studied = topics.filter(topic => planStatus(topic).study).length;
  const rate = percent(studied, topics.length);
  return `<div class="progress-card">
    <span class="eyebrow">Seu progresso</span>
    <div class="ring" style="--p:${rate}"><div><strong>${topics.length ? `${rate}%` : '—'}</strong><small>estudado</small></div></div>
    <b>${studied} de ${topics.length} temas estudados</b>
    <a href="#plano">Ver meu checklist</a>
  </div>`;
}

function countdown() {
  const days = Math.ceil((examDate - Date.now()) / 86400000);
  return days > 1 ? `${days} dias para a N3.` : days === 1 ? 'A N3 é amanhã.' : days === 0 ? 'A N3 é hoje.' : 'Prova N3 realizada.';
}

function patternPanel() {
  return `<section class="panel n3-pattern"><h2>Como as provas anteriores cobram</h2>
    <ul>
      <li><b>SOI V.</b> Relacione a fisiopatologia aos sintomas e exames. Confira se o mecanismo explica a evolução e os achados discordantes.</li>
      <li><b>HAM V.</b> Interprete as manobras e os achados do caso. Escolha a próxima ação considerando o cenário, a sequência e a segurança do paciente.</li>
      <li><b>IESC V.</b> Avalie risco e vulnerabilidade no território. Decida quem assume o cuidado imediato e como a equipe mantém o seguimento.</li>
      <li><b>Discursivas.</b> Justifique a decisão com os dados do caso e inclua os itens solicitados em cada parte.</li>
    </ul></section>`;
}

function dashboard() {
  const days = Math.ceil((examDate - Date.now()) / 86400000);
  const studied = topics.filter(topic => planStatus(topic).study).length;
  const solved = Object.values(state.bank).filter(entry => entry.revealed).length;
  const exams = state.history.length;
  const when = days > 1 ? `faltam ${days} dias` : days === 1 ? 'é amanhã' : days === 0 ? 'é hoje' : 'já foi realizada';
  const done = topic => planStatus(topic).study;
  const cell = (subject, week) => {
    const list = topics.filter(t => t.subject === subject.id && (week === null ? t.week == null : t.week === week));
    return `<td>${list.length ? `<ul class="dash-topics">${list.map(t => `<li class="${done(t) ? 'is-done' : ''}"><a href="#tema/${t.id}">${esc(t.title)}</a></li>`).join('')}</ul>` : '<span class="dash-none">Nenhum tema</span>'}</td>`;
  };
  return `<section class="dash-head">
    <div>
      <h1>Visão geral</h1>
      <p class="dash-status">A prova específica é em 23 de novembro e ${when}.</p>
    </div>
    <div class="dash-actions"><a href="#banco" class="button">Resolver questões difíceis</a><a href="#plano" class="button ghost">Abrir checklist</a><a href="#simulado" class="button ghost">${state.active ? 'Retomar simulado' : 'Fazer simulado'}</a></div>
  </section>
  <dl class="dash-stats">
    <div><dt>Temas estudados</dt><dd>${studied}<span>/${topics.length}</span></dd><div class="dash-bar"><i style="width:${percent(studied, topics.length)}%"></i></div></div>
    <div><dt>Questões resolvidas</dt><dd>${solved}<span>/${questions.length}</span></dd><div class="dash-bar"><i style="width:${percent(solved, questions.length)}%"></i></div></div>
    <div><dt>Simulados feitos</dt><dd>${exams}</dd><p>${exams ? `Último: ${score(state.history[0])} de ${state.history[0].ids.length}` : 'Nenhum ainda'}</p></div>
  </dl>
  <section class="panel dash-map">
    <div class="dash-map-head"><h2>Conteúdo da prova</h2><p>Temas por disciplina e semana. Os já estudados aparecem marcados.</p></div>
    <div class="dash-table-wrap"><table class="dash-table">
      <thead><tr><th scope="col">Disciplina</th>${weeks.map(w => `<th scope="col"><a href="#plano/semana-${w}">Semana ${w}</a></th>`).join('')}<th scope="col">Semana não indicada</th></tr></thead>
      <tbody>${subjects.map(subject => `<tr><th scope="row"><a href="#plano/${subject.id}">${subject.label}</a><small>${subject.name}</small></th>${[...weeks, null].map(w => cell(subject, w)).join('')}</tr>`).join('')}</tbody>
    </table></div>
  </section>
  ${patternPanel()}`;
}

function plan() {
  const visible = topics.filter(topic => inScope(topic) && folded(topic.title).includes(folded(ui.search)));
  const counts = studying.map(([field, label]) => metric(label, topics.filter(topic => planStatus(topic)[field]).length, `de ${topics.length} temas`));
  const cards = visible.map(topic => `<article class="week-card n3-topic">
    <div class="meta">${badge(topic)}</div>
    <h3><a href="#tema/${topic.id}">${esc(topic.title)}</a></h3>
    ${checks(topic)}
    <div class="week-bottom"><a href="#tema/${topic.id}">Abrir revisão</a></div>
  </article>`);
  return heading('Meu checklist', 'Marque as etapas de cada tema e registre suas dúvidas.')
    + `<div class="metrics n3-metrics">${counts.join('')}</div>
    <div class="toolbar">${subjectFilter()}${weekFilter()}
      <label>Buscar tema <input type="search" data-filter="search" value="${esc(ui.search)}" placeholder="Ex. tireoide"></label>
    </div>
    <div class="week-grid">${cards.join('') || empty(ui.search ? 'Nenhum tema encontrado.' : 'Ainda não há temas cadastrados para esse filtro.')}</div>`;
}

function checks(topic) {
  return `<div class="checks">${studying.map(([field, label]) => `<label><input type="checkbox" data-topic="${topic.id}" data-check="${field}"${planStatus(topic)[field] ? ' checked' : ''}> ${label}</label>`).join('')}</div>`;
}

function sourceText(sourceId, page) {
  const source = sourceById.get(sourceId);
  if (!source) return '';
  const label = `${esc(source.title)}${page ? `, p. ${esc(page)}` : ''}`;
  if (!safeLink(source.url)) return label;
  if (hosted && source.url.startsWith('docs/')) return '';
  const url = page && /\.pdf$/i.test(source.url) ? `${source.url}#page=${encodeURIComponent(page)}` : source.url;
  return `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`;
}

function topicPage(topic) {
  if (!topic) return missing();
  const practice = (topic.archived ? archivedQuestions : questions).filter(question => question.topic === topic.id);
  const sourceList = (topic.sources ?? []).map(source => typeof source === 'string' ? sourceText(source) : sourceText(source.id, source.page)).filter(Boolean);
  return `<a href="#plano" class="back">← Meu checklist</a>
    <div class="question-meta">${badge(topic)}${topic.archived ? '<span class="chip">Arquivo</span>' : ''}</div>
    ${heading(esc(topic.title))}
    <section class="panel n3-reading">${(topic.sections ?? []).map((section, index) => `
      <h2>${esc(section.title)}</h2><p>${markText(section.text, `topic-${topic.id}-${index}`)}</p>`).join('')}
      ${topic.memorize?.length ? `<h2>O que memorizar</h2><ul class="n3-memo">${topic.memorize.map((m, i) => `<li>${markText(m, `topic-${topic.id}-m${i}`)}</li>`).join('')}</ul>` : ''}
      ${topic.traps?.length ? `<h2>Pegadinhas da banca</h2><ul class="n3-traps">${topic.traps.map((m, i) => `<li>${markText(m, `topic-${topic.id}-t${i}`)}</li>`).join('')}</ul>` : ''}
      ${topic.station?.length ? `<h2>Checklist da estação prática</h2><ol class="n3-station">${topic.station.map(m => `<li>${esc(m)}</li>`).join('')}</ol>` : ''}
      ${sourceList.length ? `<h2>Fontes</h2><div class="source-links">${sourceList.map(label => `<span>${label}</span>`).join('')}</div>` : ''}
    </section>
    <div class="two-col n3-topic-details">
      <section class="panel"><h2>Meu progresso</h2>${checks(topic)}
      <label class="n3-notes">Minhas anotações<textarea rows="5" data-note="${topic.id}">${esc(planStatus(topic).note)}</textarea></label></section>
      <section class="panel"><h2>Questões do tema</h2>${practice.length
        ? `<ul class="n3-links">${practice.map((question, index) => `<li><a href="#questao/${question.id}">Questão ${index + 1}, ${originLabel(question).toLowerCase()}</a></li>`).join('')}</ul>`
        : empty('Nenhuma questão cadastrada para este tema.')}</section>
    </div>`;
}

function ranking() {
  const historical = questions.filter(q => q.origin === 'historical' && sourceById.has(q.source) && inScope(q));
  const tally = new Map();
  for (const question of historical) tally.set(question.topic, (tally.get(question.topic) ?? 0) + 1);
  const rows = [...tally.entries()].sort((a, b) => b[1] - a[1]);
  return heading('Ranking histórico', 'A contagem usa a amostra de questões anteriores conferidas para este recorte.')
    + `<div class="toolbar">${subjectFilter()}${weekFilter()}</div>
    ${rows.length ? `<div class="panel chart"><p class="tiny">${historical.length} ocorrências no filtro. Frequência da amostra.</p>${rows.map(([topicId, count]) => {
      const topic = topicById.get(topicId);
      return `<div class="bar-row"><a class="bar-label" href="#tema/${topic.id}">${esc(topic.title)}</a>
        <div class="bar-track"><i class="bar-spec" style="width:${percent(count, rows[0][1])}%"></i></div>
        <span class="bar-value">${count} questões</span></div>`;
    }).join('')}</div>` : empty('Ainda não há provas anteriores conferidas para calcular o ranking deste recorte.') }`;
}

function inBankOrigin(question) {
  if (ui.origin === 'advanced') return question.advanced && !question.discursive;
  if (ui.origin === 'disc') return question.discursive;
  return ui.origin === 'all' || question.origin === ui.origin;
}

function bank() {
  const query = folded(ui.bankSearch.trim());
  const visible = questions.filter(q => inScope(q) && inBankOrigin(q)
    && folded(`${q.stem} ${topicById.get(q.topic).title}`).includes(query));
  const pageSize = 24;
  const lastPage = Math.max(1, Math.ceil(visible.length / pageSize));
  const page = Math.min(ui.bankPage, lastPage);
  const start = (page - 1) * pageSize;
  return heading('Banco de questões', 'Resolva um caso e confira o raciocínio de cada alternativa.')
    + `<div class="toolbar">${subjectFilter()}${weekFilter()}
      <label>Questões <select data-filter="origin">${option('advanced', 'Inéditas difíceis', ui.origin)}${option('disc', 'Discursivas', ui.origin)}${option('historical', 'Provas anteriores', ui.origin)}${option('new', 'Todas as inéditas', ui.origin)}${option('all', 'Banco completo', ui.origin)}</select></label>
      <label>Buscar <input type="search" data-filter="bankSearch" value="${esc(ui.bankSearch)}" placeholder="Tema ou palavra"></label>
    </div>
    <p class="tiny bank-count" aria-live="polite">${visible.length ? `Mostrando ${start + 1} a ${Math.min(start + pageSize, visible.length)} de ${visible.length} questões` : ''}</p>
    <div class="week-grid">${visible.slice(start, start + pageSize).map(q => `<article class="week-card n3-topic">
      <div class="meta">${badge(q)}</div>
      <h3><a href="#questao/${q.id}">${esc(topicById.get(q.topic).title)}</a></h3>
      <p>${esc(q.stem.length > 140 ? q.stem.slice(0, 140) + '…' : q.stem)}</p>
      <div class="week-bottom"><span>${originLabel(q)}${state.bank[q.id]?.revealed ? ', resolvida' : ''}</span>
        <a href="#questao/${q.id}">Abrir</a></div>
    </article>`).join('') || empty('Nenhuma questão disponível neste filtro.')}</div>
    ${lastPage > 1 ? `<nav class="bank-pages" aria-label="Paginação do banco">
      <button type="button" data-bank-page="${page - 1}" ${page === 1 ? 'disabled' : ''}>Anterior</button>
      <span class="tiny">Página ${page} de ${lastPage}</span>
      <button type="button" data-bank-page="${page + 1}" ${page === lastPage ? 'disabled' : ''}>Próxima</button>
    </nav>` : ''}`;
}

function missing() {
  return heading('Página indisponível') + '<a class="button" href="#inicio">Voltar à visão geral</a>';
}

function options(question, entry, revealed) {
  const cuts = entry.cuts ?? [];
  if (!question.options?.length) {
    return `<label class="n3-notes">Sua resposta<textarea rows="4" data-draft ${revealed ? 'readonly' : ''}>${esc(entry.draft)}</textarea></label>`;
  }
  return `<fieldset class="n3-options"><legend>Alternativas</legend>
    ${question.options.map((text, index) => {
      const cut = cuts.includes(index);
      const letter = String.fromCharCode(65 + index);
      const feedback = revealed && hasAnswer(question)
        ? index === question.answer ? 'correct' : entry.answer === index ? 'wrong' : ''
        : '';
      return `<div class="option-wrap">
        <label class="option ${cut ? 'cut' : ''} ${entry.answer === index ? 'selected' : ''} ${feedback}">
          <input type="radio" name="answer" value="${index}" ${entry.answer === index ? 'checked' : ''}
            ${revealed || cut ? 'disabled' : ''}>
          <span class="letter">${letter}</span><span class="opt-text">${markText(text, `q-${question.id}-${index}`)}</span>
        </label>
        ${revealed ? '' : `<button type="button" class="cut-btn ${cut ? 'active' : ''}" data-cut="${index}"
          aria-label="${cut ? 'Restaurar' : 'Eliminar'} alternativa ${letter}" aria-pressed="${cut}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/></svg></button>`}
      </div>`;
    }).join('')}</fieldset>`;
}

function questionPanel(question, entry, revealed = false, showContext = true) {
  return `${showContext ? `<div class="question-meta">${badge(question)}<span class="chip">${originLabel(question)}</span>${question.archived ? '<span class="chip">Arquivo</span>' : ''}</div>` : ''}
    <p class="tiny q-hint">Selecione um trecho para destacar; clique no destaque para trocar a cor ou remover.${!revealed && question.options?.length ? ' Use a tesoura para riscar alternativas; clique de novo para restaurar.' : ''}</p>
    <p class="question-stem">${markText(question.stem, `q-${question.id}-stem`)}</p>
    ${question.image && safeLink(question.image) ? `<img class="n3-question-image" src="${esc(question.image)}" alt="${esc(question.imageAlt)}">` : ''}
    ${options(question, entry, revealed)}`;
}

function correction(question, entry) {
  let outcome = question.discursive ? 'Resposta esperada' : 'Questão para conferência';
  if (hasAnswer(question)) {
    outcome = entry.answer == null ? 'Em branco' : entry.answer === question.answer ? 'Correta' : 'Incorreta';
  }
  return `<div class="n3-correction">
    <p><b>${outcome}${hasAnswer(question) ? `. Gabarito: ${String.fromCharCode(65 + question.answer)}` : ''}</b></p>
    <p>${esc(question.explanation ?? 'Confira a fonte da questão para revisar o gabarito.')}</p>
    ${question.comments?.length ? `<h3>Comentário de cada alternativa</h3><ol type="A">${question.comments.map(comment => `<li>${esc(comment)}</li>`).join('')}</ol>` : ''}
    ${question.rubric?.length ? `<h3>Rubrica de autoavaliação</h3><ul>${question.rubric.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}
    ${question.caveat ? `<p class="n3-caveat">${esc(question.caveat)}</p>` : ''}
    ${sourceText(question.source, question.page) ? `<p class="tiny">${sourceText(question.source, question.page)}</p>` : ''}
    ${(() => { const refs = (question.reviewRefs ?? []).filter(id => sourceById.get(id)?.url !== sourceById.get(question.source)?.url); const texts = refs.map(id => sourceText(id)).filter(Boolean); return texts.length ? `<p class="tiny n3-review-refs">Revisado em 18/11/2026 com: ${texts.join('; ')}</p>` : ''; })()}
  </div>`;
}

function focusButton() {
  const on = document.body.classList.contains('focus-mode');
  return `<button type="button" class="n3-focus-btn" data-action="focus-toggle" aria-pressed="${on}">${on ? '⤢ Sair do modo foco' : '⛶ Modo foco'}</button>`;
}

function bankQuestion(question) {
  if (!question) return missing();
  const entry = state.bank[question.id] ?? {};
  return `<div class="n3-qtop"><a class="back" href="#banco">← Banco de questões</a>${focusButton()}</div>
    ${heading(esc(topicById.get(question.topic).title))}
    <section class="question-panel" data-question-id="${question.id}">
      ${questionPanel(question, entry, entry.revealed)}
      <div class="exam-actions">
        ${entry.revealed ? '<button data-action="bank-retry">Resolver novamente</button>' : '<button class="primary" data-action="bank-reveal">Confirmar resposta</button>'}
        <button data-action="flag" aria-pressed="${Boolean(entry.flag)}">${entry.flag ? '⚑ Marcada para revisar' : '⚐ Marcar para revisar'}</button>
      </div>
      ${entry.revealed ? correction(question, entry) : ''}
    </section>`;
}

const timeUsed = attempt => attempt.elapsed + (attempt.runningSince == null ? 0 : Math.max(0, Date.now() - attempt.runningSince));

function stopClock(attempt) {
  attempt.elapsed = timeUsed(attempt);
  attempt.runningSince = null;
}

function timeLabel(amount) {
  const seconds = Math.floor(Math.max(0, amount) / 1000);
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function timerRemaining(attempt) {
  return (attempt.timerLimit ?? 0) - timeUsed(attempt);
}

function timerDisplay(attempt) {
  if (attempt.timerMode === 'down' && attempt.timerLimit > 0) {
    const remaining = timerRemaining(attempt);
    return remaining > 0 ? timeLabel(remaining) : '00:00 (tempo esgotado)';
  }
  return timeLabel(timeUsed(attempt));
}

function score(attempt, ids = attempt.ids) {
  return ids.filter(qid => attempt.entries[qid]?.answer === questionById.get(qid).answer).length;
}

function examPool() {
  return questions.filter(q => hasAnswer(q) && (ui.examSize === 'n3'
    ? q.advanced
    : inScope(q) && (ui.examOrigin === 'all' || (ui.examOrigin === 'advanced' ? q.advanced : q.origin === ui.examOrigin))));
}

function examHome() {
  const fixed = ui.examSize === 'n3';
  const selected = examPool();
  const count = fixed ? Object.values(n3Format).reduce((sum, n) => sum + n, 0) : Math.min(ui.examSize, selected.length);
  return heading('Simulado N3', 'Monte a tentativa e confira a correção depois de finalizar.')
    + (state.active ? `<section class="panel n3-resume"><div><h2>Tentativa em andamento</h2>
      <p>${state.active.ids.filter(qid => state.active.entries[qid]?.answer != null).length} de ${state.active.ids.length} respondidas</p></div>
      <button class="primary" data-action="exam-resume">Retomar simulado</button></section>` : '')
    + `<section class="panel"><h2>Configurar simulado</h2>
      <div class="toolbar">
        <label>Quantidade <select data-filter="examSize">${option('n3', 'Formato N3: 13 SOI, 8 HAM e 8 IESC', ui.examSize)}${[5, 10, 15, 20, 30, 60, 100].map(n => option(n, n, ui.examSize)).join('')}</select></label>
        ${fixed ? '' : `${subjectFilter()}${weekFilter()}<label>Questões <select data-filter="examOrigin">${option('advanced', 'Inéditas difíceis', ui.examOrigin)}${option('historical', 'Provas anteriores', ui.examOrigin)}${option('all', 'Banco completo', ui.examOrigin)}</select></label>`}
      </div>
      <p>${count ? `${count} questões nesta tentativa, de ${selected.length} objetivas disponíveis` : 'Nenhuma questão pontuável cadastrada neste recorte.'}</p>
      ${fixed ? '<p class="tiny">Composição de treino baseada nas N1 específicas, com questões inéditas difíceis das três disciplinas. As discursivas ficam no banco.</p>' : ''}
      <label><input type="checkbox" data-filter="timer" ${ui.timer ? 'checked' : ''}> Exibir cronômetro</label>
      ${ui.timer ? `<div class="toolbar" style="margin-top:12px">
        <label>Contagem do tempo <select data-filter="timerMode">${option('up', 'Crescente', ui.timerMode)}${option('down', 'Decrescente (regressiva)', ui.timerMode)}</select></label>
        ${ui.timerMode === 'down' ? `<label>Duração <select data-filter="timerMinutes">${[15, 30, 45, 60, 90, 120, 150, 180].map(m => option(m, `${m} min`, ui.timerMinutes)).join('')}</select></label>` : ''}
      </div>` : ''}
      <div class="exam-actions"><button type="button" class="primary" data-action="exam-start" ${!count ? 'disabled' : ''}>Iniciar simulado</button></div>
    </section>
    <section class="panel"><h2>Histórico de tentativas</h2>${state.history.length ? `<ul class="n3-links">
      ${state.history.map(a => `<li><a href="#resultado/${a.id}">${new Date(a.finished).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })} · ${score(a)}/${a.ids.length} acertos</a></li>`).join('')}</ul>`
      : empty('Nenhuma tentativa finalizada.')}</section>`;
}

function selectByTopic(pool, limit) {
  const byTopic = new Map();
  for (const q of pool) if (!byTopic.has(q.topic)) byTopic.set(q.topic, q);
  const first = [...byTopic.values()].slice(0, limit);
  return [...first, ...pool.filter(q => !first.includes(q)).slice(0, limit - first.length)];
}

function startExam() {
  const pool = examPool();
  if (!pool.length) return;
  for (let index = pool.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [pool[other], pool[index]] = [pool[index], pool[other]];
  }
  const timerConfig = { timer: ui.timer, timerMode: ui.timerMode, timerLimit: ui.timerMode === 'down' ? Number(ui.timerMinutes) * 60000 : 0, timeUpNotified: false };
  let selected;
  if (ui.examSize === 'n3') {
    selected = subjects.flatMap(subject => {
      const subset = pool.filter(q => q.subject === subject.id);
      if (subject.id !== 'ham') return selectByTopic(subset, n3Format[subject.id]);
      return [...selectByTopic(subset.filter(q => topicById.get(q.topic).block === 'clinico'), 5),
        ...selectByTopic(subset.filter(q => topicById.get(q.topic).block === 'cirurgico'), 3)];
    });
  } else {
    selected = ui.subject === 'all' ? subjects.map(subject => pool.find(q => q.subject === subject.id)).filter(Boolean) : [];
    selected.push(...pool.filter(q => !selected.includes(q)).slice(0, Number(ui.examSize) - selected.length));
  }
  const ids = pool.filter(q => selected.includes(q)).map(q => q.id);
  state.active = { id: id(), ids, index: 0, entries: {}, elapsed: 0, runningSince: Date.now(), ...timerConfig };
  save();
  try { if (localStorage.getItem(key + '-foco') === '1') document.body.classList.add('focus-mode'); } catch {}
  go('resolvendo');
}

function activeExam() {
  const attempt = state.active;
  if (!attempt) return examHome();
  const question = questionById.get(attempt.ids[attempt.index]);
  const entry = attempt.entries[question.id] ?? {};
  return heading('Simulado em andamento')
    + `<div class="exam-top"><div><h2>Questão ${attempt.index + 1} de ${attempt.ids.length}</h2>
    ${attempt.timer ? `<span class="tag">${attempt.timerMode === 'down' ? 'Restante' : 'Tempo'} <b id="timer">${timerDisplay(attempt)}</b></span>` : ''}</div>
    <div class="actions">${focusButton()}<button data-action="exam-pause">Pausar</button><button class="primary" data-action="exam-finish">Finalizar</button></div></div>
    <div class="n3-map" aria-label="Questões do simulado">
      ${attempt.ids.map((qid, index) => {
        const current = index === attempt.index;
        const answer = attempt.entries[qid];
        return `<button data-jump="${index}" class="${answer?.answer != null ? 'n3-done' : ''}" aria-current="${current ? 'step' : 'false'}" aria-label="Questão ${index + 1}${answer?.flag ? ', marcada para revisar' : ''}">${index + 1}${answer?.flag ? ' ⚑' : ''}</button>`;
      }).join('')}</div>
    <section class="question-panel" data-question-id="${question.id}">
      ${questionPanel(question, entry, false, false)}
      <div class="exam-actions">
        <button data-jump="${attempt.index - 1}" ${attempt.index === 0 ? 'disabled' : ''}>← Anterior</button>
        <button data-action="flag" aria-pressed="${Boolean(entry.flag)}">${entry.flag ? '⚑ Marcada para revisar' : '⚐ Marcar para revisar'}</button>
        <button data-action="clear" ${entry.answer == null ? 'disabled' : ''}>Limpar resposta</button>
        <button data-jump="${attempt.index + 1}" ${attempt.index === attempt.ids.length - 1 ? 'disabled' : ''}>Próxima</button>
      </div>
    </section>`;
}

function result(attempt) {
  if (!attempt) return missing();
  const matches = score(attempt);
  const answered = attempt.ids.filter(qid => attempt.entries[qid]?.answer != null).length;
  return heading('Resultado do simulado', 'Revise o gabarito e a explicação de cada questão.')
    + `<div class="metrics n3-metrics">${metric('Acertos', `${matches}/${attempt.ids.length}`, `${percent(matches, attempt.ids.length)}% da prova`)}
    ${metric('Em branco', attempt.ids.length - answered, 'Questões sem resposta')}
    ${metric('Tempo decorrido', timeLabel(attempt.elapsed), 'Minutos e segundos')}</div>
    <section class="panel"><h2>Desempenho por disciplina</h2><ul class="n3-links">
      ${subjects.map(subject => {
        const ids = attempt.ids.filter(qid => questionById.get(qid).subject === subject.id);
        return ids.length ? `<li><b>${subject.label}:</b> ${score(attempt, ids)} de ${ids.length}</li>` : '';
      }).join('')}</ul></section>
    <section class="panel"><h2>Gabarito comentado</h2>
      ${attempt.ids.map((qid, index) => {
        const q = questionById.get(qid);
        const entry = attempt.entries[qid] ?? {};
        const outcome = entry.answer == null ? 'Em branco' : entry.answer === q.answer ? 'Correta' : 'Incorreta';
        return `<details><summary>${index + 1}. ${esc(topicById.get(q.topic).title)} (${outcome.toLowerCase()})</summary>
          <div>${questionPanel(q, entry, true)}${correction(q, entry)}</div></details>`;
      }).join('')}</section>
    <a href="#simulado" class="button">Voltar aos simulados</a>`;
}

function sourcesPage() {
  return heading('Fontes e progresso')
    + `<section class="panel"><h2>Escopo da N3</h2>
      <p>SOI V, HAM V e IESC V, semanas 15, 16 e 17. Prova em 23/11/2026. Use a lista atualizada e a linha do tempo do semestre 2026.2 para conferir a cobertura.</p>
      <ul class="tiny">
        <li><b>SOI V.</b> DM1, DM2, síndrome metabólica, farmacologia do diabetes, complicações agudas e crônicas, tireoide, neoplasias da tireoide e paratireoides.</li>
        <li><b>HAM V.</b> Exame clínico, urgências, coleta de líquor em pessoa com HIV e procedimentos do bloco cirúrgico. Os temas sem semana indicada ficam no filtro “Todas”.</li>
        <li><b>IESC V.</b> Sintomas depressivos e de ansiedade na APS (S15), cuidados paliativos na APS (S16) e organização da RAPS (S17).</li>
        <li><b>Questões.</b> O filtro “Provas anteriores” reúne itens com indicação do caderno. As inéditas difíceis trazem alternativas comentadas, e as novas discursivas têm rubrica de autoavaliação.</li>
      </ul>
      <ul class="n3-links">${sources.map(source => sourceText(source.id)).filter(Boolean).map(text => `<li>${text}</li>`).join('')}</ul>
    </section>
    <section class="panel" id="backup"><h2>Backup do progresso</h2>
      <p>Checklist, anotações, marca-texto, alternativas eliminadas e tentativas ficam neste navegador. Use o backup para transferir seu progresso.</p>
      <div class="backup-actions"><button class="primary" data-action="backup-export">Exportar backup ↓</button>
        <button type="button" data-action="backup-import">Restaurar backup ↑</button></div>
    </section>
    <section class="panel"><h2>Centrais anteriores</h2><div class="source-links">
      ${subjects.map(subject => `<a href="${subject.previous}" target="_blank" rel="noopener">${subject.label} · N2</a>`).join('')}
    </div></section>`;
}

const main = $('#content');
const dialog = $('#dialog');
const toolbar = $('#hl-toolbar');
let selection;
let renderedHash;

function routeView(path, part) {
  switch (path) {
    case 'inicio': return dashboard();
    case 'plano': return plan();
    case 'tema': return topicPage(topicById.get(part));
    case 'ranking': return ranking();
    case 'banco': return bank();
    case 'questao': return bankQuestion(questionById.get(part));
    case 'simulado': return examHome();
    case 'resolvendo': return activeExam();
    case 'resultado': return result(state.history.find(attempt => attempt.id === part));
    case 'fontes':
    case 'backup': return sourcesPage();
    default: return missing();
  }
}

function render({ scroll = false } = {}) {
  clearInterval(ticker);
  hideSelection();
  const hash = location.hash || '#inicio';
  const [path, part] = hash.slice(1).split('/');

  if (hash !== renderedHash) {
    if (path === 'plano' && part) {
      ui.subject = subjectById.has(part) ? part : 'all';
      ui.week = /^semana-(15|16|17)$/.test(part) ? part.slice(7) : 'all';
      ui.search = '';
    } else if (path !== route) {
      ui.search = '';
    }
    if (route === 'resolvendo' && path !== route && state.active?.runningSince != null) {
      stopClock(state.active);
      save();
    }
    route = path;
    renderedHash = hash;
  }

  if (!['resolvendo', 'questao'].includes(path)) document.body.classList.remove('focus-mode');
  main.innerHTML = routeView(path, part);
  const nav = { tema: 'plano', questao: 'banco', resolvendo: 'simulado', resultado: 'simulado', backup: 'fontes' }[route] ?? route;
  for (const link of document.querySelectorAll('[data-nav]')) {
    const current = link.dataset.nav === nav;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if ($('#timer') && state.active) ticker = setInterval(() => {
    const attempt = state.active;
    $('#timer').textContent = timerDisplay(attempt);
    if (attempt.timerMode === 'down' && attempt.timerLimit > 0 && timerRemaining(attempt) <= 0 && !attempt.timeUpNotified) {
      attempt.timeUpNotified = true;
      save();
      toast('O tempo do simulado acabou.');
    }
  }, 500);
  if (scroll) {
    if (path === 'backup') $('#backup').scrollIntoView();
    else window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
}

function refreshControl(selector) {
  render();
  $(selector)?.focus({ preventScroll: true });
}

function questionEntry() {
  const qid = $('[data-question-id]')?.dataset.questionId;
  if (!qid) return null;
  const entries = route === 'resolvendo' ? state.active.entries : state.bank;
  return { question: questionById.get(qid), entry: entries[qid] ??= { answer: null, cuts: [] } };
}

function confirm(title, message, label, action) {
  $('#dialog-content').innerHTML = `<form method="dialog"><h2>${title}</h2><p>${message}</p>
    <div class="actions"><button value="cancel" autofocus>Cancelar</button><button class="primary" value="confirm">${label}</button></div></form>`;
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') action();
  }, { once: true });
  dialog.returnValue = 'cancel';
  dialog.showModal();
}

function finishExam() {
  const attempt = state.active;
  const unanswered = attempt.ids.filter(qid => attempt.entries[qid]?.answer == null).length;
  confirm('Finalizar simulado?', unanswered ? `Questões em branco serão contabilizadas no resultado (${unanswered}).`
    : 'A tentativa será salva e a correção ficará disponível.', 'Finalizar e corrigir', () => {
    stopClock(attempt);
    state.history.unshift({ ...attempt, finished: Date.now() });
    state.active = null;
    save();
    go(`resultado/${attempt.id}`);
  });
}

function exportBackup() {
  if (hosted) {
    const json = JSON.stringify({ app: key, data: state });
    $('#dialog-content').innerHTML = `<form method="dialog"><h2>Exportar backup</h2>
      <p>Copie o texto abaixo e salve num arquivo com extensão .json. Para restaurar, use "Restaurar backup" e escolha esse arquivo.</p>
      <textarea readonly rows="8" style="width:100%" id="backup-text">${esc(json)}</textarea>
      <div class="actions"><button type="button" id="backup-copy" class="primary">Copiar backup</button><button value="cancel">Fechar</button></div></form>`;
    $('#backup-copy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(json); toast('Backup copiado.'); }
      catch { $('#backup-text').select(); toast('Selecione o texto e copie com Ctrl+C.'); }
    });
    dialog.showModal();
    return;
  }
  const url = URL.createObjectURL(new Blob([JSON.stringify({ app: key, data: state }, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Medicina_N3_2026-2_backup.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

$('#backup-file').addEventListener('change', async event => {
  try {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 12 * 1024 * 1024) throw Error('O arquivo de backup é grande demais.');
    const parsed = JSON.parse(await file.text());
    if (parsed.app !== key || !validProgress(parsed.data)) throw Error('Selecione um backup válido da Central N3.');
    confirm('Restaurar backup?', 'Seu progresso neste navegador será substituído pelos dados do arquivo.', 'Restaurar', () => {
      state = parsed.data;
      if (state.active) state.active.runningSince = null;
      save();
      render();
      toast('Backup restaurado.');
    });
  } catch (error) {
    toast(error instanceof SyntaxError ? 'Não foi possível ler o arquivo de backup.' : error.message);
  } finally {
    event.target.value = '';
  }
});

main.addEventListener('change', event => {
  const field = event.target;
  if (field.matches('[data-check]')) {
    const record = state.topics[field.dataset.topic] ??= {};
    record[field.dataset.check] = field.checked;
    save();
    if (route === 'plano') refreshControl(`[data-topic="${field.dataset.topic}"][data-check="${field.dataset.check}"]`);
    return;
  }
  if (field.matches('select[data-filter], input[type=checkbox][data-filter]')) {
    const value = field.type === 'checkbox' ? field.checked : field.value;
    const keyName = field.dataset.filter;
    ui[keyName] = (keyName === 'examSize' && value !== 'n3') || keyName === 'timerMinutes' ? Number(value) : value;
    if (['subject', 'week', 'origin'].includes(keyName)) ui.bankPage = 1;
    refreshControl(`[data-filter="${keyName}"]`);
    return;
  }
  if (field.name === 'answer') {
    const current = questionEntry();
    current.entry.answer = Number(field.value);
    save();
    refreshControl(`input[name=answer][value="${field.value}"]`);
  }
});

main.addEventListener('input', event => {
  const field = event.target;
  if (['search', 'bankSearch'].includes(field.dataset.filter)) {
    const name = field.dataset.filter;
    ui[name] = field.value;
    if (name === 'bankSearch') ui.bankPage = 1;
    const position = field.selectionStart;
    const selector = `[data-filter="${name}"]`;
    refreshControl(selector);
    $(selector).setSelectionRange(position, position);
  } else if (field.matches('[data-note]')) {
    const record = state.topics[field.dataset.note] ??= {};
    record.note = field.value;
    save();
  } else if (field.matches('[data-draft]')) {
    questionEntry().entry.draft = field.value;
    save();
  }
});

function questionAction(action) {
  const { question, entry } = questionEntry();
  if (action === 'bank-reveal') {
    if (question.options?.length ? entry.answer == null : !entry.draft?.trim()) {
      toast('Registre uma resposta antes de confirmar.');
      return;
    }
    entry.revealed = true;
  } else if (action === 'bank-retry') {
    state.bank[question.id] = { flag: entry.flag, answer: null, cuts: [] };
  } else if (action === 'flag') {
    entry.flag = !entry.flag;
  } else if (action === 'clear') {
    entry.answer = null;
  }
  save();
  refreshControl(`[data-action="${action}"]`);
}

main.addEventListener('click', event => {
  const mark = event.target.closest('mark[data-mark]');
  if (mark && window.getSelection()?.isCollapsed) {
    event.preventDefault();
    selection = { block: mark.parentElement.dataset.markBlock, index: Number(mark.dataset.mark) };
    showSelection(mark.getBoundingClientRect());
    return;
  }
  const button = event.target.closest('button');
  if (!button || button.disabled) return;

  if (button.dataset.bankPage) {
    ui.bankPage = Number(button.dataset.bankPage);
    render({ scroll: true });
    return;
  }

  const cut = button.getAttribute('data-cut');
  if (cut !== null) {
    const index = Number(cut);
    const { entry } = questionEntry();
    const removed = (entry.cuts ??= []).includes(index);
    entry.cuts = removed ? entry.cuts.filter(value => value !== index) : [...entry.cuts, index];
    if (!removed && entry.answer === index) entry.answer = null;
    save();
    refreshControl(`[data-cut="${index}"]`);
    return;
  }
  const jump = button.getAttribute('data-jump');
  if (jump !== null) {
    state.active.index = Number(jump);
    save();
    refreshControl(`.n3-map [data-jump="${jump}"]`);
    return;
  }
  const action = button.dataset.action;
  switch (action) {
    case 'exam-start':
      if (state.active) confirm('Iniciar outro simulado?', 'A tentativa em andamento será substituída.', 'Iniciar novo', startExam);
      else startExam();
      break;
    case 'exam-resume':
      try { if (localStorage.getItem(key + '-foco') === '1') document.body.classList.add('focus-mode'); } catch {}
      state.active.runningSince ??= Date.now();
      save();
      go('resolvendo');
      break;
    case 'exam-pause': go('simulado'); break;
    case 'exam-finish': finishExam(); break;
    case 'focus-toggle':
      document.body.classList.toggle('focus-mode');
      try { localStorage.setItem(key + '-foco', document.body.classList.contains('focus-mode') ? '1' : '0'); } catch {}
      render();
      window.scrollTo(0, 0);
      break;
    case 'backup-export': exportBackup(); break;
    case 'backup-import': $('#backup-file').click(); break;
    case 'bank-reveal':
    case 'bank-retry':
    case 'flag':
    case 'clear': questionAction(action); break;
  }
});

function markText(text, block) {
  const marks = state.highlights[block] ?? [];
  const parts = [];
  let offset = 0;
  for (const [index, mark] of marks.entries()) {
    if (mark.start < offset || mark.end <= mark.start || mark.end > text.length || text.slice(mark.start, mark.end) !== mark.text) continue;
    parts.push(esc(text.slice(offset, mark.start)), `<mark class="hl-mark hl-${mark.color}" data-mark="${index}">${esc(mark.text)}</mark>`);
    offset = mark.end;
  }
  return `<span class="hl-scope" data-mark-block="${block}">${parts.join('')}${esc(text.slice(offset))}</span>`;
}

function hideSelection() {
  selection = null;
  toolbar.classList.add('hidden');
}

function showSelection(rect) {
  toolbar.classList.remove('hidden');
  const edge = toolbar.offsetWidth / 2 + 8;
  toolbar.style.left = `${Math.max(edge, Math.min(window.innerWidth - edge, rect.left + rect.width / 2))}px`;
  toolbar.style.top = `${rect.top < toolbar.offsetHeight + 12 ? rect.bottom + 8 : rect.top - toolbar.offsetHeight - 8}px`;
}

function readSelection() {
  const selected = window.getSelection();
  if (!selected?.rangeCount || selected.isCollapsed) return;
  const range = selected.getRangeAt(0);
  const blockFor = node => (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement)?.closest('[data-mark-block]');
  const block = blockFor(range.startContainer);
  if (!block || block !== blockFor(range.endContainer)) return;
  const text = range.toString();
  if (text.trim().length < 2) return;
  const prefix = range.cloneRange();
  prefix.selectNodeContents(block);
  prefix.setEnd(range.startContainer, range.startOffset);
  const start = prefix.toString().length;
  selection = { block: block.dataset.markBlock, start, end: start + text.length, text };
  showSelection(range.getBoundingClientRect());
}

document.addEventListener('pointerup', event => {
  if (event.target.closest('#hl-toolbar, mark[data-mark]')) return;
  hideSelection();
  setTimeout(readSelection, event.pointerType === 'touch' ? 90 : 15);
});
document.addEventListener('keyup', event => {
  if (event.key === 'Escape') {
    const hadToolbar = !toolbar.classList.contains('hidden');
    hideSelection();
    if (!hadToolbar && document.body.classList.contains('focus-mode') && !dialog.open) { document.body.classList.remove('focus-mode'); render(); }
  }
  else if (event.shiftKey) readSelection();
});
toolbar.addEventListener('pointerdown', event => event.preventDefault());
toolbar.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || !selection) return;
  const { block, index, start, end, text } = selection;
  const color = button.dataset.hlColor;
  const original = state.highlights[block] ?? [];
  const marks = original.filter((mark, i) => index != null ? index !== i : mark.end <= start || mark.start >= end);
  if (color) marks.push(index != null ? { ...original[index], color } : { start, end, text, color });
  state.highlights[block] = marks.sort((a, b) => a.start - b.start);
  window.getSelection()?.removeAllRanges();
  save();
  const opened = [...main.querySelectorAll('details')].map(detail => detail.open);
  render();
  main.querySelectorAll('details').forEach((detail, i) => { detail.open = opened[i]; });
});

window.addEventListener('hashchange', () => render({ scroll: true }));
render();
