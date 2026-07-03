// ============================================
// TEORIE - Atelier B1: Objektstellung & Pronomen-Reihenfolge
// Claudia Toth · 2 Nomen (Dat<Akk) · Nomen+Pronomen (Pronomen zuerst) · 2 Pronomen (Akk<Dat = es ihm)
// Standard vizual: logo + marca-fluture (branding-only — gramatică, fără substantive concrete)
// Aprofundarea pilonului B1 L4 (Verben mit Dativ + Akkusativ)
// ============================================

const theoryHTML = `
    <!-- 0: 2 Nomen: Dativ vor Akkusativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📦 1. Două substantive: Dativ vor Akkusativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-zwei-nomen.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Azi punem ordine în obiecte! Verbe ca <strong>geben, schenken, zeigen</strong> au DOUĂ complemente — unul în Dativ (persoana) și unul în Akkusativ (lucrul). Întrebarea de un milion: care stă primul? Răspunsul depinde dacă sunt <em>substantive</em> sau <em>pronume</em>. Ai trei reguli simple și o răsturnare tare: <strong>es ihm</strong>. Hai să le prindem! <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>
                </div>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 Regula 1: 2 substantive → Dativ (Wem?) înaintea Akuzativului (Was?)</h4>
                <div class="example-box">
                    <p class="de">Ich gebe <strong>dem Kind</strong> (Dat) <strong>den Ball</strong> (Akk).</p>
                    <p class="ro">Îi dau copilului mingea. (întâi CUI, apoi CE)</p>
                </div>
                <div class="example-box">
                    <p class="de">Sie schenkt <strong>der Frau</strong> (Dat) <strong>die Blumen</strong> (Akk).</p>
                    <p class="ro">Ea îi dăruiește femeii florile.</p>
                </div>
                <p style="margin-top:6px"><strong>Truc:</strong> Wem? (Dativ) zuerst, dann Was? (Akkusativ).</p>
            </div>

            <div class="theory-box">
                <h4>Ce înveți în acest atelier</h4>
                <ul>
                    <li>📦 <strong>2 substantive</strong> → Dativ vor Akkusativ (dem Kind den Ball)</li>
                    <li>🔤 <strong>Substantiv + pronume</strong> → pronumele MEREU primul</li>
                    <li>⭐ <strong>2 pronume</strong> → Akkusativ vor Dativ (es ihm) — răsturnarea!</li>
                    <li>🔄 <strong>Poziția</strong> pronumelor față de timp/loc (es ihm gestern)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Nomen + Pronomen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🔤 2. Substantiv + pronume: pronumele zuerst</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-nomen-pronomen.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 Regula 2: un pronume vine MEREU înaintea substantivului</h4>
                <p>Indiferent de caz — dacă un obiect e pronume și celălalt substantiv, <strong>pronumele stă primul</strong>:</p>
                <div class="example-box">
                    <p class="de">Ich gebe <strong>es</strong> (Akk pron) <strong>dem Kind</strong> (Dat subst).</p>
                    <p class="ro">I-o dau copilului. (pronume → primul, chiar dacă e Akkusativ)</p>
                </div>
                <div class="example-box">
                    <p class="de">Ich gebe <strong>ihm</strong> (Dat pron) <strong>den Ball</strong> (Akk subst).</p>
                    <p class="ro">Îi dau lui mingea.</p>
                </div>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>De ce? Informația „veche/scurtă" (pronumele) urcă în față</h4>
                <p>Pronumele înlocuiește ceva deja cunoscut, așa că germana îl trage spre început. Substantivul (informația nouă) rămâne mai în spate.</p>
                <div class="example-box">
                    <p class="de">Sie zeigt <strong>ihn</strong> dem Freund. · Sie zeigt <strong>ihm</strong> das Foto.</p>
                    <p class="ro">I-l arată prietenului. · Îi arată fotografia.</p>
                </div>
            </div>

            <div style="background: #fdf4ff; border-left: 4px solid #a21caf; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #86198f;">Carolina:</strong> Egal ob Akkusativ oder Dativ — sobald ein Pronomen dabei ist, kommt es nach vorne. Ich gebe es dem Kind, ich gebe ihm den Ball. Das Pronomen drängelt sich vor!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Indiferent dacă e Akkusativ sau Dativ — de îndată ce apare un pronume, el trece în față. Pronumele se bagă în față!</p>
            </div>
        </div>
    </div>

    <!-- 2: 2 Pronomen: Akk vor Dat ⭐ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⭐ 3. Două pronume: Akkusativ vor Dativ (es ihm)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-zwei-pronomen.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box warn-box" style="background: #fef2f2; border-color: #dc2626;">
                <h4>🚨 Regula 3 (răsturnarea!): 2 pronume → Akkusativ ÎNAINTEA Dativului</h4>
                <p>La 2 substantive era Dat &lt; Akk. La <strong>2 pronume e invers</strong>: Akk &lt; Dat!</p>
                <div class="example-box">
                    <p class="de">Ich gebe <strong>es</strong> (Akk) <strong>ihm</strong> (Dat).</p>
                    <p class="ro">I-o dau (lui). — „es ihm", nu „ihm es"!</p>
                </div>
                <div class="example-box">
                    <p class="de">Kannst du <strong>es mir</strong> zeigen? · Er bringt <strong>ihn dir</strong>.</p>
                    <p class="ro">Poți să mi-o arăți? · Ți-l aduce.</p>
                </div>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>🧭 Cele 3 reguli pe scurt</h4>
                <table class="grammar-table">
                    <tr><th>Combinație</th><th>Ordine</th><th>Exemplu</th></tr>
                    <tr><td>2 substantive</td><td><strong>Dativ &lt; Akkusativ</strong></td><td>dem Kind den Ball</td></tr>
                    <tr><td>substantiv + pronume</td><td><strong>pronume primul</strong></td><td>es dem Kind / ihm den Ball</td></tr>
                    <tr><td>2 pronume</td><td><strong>Akkusativ &lt; Dativ</strong></td><td>es ihm</td></tr>
                </table>
            </div>

            <div style="background: #eff6ff; border-left: 4px solid #1e3a8a; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #1e3a8a;">Florian:</strong> Merksatz für zwei Pronomen: „Akkusativ ist ungeduldig" — er drängt sich vor den Dativ. Es ihm, sie mir, ihn dir. Immer der Akkusativ zuerst!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Truc pentru două pronume: „Acuzativul e nerăbdător" — se bagă înaintea Dativului. es ihm, sie mir, ihn dir. Mereu Acuzativul primul!</p>
            </div>
        </div>
    </div>

    <!-- 3: Poziția față de timp/loc -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔄 4. Poziția pronumelor față de timp/loc</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-position.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Pronumele-obiect urcă în față — chiar înaintea timpului</h4>
                <p>Pronumele stau imediat după verbul conjugat (sau după subiect), <strong>înaintea</strong> adverbialelor de timp/loc (gestern, heute, hier):</p>
                <div class="example-box">
                    <p class="de">Ich habe <strong>es ihm</strong> <em>gestern</em> gegeben.</p>
                    <p class="ro">I-am dat-o ieri. (pronumele înaintea lui „gestern")</p>
                </div>
                <div class="example-box">
                    <p class="de"><em>Gestern</em> habe ich <strong>es ihm</strong> gegeben. <em>(dacă gestern e pe locul 1, pronumele vin după verb+subiect)</em></p>
                    <p class="ro">Ieri i-am dat-o.</p>
                </div>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>Substantivele-obiect, în schimb, stau DUPĂ timp</h4>
                <div class="example-box">
                    <p class="de">Ich habe <em>gestern</em> <strong>dem Kind den Ball</strong> gegeben.</p>
                    <p class="ro">Ieri i-am dat copilului mingea. (substantivele după „gestern")</p>
                </div>
                <p style="margin-top:4px"><strong>Regula de aur:</strong> pronume → în față (înaintea timpului); substantive → în spate (după timp).</p>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #ea580c; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #9a3412;">Mihai:</strong> In der Küche sage ich schnell: „Ich bringe es dir gleich!" — Pronomen zuerst, dann die Zeit. Nicht „Ich bringe gleich es dir".</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">În bucătărie spun repede „ți-o aduc imediat!" — pronumele primul, apoi timpul. Nu invers.</p>
            </div>
        </div>
    </div>

    <!-- 4: Recap + capcana RO + Wortschatz -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🏅 5. Recap, capcana RO & verbe cu Dat + Akk</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-wortschatz.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box warn-box" style="background: #fef2f2; border-color: #dc2626;">
                <h4>🚨 Capcana românului</h4>
                <p>În română spunem „<strong>i-o</strong> dau" (întâi Dativ „i", apoi Akuzativ „o"). În germană, la 2 pronume e <strong>invers</strong>: <strong>es ihm</strong> (Akk + Dat). Nu traduce ordinea din română!</p>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>📒 Verbe cu Dativ + Akkusativ (des folosite)</h4>
                <table class="grammar-table">
                    <tr><th>Verb</th><th>Wem? + Was?</th></tr>
                    <tr><td class="verb">geben</td><td>a da — Ich gebe dir das Buch.</td></tr>
                    <tr><td class="verb">schenken</td><td>a dărui — Sie schenkt ihm die Blumen.</td></tr>
                    <tr><td class="verb">zeigen</td><td>a arăta — Er zeigt uns das Foto.</td></tr>
                    <tr><td class="verb">bringen</td><td>a aduce — Ich bringe euch den Kaffee.</td></tr>
                    <tr><td class="verb">erklären · schicken</td><td>a explica · a trimite — Ich erkläre dir die Regel.</td></tr>
                </table>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Annette:</strong> Trei fraze scurte de memorat: „dem Kind den Ball" (2 nomen, Dat&lt;Akk), „es dem Kind" (pronume zuerst), „es ihm" (2 pronume, Akk&lt;Dat). Le repetați și le aveți pe viață!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Trei fraze: dem Kind den Ball · es dem Kind · es ihm. Repetați-le și le stăpâniți!</p>
            </div>

            <div class="theory-box" style="text-align:center; background:#ecfdf5; border-color:#10b981;">
                <p style="margin:0; font-weight:bold; color:#065f46;">🔀 Objektstellung bifat — Dat&lt;Akk la substantive, pronume în față, Akk&lt;Dat la pronume (es ihm). Acum aranjezi obiectele ca un nativ!</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
