// ============================================
// VERB-KONJUGATION - Atelier B1: Objektstellung & Pronomen-Reihenfolge
// 6 verbe PONS-verified: geben, schenken, zeigen, bringen, erklären, schicken
// Toate cer Dativ (persoana) + Akkusativ (lucrul) — perfecte pentru ordinea obiectelor.
// Badge: tare/neregulat (rosu) · regulat (verde). Präteritum = IMPERFECT.
// ============================================

const verbsData = [
    {
        inf: 'geben', ro: 'a da (Dat + Akk)', typ: 'tare / neregulat', aux: 'haben', part: 'gegeben',
        praes: [
            ['ich','gebe','dau'],['du','gibst','dai'],['er/sie/es','gibt','dă'],
            ['wir','geben','dăm'],['ihr','gebt','dați'],['sie/Sie','geben','dau']
        ],
        praet: [
            ['ich','gab','dădeam'],['du','gabst','dădeai'],['er/sie/es','gab','dădea'],
            ['wir','gaben','dădeam (noi)'],['ihr','gabt','dădeați'],['sie/Sie','gaben','dădeau']
        ],
        perf: [
            ['ich','habe gegeben','am dat'],['du','hast gegeben','ai dat'],['er/sie/es','hat gegeben','a dat'],
            ['wir','haben gegeben','am dat'],['ihr','habt gegeben','ați dat'],['sie/Sie','haben gegeben','au dat']
        ],
        note: 'Verb TARE (e→i: gibt). Cu Dativ + Akkusativ: Ich gebe dem Kind (Dat) den Ball (Akk). Vedeta atelierului: es ihm.'
    },
    {
        inf: 'schenken', ro: 'a dărui (Dat + Akk)', typ: 'regulat', aux: 'haben', part: 'geschenkt',
        praes: [
            ['ich','schenke','dăruiesc'],['du','schenkst','dăruiești'],['er/sie/es','schenkt','dăruiește'],
            ['wir','schenken','dăruim'],['ihr','schenkt','dăruiți'],['sie/Sie','schenken','dăruiesc']
        ],
        praet: [
            ['ich','schenkte','dăruiam'],['du','schenktest','dăruiai'],['er/sie/es','schenkte','dăruia'],
            ['wir','schenkten','dăruiam (noi)'],['ihr','schenktet','dăruiați'],['sie/Sie','schenkten','dăruiau']
        ],
        perf: [
            ['ich','habe geschenkt','am dăruit'],['du','hast geschenkt','ai dăruit'],['er/sie/es','hat geschenkt','a dăruit'],
            ['wir','haben geschenkt','am dăruit'],['ihr','habt geschenkt','ați dăruit'],['sie/Sie','haben geschenkt','au dăruit']
        ],
        note: 'Verb REGULAT. Dativ (cui) + Akkusativ (ce): Sie schenkt ihm die Blumen → Sie schenkt sie ihm.'
    },
    {
        inf: 'zeigen', ro: 'a arăta (Dat + Akk)', typ: 'regulat', aux: 'haben', part: 'gezeigt',
        praes: [
            ['ich','zeige','arăt'],['du','zeigst','arăți'],['er/sie/es','zeigt','arată'],
            ['wir','zeigen','arătăm'],['ihr','zeigt','arătați'],['sie/Sie','zeigen','arată']
        ],
        praet: [
            ['ich','zeigte','arătam'],['du','zeigtest','arătai'],['er/sie/es','zeigte','arăta'],
            ['wir','zeigten','arătam (noi)'],['ihr','zeigtet','arătați'],['sie/Sie','zeigten','arătau']
        ],
        perf: [
            ['ich','habe gezeigt','am arătat'],['du','hast gezeigt','ai arătat'],['er/sie/es','hat gezeigt','a arătat'],
            ['wir','haben gezeigt','am arătat'],['ihr','habt gezeigt','ați arătat'],['sie/Sie','haben gezeigt','au arătat']
        ],
        note: 'Verb REGULAT. Er zeigt uns das Foto. Cu 2 pronume: Er zeigt es uns (Akk < Dat).'
    },
    {
        inf: 'bringen', ro: 'a aduce (Dat + Akk)', typ: 'tare / neregulat', aux: 'haben', part: 'gebracht',
        praes: [
            ['ich','bringe','aduc'],['du','bringst','aduci'],['er/sie/es','bringt','aduce'],
            ['wir','bringen','aducem'],['ihr','bringt','aduceți'],['sie/Sie','bringen','aduc']
        ],
        praet: [
            ['ich','brachte','aduceam'],['du','brachtest','aduceai'],['er/sie/es','brachte','aducea'],
            ['wir','brachten','aduceam (noi)'],['ihr','brachtet','aduceați'],['sie/Sie','brachten','aduceau']
        ],
        perf: [
            ['ich','habe gebracht','am adus'],['du','hast gebracht','ai adus'],['er/sie/es','hat gebracht','a adus'],
            ['wir','haben gebracht','am adus'],['ihr','habt gebracht','ați adus'],['sie/Sie','haben gebracht','au adus']
        ],
        note: 'Verb NEREGULAT (gemischt: brachte, gebracht). Ich bringe dir den Kaffee → Ich bringe ihn dir.'
    },
    {
        inf: 'erklären', ro: 'a explica (Dat + Akk)', typ: 'regulat', aux: 'haben', part: 'erklärt',
        praes: [
            ['ich','erkläre','explic'],['du','erklärst','explici'],['er/sie/es','erklärt','explică'],
            ['wir','erklären','explicăm'],['ihr','erklärt','explicați'],['sie/Sie','erklären','explică']
        ],
        praet: [
            ['ich','erklärte','explicam'],['du','erklärtest','explicai'],['er/sie/es','erklärte','explica'],
            ['wir','erklärten','explicam (noi)'],['ihr','erklärtet','explicați'],['sie/Sie','erklärten','explicau']
        ],
        perf: [
            ['ich','habe erklärt','am explicat'],['du','hast erklärt','ai explicat'],['er/sie/es','hat erklärt','a explicat'],
            ['wir','haben erklärt','am explicat'],['ihr','habt erklärt','ați explicat'],['sie/Sie','haben erklärt','au explicat']
        ],
        note: 'Verb REGULAT (er- → fără ge-: erklärt). Ich erkläre dir die Regel → Ich erkläre sie dir.'
    },
    {
        inf: 'schicken', ro: 'a trimite (Dat + Akk)', typ: 'regulat', aux: 'haben', part: 'geschickt',
        praes: [
            ['ich','schicke','trimit'],['du','schickst','trimiți'],['er/sie/es','schickt','trimite'],
            ['wir','schicken','trimitem'],['ihr','schickt','trimiteți'],['sie/Sie','schicken','trimit']
        ],
        praet: [
            ['ich','schickte','trimiteam'],['du','schicktest','trimiteai'],['er/sie/es','schickte','trimitea'],
            ['wir','schickten','trimiteam (noi)'],['ihr','schicktet','trimiteați'],['sie/Sie','schickten','trimiteau']
        ],
        perf: [
            ['ich','habe geschickt','am trimis'],['du','hast geschickt','ai trimis'],['er/sie/es','hat geschickt','a trimis'],
            ['wir','haben geschickt','am trimis'],['ihr','habt geschickt','ați trimis'],['sie/Sie','haben geschickt','au trimis']
        ],
        note: 'Verb REGULAT. Ich schicke der Oma den Brief → Ich schicke ihn ihr.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#5A5147;">Conjugi auxiliarul ca de obicei (ich habe/bin, du hast/bist...) + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale atelierului</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Toate cer Dativ + Akkusativ.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Toate cele 6 verbe cer Dativ (persoana = Wem?) + Akkusativ (lucrul = Was?), deci sunt perfecte pentru ordinea obiectelor: geben-TARE (vedeta), schenken, zeigen, bringen-neregulat (brachte/gebracht), erklären și schicken. Reține cele trei reguli: dem Kind den Ball · es dem Kind · es ihm. <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('Modal') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
