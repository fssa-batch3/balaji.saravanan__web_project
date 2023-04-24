

let mla_list = JSON.parse(localStorage.getItem("mla_ditails"));

let table_div, table_head, table_head_row, table_heading1, table_heading2, table_heading3, table_heading4, table_heading5, table_heading6, table_heading7, table_body, table_data_row, table_data1, table_data2, name_link, table_data3, table_data4, table_data4_div, table_data4_img, table_data4_div_desc, table_data5, table_data6, table_data7;


table_div = document.createElement("table");
table_div.classList = "table table-hover";


table_head = document.createElement("thead");
table_div.append(table_head);

table_head_row = document.createElement("tr");
table_head_row.setAttribute("class", "sticky-top")
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
table_heading7.innerText = "வாக்கு விகிதம்";
table_head_row.append(table_heading7);

table_body = document.createElement("tbody");
table_div.append(table_body);

let dmk = "../../assets/images/flages/dmk-logo.png";
let aiadmk = "../../assets/images/flages/aiadmk-logo.png";
let bjp = "../../assets/images/flages/bjp-logo.png";
let congress = "../../assets/images/flages/congress-logo.png";
let mnmk = "../../assets/images/flages/mnmk-logo.png";

for (let values of mla_list) {
    table_data_row = document.createElement("tr");
    table_div.append(table_data_row);

    table_data1 = document.createElement("td");
    table_data1.innerText = values.mla_id;
    table_data_row.append(table_data1)

    table_data2 = document.createElement("td");
    table_data_row.append(table_data2)

    name_link = document.createElement("a");
    name_link.setAttribute("href", "../../assets");
    name_link.setAttribute("title", values.constituency_Name);
    name_link.innerText = values.constituency_Name;
    table_data2.append(name_link);

    table_data3 = document.createElement("td");
    table_data_row.append(table_data3)

    let table_data3_link = document.createElement("a");
    table_data3_link.setAttribute("href", "mla_profile.html?name=" + values.candidate_Name)
    table_data3_link.innerText = values.candidate_Name;
    table_data3.append(table_data3_link)

    table_data4 = document.createElement("td");
    table_data_row.append(table_data4);

    table_data4_div = document.createElement("div");
    table_data4_div.setAttribute("class", "name-img");
    table_data4.append(table_data4_div);

    table_data4_img = document.createElement("img");
    table_data4_img.setAttribute("alt", "error Image");
    table_data4_div.append(table_data4_img);

    if (values.Party === "திமுக") {
        table_data4_img.setAttribute("src", dmk);
    } else if (values.Party === "ஐ.ஏ.ஏ.டி.கே") {
        table_data4_img.setAttribute("src", aiadmk);
    } else if (values.Party === "பி.ஜே.பி") {
        table_data4_img.setAttribute("src", bjp);
    } else if (values.Party === "காங்.ரா") {
        table_data4_img.setAttribute("src", congress);
    } else if (values.Party === "மக்கள் நீதி மய்யம் கட்சி") {
        table_data4_img.setAttribute("src", mnmk);
    }

    table_data4_div_desc = document.createElement("p");
    table_data4_div_desc.innerText = values.Party;
    table_data4_div.append(table_data4_div_desc);

    table_data5 = document.createElement("td");
    table_data5.innerText = values.votes;
    table_data_row.append(table_data5)

    table_data6 = document.createElement("td");
    table_data6.innerText = values.margin;
    table_data_row.append(table_data6)

    table_data7 = document.createElement("td");
    table_data7.innerText = values.vote_Rate;
    table_data_row.append(table_data7)

}
document.querySelector(".governer").append(table_div);


// $("button#first").click(function () {
//     $("#tableRow").slideToggle();
// });


window.onload = function () {
    let searchBox = document.querySelector('#searchbar');
    searchBox.addEventListener('input', function () {
        let filterValue = searchBox.value.toLocaleLowerCase();
        let rows = document.querySelectorAll("table tr");
        for (let i = 1; i < rows.length; i++) { // start from index 1 to skip the header row
            let row = rows[i];
            let name = row.children[1].textContent.toLocaleLowerCase();
            let party = row.children[3].textContent.toLocaleLowerCase();
            let leader_name = row.children[2].textContent.toLocaleLowerCase();
            if (name.includes(filterValue) || party.includes(filterValue) || leader_name.includes(filterValue)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        }
    });
};

let table = document.querySelector("table");
let rows = table.rows;

let sortNameButton = document.querySelector("#sortName");
sortNameButton.addEventListener("click", () => {
    let sortedRows = Array.from(rows)
        .slice(1)
        .sort((a, b) => {
            let nameA = a.cells[1].textContent;
            let nameB = b.cells[1].textContent;
            return nameA.localeCompare(nameB);
        });

    table.tBodies[0].append(...sortedRows);
});

let sortMarginButton = document.querySelector("#sortMargin");
sortMarginButton.addEventListener("click", () => {
    let sortedRows = Array.from(rows)
        .slice(1)
        .sort((a, b) => {
            let marginA = parseInt(a.cells[4].textContent);
            let marginB = parseInt(b.cells[4].textContent);
            return marginB - marginA;
        });

    table.tBodies[0].append(...sortedRows);
});



let mla_values = [
    {
        "mla_id": "1",
        "constituency_Name": "கும்மிடிப்பூண்டி",
        "candidate_Name": "டி ஜெ கோவிந்தராசன்",
        "Party": "திமுக",
        "votes": "126,452",
        "margin": "50,938",
        "vote_Rate": "56.94 %"
    },
    {
        "mla_id": "2",
        "constituency_Name": "பொன்னேரி",
        "candidate_Name": "துரை சந்திரசேகர்",
        "Party": "காங்.",
        "votes": "94,528",
        "margin": "9,689",
        "vote_Rate": "44.94 %"
    },
    {
        "mla_id": "3",
        "constituency_Name": "திருத்தணி",
        "candidate_Name": "எஸ்.சந்திரன்",
        "Party": "திமுக",
        "votes": "120,314",
        "margin": "29,253",
        "vote_Rate": "51.72 %"
    },
    {
        "mla_id": "4",
        "constituency_Name": "திருவள்ளூர்",
        "candidate_Name": "வி.ஜி.ராஜேந்திரன்",
        "Party": "திமுக",
        "votes": "107,709",
        "margin": "22,701",
        "vote_Rate": "50.27 %"
    },
    {
        "mla_id": "5",
        "constituency_Name": "பூந்தமல்லி",
        "candidate_Name": "ஆ.கிருஷ்ணசாமி",
        "Party": "திமுக",
        "votes": "149,578",
        "margin": "94,110",
        "vote_Rate": "56.72 %"
    },
    {
        "mla_id": "6",
        "constituency_Name": "ஆவடி",
        "candidate_Name": "சா.மு.நாசர்",
        "Party": "திமுக",
        "votes": "150,287",
        "margin": "55,275",
        "vote_Rate": "49.94 %"
    },
    {
        "mla_id": "7",
        "constituency_Name": "மதுரவாயல்",
        "candidate_Name": "காரப்பாக்கம் கணபதி",
        "Party": "திமுக",
        "votes": "121,298",
        "margin": "31,721",
        "vote_Rate": "44.29 %"
    },
    {
        "mla_id": "8",
        "constituency_Name": "அம்பத்தூர்",
        "candidate_Name": "ஜோசப் சாமுவேல்",
        "Party": "திமுக",
        "votes": "114,554",
        "margin": "42,146",
        "vote_Rate": "47.67 %"
    },
    {
        "mla_id": "9",
        "constituency_Name": "மாதவரம்",
        "candidate_Name": "சுதர்சனம்",
        "Party": "திமுக",
        "votes": "151,485",
        "margin": "57,071",
        "vote_Rate": "50.04 %"
    },
    {
        "mla_id": "10",
        "constituency_Name": "திருவொற்றியூர்",
        "candidate_Name": "சங்கர்",
        "Party": "திமுக",
        "votes": "88,185",
        "margin": "37,661",
        "vote_Rate": "44.09 %"
    },
    {
        "mla_id": "11",
        "constituency_Name": "ஆர்.கே நகர்",
        "candidate_Name": "ஜே.ஜே.எபிநேசர்",
        "Party": "திமுக",
        "votes": "95,763",
        "margin": "42,479",
        "vote_Rate": "51.20 %"
    },
    {
        "mla_id": "12",
        "constituency_Name": "பெரம்பூர்",
        "candidate_Name": "ஆர்.டி.சேகர்",
        "Party": "திமுக",
        "votes": "105,267",
        "margin": "54,976",
        "vote_Rate": "52.53 %"
    },
    {
        "mla_id": "13",
        "constituency_Name": "கொளத்தூர்",
        "candidate_Name": "M.K.ஸ்டாலின்",
        "Party": "திமுக",
        "votes": "105,522",
        "margin": "70,384",
        "vote_Rate": "60.86 %"
    },
    {
        "mla_id": "14",
        "constituency_Name": "வில்லிவாக்கம்",
        "candidate_Name": "வெற்றியழகன்",
        "Party": "திமுக",
        "votes": "76,127",
        "margin": "37,237",
        "vote_Rate": "52.83 %"
    },
    {
        "mla_id": "15",
        "constituency_Name": "திரு.வி.க.நகர்",
        "candidate_Name": "தாயகம் கவி",
        "Party": "திமுக",
        "votes": "81,727",
        "margin": "55,013",
        "vote_Rate": "61.13 %"
    },
    {
        "mla_id": "16",
        "constituency_Name": "எழும்பூர்",
        "candidate_Name": "பரந்தாமன்",
        "Party": "திமுக",
        "votes": "68,832",
        "margin": "38,768",
        "vote_Rate": "57.71 %"
    },
    {
        "mla_id": "17",
        "constituency_Name": "ராயபுரம்",
        "candidate_Name": "ஐட்ரீம் இரா.மூர்த்தி",
        "Party": "திமுக",
        "votes": "64,424",
        "margin": "27,779",
        "vote_Rate": "53.16 %"
    },
    {
        "mla_id": "18",
        "constituency_Name": "துறைமுகம்",
        "candidate_Name": "சேகர்பாபு",
        "Party": "திமுக",
        "votes": "59,317",
        "margin": "27,274",
        "vote_Rate": "58.35 %"
    },
    {
        "mla_id": "19",
        "constituency_Name": "சேப்பாக்கம் திருவல்லிக்கேணி",
        "candidate_Name": "உதயநிதி ஸ்டாலின்",
        "Party": "திமுக",
        "votes": "93,285",
        "margin": "69,355",
        "vote_Rate": "67.89 %"
    },
    {
        "mla_id": "20",
        "constituency_Name": "ஆயிரம் விளக்கு",
        "candidate_Name": "Dr.எழிலன்",
        "Party": "திமுக",
        "votes": "71,437",
        "margin": "32,200",
        "vote_Rate": "52.81 %"
    },
    {
        "mla_id": "21",
        "constituency_Name": "அண்ணா நகர்",
        "candidate_Name": "எம்.கே.மோகன்",
        "Party": "திமுக",
        "votes": "80,054",
        "margin": "27,445",
        "vote_Rate": "48.49 %"
    },
    {
        "mla_id": "22",
        "constituency_Name": "விருகம்பாக்கம்",
        "candidate_Name": "ஏ.எம்.வி.பிரபாகர் ராஜா",
        "Party": "திமுக",
        "votes": "74,351",
        "margin": "18,367",
        "vote_Rate": "43.97 %"
    },
    {
        "mla_id": "23",
        "constituency_Name": "சைதாப்பேட்டை",
        "candidate_Name": "ம.சுப்ரமணியம்",
        "Party": "திமுக",
        "votes": "80,194",
        "margin": "29,408",
        "vote_Rate": "50.02 %"
    },
    {
        "mla_id": "24",
        "constituency_Name": "தியாகராய நகர்",
        "candidate_Name": "ஜெ.கருணாநிதி",
        "Party": "திமுக",
        "votes": "56,035",
        "margin": "137",
        "vote_Rate": "40.57 %"
    },
    {
        "mla_id": "25",
        "constituency_Name": "மயிலாப்பூர்",
        "candidate_Name": "தா வேலு",
        "Party": "திமுக",
        "votes": "68,392",
        "margin": "12,633",
        "vote_Rate": "44.58 %"
    },
    {
        "mla_id": "26",
        "constituency_Name": "வேளச்சேரி",
        "candidate_Name": "ஜே.எம்.எச்.ஹஸ்ஸான்",
        "Party": "காங்.",
        "votes": "68,493",
        "margin": "4,352",
        "vote_Rate": "38.76 %"
    },
    {
        "mla_id": "27",
        "constituency_Name": "சோழிங்கநல்லூர்",
        "candidate_Name": "அரவிந்த் ரமேஷ்",
        "Party": "திமுக",
        "votes": "171,558",
        "margin": "35,405",
        "vote_Rate": "44.18 %"
    },
    {
        "mla_id": "28",
        "constituency_Name": "ஆலந்தூர்",
        "candidate_Name": "தா.மோ. அன்பரசன்",
        "Party": "திமுக",
        "votes": "116,785",
        "margin": "40,571",
        "vote_Rate": "49.12 %"
    },
    {
        "mla_id": "29",
        "constituency_Name": "ஸ்ரீபெரும்புதூர்",
        "candidate_Name": "செல்வபெருந்தகை",
        "Party": "காங்.",
        "votes": "115,353",
        "margin": "10,879",
        "vote_Rate": "43.65 %"
    },
    {
        "mla_id": "30",
        "constituency_Name": "பல்லாவரம்",
        "candidate_Name": "இ.கருணாநிதி",
        "Party": "திமுக",
        "votes": "126,427",
        "margin": "37,781",
        "vote_Rate": "47.49 %"
    },
    {
        "mla_id": "31",
        "constituency_Name": "தாம்பரம்",
        "candidate_Name": "எஸ்.ஆர்.ராஜா",
        "Party": "திமுக",
        "votes": "116,840",
        "margin": "36,824",
        "vote_Rate": "46.93 %"
    },
    {
        "mla_id": "32",
        "constituency_Name": "செங்கல்பட்டு",
        "candidate_Name": "வரலட்சுமி மதுசூதனன்",
        "Party": "திமுக",
        "votes": "130,573",
        "margin": "26,665",
        "vote_Rate": "47.64 %"
    },
    {
        "mla_id": "33",
        "constituency_Name": "திருப்போரூர்",
        "candidate_Name": "எஸ்.எஸ்.பாலாஜி",
        "Party": "விசிக",
        "votes": "93,954",
        "margin": "1,947",
        "vote_Rate": "41.44 %"
    },
    {
        "mla_id": "34",
        "constituency_Name": "செய்யூர்",
        "candidate_Name": "பாபு",
        "Party": "விசிக",
        "votes": "82,750",
        "margin": "4,042",
        "vote_Rate": "46.20 %"
    },
    {
        "mla_id": "35",
        "constituency_Name": "மதுராந்தகம்",
        "candidate_Name": "மரகதம் குமாரவேல்",
        "Party": "அதிமுக",
        "votes": "86,646",
        "margin": "3,570",
        "vote_Rate": "46.62 %"
    },
    {
        "mla_id": "36",
        "constituency_Name": "உத்திரமேரூர்",
        "candidate_Name": "க.சுந்தர்",
        "Party": "திமுக",
        "votes": "93,427",
        "margin": "1,622",
        "vote_Rate": "44.38 %"
    },
    {
        "mla_id": "37",
        "constituency_Name": "காஞ்சிபுரம்",
        "candidate_Name": "சி.வி.எம்.பி. எழிலரசன்",
        "Party": "திமுக",
        "votes": "102,712",
        "margin": "11,595",
        "vote_Rate": "44.77 %"
    },
    {
        "mla_id": "38",
        "constituency_Name": "அரக்கோணம்",
        "candidate_Name": "சு. ரவி",
        "Party": "அதிமுக",
        "votes": "85,399",
        "margin": "27,169",
        "vote_Rate": "49.82 %"
    },
    {
        "mla_id": "39",
        "constituency_Name": "சோளிங்கர்",
        "candidate_Name": "முனிரத்தினம்",
        "Party": "காங்.",
        "votes": "110,228",
        "margin": "26,698",
        "vote_Rate": "49.18 %"
    },
    {
        "mla_id": "40",
        "constituency_Name": "காட்பாடி",
        "candidate_Name": "துரைமுருகன்",
        "Party": "திமுக",
        "votes": "85,140",
        "margin": "746",
        "vote_Rate": "45.71 %"
    },
    {
        "mla_id": "41",
        "constituency_Name": "ராணிபேட்டை",
        "candidate_Name": "காந்தி",
        "Party": "திமுக",
        "votes": "103,291",
        "margin": "16,498",
        "vote_Rate": "49.79 %"
    },
    {
        "mla_id": "42",
        "constituency_Name": "ஆற்காடு",
        "candidate_Name": "ஜெ.எல்.ஈஸ்வரப்பன்",
        "Party": "திமுக",
        "votes": "103,885",
        "margin": "19,958",
        "vote_Rate": "49.52 %"
    },
    {
        "mla_id": "43",
        "constituency_Name": "வேலூர்",
        "candidate_Name": "கார்த்திகேயன்",
        "Party": "திமுக",
        "votes": "84,299",
        "margin": "9,181",
        "vote_Rate": "46.86 %"
    },
    {
        "mla_id": "44",
        "constituency_Name": "அணைக்கட்டு",
        "candidate_Name": "நந்தகுமார்",
        "Party": "திமுக",
        "votes": "95,159",
        "margin": "6,360",
        "vote_Rate": "48.11 %"
    },
    {
        "mla_id": "45",
        "constituency_Name": "கீழ்வைத்தினன்குப்பம்",
        "candidate_Name": "எம்.ஜெகன்மூர்த்தி",
        "Party": "PBK",
        "votes": "84,579",
        "margin": "10,582",
        "vote_Rate": "48.57 %"
    },
    {
        "mla_id": "46",
        "constituency_Name": "குடியாத்தம்",
        "candidate_Name": "வி.அமுலு",
        "Party": "திமுக",
        "votes": "100,412",
        "margin": "6,901",
        "vote_Rate": "47.45 %"
    },
    {
        "mla_id": "47",
        "constituency_Name": "வாணியம்பாடி",
        "candidate_Name": "செந்தில்குமார்",
        "Party": "அதிமுக",
        "votes": "88,018",
        "margin": "4,904",
        "vote_Rate": "46.33 %"
    },
    {
        "mla_id": "48",
        "constituency_Name": "ஆம்பூர்",
        "candidate_Name": "ஆ.செ.விஸ்வநாதன்",
        "Party": "திமுக",
        "votes": "90,476",
        "margin": "20,232",
        "vote_Rate": "50.86 %"
    },
    {
        "mla_id": "49",
        "constituency_Name": "ஜோலார்பேட்டை",
        "candidate_Name": "க.தேவராஜி",
        "Party": "திமுக",
        "votes": "89,490",
        "margin": "1,091",
        "vote_Rate": "45.57 %"
    },
    {
        "mla_id": "50",
        "constituency_Name": "திருப்பத்தூர்",
        "candidate_Name": "எ.நல்லதம்பி",
        "Party": "திமுக",
        "votes": "96,522",
        "margin": "28,240",
        "vote_Rate": "51.91 %"
    },
    {
        "mla_id": "51",
        "constituency_Name": "ஊத்தங்கரை",
        "candidate_Name": "டி.எம்.தமிழ்செல்வம்",
        "Party": "அதிமுக",
        "votes": "99,675",
        "margin": "28,387",
        "vote_Rate": "52.96 %"
    },
    {
        "mla_id": "52",
        "constituency_Name": "பர்கூர்",
        "candidate_Name": "தே.மதியழகன்",
        "Party": "திமுக",
        "votes": "97,256",
        "margin": "12,614",
        "vote_Rate": "49.17 %"
    },
    {
        "mla_id": "53",
        "constituency_Name": "கிருஷ்ணகிரி",
        "candidate_Name": "அசோக்குமார்",
        "Party": "அதிமுக",
        "votes": "96,050",
        "margin": "794",
        "vote_Rate": "45.38 %"
    },
    {
        "mla_id": "54",
        "constituency_Name": "வேப்பனஹள்ளி",
        "candidate_Name": "கேபி முனுசாமி",
        "Party": "அதிமுக",
        "votes": "94,104",
        "margin": "3,054",
        "vote_Rate": "45.87 %"
    },
    {
        "mla_id": "55",
        "constituency_Name": "ஒசூர்",
        "candidate_Name": "ஒய்.பிரகாஷ்",
        "Party": "திமுக",
        "votes": "118,231",
        "margin": "12,367",
        "vote_Rate": "47.65 %"
    },
    {
        "mla_id": "56",
        "constituency_Name": "தளீ",
        "candidate_Name": "ராமச்சந்திரன்",
        "Party": "சிபிஐ",
        "votes": "120,641",
        "margin": "56,226",
        "vote_Rate": "62.18 %"
    },
    {
        "mla_id": "57",
        "constituency_Name": "பாலக்கோடு",
        "candidate_Name": "கேபி அன்பழகன்",
        "Party": "அதிமுக",
        "votes": "110,070",
        "margin": "28,100",
        "vote_Rate": "53.28 %"
    },
    {
        "mla_id": "58",
        "constituency_Name": "பென்னாகரம்",
        "candidate_Name": "ஜிகே மணி",
        "Party": "பாமக",
        "votes": "106,123",
        "margin": "21,186",
        "vote_Rate": "50.46 %"
    },
    {
        "mla_id": "59",
        "constituency_Name": "தர்மபுரி",
        "candidate_Name": "எஸ் பி வெங்கடேஸ்வரன்",
        "Party": "பாமக",
        "votes": "105,630",
        "margin": "26,860",
        "vote_Rate": "48.60 %"
    },
    {
        "mla_id": "60",
        "constituency_Name": "பாப்பிரெட்டிபட்டி",
        "candidate_Name": "ஏ. கோவிந்தசாமி",
        "Party": "அதிமுக",
        "votes": "114,507",
        "margin": "36,943",
        "vote_Rate": "51.81 %"
    },
    {
        "mla_id": "61",
        "constituency_Name": "அரூர்",
        "candidate_Name": "வி. சம்பத்குமார்",
        "Party": "அதிமுக",
        "votes": "99,061",
        "margin": "30,362",
        "vote_Rate": "49.89 %"
    },
    {
        "mla_id": "62",
        "constituency_Name": "செங்கம்",
        "candidate_Name": "மு.பெ.கிரி",
        "Party": "திமுக",
        "votes": "108,081",
        "margin": "11,570",
        "vote_Rate": "48.26 %"
    },
    {
        "mla_id": "63",
        "constituency_Name": "திருவண்ணாமலை",
        "candidate_Name": "எ.வ.வேலு",
        "Party": "திமுக",
        "votes": "137,876",
        "margin": "94,673",
        "vote_Rate": "66.02 %"
    },
    {
        "mla_id": "64",
        "constituency_Name": "கீழ்பென்னத்தூர்",
        "candidate_Name": "கு.பிச்சாண்டி",
        "Party": "திமுக",
        "votes": "104,675",
        "margin": "26,787",
        "vote_Rate": "51.34 %"
    },
    {
        "mla_id": "65",
        "constituency_Name": "கலசபாக்கம்",
        "candidate_Name": "பெ.சு.தி.சரவணன்",
        "Party": "திமுக",
        "votes": "94,134",
        "margin": "9,222",
        "vote_Rate": "47.92 %"
    },
    {
        "mla_id": "66",
        "constituency_Name": "போளூர்",
        "candidate_Name": "அக்ரி கிருஷ்ணமூர்த்தி",
        "Party": "அதிமுக",
        "votes": "97,732",
        "margin": "9,725",
        "vote_Rate": "48.38 %"
    },
    {
        "mla_id": "67",
        "constituency_Name": "ஆரணி",
        "candidate_Name": "சேவூர் ராமச்சந்திரன்",
        "Party": "அதிமுக",
        "votes": "102,961",
        "margin": "3,128",
        "vote_Rate": "46.50 %"
    },
    {
        "mla_id": "68",
        "constituency_Name": "செய்யாறு",
        "candidate_Name": "ஓ.ஜோதி",
        "Party": "திமுக",
        "votes": "102,460",
        "margin": "12,271",
        "vote_Rate": "47.78 %"
    },
    {
        "mla_id": "69",
        "constituency_Name": "வந்தவாசி",
        "candidate_Name": "எஸ்.அம்பேத்குமார்",
        "Party": "திமுக",
        "votes": "102,064",
        "margin": "35,953",
        "vote_Rate": "54.88 %"
    },
    {
        "mla_id": "70",
        "constituency_Name": "செஞ்சி",
        "candidate_Name": "கே.எஸ்.மஸ்தான்",
        "Party": "திமுக",
        "votes": "109,625",
        "margin": "35,803",
        "vote_Rate": "52.99 %"
    },
    {
        "mla_id": "71",
        "constituency_Name": "மயிலம்",
        "candidate_Name": "சிவக்குமார்",
        "Party": "பாமக",
        "votes": "81,044",
        "margin": "2,230",
        "vote_Rate": "45.79 %"
    },
    {
        "mla_id": "72",
        "constituency_Name": "திண்டிவனம்",
        "candidate_Name": "அர்ஜூனன்",
        "Party": "அதிமுக",
        "votes": "87,152",
        "margin": "9,753",
        "vote_Rate": "47.74 %"
    },
    {
        "mla_id": "73",
        "constituency_Name": "வானூர்",
        "candidate_Name": "சக்ரபாணி",
        "Party": "அதிமுக",
        "votes": "92,219",
        "margin": "21,727",
        "vote_Rate": "50.61 %"
    },
    {
        "mla_id": "74",
        "constituency_Name": "விழுப்புரம்",
        "candidate_Name": "ஆர்.லட்சுமணன்",
        "Party": "திமுக",
        "votes": "102,271",
        "margin": "14,868",
        "vote_Rate": "49.92 %"
    },
    {
        "mla_id": "75",
        "constituency_Name": "விக்கிரவாண்டி",
        "candidate_Name": "நா.புகழேந்தி",
        "Party": "திமுக",
        "votes": "93,730",
        "margin": "9,573",
        "vote_Rate": "48.41 %"
    },
    {
        "mla_id": "76",
        "constituency_Name": "திருக்கோயிலூர்",
        "candidate_Name": "க.பொன்முடி",
        "Party": "திமுக",
        "votes": "110,980",
        "margin": "59,680",
        "vote_Rate": "56.56 %"
    },
    {
        "mla_id": "77",
        "constituency_Name": "உளுந்தூர்பேட்டை",
        "candidate_Name": "எ.ஜெ.மணிகண்ணன்",
        "Party": "திமுக",
        "votes": "115,451",
        "margin": "5,256",
        "vote_Rate": "47.15 %"
    },
    {
        "mla_id": "78",
        "constituency_Name": "ரிஷிவந்தியம்",
        "candidate_Name": "வசந்தம் கார்த்திகேயன்",
        "Party": "திமுக",
        "votes": "113,912",
        "margin": "41,728",
        "vote_Rate": "52.96 %"
    },
    {
        "mla_id": "79",
        "constituency_Name": "சங்கராபுரம்",
        "candidate_Name": "தா.உதயசூரியன்",
        "Party": "திமுக",
        "votes": "121,186",
        "margin": "45,963",
        "vote_Rate": "56.16 %"
    },
    {
        "mla_id": "80",
        "constituency_Name": "கள்ளக்குறிச்சி",
        "candidate_Name": "செந்தில்குமார்",
        "Party": "அதிமுக",
        "votes": "110,643",
        "margin": "25,891",
        "vote_Rate": "48.99 %"
    },
    {
        "mla_id": "81",
        "constituency_Name": "கங்கவல்லி",
        "candidate_Name": "நல்லதம்பி",
        "Party": "அதிமுக",
        "votes": "89,568",
        "margin": "7,361",
        "vote_Rate": "48.02 %"
    },
    {
        "mla_id": "82",
        "constituency_Name": "ஆத்தூர்",
        "candidate_Name": "ஜெயசங்கரன்",
        "Party": "அதிமுக",
        "votes": "95,308",
        "margin": "8,257",
        "vote_Rate": "47.72 %"
    },
    {
        "mla_id": "83",
        "constituency_Name": "ஏற்காடு",
        "candidate_Name": "கு. சித்ரா",
        "Party": "அதிமுக",
        "votes": "121,561",
        "margin": "25,955",
        "vote_Rate": "50.88 %"
    },
    {
        "mla_id": "84",
        "constituency_Name": "ஓமலூர்",
        "candidate_Name": "ஆர். மணி",
        "Party": "அதிமுக",
        "votes": "142,488",
        "margin": "55,294",
        "vote_Rate": "57.22 %"
    },
    {
        "mla_id": "85",
        "constituency_Name": "மேட்டூர்",
        "candidate_Name": "சதாசிவம்",
        "Party": "பாமக",
        "votes": "97,055",
        "margin": "656",
        "vote_Rate": "44.43 %"
    },
    {
        "mla_id": "86",
        "constituency_Name": "எடப்பாடி",
        "candidate_Name": "கே.பழனிச்சாமி",
        "Party": "அதிமுக",
        "votes": "163,154",
        "margin": "93,802",
        "vote_Rate": "65.97 %"
    },
    {
        "mla_id": "87",
        "constituency_Name": "சங்ககிரி",
        "candidate_Name": "சுந்தரராஜ",
        "Party": "அதிமுக",
        "votes": "115,472",
        "margin": "20,045",
        "vote_Rate": "49.72 %"
    },
    {
        "mla_id": "88",
        "constituency_Name": "சேலம் (மேற்கு )",
        "candidate_Name": "இரா அருள்",
        "Party": "பாமக",
        "votes": "105,483",
        "margin": "21,499",
        "vote_Rate": "48.69 %"
    },
    {
        "mla_id": "89",
        "constituency_Name": "சேலம் (வடக்கு )",
        "candidate_Name": "இரா ராஜேந்திரன்",
        "Party": "திமுக",
        "votes": "93,432",
        "margin": "7,588",
        "vote_Rate": "46.17 %"
    },
    {
        "mla_id": "90",
        "constituency_Name": "சேலம் (தெற்கு )",
        "candidate_Name": "பாலசுப்பிரமணியன்",
        "Party": "அதிமுக",
        "votes": "97,506",
        "margin": "22,609",
        "vote_Rate": "48.76 %"
    },
    {
        "mla_id": "91",
        "constituency_Name": "வீரபாண்டி",
        "candidate_Name": "எம். ராஜா",
        "Party": "அதிமுக",
        "votes": "111,682",
        "margin": "19,895",
        "vote_Rate": "49.92 %"
    },
    {
        "mla_id": "92",
        "constituency_Name": "ராசிபுரம்",
        "candidate_Name": "மா.மதிவேந்தன்",
        "Party": "திமுக",
        "votes": "90,727",
        "margin": "1,952",
        "vote_Rate": "46.08 %"
    },
    {
        "mla_id": "93",
        "constituency_Name": "சேர்ந்தமங்கலம்",
        "candidate_Name": "கே.பொன்னுசாமி",
        "Party": "திமுக",
        "votes": "90,681",
        "margin": "10,493",
        "vote_Rate": "45.51 %"
    },
    {
        "mla_id": "94",
        "constituency_Name": "நாமக்கல்",
        "candidate_Name": "பெ.ராமலிங்கம்",
        "Party": "திமுக",
        "votes": "106,494",
        "margin": "27,861",
        "vote_Rate": "51.51 %"
    },
    {
        "mla_id": "95",
        "constituency_Name": "பரமத்தி வேலூர்",
        "candidate_Name": "எஸ். சேகர்",
        "Party": "அதிமுக",
        "votes": "86,034",
        "margin": "7,662",
        "vote_Rate": "46.83 %"
    },
    {
        "mla_id": "96",
        "constituency_Name": "திருச்செங்கோடு",
        "candidate_Name": "ஈ.ஆர்.ஈஸ்வரன்",
        "Party": "KMDK",
        "votes": "81,688",
        "margin": "2,862",
        "vote_Rate": "44.23 %"
    },
    {
        "mla_id": "97",
        "constituency_Name": "குமாரபாளையம்",
        "candidate_Name": "தங்கமணி",
        "Party": "அதிமுக",
        "votes": "100,800",
        "margin": "31,646",
        "vote_Rate": "49.92 %"
    },
    {
        "mla_id": "98",
        "constituency_Name": "ஈரோடு(கிழக்கு)",
        "candidate_Name": "திருமகன் ஈவேரா .",
        "Party": "காங்.",
        "votes": "67,300",
        "margin": "8,904",
        "vote_Rate": "44.27 %"
    },
    {
        "mla_id": "99",
        "constituency_Name": "ஈரோடு(மேற்கு)",
        "candidate_Name": "சு.முத்துசாமி",
        "Party": "திமுக",
        "votes": "100,757",
        "margin": "22,089",
        "vote_Rate": "49.01 %"
    },
    {
        "mla_id": "100",
        "constituency_Name": "மொடக்குறிச்சி",
        "candidate_Name": "",
        "Party": "பாஜக",
        "votes": "78,125",
        "margin": "281",
        "vote_Rate": "42.96 %"
    },
    {
        "mla_id": "101",
        "constituency_Name": "தாராபுரம்",
        "candidate_Name": "கயல்விழி செல்வராஜ்",
        "Party": "திமுக",
        "votes": "89,986",
        "margin": "1,393",
        "vote_Rate": "46.39 %"
    },
    {
        "mla_id": "102",
        "constituency_Name": "காங்கேயம்",
        "candidate_Name": "சாமிநாதன்",
        "Party": "திமுக",
        "votes": "94,197",
        "margin": "7,331",
        "vote_Rate": "47.14 %"
    },
    {
        "mla_id": "103",
        "constituency_Name": "பெருந்துறை",
        "candidate_Name": "ஜெயக்குமார்",
        "Party": "அதிமுக",
        "votes": "85,125",
        "margin": "14,507",
        "vote_Rate": "44.84 %"
    },
    {
        "mla_id": "104",
        "constituency_Name": "பவானி",
        "candidate_Name": "கே.சி. கருப்பணன்",
        "Party": "அதிமுக",
        "votes": "100,915",
        "margin": "22,523",
        "vote_Rate": "50.11 %"
    },
    {
        "mla_id": "105",
        "constituency_Name": "அந்தியூர்",
        "candidate_Name": "எ.ஜி.வெங்கடாச்சலம்",
        "Party": "திமுக",
        "votes": "79,096",
        "margin": "1,275",
        "vote_Rate": "44.84 %"
    },
    {
        "mla_id": "106",
        "constituency_Name": "கோபிச்செட்டிப்பாளையம்",
        "candidate_Name": "கே.ஏ. செங்கோட்டையன்",
        "Party": "அதிமுக",
        "votes": "108,608",
        "margin": "28,563",
        "vote_Rate": "50.68 %"
    },
    {
        "mla_id": "107",
        "constituency_Name": "பவானிசாகர்",
        "candidate_Name": "பண்ணாரி",
        "Party": "அதிமுக",
        "votes": "99,181",
        "margin": "16,008",
        "vote_Rate": "49.45 %"
    },
    {
        "mla_id": "108",
        "constituency_Name": "உதகமண்டலம்",
        "candidate_Name": "ஆர்.கணேஷ்",
        "Party": "காங்.",
        "votes": "65,530",
        "margin": "5,348",
        "vote_Rate": "46.44 %"
    },
    {
        "mla_id": "109",
        "constituency_Name": "கூடலூர்",
        "candidate_Name": "பொன். ஜெயசீலன்",
        "Party": "அதிமுக",
        "votes": "64,496",
        "margin": "1,945",
        "vote_Rate": "46.65 %"
    },
    {
        "mla_id": "110",
        "constituency_Name": "குன்னூர்",
        "candidate_Name": "கா.ராமசந்திரன்",
        "Party": "திமுக",
        "votes": "61,820",
        "margin": "4,105",
        "vote_Rate": "45.49 %"
    },
    {
        "mla_id": "111",
        "constituency_Name": "மேட்டுப்பாளையம்",
        "candidate_Name": "ஏ.கே. செல்வராஜ்",
        "Party": "அதிமுக",
        "votes": "105,231",
        "margin": "2,456",
        "vote_Rate": "46.75 %"
    },
    {
        "mla_id": "112",
        "constituency_Name": "அவினாசி",
        "candidate_Name": "தனபால்",
        "Party": "அதிமுக",
        "votes": "117,284",
        "margin": "50,902",
        "vote_Rate": "55.16 %"
    },
    {
        "mla_id": "113",
        "constituency_Name": "திருப்பூர் (வடக்கு)",
        "candidate_Name": "விஜயகுமார்",
        "Party": "அதிமுக",
        "votes": "113,384",
        "margin": "40,102",
        "vote_Rate": "47.62 %"
    },
    {
        "mla_id": "114",
        "constituency_Name": "திருப்பூர் (தெற்கு)",
        "candidate_Name": "க.செல்வராஜ்",
        "Party": "திமுக",
        "votes": "75,535",
        "margin": "4,709",
        "vote_Rate": "43.31 %"
    },
    {
        "mla_id": "115",
        "constituency_Name": "பல்லடம்",
        "candidate_Name": "எம்.எஸ்.எம். ஆனந்தன்",
        "Party": "அதிமுக",
        "votes": "126,903",
        "margin": "32,691",
        "vote_Rate": "48.53 %"
    },
    {
        "mla_id": "116",
        "constituency_Name": "சூலூர்",
        "candidate_Name": "விபி கந்தசாமி",
        "Party": "அதிமுக",
        "votes": "118,968",
        "margin": "31,932",
        "vote_Rate": "49.23 %"
    },
    {
        "mla_id": "117",
        "constituency_Name": "கவுண்டம்பாளையம்",
        "candidate_Name": "அருண்குமார்",
        "Party": "அதிமுக",
        "votes": "135,669",
        "margin": "9,776",
        "vote_Rate": "43.78 %"
    },
    {
        "mla_id": "118",
        "constituency_Name": "கோவை வடக்கு",
        "candidate_Name": "அம்மன் அர்ச்சுணன்",
        "Party": "அதிமுக",
        "votes": "81,454",
        "margin": "4,001",
        "vote_Rate": "40.16 %"
    },
    {
        "mla_id": "119",
        "constituency_Name": "தொண்டாமுத்தூர்",
        "candidate_Name": "எஸ்.பி. வேலுமணி",
        "Party": "அதிமுக",
        "votes": "124,225",
        "margin": "41,630",
        "vote_Rate": "53.89 %"
    },
    {
        "mla_id": "120",
        "constituency_Name": "கோவை தெற்கு",
        "candidate_Name": "வானதி சீனிவாசன்",
        "Party": "பாஜக",
        "votes": "53,209",
        "margin": "1,728",
        "vote_Rate": "34.38 %"
    },
    {
        "mla_id": "121",
        "constituency_Name": "சிங்காநல்லூர்",
        "candidate_Name": "கே.ஆர். ஜெயராம்",
        "Party": "அதிமுக",
        "votes": "81,244",
        "margin": "10,854",
        "vote_Rate": "40.22 %"
    },
    {
        "mla_id": "122",
        "constituency_Name": "கிணத்துக்கடவு",
        "candidate_Name": "தாமோதரன்",
        "Party": "அதிமுக",
        "votes": "101,537",
        "margin": "1,095",
        "vote_Rate": "43.68 %"
    },
    {
        "mla_id": "123",
        "constituency_Name": "பொள்ளாச்சி",
        "candidate_Name": "பொள்ளாச்சி ஜெயராமன்",
        "Party": "அதிமுக",
        "votes": "80,567",
        "margin": "1,725",
        "vote_Rate": "45.44 %"
    },
    {
        "mla_id": "124",
        "constituency_Name": "வால்ப்பாறை",
        "candidate_Name": "அமுல்கந்தசாமி",
        "Party": "அதிமுக",
        "votes": "71,672",
        "margin": "12,223",
        "vote_Rate": "49.37 %"
    },
    {
        "mla_id": "125",
        "constituency_Name": "உடுமலைப்பேட்டை",
        "candidate_Name": "உடுமலை கே. ராதாகிருஷ்ணன்",
        "Party": "அதிமுக",
        "votes": "96,893",
        "margin": "21,895",
        "vote_Rate": "49.85 %"
    },
    {
        "mla_id": "126",
        "constituency_Name": "மடத்துக்குளம்",
        "candidate_Name": "சி.மகேந்திரன்",
        "Party": "அதிமுக",
        "votes": "84,313",
        "margin": "6,438",
        "vote_Rate": "46.35 %"
    },
    {
        "mla_id": "127",
        "constituency_Name": "பழனி",
        "candidate_Name": "ஐ.பி.செந்தில்குமார்",
        "Party": "திமுக",
        "votes": "108,566",
        "margin": "30,056",
        "vote_Rate": "52.86 %"
    },
    {
        "mla_id": "128",
        "constituency_Name": "ஒட்டன்சத்திரம்",
        "candidate_Name": "அர.சக்கரபாணி",
        "Party": "திமுக",
        "votes": "109,970",
        "margin": "28,742",
        "vote_Rate": "54.51 %"
    },
    {
        "mla_id": "129",
        "constituency_Name": "ஆத்தூர்",
        "candidate_Name": "இ.பெரியசாமி",
        "Party": "திமுக",
        "votes": "165,809",
        "margin": "135,571",
        "vote_Rate": "72.11 %"
    },
    {
        "mla_id": "130",
        "constituency_Name": "நிலக்கோட்டை",
        "candidate_Name": "தேன்மொழி",
        "Party": "அதிமுக",
        "votes": "91,461",
        "margin": "27,618",
        "vote_Rate": "49.49 %"
    },
    {
        "mla_id": "131",
        "constituency_Name": "நத்தம்",
        "candidate_Name": "நத்தம் விஸ்வநாதன்",
        "Party": "அதிமுக",
        "votes": "107,762",
        "margin": "11,932",
        "vote_Rate": "47.84 %"
    },
    {
        "mla_id": "132",
        "constituency_Name": "திண்டுக்கல்",
        "candidate_Name": "திண்டுக்கல் சீனிவாசன்",
        "Party": "அதிமுக",
        "votes": "90,595",
        "margin": "17,747",
        "vote_Rate": "46.43 %"
    },
    {
        "mla_id": "133",
        "constituency_Name": "வேடசந்தூர்",
        "candidate_Name": "எஸ்.காந்திராஜன்",
        "Party": "திமுக",
        "votes": "106,481",
        "margin": "17,553",
        "vote_Rate": "49.97 %"
    },
    {
        "mla_id": "134",
        "constituency_Name": "அரவக்குறிச்சி",
        "candidate_Name": "ஆர்.இளங்கோ",
        "Party": "திமுக",
        "votes": "93,369",
        "margin": "24,816",
        "vote_Rate": "52.72 %"
    },
    {
        "mla_id": "135",
        "constituency_Name": "கரூர்",
        "candidate_Name": "செந்தில் பாலாஜி",
        "Party": "திமுக",
        "votes": "101,757",
        "margin": "12,448",
        "vote_Rate": "49.08 %"
    },
    {
        "mla_id": "136",
        "constituency_Name": "கிருஷ்ணராயபுரம்",
        "candidate_Name": "க.சிவகாமசுந்தரி",
        "Party": "திமுக",
        "votes": "96,540",
        "margin": "31,625",
        "vote_Rate": "53.37 %"
    },
    {
        "mla_id": "137",
        "constituency_Name": "குளித்தலை",
        "candidate_Name": "இரா.மாணிக்கம்",
        "Party": "திமுக",
        "votes": "100,829",
        "margin": "23,540",
        "vote_Rate": "51.06 %"
    },
    {
        "mla_id": "138",
        "constituency_Name": "மணப்பாறை",
        "candidate_Name": "அப்துல் சமது",
        "Party": "MMK",
        "votes": "98,077",
        "margin": "12,243",
        "vote_Rate": "44.23 %"
    },
    {
        "mla_id": "139",
        "constituency_Name": "ஸ்ரீரங்கம்",
        "candidate_Name": "எம்.பழனியாண்டி",
        "Party": "திமுக",
        "votes": "113,904",
        "margin": "19,915",
        "vote_Rate": "47.41 %"
    },
    {
        "mla_id": "140",
        "constituency_Name": "திருச்சி(மேற்கு)",
        "candidate_Name": "கேஎன் நேரு",
        "Party": "திமுக",
        "votes": "118,133",
        "margin": "85,109",
        "vote_Rate": "64.52 %"
    },
    {
        "mla_id": "141",
        "constituency_Name": "திருச்சி(கிழக்கு)",
        "candidate_Name": "இனிகோ இருதயராஜ்",
        "Party": "திமுக",
        "votes": "94,302",
        "margin": "53,797",
        "vote_Rate": "54.56 %"
    },
    {
        "mla_id": "142",
        "constituency_Name": "திருவெறும்பூர்",
        "candidate_Name": "அன்பில் மகேஷ் பொய்யாமொழி",
        "Party": "திமுக",
        "votes": "105,424",
        "margin": "49,697",
        "vote_Rate": "53.51 %"
    },
    {
        "mla_id": "143",
        "constituency_Name": "லால்குடி",
        "candidate_Name": "அ.சௌந்திரபாண்டியன்",
        "Party": "திமுக",
        "votes": "84,914",
        "margin": "16,949",
        "vote_Rate": "48.59 %"
    },
    {
        "mla_id": "144",
        "constituency_Name": "மணச்சநல்லூர்",
        "candidate_Name": "சீ.கதிரவன்",
        "Party": "திமுக",
        "votes": "116,334",
        "margin": "59,618",
        "vote_Rate": "59.14 %"
    },
    {
        "mla_id": "145",
        "constituency_Name": "முசிறி",
        "candidate_Name": "ந.தியாகராஜன்",
        "Party": "திமுக",
        "votes": "90,624",
        "margin": "26,836",
        "vote_Rate": "50.43 %"
    },
    {
        "mla_id": "146",
        "constituency_Name": "துறையூர்",
        "candidate_Name": "செ.ஸ்டாலின் குமார்",
        "Party": "திமுக",
        "votes": "87,786",
        "margin": "22,071",
        "vote_Rate": "49.91 %"
    },
    {
        "mla_id": "147",
        "constituency_Name": "பெரம்பலூர்",
        "candidate_Name": "எம்.பிரபாகரன்",
        "Party": "திமுக",
        "votes": "122,090",
        "margin": "31,034",
        "vote_Rate": "50.87 %"
    },
    {
        "mla_id": "148",
        "constituency_Name": "குன்னம்",
        "candidate_Name": "எஸ்.எஸ்.சிவசங்கர்",
        "Party": "திமுக",
        "votes": "103,922",
        "margin": "6,329",
        "vote_Rate": "47.26 %"
    },
    {
        "mla_id": "149",
        "constituency_Name": "அரியலூர்",
        "candidate_Name": "சின்னப்பா",
        "Party": "மதிமுக",
        "votes": "103,975",
        "margin": "3,234",
        "vote_Rate": "46.16 %"
    },
    {
        "mla_id": "150",
        "constituency_Name": "ஜெயங்கொண்டம்",
        "candidate_Name": "கே.எஸ்.கே.கண்ணன்",
        "Party": "திமுக",
        "votes": "99,529",
        "margin": "5,452",
        "vote_Rate": "46.00 %"
    },
    {
        "mla_id": "151",
        "constituency_Name": "திட்டக்குடி",
        "candidate_Name": "சி.வி.கணேசன்",
        "Party": "திமுக",
        "votes": "83,726",
        "margin": "21,563",
        "vote_Rate": "49.78 %"
    },
    {
        "mla_id": "152",
        "constituency_Name": "விருத்தாசலம்",
        "candidate_Name": "எம்.ஆர்.ஆர்.ராதாகிருஷ்ணன்",
        "Party": "காங்.",
        "votes": "77,064",
        "margin": "862",
        "vote_Rate": "39.17 %"
    },
    {
        "mla_id": "153",
        "constituency_Name": "நெய்வேலி",
        "candidate_Name": "சபா.ராஜேந்திரன்",
        "Party": "திமுக",
        "votes": "75,177",
        "margin": "977",
        "vote_Rate": "45.80 %"
    },
    {
        "mla_id": "154",
        "constituency_Name": "பண்ருட்டி",
        "candidate_Name": "வேல்முருகன்",
        "Party": "TVK",
        "votes": "93,801",
        "margin": "4,697",
        "vote_Rate": "47.60 %"
    },
    {
        "mla_id": "155",
        "constituency_Name": "கடலூர்",
        "candidate_Name": "கோ.அய்யப்பன்",
        "Party": "திமுக",
        "votes": "84,563",
        "margin": "5,151",
        "vote_Rate": "46.46 %"
    },
    {
        "mla_id": "156",
        "constituency_Name": "குறிஞ்சிப்பாடி",
        "candidate_Name": "எம்.ஆர்.கே.பண்ணீர்செல்வம்",
        "Party": "திமுக",
        "votes": "101,456",
        "margin": "17,527",
        "vote_Rate": "51.04 %"
    },
    {
        "mla_id": "157",
        "constituency_Name": "புவனகிரி",
        "candidate_Name": "அருண்மொழிதேவன்",
        "Party": "அதிமுக",
        "votes": "96,453",
        "margin": "8,259",
        "vote_Rate": "48.92 %"
    },
    {
        "mla_id": "158",
        "constituency_Name": "சிதம்பரம்",
        "candidate_Name": "கேஏ பாண்டியன்",
        "Party": "அதிமுக",
        "votes": "91,961",
        "margin": "16,937",
        "vote_Rate": "50.16 %"
    },
    {
        "mla_id": "159",
        "constituency_Name": "காட்டுமன்னார்கோவில்",
        "candidate_Name": "சிந்தனைச்செல்வன்",
        "Party": "விசிக",
        "votes": "86,056",
        "margin": "10,565",
        "vote_Rate": "49.02 %"
    },
    {
        "mla_id": "160",
        "constituency_Name": "சீர்காழி",
        "candidate_Name": "மு.பன்னீர்செல்வம்",
        "Party": "திமுக",
        "votes": "94,057",
        "margin": "12,148",
        "vote_Rate": "49.16 %"
    },
    {
        "mla_id": "161",
        "constituency_Name": "மயிலாடுதுறை",
        "candidate_Name": "ராஜகுமார்",
        "Party": "காங்.",
        "votes": "73,642",
        "margin": "2,742",
        "vote_Rate": "42.17 %"
    },
    {
        "mla_id": "162",
        "constituency_Name": "பூம்புகார்",
        "candidate_Name": "நிவேதா முருகன்",
        "Party": "திமுக",
        "votes": "96,102",
        "margin": "3,299",
        "vote_Rate": "46.24 %"
    },
    {
        "mla_id": "163",
        "constituency_Name": "நாகப்பட்டினம்",
        "candidate_Name": "ஆளூர் ஷாநவாஸ்",
        "Party": "விசிக",
        "votes": "66,281",
        "margin": "7,238",
        "vote_Rate": "46.17 %"
    },
    {
        "mla_id": "164",
        "constituency_Name": "கீழ்வேளூர்",
        "candidate_Name": "மாலி",
        "Party": "சிபிஎம் சிபிஎம்",
        "votes": "67,988",
        "margin": "16,985",
        "vote_Rate": "47.55 %"
    },
    {
        "mla_id": "165",
        "constituency_Name": "வேதாரண்யம்",
        "candidate_Name": "ஓஎஸ் மணியன்",
        "Party": "அதிமுக",
        "votes": "78,719",
        "margin": "12,329",
        "vote_Rate": "49.80 %"
    },
    {
        "mla_id": "166",
        "constituency_Name": "திருத்துறைபூண்டி",
        "candidate_Name": "மாரிமுத்து",
        "Party": "சிபிஎம்",
        "votes": "97,092",
        "margin": "30,068",
        "vote_Rate": "52.23 %"
    },
    {
        "mla_id": "167",
        "constituency_Name": "மன்னார்குடி",
        "candidate_Name": "டிஆர்பி ராஜா",
        "Party": "திமுக",
        "votes": "87,172",
        "margin": "37,393",
        "vote_Rate": "45.11 %"
    },
    {
        "mla_id": "168",
        "constituency_Name": "திருவாரூர்",
        "candidate_Name": "பூண்டி கலைவாணன்",
        "Party": "திமுக",
        "votes": "108,906",
        "margin": "51,174",
        "vote_Rate": "52.29 %"
    },
    {
        "mla_id": "169",
        "constituency_Name": "நன்னிலம்",
        "candidate_Name": "ஆர். காமராஜ்",
        "Party": "அதிமுக",
        "votes": "103,637",
        "margin": "4,424",
        "vote_Rate": "46.70 %"
    },
    {
        "mla_id": "170",
        "constituency_Name": "திருவிடைமருதூர்",
        "candidate_Name": "கோவி.செழியன்",
        "Party": "திமுக",
        "votes": "95,763",
        "margin": "10,680",
        "vote_Rate": "48.26 %"
    },
    {
        "mla_id": "171",
        "constituency_Name": "கும்பகோணம்",
        "candidate_Name": "அன்பழகன்",
        "Party": "திமுக",
        "votes": "96,057",
        "margin": "21,383",
        "vote_Rate": "48.62 %"
    },
    {
        "mla_id": "172",
        "constituency_Name": "பாபநாசம்",
        "candidate_Name": "ஜவாஹிருல்லா",
        "Party": "MMK",
        "votes": "86,567",
        "margin": "16,273",
        "vote_Rate": "43.95 %"
    },
    {
        "mla_id": "173",
        "constituency_Name": "திருவையாறு",
        "candidate_Name": "துரை சந்திரசேகரன்",
        "Party": "திமுக",
        "votes": "103,210",
        "margin": "53,650",
        "vote_Rate": "48.82 %"
    },
    {
        "mla_id": "174",
        "constituency_Name": "தஞ்சாவூர்",
        "candidate_Name": "டி.கே.ஜி.நீலமேகம்",
        "Party": "திமுக",
        "votes": "103,772",
        "margin": "47,149",
        "vote_Rate": "53.25 %"
    },
    {
        "mla_id": "175",
        "constituency_Name": "ஒரத்தநாடு",
        "candidate_Name": "வைத்திலிங்கம்",
        "Party": "அதிமுக",
        "votes": "90,063",
        "margin": "28,835",
        "vote_Rate": "46.95 %"
    },
    {
        "mla_id": "176",
        "constituency_Name": "பட்டுக்கோட்டை",
        "candidate_Name": "அண்ணாதுரை",
        "Party": "திமுக",
        "votes": "79,065",
        "margin": "25,269",
        "vote_Rate": "44.62 %"
    },
    {
        "mla_id": "177",
        "constituency_Name": "பேராவூரணி",
        "candidate_Name": "அசோக்குமார்",
        "Party": "திமுக",
        "votes": "89,130",
        "margin": "23,503",
        "vote_Rate": "52.17 %"
    },
    {
        "mla_id": "178",
        "constituency_Name": "கந்தர்வக்கோட்டை",
        "candidate_Name": "எம். சின்னதுரை",
        "Party": "சிபிஎம்",
        "votes": "69,710",
        "margin": "12,721",
        "vote_Rate": "44.23 %"
    },
    {
        "mla_id": "179",
        "constituency_Name": "விராலிமலை",
        "candidate_Name": "விஜயபாஸ்கர்",
        "Party": "அதிமுக",
        "votes": "102,179",
        "margin": "23,598",
        "vote_Rate": "52.83 %"
    },
    {
        "mla_id": "180",
        "constituency_Name": "புதுக்கோட்டை",
        "candidate_Name": "முத்துராஜா",
        "Party": "திமுக",
        "votes": "85,802",
        "margin": "13,001",
        "vote_Rate": "47.70 %"
    },
    {
        "mla_id": "181",
        "constituency_Name": "திருமயம்",
        "candidate_Name": "ரகுபதி",
        "Party": "திமுக",
        "votes": "71,349",
        "margin": "1,382",
        "vote_Rate": "41.00 %"
    },
    {
        "mla_id": "182",
        "constituency_Name": "ஆலங்குடி",
        "candidate_Name": "மெய்யநாதன்",
        "Party": "திமுக",
        "votes": "87,935",
        "margin": "25,847",
        "vote_Rate": "51.17 %"
    },
    {
        "mla_id": "183",
        "constituency_Name": "அறந்தாங்கி",
        "candidate_Name": "ராமச்சந்திரன்",
        "Party": "காங்.",
        "votes": "81,835",
        "margin": "30,893",
        "vote_Rate": "48.70 %"
    },
    {
        "mla_id": "184",
        "constituency_Name": "காரைக்குடி",
        "candidate_Name": "மான்குடி",
        "Party": "காங்.",
        "votes": "75,954",
        "margin": "21,589",
        "vote_Rate": "35.75 %"
    },
    {
        "mla_id": "185",
        "constituency_Name": "திருப்பத்தூர்",
        "candidate_Name": "கே.ஆர்.பெரியகருப்பன்",
        "Party": "திமுக",
        "votes": "103,682",
        "margin": "37,374",
        "vote_Rate": "49.19 %"
    },
    {
        "mla_id": "186",
        "constituency_Name": "சிவகங்கை",
        "candidate_Name": "செந்தில்நாதன்",
        "Party": "அதிமுக",
        "votes": "82,153",
        "margin": "11,253",
        "vote_Rate": "40.66 %"
    },
    {
        "mla_id": "187",
        "constituency_Name": "மானாமதுரை",
        "candidate_Name": "தமிழரசி",
        "Party": "திமுக",
        "votes": "89,364",
        "margin": "14,091",
        "vote_Rate": "44.01 %"
    },
    {
        "mla_id": "188",
        "constituency_Name": "மேலூர்",
        "candidate_Name": "பெரியபுள்ளான் என்ற செல்வம்",
        "Party": "அதிமுக",
        "votes": "83,344",
        "margin": "35,162",
        "vote_Rate": "45.60 %"
    },
    {
        "mla_id": "189",
        "constituency_Name": "மதுரை கிழக்கு",
        "candidate_Name": "பி.மூர்த்தி",
        "Party": "திமுக",
        "votes": "122,729",
        "margin": "49,604",
        "vote_Rate": "51.59 %"
    },
    {
        "mla_id": "190",
        "constituency_Name": "சோழவந்தான்",
        "candidate_Name": "வெங்கடேசன்",
        "Party": "திமுக",
        "votes": "84,240",
        "margin": "17,045",
        "vote_Rate": "48.04 %"
    },
    {
        "mla_id": "191",
        "constituency_Name": "மதுரை வடக்கு",
        "candidate_Name": "தளபதி",
        "Party": "திமுக",
        "votes": "73,010",
        "margin": "22,916",
        "vote_Rate": "46.64 %"
    },
    {
        "mla_id": "192",
        "constituency_Name": "மதுரை தெற்கு",
        "candidate_Name": "பூமிநாதன்",
        "Party": "மதிமுக",
        "votes": "62,812",
        "margin": "6,515",
        "vote_Rate": "42.49 %"
    },
    {
        "mla_id": "193",
        "constituency_Name": "மதுரை மத்திய தொகுதி",
        "candidate_Name": "பி.டி.ஆர்.பழனிவேல் தியாகராஜன்",
        "Party": "திமுக",
        "votes": "73,205",
        "margin": "34,176",
        "vote_Rate": "48.99 %"
    },
    {
        "mla_id": "194",
        "constituency_Name": "மதுரை மேற்கு",
        "candidate_Name": "செல்லூர் கே. ராஜூ",
        "Party": "அதிமுக",
        "votes": "83,883",
        "margin": "9,121",
        "vote_Rate": "41.59 %"
    },
    {
        "mla_id": "195",
        "constituency_Name": "திருப்பரங்குன்றம்",
        "candidate_Name": "ராஜன் செல்லப்பா",
        "Party": "அதிமுக",
        "votes": "103,683",
        "margin": "29,489",
        "vote_Rate": "43.96 %"
    },
    {
        "mla_id": "196",
        "constituency_Name": "திருமங்கலம்",
        "candidate_Name": "ஆர்.பி. உதயகுமார்",
        "Party": "அதிமுக",
        "votes": "100,338",
        "margin": "14,087",
        "vote_Rate": "45.51 %"
    },
    {
        "mla_id": "197",
        "constituency_Name": "உசிலம்பட்டி",
        "candidate_Name": "அய்யப்பன்",
        "Party": "அதிமுக",
        "votes": "71,255",
        "margin": "7,477",
        "vote_Rate": "33.53 %"
    },
    {
        "mla_id": "198",
        "constituency_Name": "ஆண்டிபட்டி",
        "candidate_Name": "மகாராஜன்",
        "Party": "திமுக",
        "votes": "93,541",
        "margin": "8,538",
        "vote_Rate": "44.64 %"
    },
    {
        "mla_id": "199",
        "constituency_Name": "பெரியகுளம்",
        "candidate_Name": "கே.எஸ்.சரவணக்குமார்",
        "Party": "திமுக",
        "votes": "92,251",
        "margin": "21,321",
        "vote_Rate": "45.71 %"
    },
    {
        "mla_id": "200",
        "constituency_Name": "போடிநாயக்கனூர்",
        "candidate_Name": "ஓ.பண்ணீர்செல்வம்",
        "Party": "அதிமுக",
        "votes": "100,050",
        "margin": "11,021",
        "vote_Rate": "46.58 %"
    },
    {
        "mla_id": "201",
        "constituency_Name": "கம்பம்",
        "candidate_Name": "கம்பம் ராமகிருஷ்ணன்",
        "Party": "திமுக",
        "votes": "104,800",
        "margin": "42,413",
        "vote_Rate": "51.81 %"
    },
    {
        "mla_id": "202",
        "constituency_Name": "ராஜபாளையம்",
        "candidate_Name": "சௌ.தங்கபாண்டியன்",
        "Party": "திமுக",
        "votes": "74,158",
        "margin": "3,898",
        "vote_Rate": "41.50 %"
    },
    {
        "mla_id": "203",
        "constituency_Name": "ஸ்ரீ வில்லிபுத்தூர்",
        "candidate_Name": "மான்ராஜ்",
        "Party": "அதிமுக",
        "votes": "70,475",
        "margin": "12,738",
        "vote_Rate": "38.09 %"
    },
    {
        "mla_id": "204",
        "constituency_Name": "சாத்தூர்",
        "candidate_Name": "ரகுராமன்",
        "Party": "மதிமுக",
        "votes": "74,174",
        "margin": "11,179",
        "vote_Rate": "38.68 %"
    },
    {
        "mla_id": "205",
        "constituency_Name": "சிவகாசி",
        "candidate_Name": "அசோகன்",
        "Party": "காங்.",
        "votes": "78,947",
        "margin": "17,319",
        "vote_Rate": "42.66 %"
    },
    {
        "mla_id": "206",
        "constituency_Name": "விருதுநகர்",
        "candidate_Name": "ஏஆர்ஆர் சீனிவாசன்",
        "Party": "திமுக",
        "votes": "73,297",
        "margin": "21,339",
        "vote_Rate": "45.32 %"
    },
    {
        "mla_id": "207",
        "constituency_Name": "அருப்புக்கோட்டை",
        "candidate_Name": "எஸ்.எஸ் .ஆர் ராமச்சந்திரன்",
        "Party": "திமுக",
        "votes": "91,040",
        "margin": "39,034",
        "vote_Rate": "53.18 %"
    },
    {
        "mla_id": "208",
        "constituency_Name": "திருச்சுழி",
        "candidate_Name": "தங்கம் தென்னரசு",
        "Party": "திமுக",
        "votes": "102,225",
        "margin": "60,992",
        "vote_Rate": "59.15 %"
    },
    {
        "mla_id": "209",
        "constituency_Name": "பரமக்குடி",
        "candidate_Name": "முருகேசன்",
        "Party": "திமுக",
        "votes": "84,864",
        "margin": "13,285",
        "vote_Rate": "46.59 %"
    },
    {
        "mla_id": "210",
        "constituency_Name": "திருவாடானை",
        "candidate_Name": "கருமாணிக்கம்",
        "Party": "காங்.",
        "votes": "79,364",
        "margin": "13,852",
        "vote_Rate": "39.33 %"
    },
    {
        "mla_id": "211",
        "constituency_Name": "ராமநாதபுரம்",
        "candidate_Name": "காதர் பாட்ஷா எ முத்துராமலிங்கம்",
        "Party": "திமுக",
        "votes": "111,082",
        "margin": "50,479",
        "vote_Rate": "51.88 %"
    },
    {
        "mla_id": "212",
        "constituency_Name": "முதுகுளத்தூர்",
        "candidate_Name": "ராஜ கண்ணப்பன்",
        "Party": "திமுக",
        "votes": "101,901",
        "margin": "20,721",
        "vote_Rate": "46.06 %"
    },
    {
        "mla_id": "213",
        "constituency_Name": "விளாத்திக்குளம்",
        "candidate_Name": "மார்க்கண்டேயன்",
        "Party": "திமுக",
        "votes": "90,348",
        "margin": "38,549",
        "vote_Rate": "54.05 %"
    },
    {
        "mla_id": "214",
        "constituency_Name": "தூத்துக்குடி",
        "candidate_Name": "கீதா ஜீவன்",
        "Party": "திமுக",
        "votes": "92,314",
        "margin": "50,310",
        "vote_Rate": "49.00 %"
    },
    {
        "mla_id": "215",
        "constituency_Name": "திருச்செந்தூர்",
        "candidate_Name": "அனிதா ராதாகிருஷ்ணன்",
        "Party": "திமுக",
        "votes": "88,274",
        "margin": "25,263",
        "vote_Rate": "50.58 %"
    },
    {
        "mla_id": "216",
        "constituency_Name": "ஸ்ரீவைகுண்டம்",
        "candidate_Name": "ஊர்வசி அமிர்தராஜ்",
        "Party": "காங்.",
        "votes": "76,843",
        "margin": "17,372",
        "vote_Rate": "46.75 %"
    },
    {
        "mla_id": "217",
        "constituency_Name": "ஒட்டப்பிடாரம்",
        "candidate_Name": "சண்முகையா",
        "Party": "திமுக",
        "votes": "73,110",
        "margin": "8,510",
        "vote_Rate": "41.11 %"
    },
    {
        "mla_id": "218",
        "constituency_Name": "கோவில்பட்டி",
        "candidate_Name": "கடம்பூர் ராஜூ",
        "Party": "அதிமுக",
        "votes": "68,556",
        "margin": "12,403",
        "vote_Rate": "37.89 %"
    },
    {
        "mla_id": "219",
        "constituency_Name": "சங்கரன்கோவில்",
        "candidate_Name": "இ.ராஜா",
        "Party": "திமுக",
        "votes": "71,347",
        "margin": "5,297",
        "vote_Rate": "38.92 %"
    },
    {
        "mla_id": "220",
        "constituency_Name": "வாசுதேவநல்லூர்",
        "candidate_Name": "சதன்திருமலைக்குமார்",
        "Party": "மதிமுக",
        "votes": "68,730",
        "margin": "2,367",
        "vote_Rate": "39.08 %"
    },
    {
        "mla_id": "221",
        "constituency_Name": "கடையநல்லூர்",
        "candidate_Name": "கிருஷ்ணமுரளி",
        "Party": "அதிமுக",
        "votes": "88,474",
        "margin": "24,349",
        "vote_Rate": "43.08 %"
    },
    {
        "mla_id": "222",
        "constituency_Name": "தென்காசி",
        "candidate_Name": "பழனி நாடார்",
        "Party": "காங்.",
        "votes": "89,315",
        "margin": "370",
        "vote_Rate": "41.71 %"
    },
    {
        "mla_id": "223",
        "constituency_Name": "ஆலங்குளம்",
        "candidate_Name": "மனோஜ் பாண்டியன்",
        "Party": "அதிமுக",
        "votes": "74,153",
        "margin": "3,539",
        "vote_Rate": "36.44 %"
    },
    {
        "mla_id": "224",
        "constituency_Name": "திருநெல்வேலி",
        "candidate_Name": "நயினார் நாகேந்திரன்",
        "Party": "பாஜக",
        "votes": "92,282",
        "margin": "23,107",
        "vote_Rate": "46.70 %"
    },
    {
        "mla_id": "225",
        "constituency_Name": "அம்பாசமுத்திரம்",
        "candidate_Name": "இசக்கி சுப்பையா",
        "Party": "அதிமுக",
        "votes": "85,211",
        "margin": "16,915",
        "vote_Rate": "47.96 %"
    },
    {
        "mla_id": "226",
        "constituency_Name": "பாளையம்கோட்டை",
        "candidate_Name": "அப்துல் வஹாப்",
        "Party": "திமுக",
        "votes": "89,117",
        "margin": "52,141",
        "vote_Rate": "55.32 %"
    },
    {
        "mla_id": "227",
        "constituency_Name": "நாங்குநேரி",
        "candidate_Name": "ரூபி மனோகரன்",
        "Party": "காங்.",
        "votes": "75,902",
        "margin": "16,486",
        "vote_Rate": "39.43 %"
    },
    {
        "mla_id": "228",
        "constituency_Name": "ராதாபுரம்",
        "candidate_Name": "மு. அப்பாவு",
        "Party": "திமுக",
        "votes": "82,331",
        "margin": "5,925",
        "vote_Rate": "43.95 %"
    },
    {
        "mla_id": "229",
        "constituency_Name": "கன்னியாகுமரி",
        "candidate_Name": "தளவாய் சுந்தரம்",
        "Party": "அதிமுக",
        "votes": "109,745",
        "margin": "16,213",
        "vote_Rate": "48.80 %"
    },
    {
        "mla_id": "230",
        "constituency_Name": "நாகர்கோவில்",
        "candidate_Name": "எம்.ஆர். காந்தி",
        "Party": "பாஜக",
        "votes": "88,804",
        "margin": "11,669",
        "vote_Rate": "48.21 %"
    },
    {
        "mla_id": "231",
        "constituency_Name": "குளச்சல்",
        "candidate_Name": "பிரின்ஸ்",
        "Party": "காங்.",
        "votes": "90,681",
        "margin": "24,832",
        "vote_Rate": "49.56 %"
    },
    {
        "mla_id": "232",
        "constituency_Name": "பத்மநாபபுரம்",
        "candidate_Name": "மனோ தங்கராஜ்",
        "Party": "திமுக",
        "votes": "87,744",
        "margin": "26,885",
        "vote_Rate": "51.57 %"
    },
    {
        "mla_id": "233",
        "constituency_Name": "விளவங்கோடு",
        "candidate_Name": "விஜயதாரணி",
        "Party": "காங்.",
        "votes": "87,473",
        "margin": "28,669",
        "vote_Rate": "52.12 %"
    },
    {
        "mla_id": "234",
        "constituency_Name": "கிள்ளியூர்",
        "candidate_Name": "ராஜேஷ்குமார்",
        "Party": "காங்",
        "votes": "101,541",
        "margin": "55,400",
        "vote_Rate": "59.76 %"
    }
]

localStorage.setItem("mla_ditails", JSON.stringify(mla_values));