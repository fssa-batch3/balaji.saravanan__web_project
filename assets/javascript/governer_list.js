const governer_list = JSON.parse(localStorage.getItem("governor_details"));

const table = document.createElement("table");

const table_row_head = document.createElement("tr");
table.append(table_row_head);

const table_heading1 = document.createElement("th");
table_heading1.innerText = "Sl.No";
table_row_head.append(table_heading1);

const table_heading2 = document.createElement("th");
table_heading2.innerText = "Governor";
table_row_head.append(table_heading2);

const table_heading3 = document.createElement("th");
table_heading3.innerText = "இருந்து";
table_row_head.append(table_heading3);

const table_heading4 = document.createElement("th");
table_heading4.innerText = "வரை";
table_row_head.append(table_heading4);

for (const values of governer_list) {
  const table_row = document.createElement("tr");
  table.append(table_row);

  const table_data1 = document.createElement("td");
  table_data1.innerText = values.id;
  table_row.append(table_data1);

  const table_data2 = document.createElement("td");
  table_row.append(table_data2);

  const data2_div_profile = document.createElement("div");
  data2_div_profile.setAttribute("class", "profile-main");
  table_data2.append(data2_div_profile);

  const div_parties = document.createElement("div");
  div_parties.setAttribute("class", "parties");
  data2_div_profile.append(div_parties);

  const div_fontside = document.createElement("div");
  div_fontside.setAttribute("class", "fontsidepro");
  div_parties.append(div_fontside);

  const name_div = document.createElement("p");
  name_div.innerText = values.governor_name;
  div_fontside.append(name_div);

  const position_div = document.createElement("p");
  position_div.innerText = "ஆளுநர்";
  div_fontside.append(position_div);

  const backside_div = document.createElement("div");
  backside_div.setAttribute("class", "backsidepro");
  div_parties.append(backside_div);

  const image_div = document.createElement("img");
  image_div.setAttribute("src", values.image);
  image_div.setAttribute("alt", values.governor_name);
  backside_div.append(image_div);

  const button_div = document.createElement("button");
  backside_div.append(button_div);
  const anc_link_div = document.createElement("a");
  anc_link_div.setAttribute(
    "href",
    `governer_profile.html?name=${values.governor_name}`
  );
  anc_link_div.innerText = "விவரம்";
  button_div.append(anc_link_div);

  const table_data3 = document.createElement("td");
  table_data3.innerText = values.from;
  table_row.append(table_data3);

  const table_data4 = document.createElement("td");
  table_data4.innerText = values.to;
  table_row.append(table_data4);
}
document.querySelector(".governer").append(table);
