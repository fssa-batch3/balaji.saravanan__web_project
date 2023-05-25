const governer = JSON.parse(localStorage.getItem("governor_details"));

const url = window.location.search;

const urlParams = new URLSearchParams(url);

const username = urlParams.get("name");
console.log(username);

let found = false;

let i;

for (i = 0; i < governer.length; i++) {
  if (username == governer[i].id) {
    found = true;
    break;
  }
}
console.log(found);

const language = localStorage.getItem("language");

if (found) {
  // cmImage
  const cmImage = document.createElement("div");
  cmImage.setAttribute("class", "cm-image");

  // cmPicture

  // cmPicture = document.createElement("img");
  // cmPicture.setAttribute("src", minister_name[i].image.sourse);
  // cmImage.append(cmPicture);

  // document.querySelector(".headprofile").append(cmImage);

  // // cm_name
  const cm_name = document.createElement("div");
  cm_name.setAttribute("class", "cm-name");

  // position

  const position = document.createElement("p");
  cm_name.append(position);

  if (language === "english") {
    position.innerText = "Position : Governer";
  } else {
    position.innerText = "பதவி : ஆளுநர்";
  }

  const position1 = document.createElement("p");
  position1.setAttribute("id", "minister-name")
  position1.innerText = `பெயர் : ${governer[i].governor_name}`;
  cm_name.append(position1);

  const position2 = document.createElement("p");
  position2.setAttribute("id", "minister-name");
  position2.innerText = `From : ${governer[i].from}`;
  cm_name.append(position2);

  const position3 = document.createElement("p");
  position3.innerText = "PARTY : " + "தமிழ்நாடு அரசு";
  cm_name.append(position3);

  const position4 = document.createElement("p");
  position4.innerText = `அரசியல் :${45}வருடம்`;
  cm_name.append(position4);

  const position5 = document.createElement("p");
  position5.innerText = "தொழில் : " + "N/A";
  cm_name.append(position5);

  // add the parent container to the document
  // document.body.appendChild(div);
  document.querySelector("div.headprofile").append(cm_name);

  const title = document.createElement("div");
  title.setAttribute("class", "title");
  title.innerText = "side bar";
  document.querySelector("#sidebar");

  const unorderList = document.createElement("ul");
  unorderList.setAttribute("class", "list-items");

  const list = document.createElement("li");
  unorderList.append(list);

  const list1img = document.createElement("img");
  list1img.setAttribute("src", governer[i].image);
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

  const birth_div = document.createElement("div");
  birth_div.setAttribute("id", "birth");
  cmcontent_div.append(birth_div);

  const topic = document.createElement("h2");
  topic.innerText = "பிறப்பு";
  birth_div.append(topic);

  if (governer[i].birth) {



    const describe = document.createElement("p");
    describe.innerText =
      "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி.";
    birth_div.append(describe);

    const education_div = document.createElement("div");
    education_div.setAttribute("id", "educatiion");
    cmcontent_div.append(education_div);

    const topic_education = document.createElement("h2");
    topic_education.innerText = "கல்வி";
    education_div.append(topic_education);

    const describe_education = document.createElement("p");
    describe_education.innerText =
      "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி.";
    education_div.append(describe_education);

    const family_div = document.createElement("div");
    family_div.setAttribute("id", "family");
    cmcontent_div.append(family_div);

    const topic_family = document.createElement("h2");
    topic_family.innerText = "திரைப்படம்";
    family_div.append(topic_family);

    const describe_family = document.createElement("p");
    describe_family.innerText =
      "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி.";
    family_div.append(describe_family);

    const movie_div = document.createElement("div");
    movie_div.setAttribute("id", "movie");
    cmcontent_div.append(movie_div);

    const topic_movie = document.createElement("h2");
    topic_movie.innerText = "அரசியல்";
    movie_div.append(topic_movie);

    const describe_movie = document.createElement("p");
    describe_movie.innerText =
      "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி.";
    movie_div.append(describe_movie);

    const politics_div = document.createElement("div");
    politics_div.setAttribute("id", "politics");
    cmcontent_div.append(politics_div);

    const topic_politics = document.createElement("h2");
    topic_politics.innerText = "குடும்பம்";
    politics_div.append(topic_politics);

    const describe_politics = document.createElement("p");
    describe_politics.innerText =
      "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி.";
    politics_div.append(describe_politics);

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

    document.querySelector(".cm-total-content").append(cmcontent_div);
  } else {

    let value = ` <h1>Coming Soon</h1>
    <div>

        <svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.3 447.3"
            xml:space="preserve">
            <g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M403.6,93.1c-72.2-38.5-146.7,22.7-146.7,22.7
                    l54.9,67.4c-18.9,4.8-58.2,47-58.2,47" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M431.2,144.1c-59.7-55.9-147.6-16-147.6-16
                    l35.6,79.3c-19.5-0.2-68.3,30.3-68.3,30.3" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M444.7,200.5c-43.2-69.4-138.4-53.7-138.4-53.7
                    l13.9,85.9c-18.7-5.2-73.9,11.6-73.9,11.6" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M443.2,258.6c-23.8-78.3-119.8-87.7-119.8-87.7
                    l-8.8,86.5c-16.7-9.9-74.4-7.9-74.4-7.9" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M426.7,314.2c-2.7-81.7-93-115.7-93-115.7
                    l-30.9,81.3c-13.6-13.9-69.8-26.9-69.8-26.9" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M396.3,363.7c18.5-79.7-59.9-135.8-59.9-135.8
                    l-50.9,70.5c-9.5-17-60.4-44-60.4-44" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M354.2,403.6c38.5-72.2-22.7-146.7-22.7-146.7
                    l-67.4,54.9c-4.8-18.9-47-58.2-47-58.2" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M303.2,431.2c55.9-59.7,16-147.6,16-147.6
                    l-79.3,35.6c0.2-19.5-30.3-68.3-30.3-68.3" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M246.7,444.7c69.4-43.2,53.7-138.4,53.7-138.4
                    l-85.9,13.9c5.2-18.7-11.6-73.9-11.6-73.9" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M188.7,443.2c78.3-23.8,87.7-119.8,87.7-119.8
                    l-86.5-8.8c9.9-16.7,7.9-74.4,7.9-74.4" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M133.1,426.7c81.7-2.7,115.7-93,115.7-93
                    l-81.3-30.9c13.9-13.6,26.9-69.8,26.9-69.8" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M83.6,396.3c79.7,18.5,135.8-59.9,135.8-59.9
                    l-70.5-50.9c17-9.5,44-60.4,44-60.4" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M43.7,354.2c72.2,38.5,146.7-22.7,146.7-22.7
                    l-54.9-67.4c18.9-4.8,58.2-47,58.2-47" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M16.1,303.2c59.7,55.9,147.6,16,147.6,16
                    L128,239.9c19.5,0.2,68.3-30.3,68.3-30.3" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M2.5,246.7C45.8,316.2,141,300.4,141,300.4
                    l-13.9-85.9c18.7,5.2,73.9-11.6,73.9-11.6" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M4.1,188.7c23.8,78.3,119.8,87.7,119.8,87.7
                    l8.8-86.5c16.7,9.9,74.4,7.9,74.4,7.9" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M20.6,133.1c2.7,81.7,93,115.7,93,115.7l30.9-81.3
                    c13.6,13.9,69.8,26.9,69.8,26.9" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M51,83.6c-18.5,79.7,59.9,135.8,59.9,135.8
                    l50.9-70.5c9.5,17,60.4,44,60.4,44" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M93.1,43.7c-38.5,72.2,22.7,146.7,22.7,146.7
                    l67.4-54.9c4.8,18.9,47,58.2,47,58.2" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M144.1,16.1c-55.9,59.7-16,147.6-16,147.6
                    l79.3-35.6c-0.2,19.5,30.3,68.3,30.3,68.3" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M200.5,2.5C131.1,45.8,146.9,141,146.9,141
                    l85.9-13.9c-5.2,18.7,11.6,73.9,11.6,73.9" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M258.6,4.1c-78.3,23.8-87.7,119.8-87.7,119.8
                    l86.5,8.8c-9.9,16.7-7.9,74.4-7.9,74.4" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M314.2,20.6c-81.7,2.7-115.7,93-115.7,93
                    l81.3,30.9c-13.9,13.6-26.9,69.8-26.9,69.8" />
                </g>
                <g>
                    <path fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" d="M363.7,51c-79.7-18.5-135.8,59.9-135.8,59.9
                    l70.5,50.9c-17,9.5-44,60.4-44,60.4" />
                </g>
            </g>
        </svg>
    </div>`;

    let element = document.querySelector(".cm-total-content");
    if (element) {
      element.innerHTML += value;
    } else {
      console.log("Element with class 'cm-total-content' not found.");
    }
  }
}

// position2 = document.createElement("p");
// position2.innerText = "NAME : " + minister_name[i].name.ename;
// cm_name.append(position2);
