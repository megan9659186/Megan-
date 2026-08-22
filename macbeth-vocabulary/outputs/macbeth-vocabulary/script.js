// Add future reading-session vocabulary here. Each object becomes one expandable card.
const vocabulary = [
  { term: "Glamis", pronunciation: "GLAH-miss", meaning: "The Scottish territory Macbeth already rules as thane at the start of the play.", context: "“All hail, Macbeth! hail to thee, thane of Glamis!”", scene: "Act I, Scene III" },
  { term: "Cawdor", pronunciation: "KAW-dor", meaning: "A Scottish territory—and the title Macbeth receives after its former thane is condemned for treason.", context: "“All hail, Macbeth! hail to thee, thane of Cawdor!”", scene: "Act I, Scene III" },
  { term: "sovereign sway", pronunciation: "SOV-rin SWAY", meaning: "Supreme royal rule or governing power.", context: "Ross says Norway’s king came with “terrible numbers,” aided by the disloyal thane of Cawdor, to challenge Scotland’s sovereign power.", scene: "Act I, Scene II" },
  { term: "masterdom", pronunciation: "MAS-ter-dum", meaning: "Mastery, dominance, or controlling power.", context: "Lady Macbeth asks the spirits to fill her with cruelty so that remorse will not disturb her “fell purpose” or keep peace between it and its fulfilment.", scene: "Act I, Scene V" },
  { term: "dispatch", pronunciation: "dih-SPATCH", meaning: "To send away quickly; in darker contexts, to kill or put an end to someone.", context: "Lady Macbeth urges her husband to leave the rest to her as they plan how Duncan will be dealt with.", scene: "Act I, Scene V" },
  { term: "morrow", pronunciation: "MOR-oh", meaning: "Tomorrow; the following day.", context: "“And when goes hence?” Macbeth asks. “To-morrow, as he purposes,” Lady Macbeth answers.", scene: "Act I, Scene V" },
  { term: "favour", pronunciation: "FAY-ver", meaning: "Appearance or facial expression; it can also mean approval or goodwill.", context: "“To beguile the time, / Look like the time; bear welcome in your eye, / Your hand, your tongue.” Macbeth must disguise his true intentions in his face.", scene: "Act I, Scene V" },
  { term: "exeunt", pronunciation: "EK-see-unt", meaning: "A stage direction meaning that two or more characters leave the stage.", context: "It comes from Latin for “they go out” and tells the actors—not the characters—what to do.", scene: "Stage direction" },
  { term: "hath", pronunciation: "HATH", meaning: "An old third-person singular form of “has.”", context: "“The king hath happily received, Macbeth, / The news of thy success.”", scene: "Act I, Scene III" },
  { term: "nimbly", pronunciation: "NIM-blee", meaning: "Lightly, quickly, and gracefully.", context: "“This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself / Unto our gentle senses.”", scene: "Act I, Scene VI" },
  { term: "martlet", pronunciation: "MART-lit", meaning: "A small swallow-like bird, traditionally thought to nest around buildings.", context: "Banquo notices a martlet nesting at Macbeth’s castle and takes it as proof that the air is pleasant.", scene: "Act I, Scene VI" },
  { term: "temple-haunting", pronunciation: "TEM-puhl HAWN-ting", meaning: "Frequenting churches or sacred buildings; used of the martlet that nests high on buildings.", context: "“This guest of summer, / The temple-haunting martlet, does approve… / The air is delicate.”", scene: "Act I, Scene VI" },
  { term: "mansionry", pronunciation: "MAN-shun-ree", meaning: "A dwelling or structure; here, the martlet’s nesting place. It is not “masonry.”", context: "Banquo says the martlet’s “loved mansionry” shows that heaven’s breath smells invitingly around the castle.", scene: "Act I, Scene VI" },
  { term: "heaven’s breath", pronunciation: "HEV-unz BRETH", meaning: "The fresh air or breeze, poetically imagined as the breath of heaven.", context: "“Where they most breed and haunt, I have observed, / The air is delicate.”", scene: "Act I, Scene VI" },
  { term: "wooingly", pronunciation: "WOO-ing-lee", meaning: "Enticingly or lovingly, as if courting someone.", context: "The martlet’s nesting places suggest that “heaven’s breath / Smells wooingly here.”", scene: "Act I, Scene VI" },
  { term: "jutty frieze", pronunciation: "JUT-ee FREEZ", meaning: "A projecting decorative band or ledge on a building.", context: "Banquo lists parts of Macbeth’s castle where the martlets have built their nests.", scene: "Act I, Scene VI" },
  { term: "buttress", pronunciation: "BUT-riss", meaning: "A projecting support built against a wall to strengthen it.", context: "“No jutty, frieze, / Buttress, nor coign of vantage, but this bird / Hath made his pendant bed…”", scene: "Act I, Scene VI" },
  { term: "coign of vantage", pronunciation: "KOYN of VAN-tij", meaning: "A favorable projecting corner or high position that gives a useful view or shelter.", context: "Every convenient corner of the castle seems to hold a martlet’s nest.", scene: "Act I, Scene VI" },
  { term: "pendant bed", pronunciation: "PEN-dunt BED", meaning: "A hanging nest.", context: "The martlet has made its “pendant bed” on the castle walls.", scene: "Act I, Scene VI" },
  { term: "procreant cradle", pronunciation: "PRO-kree-unt KRAY-dul", meaning: "A nest where young birds are bred and raised; literally, a breeding cradle.", context: "Banquo sees the birds’ nests as signs of wholesome air, while the audience knows the castle is dangerous.", scene: "Act I, Scene VI" }
];

const list = document.querySelector("#vocabulary-list");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const STORAGE_KEY = "macbeth-vocabulary-progress-v1";
let progress = loadProgress();
let flashcardIndex = 0;
let flashcardRevealed = false;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
  catch { /* The page still works when browser storage is unavailable. */ }
  updateProgress();
}

function setStatus(term, status) {
  progress[term] = status;
  saveProgress();
  render(search.value);
}

function updateProgress() {
  const known = vocabulary.filter((item) => progress[item.term] === "known").length;
  const percent = Math.round((known / vocabulary.length) * 100);
  document.querySelector("#known-count").textContent = known;
  document.querySelector("#progress-total").textContent = vocabulary.length;
  const bar = document.querySelector(".progress-track");
  bar.setAttribute("aria-valuemax", vocabulary.length);
  bar.setAttribute("aria-valuenow", known);
  document.querySelector("#progress-fill").style.width = `${percent}%`;
}

function render(query = "") {
  const needle = query.trim().toLowerCase();
  const matches = vocabulary.filter((item) => Object.values(item).some((value) => value.toLowerCase().includes(needle)));
  list.innerHTML = matches.map((item, index) => `
    <details class="word-card">
      <summary>
        <span class="number">${String(vocabulary.indexOf(item) + 1).padStart(2, "0")}</span>
        <span class="term">${item.term}<span class="pronunciation">${item.pronunciation}</span></span>
        <span class="plus" aria-hidden="true">+</span>
      </summary>
      <div class="definition">
        <p class="meaning">${item.meaning}</p>
        <blockquote class="context">${item.context}<span class="scene">${item.scene}</span></blockquote>
        <div class="word-status" aria-label="Learning status for ${item.term}">
          <button class="status-button ${progress[item.term] === "learning" ? "selected" : ""}" type="button" data-term="${item.term}" data-status="learning">Still learning</button>
          <button class="status-button ${progress[item.term] === "known" ? "selected" : ""}" type="button" data-term="${item.term}" data-status="known">Known</button>
        </div>
      </div>
    </details>`).join("");
  count.textContent = `${matches.length} ${matches.length === 1 ? "term" : "terms"}`;
  empty.hidden = matches.length !== 0;
}

list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-status]");
  if (!button) return;
  event.preventDefault();
  setStatus(button.dataset.term, button.dataset.status);
});

function showMode(mode) {
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active);
  });
  document.querySelectorAll(".mode-panel").forEach((panel) => { panel.hidden = panel.id !== `${mode}-mode`; });
  if (mode === "flashcards") renderFlashcard();
  if (mode === "quiz") startQuiz();
}

document.querySelector(".mode-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-mode]");
  if (tab) showMode(tab.dataset.mode);
});

function renderFlashcard() {
  const item = vocabulary[flashcardIndex];
  document.querySelector("#flashcard-position").textContent = `${flashcardIndex + 1} of ${vocabulary.length}`;
  document.querySelector("#flashcard-term").textContent = item.term;
  document.querySelector("#flashcard-pronunciation").textContent = item.pronunciation;
  const answer = document.querySelector("#flashcard-answer");
  answer.textContent = item.meaning;
  answer.hidden = !flashcardRevealed;
  document.querySelector("#flashcard-hint").textContent = flashcardRevealed ? "Tap to hide the meaning" : "Tap to reveal the meaning";
  document.querySelector("#card-learning").classList.toggle("selected", progress[item.term] === "learning");
  document.querySelector("#card-known").classList.toggle("selected", progress[item.term] === "known");
}

document.querySelector("#flashcard").addEventListener("click", () => { flashcardRevealed = !flashcardRevealed; renderFlashcard(); });
document.querySelector("#next-card").addEventListener("click", () => { flashcardIndex = (flashcardIndex + 1) % vocabulary.length; flashcardRevealed = false; renderFlashcard(); });
document.querySelector("#card-learning").addEventListener("click", () => { setStatus(vocabulary[flashcardIndex].term, "learning"); renderFlashcard(); });
document.querySelector("#card-known").addEventListener("click", () => { setStatus(vocabulary[flashcardIndex].term, "known"); renderFlashcard(); });

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  quizQuestions = shuffled(vocabulary).slice(0, Math.min(5, vocabulary.length));
  quizIndex = 0;
  quizScore = 0;
  document.querySelector("#quiz-card").hidden = false;
  document.querySelector("#quiz-result").hidden = true;
  renderQuestion();
}

function renderQuestion() {
  const answer = quizQuestions[quizIndex];
  const distractors = shuffled(vocabulary.filter((item) => item.term !== answer.term)).slice(0, 3);
  const options = shuffled([answer, ...distractors]);
  document.querySelector("#quiz-position").textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  document.querySelector("#quiz-meaning").textContent = answer.meaning;
  document.querySelector("#quiz-options").innerHTML = options.map((item) => `<button class="quiz-option" type="button" data-answer="${item.term}">${item.term}</button>`).join("");
  document.querySelector("#quiz-feedback").textContent = "";
  document.querySelector("#next-question").hidden = true;
}

document.querySelector("#quiz-options").addEventListener("click", (event) => {
  const selected = event.target.closest("[data-answer]");
  if (!selected || document.querySelector("#next-question").hidden === false) return;
  const correctTerm = quizQuestions[quizIndex].term;
  const correct = selected.dataset.answer === correctTerm;
  if (correct) quizScore += 1;
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === correctTerm) button.classList.add("correct");
  });
  if (!correct) selected.classList.add("incorrect");
  document.querySelector("#quiz-feedback").textContent = correct ? "Correct." : `Not quite — the answer is ${correctTerm}.`;
  document.querySelector("#next-question").hidden = false;
});

document.querySelector("#next-question").addEventListener("click", () => {
  quizIndex += 1;
  if (quizIndex < quizQuestions.length) { renderQuestion(); return; }
  document.querySelector("#quiz-card").hidden = true;
  document.querySelector("#quiz-result").hidden = false;
  document.querySelector("#quiz-position").textContent = "Complete";
  document.querySelector("#quiz-score").textContent = `${quizScore} / ${quizQuestions.length}`;
  document.querySelector("#quiz-message").textContent = quizScore === quizQuestions.length ? "Excellent — every answer was right." : quizScore >= 3 ? "A strong round. Try again to make the words stick." : "Keep going. A flashcard round will help before your next quiz.";
});
document.querySelector("#restart-quiz").addEventListener("click", startQuiz);

search.addEventListener("input", () => render(search.value));
document.querySelector("#clear-search").addEventListener("click", () => { search.value = ""; render(); search.focus(); });
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); search.focus(); }
  if (event.key === "Escape" && document.activeElement === search) { search.value = ""; render(); search.blur(); }
});
document.querySelector("#total-footer").textContent = vocabulary.length;
updateProgress();
render();
