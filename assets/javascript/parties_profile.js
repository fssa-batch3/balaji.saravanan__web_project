const name_list = [
  {
    name: "திராவிட முன்னேற்றக் கழகம்",
    image: {
      source: "../../assets/images/flages/dmk-logo.png",
      alter: "dmk image",
    },
  },
  {
    name: "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம்",
    image: {
      source: "../../assets/images/flages/aiadmk.png",
      alter: "aiadmk image",
    },
  },
  {
    name: "இந்திய தேசிய காங்கிரசு",
    image: {
      source: "../../assets/images/flages/inc.png",
      alter: "inc image",
    },
  },
  {
    name: "நாம் தமிழர் கட்சி",

    image: {
      source: "../../assets/images/flages/naam-tamizhar.jpg",
      alter: "naam thamizhar katchi image",
    },
  },
];
// const name_list_english = [

//     {

//         "name": "Dravida Munnetra Kazhagam",
//         "image": {
//             "source": "../../assets/images/flages/dmk-logo.png",
//             "alter": "dmk image"
//         }
//     },
//     {
//         "name": "All India Anna Dravida Munnetra Kazhagam",
//         "image":
//         {
//             "source": "../../assets/images/flages/aiadmk.png",
//             "alter": "aiadmk image"
//         }
//     },
//     {

//         "name": " Indian National Congress",
//         "image":
//         {
//             "source": "../../assets/images/flages/inc.png",
//             "alter": "inc image"
//         }
//     },
//     {

//         "name": "name:Naam Tamilar Katchi",
//         "image":
//         {
//             "source": "../../assets/images/flages/naam-tamizhar.jpg",
//             "alter": "naam thamizhar katchi image"
//         }
//     }
// ]
let parties_main_div;

let parties2;

let fontside_div;

let backround;

let title2;

let para2;

let backside_div;

let para_backside;

let img_backside;

let button;

let anchor;

for (let i = 0; i < name_list.length; i++) {
  // parties_main_div
  parties_main_div = document.createElement("div");
  parties_main_div.setAttribute("class", "parties-main");

  // parties2_div
  parties2 = document.createElement("div");
  parties2.setAttribute("class", "parties2");
  parties_main_div.append(parties2);

  // fontside_div
  fontside_div = document.createElement("div");
  fontside_div.setAttribute("class", "fontside");
  parties2.append(fontside_div);

  // backround

  backround = document.createElement("img");
  backround.setAttribute("src", name_list[i].image.source);
  backround.setAttribute("alt", name_list[i].image.alter);
  fontside_div.append(backround);

  // //title1
  // title1 =document.createElement("p");
  // title1.innerText= "Name :";
  // fontside_div.append(title1);

  // //para1
  // para1 = document.createElement("p");
  // para1.innerText =name_list[i]["name1"];
  // fontside_div.append(para1);

  // title2
  title2 = document.createElement("p");
  title2.setAttribute("class", "para");
  title2.innerText = "கட்சி பெயர் :";
  fontside_div.append(title2);

  // para2
  para2 = document.createElement("p");
  para2.innerText = name_list[i].name;
  fontside_div.append(para2);

  // backside_div
  backside_div = document.createElement("div");
  backside_div.setAttribute("class", "backside");
  parties2.append(backside_div);

  // para_backside
  para_backside = document.createElement("p");
  para_backside.innerText = name_list[i].name;
  backside_div.append(para_backside);

  // img_backside
  img_backside = document.createElement("img");
  img_backside.setAttribute("src", name_list[i].image.source);
  img_backside.setAttribute("alt", name_list[i].image.alter);
  backside_div.append(img_backside);

  // button

  button = document.createElement("button");
  backside_div.append(button);

  // anchor
  anchor = document.createElement("a");
  anchor.setAttribute("href", `./portfolio.html?name=${name_list[i].name}`);
  anchor.innerText = "சுயவிவரங்கள்";
  button.append(anchor);

  if (i > 0 && i <= 3) {
    parties_main_div.style.filter = "blur(3px)";
  }

  document.querySelector("div.totalparties").append(parties_main_div);
}
