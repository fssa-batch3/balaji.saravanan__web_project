const minister_name = JSON.parse(localStorage.getItem("politician_data"));

const url = window.location.search;

const urlParams = new URLSearchParams(url);

const username = urlParams.get("name");

let found = false;

let i;

for (i = 0; i < minister_name.length; i++) {
  if (username === minister_name[i].name.ename) {
    found = true;
    break;
  }
}

if (found) {
  // cmImage
  const cmImage = document.createElement("div");
  cmImage.setAttribute("class", "cm-image");

  // // cm_name
  const cm_name = document.createElement("div");
  cm_name.setAttribute("class", "cm-name");

  // position

  const position = document.createElement("p");
  position.innerText = `பதவி : ${minister_name[i].position}`;
  cm_name.append(position);

  const position1 = document.createElement("p");
  position1.innerText = `பெயர் : ${minister_name[i].name.tname}`;
  cm_name.append(position1);

  const position2 = document.createElement("p");
  position2.style.display = "none";
  position2.innerText = `NAME : ${minister_name[i].name.ename}`;
  cm_name.append(position2);

  const position3 = document.createElement("p");
  position3.innerText = `கட்சியின் பெயர் : ${minister_name[i].party_name}`;
  cm_name.append(position3);

  const position4 = document.createElement("p");
  position4.innerText = `அரசியல் :${45}வருடம்`;
  cm_name.append(position4);

  const position5 = document.createElement("p");
  position5.innerText = "தொழில் : அரசியல்";
  cm_name.append(position5);

  // create a div element
  const div = document.createElement("div");
  div.id = "Iframe-Cicis-Menu-To-Go";
  div.classList.add(
    "set-margin-cicis-menu-to-go",
    "set-padding-cicis-menu-to-go",
    "set-border-cicis-menu-to-go",
    "set-box-shadow-cicis-menu-to-go",
    "center-block-horiz"
  );

  // create a div for responsive wrapper
  const responsiveDiv = document.createElement("div");
  responsiveDiv.classList.add(
    "responsive-wrapper",
    "responsive-wrapper-padding-bottom-90pct"
  );
  responsiveDiv.style.overflow = "auto";
  responsiveDiv.style.webkitOverflowScrolling = "touch";

  // create the iframe element
  const iframe = document.createElement("iframe");
  iframe.src = `${minister_name[i].affidate}`;
  // create the error message element
  const p = document.createElement("p");
  p.style.fontSize = "110%";
  p.innerHTML = `<em><strong>பிழை: </strong>உங்கள் உலாவியை அதன் சமீபத்திய பதிப்பிற்குப் புதுப்பித்து அல்லது கோப்பை அணுகவும் <a href="${minister_name[i].affidate}">with this link.</a></em>`;
  // append the elements to the parent container
  responsiveDiv.appendChild(iframe);
  div.appendChild(responsiveDiv);
  div.appendChild(p);

  // add the parent container to the document
  // document.body.appendChild(div);
  document.querySelector("div.headprofile").append(cm_name);

  document.querySelector(".headprofile").append(div);

  const title = document.createElement("div");
  title.setAttribute("class", "title");
  title.innerText = "side bar";
  document.querySelector("#sidebar");

  const unorderList = document.createElement("ul");
  unorderList.setAttribute("class", "list-items");

  const list = document.createElement("li");
  unorderList.append(list);

  const list1img = document.createElement("img");
  list1img.setAttribute("src", minister_name[i].img.sourse);
  list1img.setAttribute("alt", "error image");
  list.append(list1img);

  const list1 = document.createElement("li");
  unorderList.append(list1);

  const anchorlink1 = document.createElement("a");
  anchorlink1.setAttribute("href", "#birth");
  anchorlink1.innerText = "பிறப்பு";
  list1.append(anchorlink1);

  const list2 = document.createElement("li");
  unorderList.append(list2);

  const anchorlink2 = document.createElement("a");
  anchorlink2.setAttribute("href", "#education");
  anchorlink2.innerText = "கல்வி";
  list2.append(anchorlink2);

  const list3 = document.createElement("li");
  unorderList.append(list3);

  const anchorlink3 = document.createElement("a");
  anchorlink3.setAttribute("href", "#movie");
  anchorlink3.innerText = "திரைப்படம்";
  list3.append(anchorlink3);

  const list4 = document.createElement("li");
  unorderList.append(list4);

  const anchorlink4 = document.createElement("a");
  anchorlink4.setAttribute("href", "#politics");
  anchorlink4.innerText = "அரசியல்";
  list4.append(anchorlink4);

  const list5 = document.createElement("li");
  unorderList.append(list5);

  const anchorlink5 = document.createElement("a");
  anchorlink5.setAttribute("href", "#family");
  anchorlink5.innerText = "குடும்பம்";
  list5.append(anchorlink5);

  const list6 = document.createElement("li");
  unorderList.append(list6);

  const anchorlink6 = document.createElement("a");
  anchorlink6.setAttribute("href", "#income");
  anchorlink6.innerText = "வருமானம்";
  list6.append(anchorlink6);

  document.querySelector("#sidebar").append(unorderList);

  // cmcontent
  const cmcontent_div = document.createElement("div");
  cmcontent_div.setAttribute("class", "cmcontent");
  if (minister_name[i].birth) {

    if (minister_name[i].birth) {

      const birth_div = document.createElement("div");
      birth_div.setAttribute("id", "birth");
      cmcontent_div.append(birth_div);

      const topic = document.createElement("h2");
      topic.innerText = "பிறப்பு";
      birth_div.append(topic);

      const describe = document.createElement("p");
      describe.innerText = minister_name[i].birth.description;
      birth_div.append(describe);
    }

    if (minister_name[i].education) {


      const education_div = document.createElement("div");
      education_div.setAttribute("id", "educatiion");
      cmcontent_div.append(education_div);

      const topic_education = document.createElement("h2");
      topic_education.innerText = "கல்வி";
      education_div.append(topic_education);

      const describe_education = document.createElement("p");
      describe_education.innerText = minister_name[i].education.description;
      education_div.append(describe_education);
    }

    if (minister_name[i].family) {
      const family_div = document.createElement("div");
      family_div.setAttribute("id", "family");
      cmcontent_div.append(family_div);

      const topic_family = document.createElement("h2");
      topic_family.innerText = "குடும்பம்";
      family_div.append(topic_family);

      const describe_family = document.createElement("p");
      describe_family.innerText = minister_name[i].family.description;
      family_div.append(describe_family);
    }
    if (minister_name[i].movie) {


      const movie_div = document.createElement("div");
      movie_div.setAttribute("id", "movie");
      cmcontent_div.append(movie_div);

      const topic_movie = document.createElement("h2");
      topic_movie.innerText = "குடும்பம்";
      movie_div.append(topic_movie);

      const describe_movie = document.createElement("p");
      describe_movie.innerText = minister_name[i].movie.description;
      movie_div.append(describe_movie);
    }
    if (minister_name[i].politics) {


      const politics_div = document.createElement("div");
      politics_div.setAttribute("id", "politics");
      cmcontent_div.append(politics_div);

      const topic_politics = document.createElement("h2");
      topic_politics.innerText = "அரசியல்";
      politics_div.append(topic_politics);

      const describe_politics = document.createElement("p");
      describe_politics.innerText = minister_name[i].politics.description;
      politics_div.append(describe_politics);
    }
    if (minister_name[i].income) {


      const income_div = document.createElement("div");
      income_div.setAttribute("id", "income");
      cmcontent_div.append(income_div);

      const topic_income = document.createElement("h2");
      topic_income.innerText = "வருமானம்";
      income_div.append(topic_income);

      const assets_div = document.createElement("div");
      assets_div.setAttribute("class", "assets");
      income_div.append(assets_div);

      const table = document.createElement("table");
      income_div.append(table);

      const table_row = document.createElement("tr");
      table.append(table_row);

      const table_data_row1 = document.createElement("td");
      table_data_row1.innerText = "ஆண்டு";
      table_row.append(table_data_row1);

      const table_data1 = document.createElement("td");
      table_data1.innerText = `₹${2.05}Lakh`;
      table_row.append(table_data1);

      const table_row1 = document.createElement("tr");
      table.append(table_row1);

      const table_data_row2 = document.createElement("td");
      table_data_row2.innerText = "மாதாந்திர";
      table_row1.append(table_data_row2);

      const table_data2 = document.createElement("td");
      table_data2.innerText = `₹${2.05}Lakh`;
      table_row1.append(table_data2);

      const table_row2 = document.createElement("tr");
      table.append(table_row2);

      const table_data_row3 = document.createElement("td");
      table_data_row3.innerText = "வாரந்தோறும்";
      table_row2.append(table_data_row3);

      const table_data3 = document.createElement("td");
      table_data3.innerText = `₹${2.05}Lakh`;
      table_row2.append(table_data3);

      const table_row3 = document.createElement("tr");
      table.append(table_row3);

      const table_data_row4 = document.createElement("td");
      table_data_row4.innerText = "தினசரி";
      table_row3.append(table_data_row4);

      const table_data4 = document.createElement("td");
      table_data4.innerText = `₹${2.05}Lakh`;
      table_row3.append(table_data4);

      const assets1_div = document.createElement("div");
      assets1_div.setAttribute("class", "assets1");
      income_div.append(assets1_div);

      const assets1_describe = document.createElement("p");
      assets1_describe.innerText = "நிகர மதிப்பு₹" + "8.89 CRORE";
      assets1_div.append(assets1_describe);

      const assets_cm_div = document.createElement("div");
      assets_cm_div.setAttribute("class", "assetscm");
      assets1_div.append(assets_cm_div);

      const total_assets_div = document.createElement("p");
      total_assets_div.innerText = "சொத்துக்கள் ₹8.89 CRORE";
      assets_cm_div.append(total_assets_div);

      const loan_describe = document.createElement("p");
      loan_describe.innerText = "கடன்கள் ₹ N/A";
      assets_cm_div.append(loan_describe);


    }
    document.querySelector(".cm-total-content").append(cmcontent_div);

  } else {
    let lii = document.createElement("li");
    lii.innerHTML = "Comming Soon"
    document.querySelector(".cm-total-content").append(lii);
  }
}
const language = localStorage.getItem("language");

if (language === "tamil") {
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
}

