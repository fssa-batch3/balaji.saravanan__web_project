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

const translateBtnta = document.getElementById("lang_ta");

translateBtnta.addEventListener("click", () => {
    const targetLanguage = "ta"; // translate to French
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