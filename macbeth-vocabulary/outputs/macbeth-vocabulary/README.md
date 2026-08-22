# Words of Macbeth

A dependency-free personal vocabulary page. Open `index.html` in any modern browser.

## Use the study tools

- **Browse:** Search and expand any entry. Use **Still learning** or **Known** inside an entry to track it.
- **Flashcards:** Tap a card to reveal its meaning, then mark the word **Still learning** or **I know this**. Use **Next word** to continue.
- **Quick quiz:** Answer five multiple-choice questions drawn at random from the vocabulary list. The result appears at the end.
- **Progress:** Your known/learning marks are saved automatically in that browser on that device. Clearing browser storage will reset them.

## Add terms after a reading session

Open `script.js` and add another object inside the `vocabulary` list, following the existing format. New entries automatically become searchable cards, flashcards, and quiz questions:

```js
{ term: "new word", pronunciation: "…", meaning: "…", context: "…", scene: "Act II, Scene I" },
```

Remember the comma between entries, then save and refresh the page.

## Publish with GitHub Pages

1. Create a new public GitHub repository (for example, `macbeth-vocabulary`).
2. Upload `index.html`, `style.css`, `script.js`, and this README to the repository’s top level.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will show the public web address after a minute or two.

## Save on a phone

- **iPhone/iPad (Safari):** open the published page, tap **Share**, then **Add to Home Screen**.
- **Android (Chrome):** open the published page, tap the three-dot menu, then **Add to Home screen** or **Install app**.
