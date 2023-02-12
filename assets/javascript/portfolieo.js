
let list1_div;

let image;

let para1;

let para2;

let para3;

let button;

let anchor;


//list1_div
list1_div = document.createElement("div");
list1_div.setAttribute("class", "list1");

//image

image = document.createElement("img")
image.setAttribute("src", "../../assets/images/ministers/mk stalin.png");
image.setAttribute("alt", "m k stalin image");
list1_div.append(image);

//para1

para1 = document.createElement("p");
para1.innerText = "மு. க. ஸ்டாலின்";
list1_div.append(para1);

//para2

para2 = document.createElement("p");
para2.innerText = "M. K. Stalin";
list1_div.append(para2);

//para3

para3 = document.createElement("p");
para3.innerText = "பதவி: முதலமைச்சர்";
list1_div.append(para3);

//button

button = document.createElement("button");
list1_div.append(button);

//anchor

anchor = document.createElement("a");
anchor.setAttribute("class", "text-decoration-none text-dark");
anchor.setAttribute("href", "./profile/profile.html");
anchor.innerText = "view profile";
button.append(anchor);


document.querySelector("div.lists").append(list1_div);

const minister_name = [

    {
        "img": {
            "sourse": "../../assets/images/ministers/udhayanithi.jpg",
            "alter": "udhayanithi stalin"
        },
        "tname": "உதயநிதி ஸ்டாலின்",
        "ename": "Udhayanidhi Stalin",
        "position": "விளையாட்டுத்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/duraimurugan.jpg",
            "alter": "DURAIMURUGAN"
        },
        "tname": "துரைமுருகன்",
        "ename": "Durai Murugan",
        "position": "பொதுச்செயலாளர்"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/kn neru.jpg",
            "alter": "KN NERU IMAGE"
        },
        "tname": "கே. என். நேரு",
        "ename": "K. N. Nehru",
        "position": "நகர்ப்புற வளர்ச்சித்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/periyasami.jpg",
            "alter": "PERIYASAMI IMAGE"
        },
        "tname": "ஐ. பெரியசாமி ",
        "ename": "I. Periyasamy",
        "position": "கூட்டுறவுத்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/ponkmudi.jpg",
            "alter": "PONMUDI IMAGE"
        },
        "tname": "க. பொன்முடி",
        "ename": "K. Ponmudy",
        "position": "உயர் கல்வி "
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/velu.jpg",
            "alter": "udhayanithi stalin"
        },
        "tname": "எ. வ. வேலு",
        "ename": "E. V. Velu",
        "position": "உணவுத் துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/pannerselvam.jpg",
            "alter": "udhayanithi stalin"
        },
        "tname": "ஆர். கே. பன்னீர்செல்வம்",
        "ename": "M. R. K. Panneerselvam",
        "position": "சமூக நலத்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/tanarasu.jpg",
            "alter": "thangam thennarasu"
        },
        "tname": "தங்கம் தென்னரசு",
        "ename": "Thangam Thennarasu",
        "position": "தொல்லியல்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/ranachanran.jpg",
            "alter": "ramachandiran"
        },
        "tname": "ஆர்.ராமச்சந்திரன்",
        "ename": "Ramachandran",
        "position": "தமிழக வருவாய் துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/regubathy.jpg",
            "alter": "ragupahty"
        },
        "tname": "எஸ். ரகுபதி",
        "ename": "S. Regupathy",
        "posoiton": "சட்டத்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/muthusamy.jpg",
            "alter": "muthusaami"
        },
        "tname": "சு. முத்துசாமி",
        "ename": "S. Muthusamy",
        "position": "வீட்டு வசதித்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/periyakaruppan.jpg",
            "alter": "periyasami"
        },
        "tname": "கே. ஆர். பெரியகருப்பன்",
        "ename": "K.R.Periyakaruppan",
        "position": "ஊரகவளர்ச்சி"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/anbarasan.jpg",
            "alter": "anbarasan"
        },
        "tname": "தா. மோ. அன்பரசன்",
        "ename": "T. M. Anbarasan",
        "position": "ஊரக தொழிற்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/saminathan.jpg",
            "alter": "saaminathan"
        },
        "tname": "மு. பெ. சாமிநாதன்",
        "ename": "M. P. Saminathan",
        "position": "பதவி: செய்தித்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/geeth.jpg",
            "alter": "keetha jeevan"
        },
        "tname": "பெ. கீதா ஜீவன்",
        "ename": "Geetha Jeevan",
        "position": "மகளிர் உரிமைத்துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/anith.jpg",
            "alter": "anitharadhakirishanan"
        },
        "tname": "அனிதா ராதாகிருஷ்ணன்",
        "rname": "Anitha R. Radhakrishnan",
        "position": "கால்நடை பராமரிப்பு"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/sivakumar.jpg",
            "alter": "sivakumar"
        },
        "tname": "S .சிவகுமார்",
        "ename1": "S S. Sivakumar",
        "position": "போக்குவரத்து"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/ramachandran.jpg",
            "alter": "ramachanran"
        },
        "tname": "K.இராமச்சந்திரன்",
        "ename": "K. Ramachandran",
        "position": "வனவிலங்கு"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/sakkaraporni.jpg",
            "alter": "sakrabaani"
        },
        "tname": "அர. சக்கரபாணி",
        "ename": "R. Sakkarapani",
        "position": "உணவுத் துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/sendil balji.jpg",
            "alter": "sendhilbalaji"
        },
        "tname": "வே. செந்தில்பாலாஜி",
        "ename": "V. Senthilbalaji",
        "position": "மின்சாரம்"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/rs ganthi.jpg",
            "alter": "rs gandhi"
        },
        "tname": "ஆர். காந்தி",
        "ename": "R. Gandhi",
        "position": "கைத்தறி"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/subramani.jpg",
            "alter": "subramaniyan"
        },
        "tname": "மா. சுப்பிரமணியம்",
        "ename": "M. Subramaniam",
        "position": "மக்கள் நல்வாழ்வு"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/mirthi.jpg",
            "alter": "moorhty p image"
        },
        "tname": "பி. மூர்த்தி",
        "ename": "Moorthy P",
        "position": "வணிகவரி"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/rajakannapan.jpg",
            "alter": "udhayanithi stalin"
        },
        "tname": "இராஜ கண்ணப்பன்",
        "ename": "R. S. Raja Kannappan",
        "position": "பிற்படுத்தப்பட்டோர்"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/segar babu.jpg",
            "alter": "segar babu"
        },
        "tname": "பி. கே. சேகர் பாபு",
        "ename": "P. K. Sekar Babu",
        "position": "அறநிலையத் துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/palanivel.jpg",
            "alter": "palanivel thigarajan"
        },
        "tname": "பழனிவேல் தியாகராஜன்",
        "ename": "Palanivel Thiagarajan",
        "position": "நிதித்துறை அமைச்சர்"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/nasar.jpg",
            "alter": "s m nasar"
        },
        "tname": "சா. மு. நாசர்",
        "ename": " S. M. Nasar",
        "position": "பால் பண்ணை வளர்ச்சி"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/magesh.jpg",
            "alter": "Anbil Mahesh Poyyamozhi"
        },
        "tname": "அன்பில் மகேஷ்",
        "ename": "Anbil Mahesh Poyyamozhi",
        "position": "பள்ளிக் கல்வித் துறை"
    },
    {
        "img": {
            "sourse": "../../assets/images/ministers/mano.jpg",
            "alter": "mano thangaraj"
        },
        "tname": "மனோ தங்கராஜ்",
        "ename": "T. Mano Thangaraj",
        "position": "தொழில்நுட்பத்துறை"
    },
]



let card_div;

let imgBx_div;

let image5;

let contentBx;

let title;

let size_div;

let namee;

let position;

let role_name;

let anchor5;
for (const minister of minister_name) {

    //card_div
    card_div = document.createElement("div");
    card_div.setAttribute("class", "card");

    //imgBx_div

    imgBx_div = document.createElement("div");
    imgBx_div.setAttribute("class", "imgBx");
    card_div.append(imgBx_div);

    //image
    image5 = document.createElement("img");
    image5.setAttribute("src", minister["img"]["sourse"]);
    image5.setAttribute("alt", minister["img"]["alter"]);
    imgBx_div.append(image5);

    //contentBx
    contentBx = document.createElement("div");
    contentBx.setAttribute("class", "contentBx");
    card_div.append(contentBx);

    //title
    title = document.createElement("p");
    title.innerText = "பெயர் : " + minister["tname"];
    contentBx.append(title);

    //size_div
    size_div = document.createElement("div");
    size_div.setAttribute("class", "size");
    contentBx.append(size_div);

    //name
    namee = document.createElement("h3");
    namee.innerText = "NAME : " + minister["ename"];
    size_div.append(namee);

    //position
    position = document.createElement("div");
    position.setAttribute("class", "color");
    contentBx.append(position);

    //role_name
    role_name = document.createElement("h3");
    role_name.innerText = "பதவி : " + minister["position"];
    position.append(role_name);


    //anchor
    anchor5 = document.createElement("a");
    anchor5.setAttribute("href", "../portfolio/profile/profile.html?name=" + minister["ename"]);
    anchor5.innerText = "vief port folio"
    contentBx.append(anchor5);

    document.querySelector("div.lists1").append(card_div)
}