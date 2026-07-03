// ============================================
// FLASHCARDS - Atelier B1: Objektstellung & Pronomen-Reihenfolge
// 32 carduri: 8 reguli + 8 propoziții + 8 vocab + 8 verbe
// Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: EXACT 6 ghilimele ASCII per card — ZERO ghilimele interne!
// ============================================

const flashcardsData = [
    // ========== 8 reguli ==========
    { de: "2 Nomen → Dativ vor Akkusativ", ro: "Ich gebe dem Kind den Ball (Wem? + Was?)", audio: "audio/letters/01-zwei-nomen.wav" },
    { de: "Nomen + Pronomen → Pronomen zuerst", ro: "Ich gebe es dem Kind / ihm den Ball", audio: "audio/letters/02-pronomen-zuerst.wav" },
    { de: "2 Pronomen → Akkusativ vor Dativ", ro: "Ich gebe es ihm (răsturnat!)", audio: "audio/letters/03-es-ihm.wav" },
    { de: "es ihm", ro: "Akkusativ (es) înaintea Dativului (ihm)", audio: "audio/letters/04-es-ihm-regel.wav" },
    { de: "Wem? = Dativ · Was? = Akkusativ", ro: "Dativ = persoana, Akkusativ = lucrul", audio: "audio/letters/05-wem-was.wav" },
    { de: "Pronumele urcă în față", ro: "es ihm gestern (înaintea timpului)", audio: "audio/letters/06-position.wav" },
    { de: "Verben mit Dativ + Akkusativ", ro: "geben, schenken, zeigen, bringen, schicken", audio: "audio/letters/07-verben.wav" },
    { de: "capcană: pronume ≠ substantive", ro: "Nomen: Dativ<Akk · Pronomen: Akk<Dativ", audio: "audio/letters/08-capcana.wav" },

    // ========== 8 propoziții ==========
    { de: "Ich gebe dem Kind den Ball.", ro: "Îi dau copilului mingea. (2 nomen)", audio: "audio/letters/09-nomen-nomen.wav" },
    { de: "Ich gebe es dem Kind.", ro: "I-o dau copilului. (pron + nomen)", audio: "audio/letters/10-pron-nomen.wav" },
    { de: "Ich gebe ihm den Ball.", ro: "Îi dau lui mingea. (pron + nomen)", audio: "audio/letters/11-ihm-nomen.wav" },
    { de: "Ich gebe es ihm.", ro: "I-o dau (lui). (2 pronume)", audio: "audio/letters/12-es-ihm-bsp.wav" },
    { de: "Sie schenkt der Frau die Blumen.", ro: "Ea îi dăruiește femeii florile.", audio: "audio/letters/13-blumen.wav" },
    { de: "Er zeigt es mir.", ro: "Mi-o arată.", audio: "audio/letters/14-zeigt-mir.wav" },
    { de: "Kannst du es mir zeigen?", ro: "Poți să mi-o arăți?", audio: "audio/letters/15-kannst-du.wav" },
    { de: "Ich habe es ihm gestern gegeben.", ro: "I-am dat-o ieri.", audio: "audio/letters/16-gestern.wav" },

    // ========== 8 vocab ==========
    { de: "das Dativobjekt", ro: "complementul în Dativ (Wem?)", audio: "audio/letters/17-dativobjekt.wav" },
    { de: "das Akkusativobjekt", ro: "complementul în Akkusativ (Was?)", audio: "audio/letters/18-akkusativobjekt.wav" },
    { de: "dem Kind · den Ball", ro: "copilului (Dat) · mingea (Akk)", audio: "audio/letters/19-kind-ball.wav" },
    { de: "es · ihn · sie", ro: "pronume Akkusativ (îl / o / le)", audio: "audio/letters/20-akk-pronomen.wav" },
    { de: "mir · dir · ihm · ihr", ro: "pronume Dativ (îmi / îți / îi)", audio: "audio/letters/21-dat-pronomen.wav" },
    { de: "uns · euch · ihnen", ro: "nouă / vouă / lor (Dativ)", audio: "audio/letters/22-uns-euch.wav" },
    { de: "der Empfänger", ro: "destinatarul (primește = Dativ)", audio: "audio/letters/23-empfaenger.wav" },
    { de: "die Reihenfolge", ro: "ordinea (cuvintelor)", audio: "audio/letters/24-reihenfolge.wav" },

    // ========== 8 verbe ==========
    { de: "geben (tare)", ro: "a da — gab · hat gegeben", audio: "audio/letters/25-geben-v.wav" },
    { de: "schenken (regulat)", ro: "a dărui — schenkte · hat geschenkt", audio: "audio/letters/26-schenken-v.wav" },
    { de: "zeigen (regulat)", ro: "a arăta — zeigte · hat gezeigt", audio: "audio/letters/27-zeigen-v.wav" },
    { de: "bringen (neregulat)", ro: "a aduce — brachte · hat gebracht", audio: "audio/letters/28-bringen-v.wav" },
    { de: "erklären (regulat)", ro: "a explica — erklärte · hat erklärt", audio: "audio/letters/29-erklaeren-v.wav" },
    { de: "schicken (regulat)", ro: "a trimite — schickte · hat geschickt", audio: "audio/letters/30-schicken-v.wav" },
    { de: "Wem gebe ich?", ro: "Dativ (persoana care primește)", audio: "audio/letters/31-wem.wav" },
    { de: "Was gebe ich?", ro: "Akkusativ (lucrul dat)", audio: "audio/letters/32-was.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru atelierul Objektstellung.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție (voce Hedda).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
