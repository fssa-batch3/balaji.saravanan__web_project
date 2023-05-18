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
  position.innerText = `பதவி : ${governer[i].position}`;
  cm_name.append(position);

  const position1 = document.createElement("p");
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
  list1img.setAttribute("src", "#");
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
}

// position2 = document.createElement("p");
// position2.innerText = "NAME : " + minister_name[i].name.ename;
// cm_name.append(position2);
