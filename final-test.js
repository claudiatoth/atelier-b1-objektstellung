// ============================================
// TEST FINAL - Atelier B1: Objektstellung & Pronomen-Reihenfolge
// Claudia Toth · 15 întrebări: 2 Nomen + Nomen+Pronomen + 2 Pronomen (es ihm) + poziție + traducere
// ============================================

const finalTestData = [
    // 2 Nomen (3)
    { type: 'multiple', category: '📦 2 Nomen', question: 'La 2 substantive, ordinea este:', options: ['Dativ înaintea Akuzativului', 'Akuzativ înaintea Dativului', 'oricum', 'Nominativ primul'], correct: 'Dativ înaintea Akuzativului', explanation: '2 substantive → Dativ (Wem?) < Akkusativ (Was?): dem Kind den Ball.' },
    { type: 'luckentext', category: '📦 2 Nomen', question: 'Scrie ordinea corectă (den Ball / dem Kind):', sentence: 'Ich gebe <strong>______</strong>.', translation: 'Îi dau copilului mingea.', accept: ['dem kind den ball'], correct: 'dem Kind den Ball', explanation: 'Dativ înaintea Akuzativului.' },
    { type: 'multiple', category: '📦 2 Nomen', question: 'În „Ich gebe dem Kind den Ball", „dem Kind" răspunde la:', options: ['Wem?', 'Was?', 'Wer?', 'Wo?'], correct: 'Wem?', explanation: 'Dativul răspunde la Wem? (cui) — persoana.' },

    // Nomen + Pronomen (3)
    { type: 'multiple', category: '🔤 Nomen+Pronomen', question: 'Când ai un pronume și un substantiv, primul este:', options: ['pronumele (indiferent de caz)', 'substantivul', 'cel în Dativ', 'cel în Akkusativ'], correct: 'pronumele (indiferent de caz)', explanation: 'Un pronume vine MEREU înaintea substantivului.' },
    { type: 'luckentext', category: '🔤 Nomen+Pronomen', question: 'Scrie ordinea (dem Kind / es):', sentence: 'Ich gebe <strong>______</strong>.', translation: 'I-o dau copilului.', accept: ['es dem kind'], correct: 'es dem Kind', explanation: 'Pronumele (es) primul, apoi substantivul.' },
    { type: 'luckentext', category: '🔤 Nomen+Pronomen', question: 'Scrie ordinea (die Blumen / ihm):', sentence: 'Sie schenkt <strong>______</strong>.', translation: 'Îi dăruiește florile.', accept: ['ihm die blumen'], correct: 'ihm die Blumen', explanation: 'Pronumele (ihm) primul.' },

    // 2 Pronomen (4)
    { type: 'multiple', category: '⭐ 2 Pronomen', question: 'La 2 pronume, ordinea este:', options: ['Akuzativ înaintea Dativului', 'Dativ înaintea Akuzativului', 'oricum', 'la fel ca la substantive'], correct: 'Akuzativ înaintea Dativului', explanation: '2 pronume → Akkusativ < Dativ (es ihm) — RĂSTURNAT față de substantive!' },
    { type: 'luckentext', category: '⭐ 2 Pronomen', question: 'Scrie ordinea (ihm / es):', sentence: 'Ich gebe <strong>______</strong>.', translation: 'I-o dau (lui).', accept: ['es ihm'], correct: 'es ihm', explanation: 'Akkusativ (es) înaintea Dativului (ihm).' },
    { type: 'multiple', category: '⭐ 2 Pronomen', question: 'În „es ihm", „es" este:', options: ['Akkusativ', 'Dativ', 'Nominativ', 'Genitiv'], correct: 'Akkusativ', explanation: 'es = Akkusativ, ihm = Dativ; la 2 pronume Akkusativul e primul.' },
    { type: 'luckentext', category: '⭐ 2 Pronomen', question: 'Scrie ordinea (mir / es):', sentence: 'Kannst du <strong>______</strong> zeigen?', translation: 'Poți să mi-o arăți?', accept: ['es mir'], correct: 'es mir', explanation: 'Akkusativ (es) înaintea Dativului (mir).' },

    // Poziție (2)
    { type: 'multiple', category: '🔄 Poziție', question: 'Pronumele-obiect, față de „gestern", stau:', options: ['înainte (es ihm gestern)', 'după (gestern es ihm)', 'oriunde', 'la finalul propoziției'], correct: 'înainte (es ihm gestern)', explanation: 'Pronumele urcă în față, înaintea adverbialelor de timp: Ich habe es ihm gestern gegeben.' },
    { type: 'multiple', category: '🔄 Poziție', question: 'Diferența cheie substantive vs. pronume:', options: ['substantive Dat<Akk, pronume Akk<Dat', 'ambele la fel', 'ambele Akk<Dat', 'ambele Dat<Akk'], correct: 'substantive Dat<Akk, pronume Akk<Dat', explanation: 'La substantive Dativ<Akkusativ; la 2 pronume se răstoarnă: Akkusativ<Dativ.' },

    // Traducere (3)
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (2 substantive):', ro: 'Îi dau copilului mingea.', accept: ['ich gebe dem kind den ball.', 'ich gebe dem kind den ball'], correct: 'Ich gebe dem Kind den Ball.', explanation: 'Dativ<Akkusativ: dem Kind den Ball.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (2 pronume):', ro: 'I-o dau (lui).', accept: ['ich gebe es ihm.', 'ich gebe es ihm'], correct: 'Ich gebe es ihm.', explanation: 'Akkusativ<Dativ: es ihm.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (2 pronume):', ro: 'Poți să mi-o arăți?', accept: ['kannst du es mir zeigen?', 'kannst du es mir zeigen'], correct: 'Kannst du es mir zeigen?', explanation: 'es (Akk) mir (Dat) zeigen.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Test Final — Atelier Objektstellung &amp; Pronomen-Reihenfolge</h3>
            <p>Test cu <strong>${finalTestData.length} întrebări</strong>: 2 substantive (Dat&lt;Akk) + substantiv+pronume + 2 pronume (es ihm) + poziție + traducere.</p>
            <ul class="test-info-list">
                <li>📦 2 Nomen (3) · 🔤 Nomen+Pronomen (3) · ⭐ 2 Pronomen (4) · 🔄 Poziție (2) · 🇷🇴 Traducere (3)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă! Objektstellung stăpânit complet!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Atelier trecut (70%+)! 🔀 Acum stăpânești ordinea obiectelor — Dat<Akk la substantive, Akk<Dat la pronume (es ihm).</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
