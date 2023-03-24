

let table_div, table_head, table_head_row, table_heading1, table_heading2, table_heading3, table_heading4, table_heading5, table_heading6, table_heading7, table_body, table_data_row, table_data1, table_data2, name_link, table_data3, table_data4, table_data4_div, table_data4_img, table_data4_div_desc, table_data5, table_data6, table_data7;


table_div = document.createElement("table");
table_div.setAttribute("class", "table");


table_head = document.createElement("thead");
table_div.append(table_head);

table_head_row = document.createElement("tr");
table_head.append(table_head_row);

table_heading1 = document.createElement("th");
table_heading1.setAttribute("class", "text-center");
table_heading1.innerText = "வ.எண்";
table_head_row.append(table_heading1);

table_heading2 = document.createElement("th");
table_heading2.setAttribute("class", "text-center");
table_heading2.innerText = "தொகுதி பெயர்";
table_head_row.append(table_heading2);

table_heading3 = document.createElement("th");
table_heading3.setAttribute("class", "text-center");
table_heading3.innerText = "வேட்பாளர் பெயர்";
table_head_row.append(table_heading3);

table_heading4 = document.createElement("th");
table_heading4.setAttribute("class", "text-center");
table_heading4.innerText = "கட்சிகள்";
table_head_row.append(table_heading4);

table_heading5 = document.createElement("th");
table_heading5.setAttribute("class", "text-center");
table_heading5.innerText = "வாக்குகள்";
table_head_row.append(table_heading5);

table_heading6 = document.createElement("th");
table_heading6.setAttribute("class", "text-center");
table_heading6.innerText = "வாக்கு வித்தியாசம்";
table_head_row.append(table_heading6);

table_heading7 = document.createElement("th");
table_heading7.setAttribute("class", "text-center");
table_heading7.innerText = "வாக்கு விகிதம் %";
table_head_row.append(table_heading7);

table_body = document.createElement("tbody");
table_div.append(table_body);

table_data_row = document.createElement("tr");
table_div.append(table_data_row);

table_data1 = document.createElement("td");
table_data1.innerText = "1";
table_data_row.append(table_data1)

table_data2 = document.createElement("td");
table_data_row.append(table_data2)

name_link = document.createElement("a");
name_link.setAttribute("href", "../../assets");
name_link.setAttribute("title", "கும்மிடிப்பூண்டி");
name_link.innerText = "gumudipundi";
table_data2.append(name_link);

table_data3 = document.createElement("td");
table_data3.innerText = "1";
table_data_row.append(table_data3)

table_data4 = document.createElement("td");
table_data_row.append(table_data4);

table_data4_div = document.createElement("div");
table_data4_div.setAttribute("class", "name-img");
table_data4.append(table_data4_div);

table_data4_img = document.createElement("img");
table_data4_img.setAttribute("src", "../../assets/images/flages/dmk-logo.png")
table_data4_img.setAttribute("alt", "error Image");
table_data4_div.append(table_data4_img)


table_data4_div_desc = document.createElement("p");
table_data4_div_desc.innerText = "dmk";
table_data4_div.append(table_data4_div_desc);

table_data5 = document.createElement("td");
table_data5.innerText = "1";
table_data_row.append(table_data5)

table_data6 = document.createElement("td");
table_data6.innerText = "1";
table_data_row.append(table_data6)

table_data7 = document.createElement("td");
table_data7.innerText = "1";
table_data_row.append(table_data7)

document.querySelector(".governer").append(table_div);