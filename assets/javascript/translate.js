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
        const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${text}`;
        fetch(translateUrl)
            .then((response) => response.json())
            .then((data) => {
                const translatedText = data[0][0][0]; // get the translated text from the API response
                node.textContent = node.textContent.replace(text, translatedText); // update the text node with the translated text
            })
            .catch((error) => console.error(error));
    }
});

// async function translate() {
//     const textNodes = [];
//     const walker = document.createTreeWalker(
//       document.body,
//       NodeFilter.SHOW_TEXT,
//       { acceptNode: (node) => /\S/.test(node.nodeValue) }
//     );
  
//     while (walker.nextNode()) {
//       textNodes.push(walker.currentNode);
//     }
  
//     const text = textNodes.map(node => node.nodeValue.trim()).join('\n');
//     const targetLanguage = "en"; // translate to English
//     const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${text}`;
  
//     const response = await fetch(translateUrl);
//     const data = await response.json();
//     const translations = data[0];
  
//     textNodes.forEach((node, i) => {
//       const text = node.nodeValue.trim();
//       const translatedText = translations[i][0];
//       node.textContent = node.textContent.replace(text, translatedText);
//     });
//   }
  
//   const translateBtn = document.getElementById("lang_eng");
//   translateBtn.addEventListener("click", translate);
  