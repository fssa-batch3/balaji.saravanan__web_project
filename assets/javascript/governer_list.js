const governer_list= JSON.parse(localStorage.getItem("governor_details"))


let table, table_row_head, table_heading1, table_heading2, table_hading3, table_heading4, table_row, table_data1, table_data2, data2_div_profile, div_parties, div_fontside, name_div, position_div, backside_div, image_div, button_div, anc_link_div, table_data3, table_data4;

table = document.createElement("table");

table_row_head = document.createElement("tr");
table.append(table_row_head);

table_heading1 = document.createElement("th");
table_heading1.innerText = "Sl.No";
table_row_head.append(table_heading1);

table_heading2 = document.createElement("th");
table_heading2.innerText = "Governor";
table_row_head.append(table_heading2);

table_heading3 = document.createElement("th");
table_heading3.innerText = "இருந்து";
table_row_head.append(table_heading3);

table_heading4 = document.createElement("th");
table_heading4.innerText = "வரை";
table_row_head.append(table_heading4);




for (let values of governer_list) {

    table_row = document.createElement("tr");
    table.append(table_row);


    table_data1 = document.createElement("td");
    table_data1.innerText = values.id;
    table_row.append(table_data1);

    table_data2 = document.createElement("td");
    table_row.append(table_data2);

    data2_div_profile = document.createElement("div");
    data2_div_profile.setAttribute("class", "profile-main");
    table_data2.append(data2_div_profile);

    div_parties = document.createElement("div");
    div_parties.setAttribute("class", "parties");
    data2_div_profile.append(div_parties);

    div_fontside = document.createElement("div");
    div_fontside.setAttribute("class", "fontsidepro");
    div_parties.append(div_fontside);

    name_div = document.createElement("p");
    name_div.innerText = values.governor_name;
    div_fontside.append(name_div);

    position_div = document.createElement("p")
    position_div.innerText = "ஆளுநர்";
    div_fontside.append(position_div);

    backside_div = document.createElement("div");
    backside_div.setAttribute("class", "backsidepro");
    div_parties.append(backside_div);

    image_div = document.createElement("img");
    image_div.setAttribute("src", "../../assets/images/ministers/ravi-gover.jpg");
    image_div.setAttribute("alt", "error image");
    backside_div.append(image_div);

    button_div = document.createElement("button");
    backside_div.append(button_div);

    anc_link_div = document.createElement("a");
    anc_link_div.setAttribute("href", "governer_profile.html?name="+values.governor_name);
    anc_link_div.innerText = "விவரம்";
    button_div.append(anc_link_div);

    table_data3 = document.createElement("td");
    table_data3.innerText = values.from;
    table_row.append(table_data3);

    table_data4 = document.createElement("td");
    table_data4.innerText = values.to;
    table_row.append(table_data4)


}
document.querySelector(".governer").append(table);
