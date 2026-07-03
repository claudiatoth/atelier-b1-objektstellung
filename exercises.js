// ============================================
// EXERCIȚII - Atelier B1: Objektstellung & Pronomen-Reihenfolge
// Claudia Toth · 5 exerciții cu rezolvări complete
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: 2 substantive → Dativ vor Akkusativ (scrie ordinea corectă)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Ich gebe ____. (den Ball / dem Kind)', translation: 'Îi dau copilului mingea.', correct: 'dem Kind den Ball', accept: ['dem kind den ball'] },
    { id: 'b', sentence: 'Sie schenkt ____. (die Blumen / der Frau)', translation: 'Ea îi dăruiește femeii florile.', correct: 'der Frau die Blumen', accept: ['der frau die blumen'] },
    { id: 'c', sentence: 'Er zeigt ____. (das Foto / dem Freund)', translation: 'Îi arată prietenului fotografia.', correct: 'dem Freund das Foto', accept: ['dem freund das foto'] },
    { id: 'd', sentence: 'Wir bringen ____. (den Kaffee / dem Gast)', translation: 'Îi aducem oaspetelui cafeaua.', correct: 'dem Gast den Kaffee', accept: ['dem gast den kaffee'] },
    { id: 'e', sentence: 'Ich erkläre ____. (die Regel / dem Schüler)', translation: 'Îi explic elevului regula.', correct: 'dem Schüler die Regel', accept: ['dem schüler die regel', 'dem schueler die regel'] },
    { id: 'f', sentence: 'Sie schickt ____. (den Brief / der Oma)', translation: 'Îi trimite bunicii scrisoarea.', correct: 'der Oma den Brief', accept: ['der oma den brief'] },
    { id: 'g', sentence: 'Der Kellner bringt ____. (die Suppe / dem Kunden)', translation: 'Chelnerul îi aduce clientului supa.', correct: 'dem Kunden die Suppe', accept: ['dem kunden die suppe'] },
    { id: 'h', sentence: 'Ich gebe ____. (das Geld / dem Verkäufer)', translation: 'Îi dau vânzătorului banii.', correct: 'dem Verkäufer das Geld', accept: ['dem verkäufer das geld', 'dem verkaeufer das geld'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 2 substantive → Dativ vor Akkusativ. 📦</strong><br>
        <em>Reține:</em> Wem? (Dativ) primul, apoi Was? (Akkusativ). Scrie cele două obiecte în ordinea corectă.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex1-${it.id}" placeholder="Dativ + Akkusativ...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: substantiv + pronume → pronumele zuerst
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Ich gebe ____. (dem Kind / es)', translation: 'I-o dau copilului.', correct: 'es dem Kind', accept: ['es dem kind'] },
    { id: 'b', sentence: 'Sie schenkt ____. (die Blumen / ihm)', translation: 'Îi dăruiește florile.', correct: 'ihm die Blumen', accept: ['ihm die blumen'] },
    { id: 'c', sentence: 'Er zeigt ____. (dem Freund / es)', translation: 'I-o arată prietenului.', correct: 'es dem Freund', accept: ['es dem freund'] },
    { id: 'd', sentence: 'Wir bringen ____. (dem Gast / ihn)', translation: 'I-l aducem oaspetelui.', correct: 'ihn dem Gast', accept: ['ihn dem gast'] },
    { id: 'e', sentence: 'Ich erkläre ____. (dem Schüler / sie)', translation: 'I-o explic elevului. (sie = regula)', correct: 'sie dem Schüler', accept: ['sie dem schüler', 'sie dem schueler'] },
    { id: 'f', sentence: 'Sie schickt ____. (der Oma / ihn)', translation: 'I-l trimite bunicii.', correct: 'ihn der Oma', accept: ['ihn der oma'] },
    { id: 'g', sentence: 'Ich gebe ____. (das Buch / ihm)', translation: 'Îi dau lui cartea.', correct: 'ihm das Buch', accept: ['ihm das buch'] },
    { id: 'h', sentence: 'Der Kellner bringt ____. (dem Kunden / ihn)', translation: 'Chelnerul i-l aduce clientului.', correct: 'ihn dem Kunden', accept: ['ihn dem kunden'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Substantiv + pronume → pronumele zuerst. 🔤</strong><br>
        <em>Reține:</em> un pronume vine MEREU înaintea substantivului (indiferent de caz).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex2-${it.id}" placeholder="pronume + substantiv...">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: 2 pronume → Akkusativ vor Dativ (es ihm) ⭐
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Ich gebe ____. (ihm / es)', translation: 'I-o dau (lui).', correct: 'es ihm', accept: ['es ihm'] },
    { id: 'b', sentence: 'Er zeigt ____. (mir / es)', translation: 'Mi-o arată.', correct: 'es mir', accept: ['es mir'] },
    { id: 'c', sentence: 'Sie bringt ____. (dir / ihn)', translation: 'Ți-l aduce.', correct: 'ihn dir', accept: ['ihn dir'] },
    { id: 'd', sentence: 'Wir schicken ____. (euch / es)', translation: 'Vi-l trimitem.', correct: 'es euch', accept: ['es euch'] },
    { id: 'e', sentence: 'Ich erkläre ____. (ihnen / es)', translation: 'Le-o explic.', correct: 'es ihnen', accept: ['es ihnen'] },
    { id: 'f', sentence: 'Gibst du ____? (mir / ihn)', translation: 'Mi-l dai?', correct: 'ihn mir', accept: ['ihn mir'] },
    { id: 'g', sentence: 'Sie schenkt ____. (uns / es)', translation: 'Ni-l dăruiește.', correct: 'es uns', accept: ['es uns'] },
    { id: 'h', sentence: 'Er bringt ____. (mir / sie)', translation: 'Mi le aduce. (sie = ele, Akk plural)', correct: 'sie mir', accept: ['sie mir'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 2 pronume → Akkusativ vor Dativ (es ihm). ⭐</strong><br>
        <em>Reține:</em> RĂSTURNAT față de substantive — la 2 pronume, Akuzativul e primul (es ihm, nu ihm es).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex3-${it.id}" placeholder="Akkusativ + Dativ...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Diktat audio (Hedda)
// ============================================
const ex4Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Ich gebe dem Kind den Ball.', accept: ['Ich gebe dem Kind den Ball.'], ro: 'Îi dau copilului mingea.' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Er zeigt dem Freund das Foto.', accept: ['Er zeigt dem Freund das Foto.'], ro: 'Îi arată prietenului fotografia.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Ich gebe es dem Kind.', accept: ['Ich gebe es dem Kind.'], ro: 'I-o dau copilului.' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Sie schenkt ihm die Blumen.', accept: ['Sie schenkt ihm die Blumen.'], ro: 'Îi dăruiește florile.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Ich gebe es ihm.', accept: ['Ich gebe es ihm.'], ro: 'I-o dau (lui).' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Kannst du es mir zeigen?', accept: ['Kannst du es mir zeigen?'], ro: 'Poți să mi-o arăți?' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Der Kellner bringt dem Gast den Kaffee.', accept: ['Der Kellner bringt dem Gast den Kaffee.'], ro: 'Chelnerul îi aduce oaspetelui cafeaua.' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Ich habe es ihm gestern gegeben.', accept: ['Ich habe es ihm gestern gegeben.'], ro: 'I-am dat-o ieri.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția (voce Hedda).</strong><br>
        <em>Sfat:</em> atenție la ordinea obiectelor (dem Kind den Ball · es dem Kind · es ihm).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" id="ex4-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Traducere RO → DE
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Îi dau copilului mingea.', correct: 'Ich gebe dem Kind den Ball.', accept: ['ich gebe dem kind den ball.', 'ich gebe dem kind den ball'] },
    { id: 'b', ro: 'Ea îi dăruiește femeii florile.', correct: 'Sie schenkt der Frau die Blumen.', accept: ['sie schenkt der frau die blumen.', 'sie schenkt der frau die blumen'] },
    { id: 'c', ro: 'I-o dau copilului. (es + dem Kind)', correct: 'Ich gebe es dem Kind.', accept: ['ich gebe es dem kind.', 'ich gebe es dem kind'] },
    { id: 'd', ro: 'Îi dăruiește florile. (ihm die Blumen)', correct: 'Sie schenkt ihm die Blumen.', accept: ['sie schenkt ihm die blumen.', 'sie schenkt ihm die blumen'] },
    { id: 'e', ro: 'I-o dau (lui). (es ihm)', correct: 'Ich gebe es ihm.', accept: ['ich gebe es ihm.', 'ich gebe es ihm'] },
    { id: 'f', ro: 'Poți să mi-o arăți? (es mir)', correct: 'Kannst du es mir zeigen?', accept: ['kannst du es mir zeigen?', 'kannst du es mir zeigen'] },
    { id: 'g', ro: 'Chelnerul îi aduce oaspetelui cafeaua.', correct: 'Der Kellner bringt dem Gast den Kaffee.', accept: ['der kellner bringt dem gast den kaffee.', 'der kellner bringt dem gast den kaffee'] },
    { id: 'h', ro: 'I-am dat-o ieri. (es ihm gestern)', correct: 'Ich habe es ihm gestern gegeben.', accept: ['ich habe es ihm gestern gegeben.', 'ich habe es ihm gestern gegeben'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Traducere RO → DE.</strong><br>
        <em>Mix:</em> 2 substantive (Dat&lt;Akk) · substantiv+pronume · 2 pronume (es ihm).
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>🇷🇴 ${it.ro}</label>
                <input type="text" id="ex5-${it.id}" placeholder="Traducere în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
