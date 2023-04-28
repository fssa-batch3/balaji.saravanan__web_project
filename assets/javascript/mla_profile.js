

const mla_name = JSON.parse(localStorage.getItem("mla_ditails"));



const url = window.location.search;

const urlParams = new URLSearchParams(url);

const username = urlParams.get("name");
console.log(username);

let found = false;

let i;

for (i = 0; i < mla_name.length; i++) {

    if (username == mla_name[i].candidate_Name) {
        found = true;
        break;
    }

}
console.log(found);

if (found) {

    let cmImage, cm_name, position, position1, position2, position3, position4, position5;



    // cmImage
    cmImage = document.createElement("div");
    cmImage.setAttribute("class", "cm-image");


    //cmPicture

    // cmPicture = document.createElement("img");
    // cmPicture.setAttribute("src", minister_name[i].image.sourse);
    // cmImage.append(cmPicture);

    // document.querySelector(".headprofile").append(cmImage);

    // // cm_name
    cm_name = document.createElement("div");
    cm_name.setAttribute("class", "cm-name");


    // position

    position = document.createElement("p");
    position.innerText = "பதவி : " + mla_name[i]["position"];
    cm_name.append(position);

    position1 = document.createElement("p");
    position1.innerText = "பெயர் : " + mla_name[i].candidate_Name;
    cm_name.append(position1);

    position2 = document.createElement("p");
    position2.setAttribute("id", "minister-name")
    position2.innerText = "NAME : " + mla_name[i].candidate_Name;
    cm_name.append(position2);

    position3 = document.createElement("p");
    position3.innerText = "PARTY : " + "திராவிட முன்னேற்றக் கழகம்"
    cm_name.append(position3);

    position4 = document.createElement("p");
    position4.innerText = "அரசியல் :" + 45 + "வருடம்";
    cm_name.append(position4);

    position5 = document.createElement("p");
    position5.innerText = "தொழில் : " + "அரசியல்";
    cm_name.append(position5);


    // create a div element
    const div = document.createElement("div");
    div.id = "Iframe-Cicis-Menu-To-Go";
    div.classList.add("set-margin-cicis-menu-to-go", "set-padding-cicis-menu-to-go", "set-border-cicis-menu-to-go", "set-box-shadow-cicis-menu-to-go", "center-block-horiz");

    // create a div for responsive wrapper
    const responsiveDiv = document.createElement("div");
    responsiveDiv.classList.add("responsive-wrapper", "responsive-wrapper-padding-bottom-90pct");
    responsiveDiv.style.overflow = "auto";
    responsiveDiv.style.webkitOverflowScrolling = "touch";

    // create the iframe element
    const iframe = document.createElement("iframe");
    iframe.src = "https://drive.google.com/file/d/1CizE-ZahGikKp6f4bSTJRgv0Y6bT9iYR/preview";

    // create the error message element
    const p = document.createElement("p");
    p.style.fontSize = "110%";
    p.innerHTML = '<em><strong>ERROR: </strong>An &#105;frame should be displayed here but your browser version does not support &#105;frames. Please update your browser to its most recent version and try again, or access the file <a href="https://drive.google.com/file/d/0BxrMaW3xINrsR3h2cWx0OUlwRms/preview">with this link.</a></em>';

    // append the elements to the parent container
    responsiveDiv.appendChild(iframe);
    div.appendChild(responsiveDiv);
    div.appendChild(p);

    // add the parent container to the document
    // document.body.appendChild(div);
    document.querySelector("div.headprofile").append(cm_name);


    document.querySelector(".headprofile").append(div)









    let title, unorderList, list, list1img, list1, anchorlink1, list2, anchorlink2, list3, anchorlink3, list4, anchorlink4, list5, anchorlink5, list6, anchorlink6;

    title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerText = "side bar";
    document.querySelector("#sidebar");

    unorderList = document.createElement("ul");
    unorderList.setAttribute("class", "list-items");

    list = document.createElement("li");
    unorderList.append(list);

    list1img = document.createElement("img");
    list1img.setAttribute("src","#");
    list1img.setAttribute("alt", "error image")
    list.append(list1img);

    list1 = document.createElement("li");
    unorderList.append(list1);

    anchorlink1 = document.createElement("a");
    anchorlink1.setAttribute("href", "#birth")
    anchorlink1.innerText = "பிறப்பு";
    list1.append(anchorlink1);

    list2 = document.createElement("li");
    unorderList.append(list2);

    anchorlink2 = document.createElement("a");
    anchorlink2.setAttribute("href", "#education")
    anchorlink2.innerText = "கல்வி";
    list2.append(anchorlink2);

    list3 = document.createElement("li");
    unorderList.append(list3);

    anchorlink3 = document.createElement("a");
    anchorlink3.setAttribute("href", "#movie")
    anchorlink3.innerText = "திரைப்படம்";
    list3.append(anchorlink3);


    list4 = document.createElement("li");
    unorderList.append(list4);

    anchorlink4 = document.createElement("a");
    anchorlink4.setAttribute("href", "#politics")
    anchorlink4.innerText = "அரசியல்";
    list4.append(anchorlink4);

    list5 = document.createElement("li");
    unorderList.append(list5);

    anchorlink5 = document.createElement("a");
    anchorlink5.setAttribute("href", "#family")
    anchorlink5.innerText = "குடும்பம்";
    list5.append(anchorlink5);

    list6 = document.createElement("li");
    unorderList.append(list6);

    anchorlink6 = document.createElement("a");
    anchorlink6.setAttribute("href", "#income")
    anchorlink6.innerText = "வருமானம்";
    list6.append(anchorlink6);

    document.querySelector("#sidebar").append(unorderList);



    let cmcontent_div, birth_div, topic, describe, education_div, topic_education, describe_education, family_div, topic_family, describe_family, movie_div, topic_movie, describe_movie, politics_div, topic_politics, describe_politics, income_div, topic_income, assets_div, table, table_row, table_data_row1, table_data1, table_row1, table_data_row2, table_data2, table_row2, table_data_row3, table_data3, table_row3, table_data_row4, table_data4, assets1_div, assets1_describe, assets_cm_div, total_assets_div, loan_describe;




    //cmcontent
    cmcontent_div = document.createElement("div");
    cmcontent_div.setAttribute("class", "cmcontent");

    birth_div = document.createElement("div");
    birth_div.setAttribute("id", "birth");
    cmcontent_div.append(birth_div);

    topic = document.createElement("h2");
    topic.innerText = "பிறப்பு";
    birth_div.append(topic);

    describe = document.createElement("p");
    describe.innerText = "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி."
    birth_div.append(describe)



    education_div = document.createElement("div");
    education_div.setAttribute("id", "educatiion");
    cmcontent_div.append(education_div);

    topic_education = document.createElement("h2");
    topic_education.innerText = "கல்வி";
    education_div.append(topic_education);

    describe_education = document.createElement("p");
    describe_education.innerText = "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி."
    education_div.append(describe_education)



    family_div = document.createElement("div");
    family_div.setAttribute("id", "family");
    cmcontent_div.append(family_div);

    topic_family = document.createElement("h2");
    topic_family.innerText = "திரைப்படம்";
    family_div.append(topic_family);

    describe_family = document.createElement("p");
    describe_family.innerText = "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி."
    family_div.append(describe_family);


    movie_div = document.createElement("div");
    movie_div.setAttribute("id", "movie");
    cmcontent_div.append(movie_div);

    topic_movie = document.createElement("h2");
    topic_movie.innerText = "அரசியல்";
    movie_div.append(topic_movie);

    describe_movie = document.createElement("p");
    describe_movie.innerText = "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி."
    movie_div.append(describe_movie)


    politics_div = document.createElement("div");
    politics_div.setAttribute("id", "politics");
    cmcontent_div.append(politics_div);

    topic_politics = document.createElement("h2");
    topic_politics.innerText = "குடும்பம்";
    politics_div.append(topic_politics);

    describe_politics = document.createElement("p");
    describe_politics.innerText = "1953 ஆம் ஆண்டு மார்ச் 1ம் தேதி கலைஞர் மு.கருணாநிதி-தயாளு தம்பதிக்கு மூன்றாவது மகனாக பிறந்தார் தளபதி என  எல்லோராலும் அன்புடன் அழைக்கப்படும் மு.க.ஸ்டாலின்.ரஷ்யாவின் அதிபர் ஜோசப் ஸ்டாலின் நினைவாக ஸ்டாலின எனப் பெயர் சூட்டினார் அவரது தந்தை கலைஞர் மு கருணாநிதி.தளபதி உடன் பிறந்தோர், முத்து, அழகிரி, செல்வி,தமிழரசு  மற்றும் கனிமொழி."
    politics_div.append(describe_politics)


    income_div = document.createElement("div");
    income_div.setAttribute("id", "income");
    cmcontent_div.append(income_div);

    topic_income = document.createElement("h2");
    topic_income.innerText = "வருமானம்";
    income_div.append(topic_income);

    assets_div = document.createElement("div");
    assets_div.setAttribute("class", "assets");
    income_div.append(assets_div);


    table = document.createElement("table");
    income_div.append(table);

    table_row = document.createElement("tr");
    table.append(table_row);

    table_data_row1 = document.createElement("td")
    table_data_row1.innerText = "ஆண்டு";
    table_row.append(table_data_row1);

    table_data1 = document.createElement("td");
    table_data1.innerText = "₹" + 2.05 + "Lakh";
    table_row.append(table_data1);


    table_row1 = document.createElement("tr");
    table.append(table_row1);

    table_data_row2 = document.createElement("td")
    table_data_row2.innerText = "மாதாந்திர";
    table_row1.append(table_data_row2);

    table_data2 = document.createElement("td");
    table_data2.innerText = "₹" + 2.05 + "Lakh";
    table_row1.append(table_data2);

    table_row2 = document.createElement("tr");
    table.append(table_row2);

    table_data_row3 = document.createElement("td")
    table_data_row3.innerText = "வாரந்தோறும்";
    table_row2.append(table_data_row3);

    table_data3 = document.createElement("td");
    table_data3.innerText = "₹" + 2.05 + "Lakh";
    table_row2.append(table_data3);

    table_row3 = document.createElement("tr");
    table.append(table_row3);

    table_data_row4 = document.createElement("td")
    table_data_row4.innerText = "தினசரி";
    table_row3.append(table_data_row4);

    table_data4 = document.createElement("td");
    table_data4.innerText = "₹" + 2.05 + "Lakh";
    table_row3.append(table_data4);



    assets1_div = document.createElement("div");
    assets1_div.setAttribute("class", "assets1");
    income_div.append(assets1_div);

    assets1_describe = document.createElement("p");
    assets1_describe.innerText = "நிகர மதிப்பு₹" + "8.89 CRORE";
    assets1_div.append(assets1_describe);

    assets_cm_div = document.createElement("div");
    assets_cm_div.setAttribute("class", "assetscm");
    assets1_div.append(assets_cm_div);

    total_assets_div = document.createElement("p");
    total_assets_div.innerText = "சொத்துக்கள் ₹8.89 CRORE";
    assets_cm_div.append(total_assets_div);

    loan_describe = document.createElement("p");
    loan_describe.innerText = "கடன்கள் ₹ N/A";
    assets_cm_div.append(loan_describe);


    document.querySelector(".cm-total-content").append(cmcontent_div)

}

// position2 = document.createElement("p");
// position2.innerText = "NAME : " + minister_name[i].name.ename;
// cm_name.append(position2);
