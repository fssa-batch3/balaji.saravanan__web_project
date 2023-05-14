const translateBtn = document.getElementById("lang_eng");

translateBtn.addEventListener("click", () => {
  const targetLanguage = "en"; // translate to French
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    { acceptNode: (node) => /\S/.test(node.nodeValue) }
  );

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const text = node.nodeValue.trim();
    const translateUrl = `https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=ja&fromScript=jpan&toScript=latn=${targetLanguage}&dt=t&q=${text}`;
    console.log(translateUrl);
    fetch(translateUrl)
      .then((response) => response.json())
      .then((data) => {
        const translatedText = data[0][0][0]; // get the translated text from the API response
        node.textContent = node.textContent.replace(text, translatedText); // update the text node with the translated text
      })
      .catch((error) => console.error(error));
  }
});

// const translateBtn = document.getElementById("translate-btn");
// translateBtn.addEventListener("click", () => {
//   const targetLanguage = "en"; // translate to English
//   const walker = document.createTreeWalker(
//     document.body,
//     NodeFilter.SHOW_TEXT,
//     { acceptNode: (node) => /\S/.test(node.nodeValue) }
//   );
//   while (walker.nextNode()) {
//     const node = walker.currentNode;
//     const text = node.nodeValue.trim();
//     const apiKey = "ccd3790992aa2ed71ffc";
//     const translateUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=ta%7C${targetLanguage}&key=${apiKey}`;
//     fetch(translateUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         const { translatedText } = data.responseData; // get the translated text from the API response
//         node.textContent = node.textContent.replace(text, translatedText); // update the text node with the translated text
//       })
//       .catch((error) => console.error(error));
//   }
// });

// const translateBtnta = document.getElementById("lang_ta");

// translateBtnta.addEventListener("click", () => {
//   window.location.reload();
// });
