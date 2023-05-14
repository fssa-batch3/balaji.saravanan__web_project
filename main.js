const root = window.location.origin;

const logged_email = localStorage.getItem("profile_email");

const header = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
<div class="container-fluid">
    <a class="navbar-brand text-danger" href="${root}/index.html">POLITIFACT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active list_li" aria-current="page" href="${root}/index.html" id="option_one">முகப்பு</a>
            </li>

            <li class="nav-item">
                <a class="nav-link list_li" href="${root}/pages/portfolio/parties-profile.html" id="option_two">விவரம்</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle list_li" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false" id="main_menu">
                    அறிக்கைகள்
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-dark list_li" href="${root}/pages/manifesto/total_manifest.html">மாவட்ட வாரியாக அறிக்கை</a></li> 

                    <li><a class="dropdown-item text-dark list_li" href="${root}/pages/manifesto/complte.html" id="option_three_sub_one">நிறைவு</a></li>

                    <li><a class="dropdown-item text-dark list_li" href="${root}/pages/manifesto/bending.html" id="option_three_sub_two">நிலுவை</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link list_li" href="${root}/pages/past leaders/past leaders.html" id="option_four">தலைவர்கள்</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle list_li" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false" id="five_option">
                    மேலும்
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-dark list_li" href="${root}/pages/more/Governer list.html" id="option_five_sub_one">ஆளுநர்கள்</a></li>
                    <li><a class="dropdown-item text-dark list_li" href="${root}/pages/more/mla.html" id="option_five_sub_two">பிரதிநிதிகள்</a></li>
                </ul>
            </li>
            <li class="nav-item " id="admin">
                <a class="nav-link list_li" href="${root}/admin/admin_dashboard.html">Admin</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li> -->
        </ul>


        <ul class="nav navbar-nav">
            <li>
                   <form class="navbar-form">
                       <div class="input-group">

                       <input type="search" class="form-control" id="searchbar" placeholder="தேடுக" aria-label="Search"
                       aria-describedby="basic-addon1">
                    <div class="input-group-prepend">
                       <span class="input-group-text" id="basic-addon1"><i class="fa fa-microphone p-1"
                               id="search-icon"></i></span>
                           </div>
                         </div>

                   </form>
            </li>
        </ul>



        <ul class="navbar-nav ms-auto">


        <li class="nav-item" id="like_list">
            <a class="nav-link" href="${root}/pages/like_list.html"><span class="glyphicon glyphicon-user"></span><i class="fa fa-heart"></i></a>
        </li>

        
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle list_li" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                
                   மொழி
                    </a>
                   <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                         <li><a class="dropdown-item text-dark lang-tamil multi_lang list_li" href="#" id="lang_ta">தமிழ்</a></li>
                         <li><button class="dropdown-item text-dark lang-english multi_lang list_li" id="lang_eng">ஆங்கிலம்</button></li>
                     </ul>
             </li>

            <li class="nav-item" id="my-account">
                <a class="nav-link list_li" href="${root}/pages/your opinion/profilepage.html"><span class="glyphicon glyphicon-user">சுயவிவரம்</span></a>
            </li>
            


            <li class="nav-item dropdown" id="option_six">
                <a class="nav-link dropdown-toggle list_li" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    உள்நுழைக
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-dark list_li" href="${root}/pages/register.html">பதிவு செய்யவும்</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</nav>`;

const footer = `<footer class="footer-section sticky-buttom">
    <div class="container">
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="${root}/index.html" class="list_li">அரசியல்</a>
                        </div>
                        <div class="footer-text">
                            <p class="list_li">
                                வலி மிகவும் முக்கியமானது, நோயாளியின் வலிப்புத்தாக்கத்தின் விளைவு, ஆனால் அது உழைப்பு
                                மற்றும் வலியை
                                ஏற்படுத்தும் ஒரு நேரத்தில் அதைச் செய்யட்டும்.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3 class="list_li">பயனுள்ள இணைப்புகள்</h3>
                        </div>
                        <ul>
                            <li><a href="${root}/index.html" class="list_li">முகப்பு</a></li>
                            <li><a href="${root}/pages/portfolio/parties-profile.html" class="list_li">விவரம்</a></li>
                            <li><a href="${root}/pages/manifesto/total_manifest.html" class="list_li">மாவட்ட வாரியாக அறிக்கை</a></li>
                            <li><a href="${root}/pages/more/mla.html" class="list_li">பிரதிநிதிகள் பற்றி</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3 class="list_li">பதிவு</h3>
                        </div>
                        <div class="footer-text mb-25">
                            <p class="list_li">எங்கள் புதிய ஊட்டங்களுக்கு குழுசேர தவறாதீர்கள், தயவுசெய்து கீழே உள்ள படிவத்தை
                                நிரப்பவும்.</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="https://getform.io/f/3d923c91-e39d-40b0-8763-2d3ec5996787" method="POST">
                                <input class="m-3" id="email_id" type="text" placeholder="மின்னஞ்சல் முகவரி">
                                <input type="text" id="message" class="m-3" placeholder="message" name="message" required />

                                <button type="submit"><i class="fa fa-send-o"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>`;

if (logged_email !== null) {
  document.body.insertAdjacentHTML("afterbegin", header);

  document.body.insertAdjacentHTML("afterend", footer);

  document.getElementById("option_six").style.display = "none";

  document.getElementById("admin").style.display = "none";
} else {
  document.body.insertAdjacentHTML("afterbegin", header);

  document.body.insertAdjacentHTML("afterend", footer);

  document.getElementById("my-account").style.display = "none";

  document.getElementById("admin").style.display = "none";

  // window.location.href = `${root}/pages/home/register.html`;
}

const admin_login = localStorage.getItem("admin_login");

if (admin_login) {
  document.getElementById("my-account").style.display = "none";

  document.getElementById("admin").style.display = "block";

  document.getElementById("option_six").style.display = "none";
}

if (JSON.parse(localStorage.getItem("mla_details_tamil"))) {
  console.log("continue");
} else {
  localStorage.setItem(
    "mla_details_tamil",
    JSON.stringify([
      {
        mla_id: "1",
        affidate:
          "https://drive.google.com/file/d/17FWeusd9R6-t-Y6anPBXi8DkkZ9kjU2I/preview",
        constituency_Name: "கும்மிடிப்பூண்டி",
        candidate_Name: "டி ஜெ கோவிந்தராசன்",
        Party: "திமுக",
        votes: "126,452",
        margin: "50,938",
        vote_Rate: "56.94 %",
      },
      {
        mla_id: "2",
        affidate:
          "https://drive.google.com/file/d/1DLdoY0vcdyGX8J1XvrzYHpCxJ4rSNugu/preview",
        constituency_Name: "பொன்னேரி",
        candidate_Name: "துரை சந்திரசேகர்",
        Party: "காங்.",
        votes: "94,528",
        margin: "9,689",
        vote_Rate: "44.94 %",
      },
      {
        mla_id: "3",
        affidate:
          "https://drive.google.com/file/d/1jumpVxraKv3TpBmkZCoL0BdMejSA0uiA/preview",
        constituency_Name: "திருத்தணி",
        candidate_Name: "எஸ்.சந்திரன்",
        Party: "திமுக",
        votes: "120,314",
        margin: "29,253",
        vote_Rate: "51.72 %",
      },
      {
        mla_id: "4",
        affidate:
          "https://drive.google.com/file/d/1uDvySZ1qIEfWWjbF4HwptxTIeFKBizHx/preview",
        constituency_Name: "திருவள்ளூர்",
        candidate_Name: "வி.ஜி.ராஜேந்திரன்",
        Party: "திமுக",
        votes: "107,709",
        margin: "22,701",
        vote_Rate: "50.27 %",
      },
      {
        mla_id: "5",
        affidate:
          "https://drive.google.com/file/d/1ylTerUsisvPb7sxJuRWbL0En-WnWndp6/preview",
        constituency_Name: "பூந்தமல்லி",
        candidate_Name: "ஆ.கிருஷ்ணசாமி",
        Party: "திமுக",
        votes: "149,578",
        margin: "94,110",
        vote_Rate: "56.72 %",
      },
      {
        mla_id: "6",
        affidate:
          "https://drive.google.com/file/d/1FCXBkq4Qn5Me_HpBPF1Ka1fjW5_PNy55/preview",
        constituency_Name: "ஆவடி",
        candidate_Name: "சா.மு.நாசர்",
        Party: "திமுக",
        votes: "150,287",
        margin: "55,275",
        vote_Rate: "49.94 %",
      },
      {
        mla_id: "7",
        affidate:
          "https://drive.google.com/file/d/1nvsa8pgwQfji3XiI400a7Lp8KCyZ4uy6/preview",
        constituency_Name: "மதுரவாயல்",
        candidate_Name: "காரப்பாக்கம் கணபதி",
        Party: "திமுக",
        votes: "121,298",
        margin: "31,721",
        vote_Rate: "44.29 %",
      },
      {
        mla_id: "8",
        affidate:
          "https://drive.google.com/file/d/1qgXAJXDgqIvvGCRqh0ebHbqaomw_PzZk/preview",
        constituency_Name: "அம்பத்தூர்",
        candidate_Name: "ஜோசப் சாமுவேல்",
        Party: "திமுக",
        votes: "114,554",
        margin: "42,146",
        vote_Rate: "47.67 %",
      },
      {
        mla_id: "9",
        affidate:
          "https://drive.google.com/file/d/1MF6HRdkhvUiY2zw_cZDRXhR-i3syH9As/preview",
        constituency_Name: "மாதவரம்",
        candidate_Name: "சுதர்சனம்",
        Party: "திமுக",
        votes: "151,485",
        margin: "57,071",
        vote_Rate: "50.04 %",
      },
      {
        mla_id: "10",
        affidate:
          "https://drive.google.com/file/d/1UxumRJ8KkvqN7OAbgTw7daWU_nYFtsWD/preview",
        constituency_Name: "திருவொற்றியூர்",
        candidate_Name: "சங்கர்",
        Party: "திமுக",
        votes: "88,185",
        margin: "37,661",
        vote_Rate: "44.09 %",
      },
      {
        mla_id: "11",
        affidate:
          "https://drive.google.com/file/d/17LZTMIhArEdAV5JvBt5-Te7ypfWYVA9o/preview",
        constituency_Name: "ஆர்.கே நகர்",
        candidate_Name: "ஜே.ஜே.எபிநேசர்",
        Party: "திமுக",
        votes: "95,763",
        margin: "42,479",
        vote_Rate: "51.20 %",
      },
      {
        mla_id: "12",
        affidate:
          "https://drive.google.com/file/d/1GWqKepIPeyO2zZ9kXP9uCrnB5hWK9wwp/preview",
        constituency_Name: "பெரம்பூர்",
        candidate_Name: "ஆர்.டி.சேகர்",
        Party: "திமுக",
        votes: "105,267",
        margin: "54,976",
        vote_Rate: "52.53 %",
      },
      {
        mla_id: "13",
        affidate:
          "https://drive.google.com/file/d/1CizE-ZahGikKp6f4bSTJRgv0Y6bT9iYR/preview",
        constituency_Name: "கொளத்தூர்",
        candidate_Name: "M.K.ஸ்டாலின்",
        Party: "திமுக",
        votes: "105,522",
        margin: "70,384",
        vote_Rate: "60.86 %",
      },
      {
        mla_id: "14",
        affidate:
          "https://drive.google.com/file/d/1gnyznxvDQsaB-nuQMs5QFPTwwvfVC_J2/preview",
        constituency_Name: "வில்லிவாக்கம்",
        candidate_Name: "வெற்றியழகன்",
        Party: "திமுக",
        votes: "76,127",
        margin: "37,237",
        vote_Rate: "52.83 %",
      },
      {
        mla_id: "15",
        affidate:
          "https://drive.google.com/file/d/1D6Sw1IE-kDBMV3kPETdabphobldkQb-b/preview",
        constituency_Name: "திரு.வி.க.நகர்",
        candidate_Name: "தாயகம் கவி",
        Party: "திமுக",
        votes: "81,727",
        margin: "55,013",
        vote_Rate: "61.13 %",
      },
      {
        mla_id: "16",
        affidate:
          "https://drive.google.com/file/d/12TRCTVbT0pBKR8JnZOvoYKFh89VLUL2I/preview",
        constituency_Name: "எழும்பூர்",
        candidate_Name: "பரந்தாமன்",
        Party: "திமுக",
        votes: "68,832",
        margin: "38,768",
        vote_Rate: "57.71 %",
      },
      {
        mla_id: "17",
        affidate:
          "https://drive.google.com/file/d/1J-Og_M_gqU6dr-hEepZx8mclFbsy-Tgp/preview",
        constituency_Name: "ராயபுரம்",
        candidate_Name: "ஐட்ரீம் இரா.மூர்த்தி",
        Party: "திமுக",
        votes: "64,424",
        margin: "27,779",
        vote_Rate: "53.16 %",
      },
      {
        mla_id: "18",
        affidate:
          "https://drive.google.com/file/d/1csKgICCaWwRcd2HnU0pOBuKOD9Ewm0r0/preview",
        constituency_Name: "துறைமுகம்",
        candidate_Name: "சேகர்பாபு",
        Party: "திமுக",
        votes: "59,317",
        margin: "27,274",
        vote_Rate: "58.35 %",
      },
      {
        mla_id: "19",
        affidate:
          "https://drive.google.com/file/d/1b4cpKxofjnMk-IM4LCUp_v7sE3975eae/preview",
        constituency_Name: "சேப்பாக்கம் திருவல்லிக்கேணி",
        candidate_Name: "உதயநிதி ஸ்டாலின்",
        Party: "திமுக",
        votes: "93,285",
        margin: "69,355",
        vote_Rate: "67.89 %",
      },
      {
        mla_id: "20",
        affidate:
          "https://drive.google.com/file/d/11EN4MQuv9db-zDd7VFAjkuMINxhW2D3h/preview",
        constituency_Name: "ஆயிரம் விளக்கு",
        candidate_Name: "Dr.எழிலன்",
        Party: "திமுக",
        votes: "71,437",
        margin: "32,200",
        vote_Rate: "52.81 %",
      },
      {
        mla_id: "21",
        affidate:
          "https://drive.google.com/file/d/1i1rdt1F7aXqNy8t4P9dMZ1oEhtd3csLn/preview",
        constituency_Name: "அண்ணா நகர்",
        candidate_Name: "எம்.கே.மோகன்",
        Party: "திமுக",
        votes: "80,054",
        margin: "27,445",
        vote_Rate: "48.49 %",
      },
      {
        mla_id: "22",
        affidate:
          "https://drive.google.com/file/d/1ucf8d3BhIXLm0bjjsgVUlUsilvhO146w/preview",
        constituency_Name: "விருகம்பாக்கம்",
        candidate_Name: "ஏ.எம்.வி.பிரபாகர் ராஜா",
        Party: "திமுக",
        votes: "74,351",
        margin: "18,367",
        vote_Rate: "43.97 %",
      },
      {
        mla_id: "23",
        affidate:
          "https://drive.google.com/file/d/1nuFpqFxQkQOEfQFxLDOcElqgiKhmH0CQ/preview",
        constituency_Name: "சைதாப்பேட்டை",
        candidate_Name: "ம.சுப்ரமணியம்",
        Party: "திமுக",
        votes: "80,194",
        margin: "29,408",
        vote_Rate: "50.02 %",
      },
      {
        mla_id: "24",
        affidate:
          "https://drive.google.com/file/d/1KOuckZcdJpnH67tSHeafU-LYxwk2O42F/preview",
        constituency_Name: "தியாகராய நகர்",
        candidate_Name: "ஜெ.கருணாநிதி",
        Party: "திமுக",
        votes: "56,035",
        margin: "137",
        vote_Rate: "40.57 %",
      },
      {
        mla_id: "25",
        affidate:
          "https://drive.google.com/file/d/1f12ki_Yg9FB-SiJQPt3tDybvl2qBqnwb/preview",
        constituency_Name: "மயிலாப்பூர்",
        candidate_Name: "தா வேலு",
        Party: "திமுக",
        votes: "68,392",
        margin: "12,633",
        vote_Rate: "44.58 %",
      },
      {
        mla_id: "26",
        affidate:
          "https://drive.google.com/file/d/1uPxkuIHCMrfJ6bPEXAIhtJjNvpqM0fLy/preview",
        constituency_Name: "வேளச்சேரி",
        candidate_Name: "ஜே.எம்.எச்.ஹஸ்ஸான்",
        Party: "காங்.",
        votes: "68,493",
        margin: "4,352",
        vote_Rate: "38.76 %",
      },
      {
        mla_id: "27",
        affidate:
          "https://drive.google.com/file/d/1mvSMtHRcnFMDdLl1pxM1xkKIxZmzymGb/preview",
        constituency_Name: "சோழிங்கநல்லூர்",
        candidate_Name: "அரவிந்த் ரமேஷ்",
        Party: "திமுக",
        votes: "171,558",
        margin: "35,405",
        vote_Rate: "44.18 %",
      },
      {
        mla_id: "28",
        affidate:
          "https://drive.google.com/file/d/19Ox_FtWKYLvx4taiqmnEkooGNMpeE_1v/preview",
        constituency_Name: "ஆலந்தூர்",
        candidate_Name: "தா.மோ. அன்பரசன்",
        Party: "திமுக",
        votes: "116,785",
        margin: "40,571",
        vote_Rate: "49.12 %",
      },
      {
        mla_id: "29",
        affidate:
          "https://drive.google.com/file/d/1wNacJvIoKFZElXQcx2XOPY81riihJ85e/preview",
        constituency_Name: "ஸ்ரீபெரும்புதூர்",
        candidate_Name: "செல்வபெருந்தகை",
        Party: "காங்.",
        votes: "115,353",
        margin: "10,879",
        vote_Rate: "43.65 %",
      },
      {
        mla_id: "30",
        affidate:
          "https://drive.google.com/file/d/1-W_fQkPFo9p68Y7C02fKctNumFgyxwzr/preview",
        constituency_Name: "பல்லாவரம்",
        candidate_Name: "இ.கருணாநிதி",
        Party: "திமுக",
        votes: "126,427",
        margin: "37,781",
        vote_Rate: "47.49 %",
      },
      {
        mla_id: "31",
        affidate:
          "https://drive.google.com/file/d/18ReD4apov9jrqOmsEZB4k_2i3bMnbpsA/preview",
        constituency_Name: "தாம்பரம்",
        candidate_Name: "எஸ்.ஆர்.ராஜா",
        Party: "திமுக",
        votes: "116,840",
        margin: "36,824",
        vote_Rate: "46.93 %",
      },
      {
        mla_id: "32",
        affidate:
          "https://drive.google.com/file/d/1Ca1R7jm4DsVVeWJNeA0v9w56Ziug3q0e/preview",
        constituency_Name: "செங்கல்பட்டு",
        candidate_Name: "வரலட்சுமி மதுசூதனன்",
        Party: "திமுக",
        votes: "130,573",
        margin: "26,665",
        vote_Rate: "47.64 %",
      },
      {
        mla_id: "33",
        affidate:
          "https://drive.google.com/file/d/1X_LER8KQIQxMjyyHY2UKjezaypH2Dn2U/priview",
        constituency_Name: "திருப்போரூர்",
        candidate_Name: "எஸ்.எஸ்.பாலாஜி",
        Party: "விசிக",
        votes: "93,954",
        margin: "1,947",
        vote_Rate: "41.44 %",
      },
      {
        mla_id: "34",
        affidate:
          "https://drive.google.com/file/d/1YojTh1KT8ReSvn2D-mdHheD0TZ36AnAn/preview",
        constituency_Name: "செய்யூர்",
        candidate_Name: "பாபு",
        Party: "விசிக",
        votes: "82,750",
        margin: "4,042",
        vote_Rate: "46.20 %",
      },
      {
        mla_id: "35",
        affidate:
          "https://drive.google.com/file/d/1N0KM4TFd0ycgGGGyaU4ydkLbLXNtMIjE/preview",
        constituency_Name: "மதுராந்தகம்",
        candidate_Name: "மரகதம் குமாரவேல்",
        Party: "அதிமுக",
        votes: "86,646",
        margin: "3,570",
        vote_Rate: "46.62 %",
      },
      {
        mla_id: "36",
        affidate:
          "https://drive.google.com/file/d/1SddovLi_qINjzYfzttTb5M1HV6MeN1Io/preview",
        constituency_Name: "உத்திரமேரூர்",
        candidate_Name: "க.சுந்தர்",
        Party: "திமுக",
        votes: "93,427",
        margin: "1,622",
        vote_Rate: "44.38 %",
      },
      {
        mla_id: "37",
        affidate:
          "https://drive.google.com/file/d/1Eyea9fZWETE3zXP3nTyfeYk0H_cgs1sy/preview",
        constituency_Name: "காஞ்சிபுரம்",
        candidate_Name: "சி.வி.எம்.பி. எழிலரசன்",
        Party: "திமுக",
        votes: "102,712",
        margin: "11,595",
        vote_Rate: "44.77 %",
      },
      {
        mla_id: "38",
        affidate:
          "https://drive.google.com/file/d/16bqAeq63zud2QfpcctE4mlP4-rags2Yy/preview",
        constituency_Name: "அரக்கோணம்",
        candidate_Name: "சு. ரவி",
        Party: "அதிமுக",
        votes: "85,399",
        margin: "27,169",
        vote_Rate: "49.82 %",
      },
      {
        mla_id: "39",
        affidate:
          "https://drive.google.com/file/d/19VVIm5SOcFgh-Vg4N9reffl9gAn7hobO/peview",
        constituency_Name: "சோளிங்கர்",
        candidate_Name: "முனிரத்தினம்",
        Party: "காங்.",
        votes: "110,228",
        margin: "26,698",
        vote_Rate: "49.18 %",
      },
      {
        mla_id: "40",
        affidate:
          "https://drive.google.com/file/d/1rju-IGL6KfRLFaEKtXdk6i4OiOUo4ybr/preview",
        constituency_Name: "காட்பாடி",
        candidate_Name: "துரைமுருகன்",
        Party: "திமுக",
        votes: "85,140",
        margin: "746",
        vote_Rate: "45.71 %",
      },
      {
        mla_id: "41",
        affidate:
          "https://drive.google.com/file/d/1uFpfAzemC22L0gNB5zDgmMkBSlL6-OJP/preview",
        constituency_Name: "ராணிபேட்டை",
        candidate_Name: "காந்தி",
        Party: "திமுக",
        votes: "103,291",
        margin: "16,498",
        vote_Rate: "49.79 %",
      },
      {
        mla_id: "42",
        affidate:
          "https://drive.google.com/file/d/1gBhG-t8jolr_yoetoPL7AQBj3fR2TKUG/preview",
        constituency_Name: "ஆற்காடு",
        candidate_Name: "ஜெ.எல்.ஈஸ்வரப்பன்",
        Party: "திமுக",
        votes: "103,885",
        margin: "19,958",
        vote_Rate: "49.52 %",
      },
      {
        mla_id: "43",
        affidate:
          "https://drive.google.com/file/d/18OSuowV8ZBDPfj54NY0VaclAwnkKk6qE/preview",
        constituency_Name: "வேலூர்",
        candidate_Name: "கார்த்திகேயன்",
        Party: "திமுக",
        votes: "84,299",
        margin: "9,181",
        vote_Rate: "46.86 %",
      },
      {
        mla_id: "44",
        affidate:
          "https://drive.google.com/file/d/1822dqRQp-m2RTHB49ih2EajJU8ua6kWt/preview",
        constituency_Name: "அணைக்கட்டு",
        candidate_Name: "நந்தகுமார்",
        Party: "திமுக",
        votes: "95,159",
        margin: "6,360",
        vote_Rate: "48.11 %",
      },
      {
        mla_id: "45",
        affidate:
          "https://drive.google.com/file/d/17RNx2gNuiyoCdtTl0HWzN_v-VT_VF-Lw/preview",
        constituency_Name: "கீழ்வைத்தினன்குப்பம்",
        candidate_Name: "எம்.ஜெகன்மூர்த்தி",
        Party: "PBK",
        votes: "84,579",
        margin: "10,582",
        vote_Rate: "48.57 %",
      },
      {
        mla_id: "46",
        affidate:
          "https://drive.google.com/file/d/1nyqNFSoK07GwhdLDir0fOH35YYEjMo4S/preview",
        constituency_Name: "குடியாத்தம்",
        candidate_Name: "வி.அமுலு",
        Party: "திமுக",
        votes: "100,412",
        margin: "6,901",
        vote_Rate: "47.45 %",
      },
      {
        mla_id: "47",
        affidate:
          "https://drive.google.com/file/d/1nBNjHX02ydEIyzKomN-uGJg6mcmFsUGY/preview",
        constituency_Name: "வாணியம்பாடி",
        candidate_Name: "செந்தில்குமார்",
        Party: "அதிமுக",
        votes: "88,018",
        margin: "4,904",
        vote_Rate: "46.33 %",
      },
      {
        mla_id: "48",
        affidate:
          "https://drive.google.com/file/d/1MHR4sCwWbxgF54JZdPe_pYf2OyreMDP6/preview",
        constituency_Name: "ஆம்பூர்",
        candidate_Name: "ஆ.செ.விஸ்வநாதன்",
        Party: "திமுக",
        votes: "90,476",
        margin: "20,232",
        vote_Rate: "50.86 %",
      },
      {
        mla_id: "49",
        affidate:
          "https://drive.google.com/file/d/1yX6Ahuy8g87Bs5AQAG7ETel_wbkk2ozC/preview",
        constituency_Name: "ஜோலார்பேட்டை",
        candidate_Name: "க.தேவராஜி",
        Party: "திமுக",
        votes: "89,490",
        margin: "1,091",
        vote_Rate: "45.57 %",
      },
      {
        mla_id: "50",
        affidate:
          "https://drive.google.com/file/d/1KXpBrci0TNpBBknm-yExvVVDNwwsjqxI/preview",
        constituency_Name: "திருப்பத்தூர்",
        candidate_Name: "எ.நல்லதம்பி",
        Party: "திமுக",
        votes: "96,522",
        margin: "28,240",
        vote_Rate: "51.91 %",
      },
      {
        mla_id: "51",
        affidate:
          "https://drive.google.com/file/d/1T0117XQo4g0Uf1nzluQZRzNEa3kM46yL/preview",
        constituency_Name: "ஊத்தங்கரை",
        candidate_Name: "டி.எம்.தமிழ்செல்வம்",
        Party: "அதிமுக",
        votes: "99,675",
        margin: "28,387",
        vote_Rate: "52.96 %",
      },
      {
        mla_id: "52",
        affidate:
          "https://drive.google.com/file/d/1bfzDLvWCqrGgJHgE9jdGKTUBI8iaNPGl/preview",
        constituency_Name: "பர்கூர்",
        candidate_Name: "தே.மதியழகன்",
        Party: "திமுக",
        votes: "97,256",
        margin: "12,614",
        vote_Rate: "49.17 %",
      },
      {
        mla_id: "53",
        affidate:
          "https://drive.google.com/file/d/1p38r0HfZRS649nPnHrsUzLmS4z8lZaAj/preview",
        constituency_Name: "கிருஷ்ணகிரி",
        candidate_Name: "அசோக்குமார்",
        Party: "அதிமுக",
        votes: "96,050",
        margin: "794",
        vote_Rate: "45.38 %",
      },
      {
        mla_id: "54",
        affidate:
          "https://drive.google.com/file/d/1RB4LS1cgSrFuB9hw32v5XD9oJFTe6fuW/preview",
        constituency_Name: "வேப்பனஹள்ளி",
        candidate_Name: "கேபி முனுசாமி",
        Party: "அதிமுக",
        votes: "94,104",
        margin: "3,054",
        vote_Rate: "45.87 %",
      },
      {
        mla_id: "55",
        affidate:
          "https://drive.google.com/file/d/1CxYQOrSoh7JFGfKD9iyvVZgRQ58hN5sr/preview",
        constituency_Name: "ஒசூர்",
        candidate_Name: "ஒய்.பிரகாஷ்",
        Party: "திமுக",
        votes: "118,231",
        margin: "12,367",
        vote_Rate: "47.65 %",
      },
      {
        mla_id: "56",
        affidate:
          "https://drive.google.com/file/d/1SEAuSkg3dMagLw6Azd1LuqFIFC-OxuE3/preview",
        constituency_Name: "தளீ",
        candidate_Name: "ராமச்சந்திரன்",
        Party: "சிபிஐ",
        votes: "120,641",
        margin: "56,226",
        vote_Rate: "62.18 %",
      },
      {
        mla_id: "57",
        affidate:
          "https://drive.google.com/file/d/1-fObts9d9kNbkgjYcLQElJP_8zFueU9G/preview",
        constituency_Name: "பாலக்கோடு",
        candidate_Name: "கேபி அன்பழகன்",
        Party: "அதிமுக",
        votes: "110,070",
        margin: "28,100",
        vote_Rate: "53.28 %",
      },
      {
        mla_id: "58",
        affidate:
          "https://drive.google.com/file/d/1zTTzPu0NyVDHI3mWt00O-VZRkpsKNju8/preview",
        constituency_Name: "பென்னாகரம்",
        candidate_Name: "ஜிகே மணி",
        Party: "பாமக",
        votes: "106,123",
        margin: "21,186",
        vote_Rate: "50.46 %",
      },
      {
        mla_id: "59",
        affidate:
          "https://drive.google.com/file/d/1gNY_gGmAmAzLMsx-IJoRjI-6FyPgRa1r/preview",
        constituency_Name: "தர்மபுரி",
        candidate_Name: "எஸ் பி வெங்கடேஸ்வரன்",
        Party: "பாமக",
        votes: "105,630",
        margin: "26,860",
        vote_Rate: "48.60 %",
      },
      {
        mla_id: "60",
        affidate:
          "https://drive.google.com/file/d/1pWDVNNR61YRD7SAZIo-MIFvAILZf7gSm/preview",
        constituency_Name: "பாப்பிரெட்டிபட்டி",
        candidate_Name: "ஏ. கோவிந்தசாமி",
        Party: "அதிமுக",
        votes: "114,507",
        margin: "36,943",
        vote_Rate: "51.81 %",
      },
      {
        mla_id: "61",
        affidate:
          "https://drive.google.com/file/d/1a2avkzqQXq6-AYUyz_rJtIdyU--lYAB1/preview",
        constituency_Name: "அரூர்",
        candidate_Name: "வி. சம்பத்குமார்",
        Party: "அதிமுக",
        votes: "99,061",
        margin: "30,362",
        vote_Rate: "49.89 %",
      },
      {
        mla_id: "62",
        constituency_Name: "செங்கம்",
        affidate:
          "https://drive.google.com/file/d/1QmTqEGp-VAs-lOW67nDzgjcFRjwdj7hv/preview",
        candidate_Name: "மு.பெ.கிரி",
        Party: "திமுக",
        votes: "108,081",
        margin: "11,570",
        vote_Rate: "48.26 %",
      },
      {
        mla_id: "63",
        constituency_Name: "திருவண்ணாமலை",
        affidate:
          "https://drive.google.com/file/d/1BAIRY06cLNPwZxue0n9iTIe8yHRluXvq/preview",
        candidate_Name: "எ.வ.வேலு",
        Party: "திமுக",
        votes: "137,876",
        margin: "94,673",
        vote_Rate: "66.02 %",
      },
      {
        mla_id: "64",
        constituency_Name: "கீழ்பென்னத்தூர்",
        affidate:
          "https://drive.google.com/file/d/1-mJJTFrxi8o8DTwSurfi_NpOX2liEGCR/preview",
        candidate_Name: "கு.பிச்சாண்டி",
        Party: "திமுக",
        votes: "104,675",
        margin: "26,787",
        vote_Rate: "51.34 %",
      },
      {
        mla_id: "65",
        constituency_Name: "கலசபாக்கம்",
        affidate:
          "https://drive.google.com/file/d/137JVfelCaAf0clgzVJcpHHT6LqDrr3-X/preview",
        candidate_Name: "பெ.சு.தி.சரவணன்",
        Party: "திமுக",
        votes: "94,134",
        margin: "9,222",
        vote_Rate: "47.92 %",
      },
      {
        mla_id: "66",
        constituency_Name: "போளூர்",
        affidate:
          "https://drive.google.com/file/d/1BI4xSnRMz82nWdOR6glP7NngH7fTnvAZ/preview",
        candidate_Name: "அக்ரி கிருஷ்ணமூர்த்தி",
        Party: "அதிமுக",
        votes: "97,732",
        margin: "9,725",
        vote_Rate: "48.38 %",
      },
      {
        mla_id: "67",
        constituency_Name: "ஆரணி",
        affidate:
          "https://drive.google.com/file/d/12jXS7KNKyoTt687mEogKd4QWFNt0U7uI/preview",
        candidate_Name: "சேவூர் ராமச்சந்திரன்",
        Party: "அதிமுக",
        votes: "102,961",
        margin: "3,128",
        vote_Rate: "46.50 %",
      },
      {
        mla_id: "68",
        constituency_Name: "செய்யாறு",
        affidate:
          "https://drive.google.com/file/d/1TBFYbbDZHa-J0CkvsfK-aINT1zzXD9cO/preview",
        candidate_Name: "ஓ.ஜோதி",
        Party: "திமுக",
        votes: "102,460",
        margin: "12,271",
        vote_Rate: "47.78 %",
      },
      {
        mla_id: "69",
        constituency_Name: "வந்தவாசி",
        affidate:
          "https://drive.google.com/file/d/16sIvlnJTj2UmTp-gfPcQM6cyN-eVhYla/preview",
        candidate_Name: "எஸ்.அம்பேத்குமார்",
        Party: "திமுக",
        votes: "102,064",
        margin: "35,953",
        vote_Rate: "54.88 %",
      },
      {
        mla_id: "70",
        affidate: "#",
        constituency_Name: "செஞ்சி",
        candidate_Name: "கே.எஸ்.மஸ்தான்",
        Party: "திமுக",
        votes: "109,625",
        margin: "35,803",
        vote_Rate: "52.99 %",
      },
      {
        mla_id: "71",
        affidate:
          "https://drive.google.com/file/d/1a6eyDaV34gaLaLw-bppulQ3SIISHxeaw/preview",
        constituency_Name: "மயிலம்",
        candidate_Name: "சிவக்குமார்",
        Party: "பாமக",
        votes: "81,044",
        margin: "2,230",
        vote_Rate: "45.79 %",
      },
      {
        mla_id: "72",
        affidate:
          "https://drive.google.com/file/d/1mCXLhP2XcJk6mfNmrkBED5hznygUjjdl/preview",
        constituency_Name: "திண்டிவனம்",
        candidate_Name: "அர்ஜூனன்",
        Party: "அதிமுக",
        votes: "87",
        margin: "9,753",
        vote_Rate: "47.74 %",
      },
      {
        mla_id: "73",
        affidate:
          "https://drive.google.com/file/d/1iG1A915QbgXCBkSmi6mu7xz0-x1oD9II/preview",
        constituency_Name: "வானூர்",
        candidate_Name: "சக்ரபாணி",
        Party: "அதிமுக",
        votes: "92,219",
        margin: "21,727",
        vote_Rate: "50.61 %",
      },
      {
        mla_id: "74",
        affidate:
          "https://drive.google.com/file/d/1bMEC8gi83byj4Ha_EaYW7CcUDRreNZoA/preview",
        constituency_Name: "விழுப்புரம்",
        candidate_Name: "ஆர்.லட்சுமணன்",
        Party: "திமுக",
        votes: "102,271",
        margin: "14,868",
        vote_Rate: "49.92 %",
      },
      {
        mla_id: "75",
        affidate:
          "https://drive.google.com/file/d/1Z7km_zrHNNiBi30HIH4AfVBe6F9lYEK1/preview",
        constituency_Name: "விக்கிரவாண்டி",
        candidate_Name: "நா.புகழேந்தி",
        Party: "திமுக",
        votes: "93,730",
        margin: "9,573",
        vote_Rate: "48.41 %",
      },
      {
        mla_id: "76",
        affidate:
          "https://drive.google.com/file/d/1vbAvSns_9roYEwGLWIMEhOVA0hykirXM/preview",
        constituency_Name: "திருக்கோயிலூர்",
        candidate_Name: "க.பொன்முடி",
        Party: "திமுக",
        votes: "110,980",
        margin: "59,680",
        vote_Rate: "56.56 %",
      },
      {
        mla_id: "77",
        affidate:
          "https://drive.google.com/file/d/1U2W3tmK2uahlgpwxJjXD41pbLCjf59Ma/preview",
        constituency_Name: "உளுந்தூர்பேட்டை",
        candidate_Name: "எ.ஜெ.மணிகண்ணன்",
        Party: "திமுக",
        votes: "115,451",
        margin: "5,256",
        vote_Rate: "47.15 %",
      },
      {
        mla_id: "78",
        affidate:
          "https://drive.google.com/file/d/1ic8KQKb9j0ZxDTQSiTvCj6KzI24N4HFp/preview",
        constituency_Name: "ரிஷிவந்தியம்",
        candidate_Name: "வசந்தம் கார்த்திகேயன்",
        Party: "திமுக",
        votes: "113,912",
        margin: "41,728",
        vote_Rate: "52.96 %",
      },
      {
        mla_id: "79",
        affidate:
          "https://drive.google.com/file/d/1uHCRwFH_nhcc5tD3c_7ckVs8e3T6AI4h/preview",
        constituency_Name: "சங்கராபுரம்",
        candidate_Name: "தா.உதயசூரியன்",
        Party: "திமுக",
        votes: "121,186",
        margin: "45,963",
        vote_Rate: "56.16 %",
      },
      {
        mla_id: "80",
        affidate:
          "https://drive.google.com/file/d/1lRzSu7AHOYUHEEoEA1ygTP4X5pw21gTv/preview",
        constituency_Name: "கள்ளக்குறிச்சி",
        candidate_Name: "செந்தில்குமார்",
        Party: "அதிமுக",
        votes: "110,643",
        margin: "25,891",
        vote_Rate: "48.99 %",
      },
      {
        mla_id: "81",
        affidate:
          "https://drive.google.com/file/d/12h9AJ6qc84q5EQYcIB2gjtQg1VxsiTE9/preview",
        constituency_Name: "கங்கவல்லி",
        candidate_Name: "நல்லதம்பி",
        Party: "அதிமுக",
        votes: "89,568",
        margin: "7,361",
        vote_Rate: "48.02 %",
      },
      {
        mla_id: "82",
        affidate:
          "https://drive.google.com/file/d/1KRP54u8Z7CTOxCz0WJGxprtN_0NJU3T8/preview",
        constituency_Name: "ஆத்தூர்",
        candidate_Name: "ஜெயசங்கரன்",
        Party: "அதிமுக",
        votes: "95,308",
        margin: "8,257",
        vote_Rate: "47.72 %",
      },
      {
        mla_id: "83",
        affidate:
          "https://drive.google.com/file/d/11sjxa_nZIHy7psmEEl2g8kKYHvo7BIWV/preview",
        constituency_Name: "ஏற்காடு",
        candidate_Name: "கு. சித்ரா",
        Party: "அதிமுக",
        votes: "121,561",
        margin: "25,955",
        vote_Rate: "50.88 %",
      },
      {
        mla_id: "84",
        affidate:
          "https://drive.google.com/file/d/13wPWCvqRCWvxfSQO6BI2Qz9nkQwFQpTq/preview",
        constituency_Name: "ஓமலூர்",
        candidate_Name: "ஆர். மணி",
        Party: "அதிமுக",
        votes: "142,488",
        margin: "55,294",
        vote_Rate: "57.22 %",
      },
      {
        mla_id: "85",
        affidate:
          "https://drive.google.com/file/d/1BP6UM8t0JV52Q-5smyWCTSLRKFAe072y/preview",
        constituency_Name: "மேட்டூர்",
        candidate_Name: "சதாசிவம்",
        Party: "பாமக",
        votes: "97,055",
        margin: "656",
        vote_Rate: "44.43 %",
      },
      {
        mla_id: "86",
        affidate:
          "https://drive.google.com/file/d/1doJc5qjpu0lBy-ipjgsnilWx86TZanX2/preview",
        constituency_Name: "எடப்பாடி",
        candidate_Name: "கே.பழனிச்சாமி",
        Party: "அதிமுக",
        votes: "163,154",
        margin: "93,802",
        vote_Rate: "65.97 %",
      },
      {
        mla_id: "87",
        affidate:
          "https://drive.google.com/file/d/1Paj4ZNjAZSM9RsJXsjzdHANfNkaUdD6Z/preview",
        constituency_Name: "சங்ககிரி",
        candidate_Name: "சுந்தரராஜ",
        Party: "அதிமுக",
        votes: "115,472",
        margin: "20,045",
        vote_Rate: "49.72 %",
      },
      {
        mla_id: "88",
        affidate:
          "https://drive.google.com/file/d/1YQSZL_ewo798KNcKjAdVWu0rWYX_piAf/preview",
        constituency_Name: "சேலம் (மேற்கு )",
        candidate_Name: "இரா அருள்",
        Party: "பாமக",
        votes: "105,483",
        margin: "21,499",
        vote_Rate: "48.69 %",
      },
      {
        mla_id: "89",
        affidate:
          "https://drive.google.com/file/d/1xtu6d-HIVIgTFstpWNDugsZDK7XI9pYW/preview",
        constituency_Name: "சேலம் (வடக்கு )",
        candidate_Name: "இரா ராஜேந்திரன்",
        Party: "திமுக",
        votes: "93,432",
        margin: "7,588",
        vote_Rate: "46.17 %",
      },
      {
        mla_id: "90",
        affidate:
          "https://drive.google.com/file/d/1wUiYbH-bx0G8Y4_IezT2ZGFZNjcpPnOA/preview",
        constituency_Name: "சேலம் (தெற்கு )",
        candidate_Name: "பாலசுப்பிரமணியன்",
        Party: "அதிமுக",
        votes: "97,506",
        margin: "22,609",
        vote_Rate: "48.76 %",
      },
      {
        mla_id: "91",
        affidate:
          "https://drive.google.com/file/d/1JgoVZ1KUhYxIRAZC3IwXN9RMH0OeKuKH/preview",
        constituency_Name: "வீரபாண்டி",
        candidate_Name: "எம். ராஜா",
        Party: "அதிமுக",
        votes: "111,682",
        margin: "19,895",
        vote_Rate: "49.92 %",
      },
      {
        mla_id: "92",
        affidate:
          "https://drive.google.com/file/d/11tuaokwSdScTwa-8L2L43PKeB97Ka_rv/preview",
        constituency_Name: "ராசிபுரம்",
        candidate_Name: "மா.மதிவேந்தன்",
        Party: "திமுக",
        votes: "90,727",
        margin: "1,952",
        vote_Rate: "46.08 %",
      },
      {
        mla_id: "93",
        affidate:
          "https://drive.google.com/file/d/19laMDisqwClYjcC_RnUSuUqtdb4xKkst/preview",
        constituency_Name: "சேர்ந்தமங்கலம்",
        candidate_Name: "கே.பொன்னுசாமி",
        Party: "திமுக",
        votes: "90,681",
        margin: "10,493",
        vote_Rate: "45.51 %",
      },
      {
        mla_id: "94",
        affidate:
          "https://drive.google.com/file/d/1aRxb6nAnpjQpa79xk5AGvzLvtKNLkEkv/preview",
        constituency_Name: "நாமக்கல்",
        candidate_Name: "பெ.ராமலிங்கம்",
        Party: "திமுக",
        votes: "106,494",
        margin: "27,861",
        vote_Rate: "51.51 %",
      },
      {
        mla_id: "95",
        affidate:
          "https://drive.google.com/file/d/1BSWYZ4aaFaRxi7xOAQMhOcM-YiNxwRuk/preview",
        constituency_Name: "பரமத்தி வேலூர்",
        candidate_Name: "எஸ். சேகர்",
        Party: "அதிமுக",
        votes: "86,034",
        margin: "7,662",
        vote_Rate: "46.83 %",
      },
      {
        mla_id: "96",
        affidate:
          "https://drive.google.com/file/d/1fuOzlsIZ2MwAjUXjqM1NeqAE-_TSjhdV/preview",
        constituency_Name: "திருச்செங்கோடு",
        candidate_Name: "ஈ.ஆர்.ஈஸ்வரன்",
        Party: "KMDK",
        votes: "81,688",
        margin: "2,862",
        vote_Rate: "44.23 %",
      },
      {
        mla_id: "97",
        affidate:
          "https://drive.google.com/file/d/1UHv159OLzD-h7B85SkWFVcxAbIulTPeX/preview",
        constituency_Name: "குமாரபாளையம்",
        candidate_Name: "தங்கமணி",
        Party: "அதிமுக",
        votes: "100,800",
        margin: "31,646",
        vote_Rate: "49.92 %",
      },
      {
        mla_id: "98",
        affidate:
          "https://drive.google.com/file/d/16nRTczj8pYr64g2TwAYiWQYjTRU3VwS6/preview",
        constituency_Name: "ஈரோடு(கிழக்கு)",
        candidate_Name: "திருமகன் ஈவேரா .",
        Party: "காங்.",
        votes: "67,300",
        margin: "8,904",
        vote_Rate: "44.27 %",
      },
      {
        mla_id: "99",
        affidate:
          "https://drive.google.com/file/d/1rJfAxfQG1q5G9CbUfWsQ-u7re__3PQny/preview",
        constituency_Name: "ஈரோடு(மேற்கு)",
        candidate_Name: "சு.முத்துசாமி",
        Party: "திமுக",
        votes: "100,757",
        margin: "22,089",
        vote_Rate: "49.01 %",
      },
      {
        mla_id: "100",
        affidate:
          "https://drive.google.com/file/d/1KcAYQNRhKWMmPev59_4XX2tknhHVHShw/preview",
        constituency_Name: "மொடக்குறிச்சி",
        candidate_Name: "",
        Party: "பாஜக",
        votes: "78,125",
        margin: "281",
        vote_Rate: "42.96 %",
      },
      {
        mla_id: "101",
        affidate:
          "https://drive.google.com/file/d/1mGdD-YyYiUMgSVsUd1u-XRx15HOubfVP/preview",
        constituency_Name: "தாராபுரம்",
        candidate_Name: "கயல்விழி செல்வராஜ்",
        Party: "திமுக",
        votes: "89,986",
        margin: "1,393",
        vote_Rate: "46.39 %",
      },
      {
        mla_id: "102",
        affidate:
          "https://drive.google.com/file/d/1HvZ4faLvU-2a8RWc8EOuJcnto0_BQ_2L/preview",
        constituency_Name: "காங்கேயம்",
        candidate_Name: "சாமிநாதன்",
        Party: "திமுக",
        votes: "94,197",
        margin: "7,331",
        vote_Rate: "47.14 %",
      },
      {
        mla_id: "103",
        affidate:
          "https://drive.google.com/file/d/1oI1oqWIByrEAF4UHl5BFBpZwSb6mLrAV/preview",
        constituency_Name: "பெருந்துறை",
        candidate_Name: "ஜெயக்குமார்",
        Party: "அதிமுக",
        votes: "85,125",
        margin: "14,507",
        vote_Rate: "44.84 %",
      },
      {
        mla_id: "104",
        affidate:
          "https://drive.google.com/file/d/1e1IYcvxOYNWW9en72D-PXK_c0OJqigcb/preview",
        constituency_Name: "பவானி",
        candidate_Name: "கே.சி. கருப்பணன்",
        Party: "அதிமுக",
        votes: "100,915",
        margin: "22,523",
        vote_Rate: "50.11 %",
      },
      {
        mla_id: "105",
        affidate:
          "https://drive.google.com/file/d/1QdIlyZ6rO0pke19eoH9_t2jvsh4S_vDn/preview",
        constituency_Name: "அந்தியூர்",
        candidate_Name: "எ.ஜி.வெங்கடாச்சலம்",
        Party: "திமுக",
        votes: "79,096",
        margin: "1,275",
        vote_Rate: "44.84 %",
      },
      {
        mla_id: "106",
        affidate:
          "https://drive.google.com/file/d/1yM03MpK5G1r9TqiFKcF8d-pHqJL-pDxF/preview",
        constituency_Name: "கோபிச்செட்டிப்பாளையம்",
        candidate_Name: "கே.ஏ. செங்கோட்டையன்",
        Party: "அதிமுக",
        votes: "108,608",
        margin: "28,563",
        vote_Rate: "50.68 %",
      },
      {
        mla_id: "107",
        affidatezz:
          "https://drive.google.com/file/d/1hm2szmF9sw6g3Bub4BT_gZO8fIsrRsx9/preview",
        constituency_Name: "பவானிசாகர்",
        candidate_Name: "பண்ணாரி",
        Party: "அதிமுக",
        votes: "99,181",
        margin: "16,008",
        vote_Rate: "49.45 %",
      },
      {
        mla_id: "108",
        affidate:
          "https://drive.google.com/file/d/1ZdM-FZDuMMeivKE2nwqS6HFuIyBKtAjQ/preview",
        constituency_Name: "உதகமண்டலம்",
        candidate_Name: "ஆர்.கணேஷ்",
        Party: "காங்.",
        votes: "65,530",
        margin: "5,348",
        vote_Rate: "46.44 %",
      },
      {
        mla_id: "109",
        affidate:
          "https://drive.google.com/file/d/16pTO_pKbKYftDFzwTr3SavTRKiJGwvJy/preview",
        constituency_Name: "கூடலூர்",
        candidate_Name: "பொன். ஜெயசீலன்",
        Party: "அதிமுக",
        votes: "64,496",
        margin: "1,945",
        vote_Rate: "46.65 %",
      },
      {
        mla_id: "110",
        affidate:
          "https://drive.google.com/file/d/1nfTFrM1YyOR0zz73KbUCg7_jcEWFMqSR/preview",
        constituency_Name: "குன்னூர்",
        candidate_Name: "கா.ராமசந்திரன்",
        Party: "திமுக",
        votes: "61,820",
        margin: "4,105",
        vote_Rate: "45.49 %",
      },
      {
        mla_id: "111",
        affidate:
          "https://drive.google.com/file/d/1xQAHng_OovmZXZdyyGY4M5zFpM0z8ciA/preview",
        constituency_Name: "மேட்டுப்பாளையம்",
        candidate_Name: "ஏ.கே. செல்வராஜ்",
        Party: "அதிமுக",
        votes: "105,231",
        margin: "2,456",
        vote_Rate: "46.75 %",
      },
      {
        mla_id: "112",
        affidate:
          "https://drive.google.com/file/d/1BMD6cBAF7IPoVTnmc2qfNKrbEBEo3Aio/preview",
        constituency_Name: "அவினாசி",
        candidate_Name: "தனபால்",
        Party: "அதிமுக",
        votes: "117,284",
        margin: "50,902",
        vote_Rate: "55.16 %",
      },
      {
        mla_id: "113",
        affidate:
          "https://drive.google.com/file/d/1PMO72tLOFZkguL-_iurX8Eddjx-mflVw/preview",
        constituency_Name: "திருப்பூர் (வடக்கு)",
        candidate_Name: "விஜயகுமார்",
        Party: "அதிமுக",
        votes: "113,384",
        margin: "40,102",
        vote_Rate: "47.62 %",
      },
      {
        mla_id: "114",
        affidate:
          "https://drive.google.com/file/d/1arp_-gyKCIeaLeSqpxRYwT9WT1slQYqP/preview",
        constituency_Name: "திருப்பூர் (தெற்கு)",
        candidate_Name: "க.செல்வராஜ்",
        Party: "திமுக",
        votes: "75,535",
        margin: "4,709",
        vote_Rate: "43.31 %",
      },
      {
        mla_id: "115",
        affidate:
          "https://drive.google.com/file/d/199HYqF4MhMOFVNAm4LGtffnOHA1ZN3Xt/preview",
        constituency_Name: "பல்லடம்",
        candidate_Name: "எம்.எஸ்.எம். ஆனந்தன்",
        Party: "அதிமுக",
        votes: "126,903",
        margin: "32,691",
        vote_Rate: "48.53 %",
      },
      {
        mla_id: "116",
        affidate:
          "https://drive.google.com/file/d/1vdVM-SG92DwSTRp22jSrXOJYcVX_EFZ8/preview",
        constituency_Name: "சூலூர்",
        candidate_Name: "விபி கந்தசாமி",
        Party: "அதிமுக",
        votes: "118,968",
        margin: "31,932",
        vote_Rate: "49.23 %",
      },
      {
        mla_id: "117",
        affidate:
          "https://drive.google.com/file/d/1iW_qbQ3fXHGpaCaN9XkQtd6HvUtuFlZB/preview",
        constituency_Name: "கவுண்டம்பாளையம்",
        candidate_Name: "அருண்குமார்",
        Party: "அதிமுக",
        votes: "135,669",
        margin: "9,776",
        vote_Rate: "43.78 %",
      },
      {
        mla_id: "118",
        affidate:
          "https://drive.google.com/file/d/1iTJYK-WpT11tcuSuk6yRBmb9gD91hREe/preview",
        constituency_Name: "கோவை வடக்கு",
        candidate_Name: "அம்மன் அர்ச்சுணன்",
        Party: "அதிமுக",
        votes: "81,454",
        margin: "4,001",
        vote_Rate: "40.16 %",
      },
      {
        mla_id: "119",
        affidate:
          "https://drive.google.com/file/d/13_CC0aT2ZxGOEc1sPyqwoz78dItX7KGC/preview",
        constituency_Name: "தொண்டாமுத்தூர்",
        candidate_Name: "எஸ்.பி. வேலுமணி",
        Party: "அதிமுக",
        votes: "124,225",
        margin: "41,630",
        vote_Rate: "53.89 %",
      },
      {
        mla_id: "120",
        affidate:
          "https://drive.google.com/file/d/1KC3gvJwV3069LOMwb7XPkFaKq4TLhkd0/preview",
        constituency_Name: "கோவை தெற்கு",
        candidate_Name: "வானதி சீனிவாசன்",
        Party: "பாஜக",
        votes: "53,209",
        margin: "1,728",
        vote_Rate: "34.38 %",
      },
      {
        mla_id: "121",
        affidate:
          "https://drive.google.com/file/d/1yO0TrQ0bzZspdQUMoPdvik0rvny7fbiK/preview",
        constituency_Name: "சிங்காநல்லூர்",
        candidate_Name: "கே.ஆர். ஜெயராம்",
        Party: "அதிமுக",
        votes: "81,244",
        margin: "10,854",
        vote_Rate: "40.22 %",
      },
      {
        mla_id: "122",
        affidate:
          "https://drive.google.com/file/d/1WcEkJ-Rxw2hmzHwajRz7HN_VOT7bBYdZ/preview",
        constituency_Name: "கிணத்துக்கடவு",
        candidate_Name: "தாமோதரன்",
        Party: "அதிமுக",
        votes: "101,537",
        margin: "1,095",
        vote_Rate: "43.68 %",
      },
      {
        mla_id: "123",
        affidate:
          "https://drive.google.com/file/d/1neUCskX19d3Hy4qHQCgSPSazI22DndSs/preview",
        constituency_Name: "பொள்ளாச்சி",
        candidate_Name: "பொள்ளாச்சி ஜெயராமன்",
        Party: "அதிமுக",
        votes: "80,567",
        margin: "1,725",
        vote_Rate: "45.44 %",
      },
      {
        mla_id: "124",
        affidate:
          "https://drive.google.com/file/d/1lPRW5ubnM10Degx1cSGCjaGAsBepEM2m/preview",
        constituency_Name: "வால்ப்பாறை",
        candidate_Name: "அமுல்கந்தசாமி",
        Party: "அதிமுக",
        votes: "71,672",
        margin: "12,223",
        vote_Rate: "49.37 %",
      },
      {
        mla_id: "125",
        affidate:
          "https://drive.google.com/file/d/1roQCB3pVg5bsVHfG2-rbEjc9FnjQ3RJI/preview",
        constituency_Name: "உடுமலைப்பேட்டை",
        candidate_Name: "உடுமலை கே. ராதாகிருஷ்ணன்",
        Party: "அதிமுக",
        votes: "96,893",
        margin: "21,895",
        vote_Rate: "49.85 %",
      },
      {
        mla_id: "126",
        affidate:
          "https://drive.google.com/file/d/1S9_imzeYAVqlrV5ATccIRgkvjO9MMhyR/preview",
        constituency_Name: "மடத்துக்குளம்",
        candidate_Name: "சி.மகேந்திரன்",
        Party: "அதிமுக",
        votes: "84,313",
        margin: "6,438",
        vote_Rate: "46.35 %",
      },
      {
        mla_id: "127",
        affidate: "#",
        constituency_Name: "பழனி",
        candidate_Name: "ஐ.பி.செந்தில்குமார்",
        Party: "திமுக",
        votes: "108,566",
        margin: "30,056",
        vote_Rate: "52.86 %",
      },
      {
        mla_id: "128",
        affidate:
          "https://drive.google.com/file/d/1OdRwZ_G6aaNutgZuhy_K60i1kC8sIrRi/preview",
        constituency_Name: "ஒட்டன்சத்திரம்",
        candidate_Name: "அர.சக்கரபாணி",
        Party: "திமுக",
        votes: "109,970",
        margin: "28,742",
        vote_Rate: "54.51 %",
      },
      {
        mla_id: "129",
        affidate:
          "https://drive.google.com/file/d/1GHjnd-S4R36dv-0lQmNJ6uYk9DSBH5ip/preview",
        constituency_Name: "ஆத்தூர்",
        candidate_Name: "இ.பெரியசாமி",
        Party: "திமுக",
        votes: "165,809",
        margin: "135,571",
        vote_Rate: "72.11 %",
      },
      {
        mla_id: "130",
        affidate: "#",
        constituency_Name: "நிலக்கோட்டை",
        candidate_Name: "தேன்மொழி",
        Party: "அதிமுக",
        votes: "91,461",
        margin: "27,618",
        vote_Rate: "49.49 %",
      },
      {
        mla_id: "131",
        affidate: "#",
        constituency_Name: "நத்தம்",
        candidate_Name: "நத்தம் விஸ்வநாதன்",
        Party: "அதிமுக",
        votes: "107,762",
        margin: "11,932",
        vote_Rate: "47.84 %",
      },
      {
        mla_id: "132",
        affidate:
          "https://drive.google.com/file/d/1Vq5FD-BZxsEdQjkbDLrgxHKr-yAOu26t/preview",
        constituency_Name: "திண்டுக்கல்",
        candidate_Name: "திண்டுக்கல் சீனிவாசன்",
        Party: "அதிமுக",
        votes: "90,595",
        margin: "17,747",
        vote_Rate: "46.43 %",
      },
      {
        mla_id: "133",
        affidate:
          "https://drive.google.com/file/d/13uR5U0cUahNZ8Fb7Ia879kIEnNVbGV-W/preview",
        constituency_Name: "வேடசந்தூர்",
        candidate_Name: "எஸ்.காந்திராஜன்",
        Party: "திமுக",
        votes: "106,481",
        margin: "17,553",
        vote_Rate: "49.97 %",
      },
      {
        mla_id: "134",
        affidate:
          "https://drive.google.com/file/d/1U4c7o1Y9ZZWOTy1OYRJJITKgFJC8pODB/preview",
        constituency_Name: "அரவக்குறிச்சி",
        candidate_Name: "ஆர்.இளங்கோ",
        Party: "திமுக",
        votes: "93,369",
        margin: "24,816",
        vote_Rate: "52.72 %",
      },
      {
        mla_id: "135",
        affidate:
          "https://drive.google.com/file/d/1KI36jjFrsGWrAGfdts9JVW32otK6wDeI/preview",
        constituency_Name: "கரூர்",
        candidate_Name: "செந்தில் பாலாஜி",
        Party: "திமுக",
        votes: "101,757",
        margin: "12,448",
        vote_Rate: "49.08 %",
      },
      {
        mla_id: "136",
        affidate:
          "https://drive.google.com/file/d/1jFKmGv1I7et7QOqjutfDMpbtPWYGxvmv/preview",
        constituency_Name: "கிருஷ்ணராயபுரம்",
        candidate_Name: "க.சிவகாமசுந்தரி",
        Party: "திமுக",
        votes: "96,540",
        margin: "31,625",
        vote_Rate: "53.37 %",
      },
      {
        mla_id: "137",
        affidate:
          "https://drive.google.com/file/d/1ItSFkr-TvP2VC7X0xTBul81v0I63Fmoa/preview",
        constituency_Name: "குளித்தலை",
        candidate_Name: "இரா.மாணிக்கம்",
        Party: "திமுக",
        votes: "100,829",
        margin: "23,540",
        vote_Rate: "51.06 %",
      },
      {
        mla_id: "138",
        affidate:
          "https://drive.google.com/file/d/1v3X1FqPGY_S82PCMeMeOh2Fa27AWtUUq/preview",
        constituency_Name: "மணப்பாறை",
        candidate_Name: "அப்துல் சமது",
        Party: "MMK",
        votes: "98,077",
        margin: "12,243",
        vote_Rate: "44.23 %",
      },
      {
        mla_id: "139",
        constituency_Name: "ஸ்ரீரங்கம்",
        affidate:
          "https://drive.google.com/file/d/1s8_eWeQVX9V5JyCB3C6sjUGqmr3-DHY_/preview",
        candidate_Name: "எம்.பழனியாண்டி",
        Party: "திமுக",
        votes: "113,904",
        margin: "19,915",
        vote_Rate: "47.41 %",
      },
      {
        mla_id: "140",
        constituency_Name: "திருச்சி(மேற்கு)",
        affidate:
          "https://drive.google.com/file/d/1mPCj4smvsbACByYgnw684hDw4R3Hg8zt/preview",
        candidate_Name: "கேஎன் நேரு",
        Party: "திமுக",
        votes: "118,133",
        margin: "85,109",
        vote_Rate: "64.52 %",
      },
      {
        mla_id: "141",
        constituency_Name: "திருச்சி(கிழக்கு)",
        affidate:
          "https://drive.google.com/file/d/1uYwgaw1ARaGgWSVeAKoHs4rA7vpjsMSI/preview",
        candidate_Name: "இனிகோ இருதயராஜ்",
        Party: "திமுக",
        votes: "94,302",
        margin: "53,797",
        vote_Rate: "54",
      },
      {
        mla_id: "142",
        constituency_Name: "திருவெறும்பூர்",
        affidate:
          "https://drive.google.com/file/d/1HixmRVDfnJ8Ebxl8LOEMlJPmh8-bWafm/preview",
        candidate_Name: "அன்பில் மகேஷ் பொய்யாமொழி",
        Party: "திமுக",
        votes: "105,424",
        margin: "49,697",
        vote_Rate: "53.51 %",
      },
      {
        mla_id: "143",
        constituency_Name: "லால்குடி",
        affidate:
          "https://drive.google.com/file/d/1hfqoxI6GMG_x8tvsvTMXMm0w3dTf_7Ef/preview",
        candidate_Name: "அ.சௌந்திரபாண்டியன்",
        Party: "திமுக",
        votes: "84,914",
        margin: "16,949",
        vote_Rate: "48.59 %",
      },
      {
        mla_id: "144",
        constituency_Name: "மணச்சநல்லூர்",
        affidate:
          "https://drive.google.com/file/d/1HvfCib8MWIdjrR8aaCZ4MXyvX5pYEFsX/preview",
        candidate_Name: "சீ.கதிரவன்",
        Party: "திமுக",
        votes: "116,334",
        margin: "59,618",
        vote_Rate: "59.14 %",
      },
      {
        mla_id: "145",
        constituency_Name: "முசிறி",
        affidate:
          "https://drive.google.com/file/d/1NRMnNVEG9CB27Dghj4SYvXgvlobeA-KE/preview",
        candidate_Name: "ந.தியாகராஜன்",
        Party: "திமுக",
        votes: "90,624",
        margin: "26,836",
        vote_Rate: "50.43 %",
      },
      {
        mla_id: "146",
        constituency_Name: "துறையூர்",
        affidate:
          "https://drive.google.com/file/d/1mjQEPrdocGNhMtJasL4hJ8umt4NO8oTp/preview",
        candidate_Name: "செ.ஸ்டாலின் குமார்",
        Party: "திமுக",
        votes: "87,786",
        margin: "22,071",
        vote_Rate: "49.91 %",
      },
      {
        mla_id: "147",
        affidate:
          "https://drive.google.com/file/d/1fjfNsFIJk2oJohTlQkQb65fn-oYOyId9/preview",
        constituency_Name: "பெரம்பலூர்",
        candidate_Name: "எம்.பிரபாகரன்",
        Party: "திமுக",
        votes: "122,090",
        margin: "31,034",
        vote_Rate: "50.87 %",
      },
      {
        mla_id: "148",
        affidate:
          "https://drive.google.com/file/d/1SPjRJg1e172-eu4kYyekA18xVzLLhNHY/preview",
        constituency_Name: "குன்னம்",
        candidate_Name: "எஸ்.எஸ்.சிவசங்கர்",
        Party: "திமுக",
        votes: "103,922",
        margin: "6,329",
        vote_Rate: "47.26 %",
      },
      {
        mla_id: "149",
        affidate:
          "https://drive.google.com/file/d/1QvtGma0nm8YY8otWHDyQ4cs695YyIy5k/preview",
        constituency_Name: "அரியலூர்",
        candidate_Name: "சின்னப்பா",
        Party: "மதிமுக",
        votes: "103,975",
        margin: "3,234",
        vote_Rate: "46.16 %",
      },
      {
        mla_id: "150",
        constituency_Name: "ஜெயங்கொண்டம்",
        affidate:
          "https://drive.google.com/file/d/110xYFrmGlPdChLnVQHmR_fr01q0wwTdA/preview",
        candidate_Name: "கே.எஸ்.கே.கண்ணன்",
        Party: "திமுக",
        votes: "99,529",
        margin: "5,452",
        vote_Rate: "46.00 %",
      },
      {
        mla_id: "151",
        affidate:
          "https://drive.google.com/file/d/1_KZRhSgiiG_2MCu_ZVoRV9UcL99qV6Tt/preview",
        constituency_Name: "திட்டக்குடி",
        candidate_Name: "சி.வி.கணேசன்",
        Party: "திமுக",
        votes: "83,726",
        margin: "21,563",
        vote_Rate: "49.78 %",
      },
      {
        mla_id: "152",
        affidate:
          "https://drive.google.com/file/d/1qexnrTGXUHYr08qVoQcR4bTuAyIAb5hO/preview",
        constituency_Name: "விருத்தாசலம்",
        candidate_Name: "எம்.ஆர்.ஆர்.ராதாகிருஷ்ணன்",
        Party: "காங்.",
        votes: "77,064",
        margin: "862",
        vote_Rate: "39.17 %",
      },
      {
        mla_id: "153",
        affidate: "#",
        constituency_Name: "நெய்வேலி",
        candidate_Name: "சபா.ராஜேந்திரன்",
        Party: "திமுக",
        votes: "75,177",
        margin: "977",
        vote_Rate: "45.80 %",
      },
      {
        mla_id: "154",
        affidate:
          "https://drive.google.com/file/d/1qexnrTGXUHYr08qVoQcR4bTuAyIAb5hO/preview",
        constituency_Name: "பண்ருட்டி",
        candidate_Name: "வேல்முருகன்",
        Party: "TVK",
        votes: "93,801",
        margin: "4,697",
        vote_Rate: "47.60 %",
      },
      {
        mla_id: "155",
        affidate:
          "https://drive.google.com/file/d/1sc8LT7YaF-D17sB7qeiWUgrCdPH6Ox7s/preview",
        constituency_Name: "கடலூர்",
        candidate_Name: "கோ.அய்யப்பன்",
        Party: "திமுக",
        votes: "84,563",
        margin: "5,151",
        vote_Rate: "46.46 %",
      },
      {
        mla_id: "156",
        affidate:
          "https://drive.google.com/file/d/1THlOJmY9u1eb-JtCb5PG1Y6qW76HWFG6/preview",
        constituency_Name: "குறிஞ்சிப்பாடி",
        candidate_Name: "எம்.ஆர்.கே.பண்ணீர்செல்வம்",
        Party: "திமுக",
        votes: "101,456",
        margin: "17,527",
        vote_Rate: "51.04 %",
      },
      {
        mla_id: "157",
        affidate:
          "https://drive.google.com/file/d/1PcQ143yDAAq8vzgiov11zdsNsd1XC65S/preview",
        constituency_Name: "புவனகிரி",
        candidate_Name: "அருண்மொழிதேவன்",
        Party: "அதிமுக",
        votes: "96,453",
        margin: "8,259",
        vote_Rate: "48.92 %",
      },
      {
        mla_id: "158",
        affidate:
          "https://drive.google.com/file/d/1dplc0giczYoSO4SuMnjpP9HUjY0MM_e2/preview",
        constituency_Name: "சிதம்பரம்",
        candidate_Name: "கேஏ பாண்டியன்",
        Party: "அதிமுக",
        votes: "91,961",
        margin: "16,937",
        vote_Rate: "50.16 %",
      },
      {
        mla_id: "159",
        affidate:
          "https://drive.google.com/file/d/1qKeqFbrpyVa7FBfqfPIzyyENr75ciAZs/preview",
        constituency_Name: "காட்டுமன்னார்கோவில்",
        candidate_Name: "சிந்தனைச்செல்வன்",
        Party: "விசிக",
        votes: "86,056",
        margin: "10,565",
        vote_Rate: "49.02 %",
      },
      {
        mla_id: "160",
        affidate:
          "https://drive.google.com/file/d/1Tdzz3fAodyGYxWF3LihngEyR6whSluMB/preview",
        constituency_Name: "சீர்காழி",
        candidate_Name: "மு.பன்னீர்செல்வம்",
        Party: "திமுக",
        votes: "94,057",
        margin: "12,148",
        vote_Rate: "49.16 %",
      },
      {
        mla_id: "161",
        affidate:
          "https://drive.google.com/file/d/1at4M55NFGXEQxh3I283wkTTD5Cba7bHj/preview",
        constituency_Name: "மயிலாடுதுறை",
        candidate_Name: "ராஜகுமார்",
        Party: "காங்.",
        votes: "73,642",
        margin: "2,742",
        vote_Rate: "42.17 %",
      },
      {
        mla_id: "162",
        affidate:
          "https://drive.google.com/file/d/1SpO6aR23kKMrTT80XlyXSJ7MOdl4aNni/preview",
        constituency_Name: "பூம்புகார்",
        candidate_Name: "நிவேதா முருகன்",
        Party: "திமுக",
        votes: "96,102",
        margin: "3,299",
        vote_Rate: "46.24 %",
      },
      {
        mla_id: "163",
        affidate:
          "https://drive.google.com/file/d/1JlssED-QAvbD2OJp_PE9HCDvCWZ2Vsbx/preview",
        constituency_Name: "நாகப்பட்டினம்",
        candidate_Name: "ஆளூர் ஷாநவாஸ்",
        Party: "விசிக",
        votes: "66,281",
        margin: "7,238",
        vote_Rate: "46.17 %",
      },
      {
        mla_id: "164",
        affidate:
          "https://drive.google.com/file/d/1kxAZPBMfcM3DWFCoHo_9G5H9sv_CMM6e/preview",
        constituency_Name: "கீழ்வேளூர்",
        candidate_Name: "மாலி",
        Party: "சிபிஎம் சிபிஎம்",
        votes: "67,988",
        margin: "16,985",
        vote_Rate: "47.55 %",
      },
      {
        mla_id: "165",
        affidate:
          "https://drive.google.com/file/d/1Y-_EjKpq49DISJDkuB6LvMhqtr2hHAWI/preview",
        constituency_Name: "வேதாரண்யம்",
        candidate_Name: "ஓஎஸ் மணியன்",
        Party: "அதிமுக",
        votes: "78,719",
        margin: "12,329",
        vote_Rate: "49.80 %",
      },
      {
        mla_id: "166",
        affidate:
          "https://drive.google.com/file/d/1Mfqyj2aJY1PNnliLzX0aLO1r0LEq4eZY/preview",
        constituency_Name: "திருத்துறைபூண்டி",
        candidate_Name: "மாரிமுத்து",
        Party: "சிபிஎம்",
        votes: "97,092",
        margin: "30,068",
        vote_Rate: "52.23 %",
      },
      {
        mla_id: "167",
        affidate:
          "https://drive.google.com/file/d/1XIQLwhNFKpHAml5bHOPQZbaMKAh9xqaI/preview",
        constituency_Name: "மன்னார்குடி",
        candidate_Name: "டிஆர்பி ராஜா",
        Party: "திமுக",
        votes: "87,172",
        margin: "37,393",
        vote_Rate: "45.11 %",
      },
      {
        mla_id: "168",
        affidate:
          "https://drive.google.com/file/d/1qg6KJkMG36nLRRChB2PSVEUWmfzHm4LT/preview",
        constituency_Name: "திருவாரூர்",
        candidate_Name: "பூண்டி கலைவாணன்",
        Party: "திமுக",
        votes: "108,906",
        margin: "51,174",
        vote_Rate: "52.29 %",
      },
      {
        mla_id: "169",
        affidate:
          "https://drive.google.com/file/d/1bPKB3RUdC_hgpTD2opN9xFDLVmX4C2hl/preview",
        constituency_Name: "நன்னிலம்",
        candidate_Name: "ஆர். காமராஜ்",
        Party: "அதிமுக",
        votes: "103,637",
        margin: "4,424",
        vote_Rate: "46.70 %",
      },
      {
        mla_id: "170",
        affidate:
          "https://drive.google.com/file/d/1YGmPrxVTN7mOCTxqXYvpqmjUYOyDf7vD/preview",
        constituency_Name: "திருவிடைமருதூர்",
        candidate_Name: "கோவி.செழியன்",
        Party: "திமுக",
        votes: "95,763",
        margin: "10,680",
        vote_Rate: "48.26 %",
      },
      {
        mla_id: "171",
        affidate:
          "https://drive.google.com/file/d/13Ghl98aMEYtsG9DTSl2h4yg8k8Na6dIe/preview",
        constituency_Name: "கும்பகோணம்",
        candidate_Name: "அன்பழகன்",
        Party: "திமுக",
        votes: "96,057",
        margin: "21,383",
        vote_Rate: "48.62 %",
      },
      {
        mla_id: "172",
        affidate:
          "https://drive.google.com/file/d/1car4L7UuGmeTwkK0AXFINI3O_qc0EvMA/preview",
        constituency_Name: "பாபநாசம்",
        candidate_Name: "ஜவாஹிருல்லா",
        Party: "MMK",
        votes: "86,567",
        margin: "16,273",
        vote_Rate: "43.95 %",
      },
      {
        mla_id: "173",
        affidate:
          "https://drive.google.com/file/d/1TInrj4ENQtkXx6Nje2MCGJ0Cfv-u0Sel/preview",
        constituency_Name: "திருவையாறு",
        candidate_Name: "துரை சந்திரசேகரன்",
        Party: "திமுக",
        votes: "103,210",
        margin: "53,650",
        vote_Rate: "48.82 %",
      },
      {
        mla_id: "174",
        affidate:
          "https://drive.google.com/file/d/1eFUA0XjyqdbkNq4AmSg6kiDiGnwOlXj5/preview",
        constituency_Name: "தஞ்சாவூர்",
        candidate_Name: "டி.கே.ஜி.நீலமேகம்",
        Party: "திமுக",
        votes: "103,772",
        margin: "47,149",
        vote_Rate: "53.25 %",
      },
      {
        mla_id: "175",
        affidate:
          "https://drive.google.com/file/d/1H9b2d3HNQLmQGDbxj-4gbT_mlo0JXe5c/preview",
        constituency_Name: "ஒரத்தநாடு",
        candidate_Name: "வைத்திலிங்கம்",
        Party: "அதிமுக",
        votes: "90,063",
        margin: "28,835",
        vote_Rate: "46.95 %",
      },
      {
        mla_id: "176",
        affidate:
          "https://drive.google.com/file/d/1H9b2d3HNQLmQGDbxj-4gbT_mlo0JXe5c/preview",
        constituency_Name: "பட்டுக்கோட்டை",
        candidate_Name: "அண்ணாதுரை",
        Party: "திமுக",
        votes: "79,065",
        margin: "25,269",
        vote_Rate: "44.62 %",
      },
      {
        mla_id: "177",
        affidate:
          "https://drive.google.com/file/d/1_IYd8Dolc2m05G5eJDT6_i0T8tsbxcHZ/peview",
        constituency_Name: "பேராவூரணி",
        candidate_Name: "அசோக்குமார்",
        Party: "திமுக",
        votes: "89,130",
        margin: "23,503",
        vote_Rate: "52.17 %",
      },
      {
        mla_id: "178",
        affidate:
          "https://drive.google.com/file/d/1dhPPUFNCgp-VpPYdH-uiPg8y1nC_dh0i/preview",
        constituency_Name: "கந்தர்வக்கோட்டை",
        candidate_Name: "எம். சின்னதுரை",
        Party: "சிபிஎம்",
        votes: "69,710",
        margin: "12,721",
        vote_Rate: "44.23 %",
      },
      {
        mla_id: "179",
        affidate:
          "https://drive.google.com/file/d/1mEbRVdSWZ4wICCHGsQq4_vMJMu1x7q7I/preview",
        constituency_Name: "விராலிமலை",
        candidate_Name: "விஜயபாஸ்கர்",
        Party: "அதிமுக",
        votes: "102,179",
        margin: "23,598",
        vote_Rate: "52.83 %",
      },
      {
        mla_id: "180",
        affidate:
          "https://drive.google.com/file/d/10vTIXqbhKI4lmuR42ufAHCGRtnbEsQC8/preview",
        constituency_Name: "புதுக்கோட்டை",
        candidate_Name: "முத்துராஜா",
        Party: "திமுக",
        votes: "85,802",
        margin: "13,001",
        vote_Rate: "47.70 %",
      },
      {
        mla_id: "181",
        affidate:
          "https://drive.google.com/file/d/1rZkppdBHR5p-VmvHCi-9CfOdoT_oeEgG/preview",
        constituency_Name: "திருமயம்",
        candidate_Name: "ரகுபதி",
        Party: "திமுக",
        votes: "71,349",
        margin: "1,382",
        vote_Rate: "41.00 %",
      },
      {
        mla_id: "182",
        affidate:
          "https://drive.google.com/file/d/169ti39S1Snk47WNxhydNXVzJL5wQSGum/preview",
        constituency_Name: "ஆலங்குடி",
        candidate_Name: "மெய்யநாதன்",
        Party: "திமுக",
        votes: "87,935",
        margin: "25,847",
        vote_Rate: "51.17 %",
      },
      {
        mla_id: "183",
        affidate:
          "https://drive.google.com/file/d/1vpmuy5jBjPj0Z-8XxAXVvih8dUbKmrml/preview",
        constituency_Name: "அறந்தாங்கி",
        candidate_Name: "ராமச்சந்திரன்",
        Party: "காங்.",
        votes: "81,835",
        margin: "30,893",
        vote_Rate: "48.70 %",
      },
      {
        mla_id: "184",
        affidate:
          "https://drive.google.com/file/d/1B5V8NPpjujq7cLdhjrhvz57bg6DWnbNl/preview",
        constituency_Name: "காரைக்குடி",
        candidate_Name: "மான்குடி",
        Party: "காங்.",
        votes: "75,954",
        margin: "21,589",
        vote_Rate: "35.75 %",
      },
      {
        mla_id: "185",
        affidate:
          "https://drive.google.com/file/d/1WKhFJdsFTbSDbk3mou4atmgkk_wMmkdT/preview",
        constituency_Name: "திருப்பத்தூர்",
        candidate_Name: "கே.ஆர்.பெரியகருப்பன்",
        Party: "திமுக",
        votes: "103,682",
        margin: "37,374",
        vote_Rate: "49.19 %",
      },
      {
        mla_id: "186",
        affidate:
          "https://drive.google.com/file/d/1mXwyfFF0W-Zlqokq9qTFU6McZrHjVdVI/preview",
        constituency_Name: "சிவகங்கை",
        candidate_Name: "செந்தில்நாதன்",
        Party: "அதிமுக",
        votes: "82,153",
        margin: "11,253",
        vote_Rate: "40.66 %",
      },
      {
        mla_id: "187",
        affidate:
          "https://drive.google.com/file/d/1QPYrI1DkwvDG7ylPziO49UBQAsGECkIz/preview",
        constituency_Name: "மானாமதுரை",
        candidate_Name: "தமிழரசி",
        Party: "திமுக",
        votes: "89,364",
        margin: "14,091",
        vote_Rate: "44.01 %",
      },
      {
        mla_id: "188",
        affidate:
          "https://drive.google.com/file/d/1GHDmEjhgMk9VkYYO4SmAV8QZhX-twqGE/preview",
        constituency_Name: "மேலூர்",
        candidate_Name: "பெரியபுள்ளான் என்ற செல்வம்",
        Party: "அதிமுக",
        votes: "83,344",
        margin: "35,162",
        vote_Rate: "45.60 %",
      },
      {
        mla_id: "189",
        affidate:
          "https://drive.google.com/file/d/1GGnk-0qFryFLUP3UnhyqLcg1qrg8rWPB/preview",
        constituency_Name: "மதுரை கிழக்கு",
        candidate_Name: "பி.மூர்த்தி",
        Party: "திமுக",
        votes: "122,729",
        margin: "49,604",
        vote_Rate: "51.59 %",
      },
      {
        mla_id: "190",
        affidate:
          "https://drive.google.com/file/d/1U9AFTREFIdBB7k7SPtrHTSGtDPwbmXBb/preview",
        constituency_Name: "சோழவந்தான்",
        candidate_Name: "வெங்கடேசன்",
        Party: "திமுக",
        votes: "84,240",
        margin: "17,045",
        vote_Rate: "48.04 %",
      },
      {
        mla_id: "191",
        affidate:
          "https://drive.google.com/file/d/10bCTFsm_PBbruFLmUZRw-o7qtn6JyOED/preview",
        constituency_Name: "மதுரை வடக்கு",
        candidate_Name: "தளபதி",
        Party: "திமுக",
        votes: "73,010",
        margin: "22,916",
        vote_Rate: "46.64 %",
      },
      {
        mla_id: "192",
        affidate:
          "https://drive.google.com/file/d/1DU3TQEcFGRCDAVfPOaw5dsAeIy38XnMA/preview",
        constituency_Name: "மதுரை தெற்கு",
        candidate_Name: "பூமிநாதன்",
        Party: "மதிமுக",
        votes: "62,812",
        margin: "6,515",
        vote_Rate: "42.49 %",
      },
      {
        mla_id: "193",
        affidate:
          "https://drive.google.com/file/d/1jqqJdR0YtD5kMk7p5sknvJhPqOQ-R_d6/peview",
        constituency_Name: "மதுரை மத்திய தொகுதி",
        candidate_Name: "பி.டி.ஆர்.பழனிவேல் தியாகராஜன்",
        Party: "திமுக",
        votes: "73,205",
        margin: "34,176",
        vote_Rate: "48.99 %",
      },
      {
        mla_id: "194",
        affidate:
          "https://drive.google.com/file/d/1Wyhf1kAxzWmGQPDVKIWsSE3ZAOxlLMi-/preview",
        constituency_Name: "மதுரை மேற்கு",
        candidate_Name: "செல்லூர் கே. ராஜூ",
        Party: "அதிமுக",
        votes: "83,883",
        margin: "9,121",
        vote_Rate: "41.59 %",
      },
      {
        mla_id: "195",
        affidate:
          "https://drive.google.com/file/d/1LlbLFYliGRBNX7_oSYjjNG_mNX1cHlV8/preview",
        constituency_Name: "திருப்பரங்குன்றம்",
        candidate_Name: "ராஜன் செல்லப்பா",
        Party: "அதிமுக",
        votes: "103,683",
        margin: "29,489",
        vote_Rate: "43.96 %",
      },
      {
        mla_id: "196",
        affidate:
          "https://drive.google.com/file/d/1Nv-Ibp-8z5FIEyfDFrhrLicfMh8QBhyO/preview",
        constituency_Name: "திருமங்கலம்",
        candidate_Name: "ஆர்.பி. உதயகுமார்",
        Party: "அதிமுக",
        votes: "100,338",
        margin: "14,087",
        vote_Rate: "45.51 %",
      },
      {
        mla_id: "197",
        affidate:
          "https://drive.google.com/file/d/10c5shZ5sdUrAl-_5vWZpg-NTKBWkSaN3/preview",
        constituency_Name: "உசிலம்பட்டி",
        candidate_Name: "அய்யப்பன்",
        Party: "அதிமுக",
        votes: "71,255",
        margin: "7,477",
        vote_Rate: "33.53 %",
      },
      {
        mla_id: "198",
        affidate: "#",
        constituency_Name: "ஆண்டிபட்டி",
        candidate_Name: "மகாராஜன்",
        Party: "திமுக",
        votes: "93,541",
        margin: "8,538",
        vote_Rate: "44.64 %",
      },
      {
        mla_id: "199",
        affidate: "#",
        constituency_Name: "பெரியகுளம்",
        candidate_Name: "கே.எஸ்.சரவணக்குமார்",
        Party: "திமுக",
        votes: "92,251",
        margin: "21,321",
        vote_Rate: "45.71 %",
      },
      {
        mla_id: "200",
        affidate: "#",
        constituency_Name: "போடிநாயக்கனூர்",
        candidate_Name: "ஓ.பண்ணீர்செல்வம்",
        Party: "அதிமுக",
        votes: "100,050",
        margin: "11,021",
        vote_Rate: "46.58 %",
      },
      {
        mla_id: "201",
        affidate: "#",
        constituency_Name: "கம்பம்",
        candidate_Name: "கம்பம் ராமகிருஷ்ணன்",
        Party: "திமுக",
        votes: "104,800",
        margin: "42,413",
        vote_Rate: "51.81 %",
      },
      {
        mla_id: "202",
        affidate:
          "https://drive.google.com/file/d/1br_UjiE19fb5zMWH-TP89H-2mqx0mDUO/preview",
        constituency_Name: "ராஜபாளையம்",
        candidate_Name: "சௌ.தங்கபாண்டியன்",
        Party: "திமுக",
        votes: "74,158",
        margin: "3,898",
        vote_Rate: "41.50 %",
      },
      {
        mla_id: "203",
        affidate:
          "https://drive.google.com/file/d/1QN8KSivhTnj8Sfejy2-fXuAr8AeH2-FY/preview",
        constituency_Name: "ஸ்ரீ வில்லிபுத்தூர்",
        candidate_Name: "மான்ராஜ்",
        Party: "அதிமுக",
        votes: "70,475",
        margin: "12,738",
        vote_Rate: "38.09 %",
      },
      {
        mla_id: "204",
        affidate:
          "https://drive.google.com/file/d/1bpctMPOSy78aXuOSZZDn6yFyRmEpO6YK/preview",
        constituency_Name: "சாத்தூர்",
        candidate_Name: "ரகுராமன்",
        Party: "மதிமுக",
        votes: "74,174",
        margin: "11,179",
        vote_Rate: "38.68 %",
      },
      {
        mla_id: "205",
        affidate:
          "https://drive.google.com/file/d/1HeljvAmEkhBrij3TMb-odn7Q4d7Ykp_8/preview",
        constituency_Name: "சிவகாசி",
        candidate_Name: "அசோகன்",
        Party: "காங்.",
        votes: "78,947",
        margin: "17,319",
        vote_Rate: "42.66 %",
      },
      {
        mla_id: "206",
        affidate:
          "https://drive.google.com/file/d/1lUsU1-5PkoMLac7UA4HETSua13M6rFUO/preview",
        constituency_Name: "விருதுநகர்",
        candidate_Name: "ஏஆர்ஆர் சீனிவாசன்",
        Party: "திமுக",
        votes: "73,297",
        margin: "21,339",
        vote_Rate: "45.32 %",
      },
      {
        mla_id: "207",
        affidate:
          "https://drive.google.com/file/d/1t5mMJ-nTMs-zlTpoWxlXx3tQ8gJbh8W7/preview",
        constituency_Name: "அருப்புக்கோட்டை",
        candidate_Name: "எஸ்.எஸ் .ஆர் ராமச்சந்திரன்",
        Party: "திமுக",
        votes: "91,040",
        margin: "39,034",
        vote_Rate: "53.18 %",
      },
      {
        mla_id: "208",
        affidate:
          "https://drive.google.com/file/d/13R9h3H7YFdxvu0asWRjJ8hJvaxKXbkHq/preview",
        constituency_Name: "திருச்சுழி",
        candidate_Name: "தங்கம் தென்னரசு",
        Party: "திமுக",
        votes: "102,225",
        margin: "60,992",
        vote_Rate: "59.15 %",
      },
      {
        mla_id: "209",
        affidate:
          "https://drive.google.com/file/d/1M8DWC8tzv_OvJi257PHGQPA-r38zOFA9/preview",
        constituency_Name: "பரமக்குடி",
        candidate_Name: "முருகேசன்",
        Party: "திமுக",
        votes: "84,864",
        margin: "13,285",
        vote_Rate: "46.59 %",
      },
      {
        mla_id: "210",
        affidate:
          "https://drive.google.com/file/d/1G92hTBQQZF2n4L1my8n75wAwwbrQvdlT/preview",
        constituency_Name: "திருவாடானை",
        candidate_Name: "கருமாணிக்கம்",
        Party: "காங்.",
        votes: "79,364",
        margin: "13,852",
        vote_Rate: "39.33 %",
      },
      {
        mla_id: "211",
        affidate:
          "https://drive.google.com/file/d/19xYmR5kSMqxgrndjI4vfmEyhoFr_2366/preview",
        constituency_Name: "ராமநாதபுரம்",
        candidate_Name: "காதர் பாட்ஷா எ முத்துராமலிங்கம்",
        Party: "திமுக",
        votes: "111,082",
        margin: "50,479",
        vote_Rate: "51.88 %",
      },
      {
        mla_id: "212",
        affidate:
          "https://drive.google.com/file/d/1MzOU9LTKB-zk83n_Mw8_SJyfmwJSZ7JL/preview",
        constituency_Name: "முதுகுளத்தூர்",
        candidate_Name: "ராஜ கண்ணப்பன்",
        Party: "திமுக",
        votes: "101,901",
        margin: "20,721",
        vote_Rate: "46.06 %",
      },
      {
        mla_id: "213",
        constituency_Name: "விளாத்திக்குளம்",
        affidate:
          "https://drive.google.com/file/d/1bD83Ea0wYhr7LpmVM6zL6zavY6fM1TcK/preview",
        candidate_Name: "மார்க்கண்டேயன்",
        Party: "திமுக",
        votes: "90,348",
        margin: "38,549",
        vote_Rate: "54.05 %",
      },
      {
        mla_id: "214",
        affidate:
          "https://drive.google.com/file/d/1kkjvI-ipt5tHzVwT9dxsIoe9mwt892pc/preview",
        constituency_Name: "தூத்துக்குடி",
        candidate_Name: "கீதா ஜீவன்",
        Party: "திமுக",
        votes: "92,314",
        margin: "50,310",
        vote_Rate: "49.00 %",
      },
      {
        mla_id: "215",
        affidate:
          "https://drive.google.com/file/d/1tQScd8HE36Mu_7-OkRgM9NHtZ7z75-2W/preview",
        constituency_Name: "திருச்செந்தூர்",
        candidate_Name: "அனிதா ராதாகிருஷ்ணன்",
        Party: "திமுக",
        votes: "88,274",
        margin: "25,263",
        vote_Rate: "50.58 %",
      },
      {
        mla_id: "216",
        affidate:
          "https://drive.google.com/file/d/1BfKVWYAuuZ_xOZfMl55JF4UblK2wWV_m/preview",
        constituency_Name: "ஸ்ரீவைகுண்டம்",
        candidate_Name: "ஊர்வசி அமிர்தராஜ்",
        Party: "காங்.",
        votes: "76,843",
        margin: "17,372",
        vote_Rate: "46.75 %",
      },
      {
        mla_id: "217",
        affidate:
          "https://drive.google.com/file/d/1qUjcCF8LwrhzxCnE018nwjDnmiq2xdPV/preview",
        constituency_Name: "ஒட்டப்பிடாரம்",
        candidate_Name: "சண்முகையா",
        Party: "திமுக",
        votes: "73,110",
        margin: "8,510",
        vote_Rate: "41.11 %",
      },
      {
        mla_id: "218",
        affidate:
          "https://drive.google.com/file/d/1TGdSNgym3Ru1MLgbzYYiGa_ghoPSWwCy/preview",
        constituency_Name: "கோவில்பட்டி",
        candidate_Name: "கடம்பூர் ராஜூ",
        Party: "அதிமுக",
        votes: "68,556",
        margin: "12,403",
        vote_Rate: "37.89 %",
      },
      {
        mla_id: "219",
        affidate:
          "https://drive.google.com/file/d/1TknjiSzD0deq_rjtk0tPUuJEy61Dyliv/preview",
        constituency_Name: "சங்கரன்கோவில்",
        candidate_Name: "இ.ராஜா",
        Party: "திமுக",
        votes: "71,347",
        margin: "5,297",
        vote_Rate: "38.92 %",
      },
      {
        mla_id: "220",
        affidate:
          "https://drive.google.com/file/d/1ZWTDDOKjcioBJS0d3TbU1q7Oh30Oehqy/preview",
        constituency_Name: "வாசுதேவநல்லூர்",
        candidate_Name: "சதன்திருமலைக்குமார்",
        Party: "மதிமுக",
        votes: "68,730",
        margin: "2,367",
        vote_Rate: "39.08 %",
      },
      {
        mla_id: "221",
        affidate:
          "https://drive.google.com/file/d/13aYFffOL83MzsewpEIZEF3SDFu0MSOnG/preview",
        constituency_Name: "கடையநல்லூர்",
        candidate_Name: "கிருஷ்ணமுரளி",
        Party: "அதிமுக",
        votes: "88,474",
        margin: "24,349",
        vote_Rate: "43.08 %",
      },
      {
        mla_id: "222",
        affidate:
          "https://drive.google.com/file/d/1LtYh4c06n2Rwr-6E5Ca2tbzVTV2KWTS_/preview",
        constituency_Name: "தென்காசி",
        candidate_Name: "பழனி நாடார்",
        Party: "காங்.",
        votes: "89,315",
        margin: "370",
        vote_Rate: "41.71 %",
      },
      {
        mla_id: "223",
        affidate:
          "https://drive.google.com/file/d/19u8iKYQdXdsZDhgZGcLPnL14281PO7vC/preview",
        constituency_Name: "ஆலங்குளம்",
        candidate_Name: "மனோஜ் பாண்டியன்",
        Party: "அதிமுக",
        votes: "74,153",
        margin: "3,539",
        vote_Rate: "36.44 %",
      },
      {
        mla_id: "224",
        affidate:
          "https://drive.google.com/file/d/1ipmyw_FPO0qt2KZjFjus_U5qSQUt6Ldg/npreview",
        constituency_Name: "திருநெல்வேலி",
        candidate_Name: "நயினார் நாகேந்திரன்",
        Party: "பாஜக",
        votes: "92,282",
        margin: "23,107",
        vote_Rate: "46.70 %",
      },
      {
        mla_id: "225",
        affidate:
          "https://drive.google.com/file/d/1xJewmQzqUhGeb3Ywlx8vU8Yq3ApJpS4Y/preview",
        constituency_Name: "அம்பாசமுத்திரம்",
        candidate_Name: "இசக்கி சுப்பையா",
        Party: "அதிமுக",
        votes: "85,211",
        margin: "16,915",
        vote_Rate: "47.96 %",
      },
      {
        mla_id: "226",
        affidate:
          "https://drive.google.com/file/d/1fzNhOSIIejM8bZ3kZhjDnMgI2BoHrVB-/preview",
        constituency_Name: "பாளையம்கோட்டை",
        candidate_Name: "அப்துல் வஹாப்",
        Party: "திமுக",
        votes: "89,117",
        margin: "52,141",
        vote_Rate: "55.32 %",
      },
      {
        mla_id: "227",
        affidate:
          "https://drive.google.com/file/d/1W9pKTo_7oKPhrbeaQFpoV2DTLXotDBvE/preview",
        constituency_Name: "நாங்குநேரி",
        candidate_Name: "ரூபி மனோகரன்",
        Party: "காங்.",
        votes: "75,902",
        margin: "16,486",
        vote_Rate: "39.43 %",
      },
      {
        mla_id: "228",
        affidate:
          "https://drive.google.com/file/d/1yGJXsUFQtJEKJ2PQ47o7nWBrgRxBRP3W/preview",
        constituency_Name: "ராதாபுரம்",
        candidate_Name: "மு. அப்பாவு",
        Party: "திமுக",
        votes: "82,331",
        margin: "5,925",
        vote_Rate: "43.95 %",
      },
      {
        mla_id: "229",
        affidate:
          "https://drive.google.com/file/d/1mEdAMXoe4lFJu2PCPFCwWJVCRry9b6ap/preview",
        constituency_Name: "கன்னியாகுமரி",
        candidate_Name: "தளவாய் சுந்தரம்",
        Party: "அதிமுக",
        votes: "109,745",
        margin: "16,213",
        vote_Rate: "48.80 %",
      },
      {
        mla_id: "230",
        affidate:
          "https://drive.google.com/file/d/1GU2973eEVH--ycVI8Q-HxQfp18yx-KIY/preview",
        constituency_Name: "நாகர்கோவில்",
        candidate_Name: "எம்.ஆர். காந்தி",
        Party: "பாஜக",
        votes: "88,804",
        margin: "11,669",
        vote_Rate: "48.21 %",
      },
      {
        mla_id: "231",
        affidate:
          "https://drive.google.com/file/d/18Wltsx0aVu5e0N9_-hHRzv5M5hpjPbFk/preview",
        constituency_Name: "குளச்சல்",
        candidate_Name: "பிரின்ஸ்",
        Party: "காங்.",
        votes: "90,681",
        margin: "24,832",
        vote_Rate: "49.56 %",
      },
      {
        mla_id: "232",
        affidate:
          "https://drive.google.com/file/d/1fgIJBitwH3OpAZ5JvK9rLJP9zCs5j4Bu/preview",
        constituency_Name: "பத்மநாபபுரம்",
        candidate_Name: "மனோ தங்கராஜ்",
        Party: "திமுக",
        votes: "87,744",
        margin: "26,885",
        vote_Rate: "51.57 %",
      },
      {
        mla_id: "233",
        affidate:
          "https://drive.google.com/file/d/1gixlMKPoGNmYOK6jGX0Zlmec0ilM5g2J/prview",
        constituency_Name: "விளவங்கோடு",
        candidate_Name: "விஜயதாரணி",
        Party: "காங்.",
        votes: "87,473",
        margin: "28,669",
        vote_Rate: "52.12 %",
      },
      {
        mla_id: "234",
        affidate:
          "https://drive.google.com/file/d/1lrxLg2BwP9W5gQtFeR0h4XFNs8GJAAt3/preview",
        constituency_Name: "கிள்ளியூர்",
        candidate_Name: "ராஜேஷ்குமார்",
        Party: "காங்.",
        votes: "101,541",
        margin: "55,400",
        vote_Rate: "59.76 %",
      },
    ])
  );
}

if (JSON.parse(localStorage.getItem("politician_data"))) {
  console.log("contitue");
} else {
  localStorage.setItem(
    "politician_data",
    JSON.stringify([
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/m-k-stalin.png",
          alter: "மு. க. ஸ்டாலின்",
        },
        name: {
          tname: "மு. க. ஸ்டாலின்",
          ename: "M. K. Stalin",
        },

        position: "முதலமைச்சர்",
        status: true,
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        id: 1,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/udhayanithi.png",
          alter: "udhayanithi stalin",
        },
        name: {
          tname: "உதயநிதி ஸ்டாலின்",
          ename: "Udhayanidhi Stalin",
        },

        position: "விளையாட்டு மேம்பாட்டுத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 2,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/duraimurugan.png",
          alter: "DURAIMURUGAN",
        },
        name: {
          tname: "துரைமுருகன்",
          ename: "Durai Murugan",
        },

        position: "நீர்வளத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 3,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/k-n-neru.png",
          alter: "KN NERU IMAGE",
        },
        name: {
          tname: "கே. என். நேரு",
          ename: "K. N. Nehru",
        },

        position: "நகராட்சி நிர்வாக அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 4,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/periyasami.png",
          alter: "PERIYASAMI IMAGE",
        },
        name: {
          tname: "ஐ. பெரியசாமி ",
          ename: "I. Periyasamy",
        },

        position: "ஊரக வளர்ச்சித்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 5,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/ponmudi.png",
          alter: "PONMUDI IMAGE",
        },
        name: {
          tname: "க. பொன்முடி",
          ename: "K. Ponmudy",
        },

        position: " உயர்கல்வித்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 6,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/ev-velu.png",
          alter: "udhayanithi stalin",
        },
        name: {
          tname: "எ. வ. வேலு",
          ename: "E. V. Velu",
        },

        position: "பொதுப்பணித்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 7,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/pannirselvam.png",
          alter: "udhayanithi stalin",
        },
        name: {
          tname: "எம்.ஆர்.கே. பன்னீர்செல்வம்",
          ename: "M. R. K. Panneerselvam",
        },

        position: "விவசாயம் மற்றும் விவசாயிகள் நலத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 8,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/thennarasu.png",
          alter: "thangam thennarasu",
        },
        name: {
          tname: "தங்கம் தென்னரசு",
          ename: "Thangam Thennarasu",
        },

        position: "நிதி மற்றும் மனிதவள மேலாண்மை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 9,
      },
      {
        img: {
          sourse:
            "https://freeimghost.net/images/2023/05/04/kssr-ramachandiran.png",
          alter: "ramachandiran",
        },
        name: {
          tname: "ஆர்.ராமச்சந்திரன்",
          ename: "Ramachandran",
        },

        position: "தமிழக வருவாய் துறை",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 10,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/regubathy.png",
          alter: "ragupahty",
        },
        name: {
          tname: "எஸ். ரகுபதி",
          ename: "S. Regupathy",
        },

        position: "சட்ட அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 11,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/muthusamy.png",
          alter: "muthusaami",
        },
        name: {
          tname: "சு. முத்துசாமி",
          ename: "S. Muthusamy",
        },

        position: "வீட்டுவசதி மற்றும் நகர்ப்புற வளர்ச்சித் துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 12,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/periyasami.png",
          alter: "periyasami",
        },
        name: {
          tname: "கே. ஆர். பெரியகருப்பன்",
          ename: "K.R.Periyakaruppan",
        },

        position: "கூட்டுறவுத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 13,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/anbarasan.png",
          alter: "anbarasan",
        },
        name: {
          tname: "தா. மோ. அன்பரசன்",
          ename: "T. M. Anbarasan",
        },

        position: "ஊரகத் துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 14,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/saminathan.png",
          alter: "saaminathan",
        },
        name: {
          tname: "மு. பெ. சாமிநாதன்",
          ename: "M. P. Saminathan",
        },

        position: "தமிழ் வளர்ச்சி, செய்தி மற்றும் விளம்பரத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 15,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/geetha.png",
          alter: "keetha jeevan",
        },
        name: {
          tname: "பெ. கீதா ஜீவன்",
          ename: "Geetha Jeevan",
        },

        position: "சமூக நலன் மற்றும் பெண்கள் அதிகாரமளித்தல் அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 16,
      },

      {
        img: {
          sourse:
            "https://freeimghost.net/images/2023/05/04/anitha-rathkrishnan.png",
          alter: "anitharadhakirishanan",
        },
        name: {
          tname: "அனிதா ராதாகிருஷ்ணன்",
          ename: "Anitha R. Radhakrishnan",
        },

        position:
          "மீன்வளம், மீனவர் நலன் மற்றும் கால்நடை பராமரிப்புத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 17,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/sivakumar.png",
          alter: "sivakumar",
        },
        name: {
          tname: "S .சிவகுமார்",
          ename: "S S. Sivakumar",
        },

        position: "போக்குவரத்து",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 18,
      },

      {
        img: {
          sourse:
            "https://freeimghost.net/images/2023/05/04/K.-Ramachandran.png",
          alter: "ramachanran",
        },
        name: {
          tname: "கே.கே.எஸ்.எஸ்.ஆர்.இராமச்சந்திரன்",
          ename: "K. Ramachandran",
        },

        position: "வருவாய் மற்றும் பேரிடர் மேலாண்மை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 19,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/sakkrabani.png",
          alter: "sakrabaani",
        },
        name: {
          tname: "அர. சக்கரபாணி",
          ename: "R. Sakkarapani",
        },

        position: " உணவு மற்றும் குடிமைப் பொருள் வழங்கல் துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 20,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/sendil_balji.png",
          alter: "sendhilbalaji",
        },
        name: {
          tname: "வே. செந்தில்பாலாஜி",
          ename: "V. Senthilbalaji",
        },

        position: "மின்சாரம், மதுவிலக்கு துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 21,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/gandhi.png",
          alter: "rs gandhi",
        },
        name: {
          tname: "ஆர். காந்தி",
          ename: "R. Gandhi",
        },

        position: "கைத்தறி மற்றும் ஜவுளித்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 22,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/subramaniya.png",
          alter: "subramaniyan",
        },
        name: {
          tname: "மா. சுப்பிரமணியம்",
          ename: "M. Subramaniam",
        },

        position: "மருத்துவம் மற்றும் குடும்ப நலத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 23,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/moorthy.png",
          alter: "moorhty p image",
        },
        name: {
          tname: "பி. மூர்த்தி",
          ename: "Moorthy P",
        },

        position: "வணிக வரிகள் மற்றும் பதிவுத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 24,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/rajakannappan.png",
          alter: "udhayanithi stalin",
        },
        name: {
          tname: "இராஜ கண்ணப்பன்",
          ename: "R. S. Raja Kannappan",
        },

        position: "பிற்படுத்தப்பட்டோர் நலத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 25,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/segar_babu.png",
          alter: "segar babu",
        },
        name: {
          tname: "பி. கே. சேகர் பாபு",
          ename: "P. K. Sekar Babu",
        },

        position: "இந்து சமய மற்றும் அறநிலையத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 26,
      },

      {
        img: {
          sourse:
            "https://freeimghost.net/images/2023/05/04/planivel-thiyagaran.png",
          alter: "palanivel thigarajan",
        },
        name: {
          tname: "பழனிவேல் தியாகராஜன்",
          ename: "Palanivel Thiagarajan",
        },

        position: "தகவல் தொழில்நுட்பம் மற்றும் டிஜிட்டல் சேவைகள் அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 27,
      },

      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/anbil-magesh.png",
          alter: "Anbil Mahesh Poyyamozhi",
        },
        name: {
          tname: "அன்பில் மகேஷ்",
          ename: "Anbil Mahesh Poyyamozhi",
        },

        position: " பள்ளிக் கல்வித்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 29,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/thangaraj.png",
          alter: "mano thangaraj",
        },
        name: {
          tname: "மனோ தங்கராஜ்",
          ename: "T. Mano Thangaraj",
        },

        position: "பால் மற்றும் பால்வள மேம்பாட்டுத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 30,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/14/trp_raja-removebg-preview.png",
          alter: "டி.ஆர்.பி. ராஜா",
        },
        name: {
          tname: "டி.ஆர்.பி. ராஜா",
          ename: "T.R.B. Rajaa",
        },

        position: "தொழில்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 31,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/masthan.png",
          alter: "செஞ்சி கே.எஸ். மஸ்தான்",
        },
        name: {
          tname: "செஞ்சி கே.எஸ். மஸ்தான்",
          ename: "Gingee K.S. Masthan",
        },

        position: "வெளிநாடு வாழ் தமிழர்கள் நலத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 32,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/04/meiyanathan.png",
          alter: "Siva V. Meyyanathan",
        },
        name: {
          tname: "சிவா.வி.மெய்யநாதன்",
          ename: "Siva V. Meyyanathan",
        },

        position: "சுற்றுச்சூழல், பருவநிலை மாற்ற அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 33,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/14/c_v_ganesan-removebg-preview.png",
          alter: "mano thangaraj",
        },
        name: {
          tname: "ச கணேசன்",
          ename: "C.V. Ganesan",
        },

        position: "தொழிலாளர் நலன் மற்றும் திறன் மேம்பாட்டுத் துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 34,
      },
      {
        img: {
          sourse: "https://freeimghost.net/images/2023/05/14/kazhalvizhi-removebg-preview.png",
          alter: "N. Kayalvizhi Selvaraj",
        },
        name: {
          tname: "என்.கயல்விழி செல்வராஜ்",
          ename: "N. Kayalvizhi Selvaraj",
        },

        position: "ஆதி திராவிடர் நலத்துறை அமைச்சர்",
        party_name: "திராவிட முன்னேற்றக் கழகம்",
        status: true,
        id: 35,
      },
    ])
  );
}

const past_leader = [
  {
    id: "1",
    name: "மு.க.ஸ்டாலின்",
    image: "https://freeimghost.net/images/2023/05/04/m-k-stalin.png",
    to: "07 May 2021",
    from: "Present",
    party_name: "திமுக",
  },
  {
    id: "2",
    name: "எடப்பாடி கே. பழனிச்சாமி",
    image: "https://freeimghost.net/images/2023/05/07/edappadi.jpeg",
    to: "16 Feb 2017",
    from: "03 May 2021",
    party_name: "அதிமுக",
  },
  {
    id: "3",
    name: "ஓ.பன்னீர் செல்வம்",
    image: "https://freeimghost.net/images/2023/05/07/pannirselvam-o.jpeg",
    to: "06 Dec 2016",
    from: "15 Feb 2017",
    party_name: "அதிமுக",
  },
  {
    id: "4",
    name: "ஜெ.ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "24 May 2016",
    from: "04 Dec 2016",
    party_name: "அதிமுக",
  },
  {
    id: "5",
    name: "ஜெ. ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "23 May 2015",
    from: "23 May 2016",
    party_name: "அதிமுக",
  },
  {
    id: "6",
    name: "ஜெ. ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "29 Sep 2014",
    from: "22 May 2015",
    party_name: "அதிமுக",
  },
  {
    id: "7",
    name: "ஜெ. ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "16 May 2011",
    from: "27 Sep 2014",
    party_name: "அதிமுக",
  },
  {
    id: "8",
    name: "மு.கருணாநிதி",
    image: "https://freeimghost.net/images/2023/05/07/karunathi.jpeg",
    to: "13 May 2006",
    from: "15 May 2011",
    party_name: "திமுக",
  },
  {
    id: "9",
    name: "ஜெ. ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "02 Mar 2002",
    from: "12 May 2006",
    party_name: "அதிமுக",
  },
  {
    id: "10",
    name: "ஓ.பன்னீர் செல்வம்",
    image: "https://freeimghost.net/images/2023/05/07/pannirselvam-o.jpeg",
    to: "21 Sep 2001",
    from: "01 Mar 2002",
    party_name: "அதிமுக",
  },
  {
    id: "11",
    name: "ஜெ. ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "14 May 2001",
    from: "21 Sep 2001",
    party_name: "அதிமுக",
  },
  {
    id: "12",
    name: "மு.கருணாநிதி",
    image: "https://freeimghost.net/images/2023/05/07/karunathi.jpeg",
    to: "13 May 1996",
    from: "13 May 2001",
    party_name: "திமுக",
  },
  {
    id: "13",
    name: "ஜெ. ஜெயலலிதா",
    image: "https://freeimghost.net/images/2023/05/07/jayalitha.jpeg",
    to: "24 Jun 1991",
    from: "13 May 1996",
    party_name: "அதிமுக",
  },
  {
    id: "14",
    name: "ஜனாதிபதி ஆட்சி",
    image: "https://freeimghost.net/images/2023/05/07/govt.png",
    to: "30 Jan 1991",
    from: "24 Jun 1991",
    party_name: "திமுக",
  },
  {
    id: "15",
    name: "மு.கருணாநிதி",
    image: "https://freeimghost.net/images/2023/05/07/karunathi.jpeg",
    to: "27 Jan 1989",
    from: "30 Jan 1991",
    party_name: "திமுக",
  },
  {
    id: "16",
    name: "ஜனாதிபதி ஆட்சி",
    image: "https://freeimghost.net/images/2023/05/07/govt.png",
    to: "30 Jan 1988",
    from: "27 Jan 1989",
    party_name: "",
  },
  {
    id: "17",
    name: "ஜானகி ராமச்சந்திரன்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "07 Jan 1988",
    from: "30 Jan 1988",
    party_name: "அதிமுக",
  },
  {
    id: "18",
    name: "வி.ஆர்.நெடுஞ்செழியன்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "24 Dec 1987",
    from: "07 Jan 1988",
    party_name: "அதிமுக",
  },
  {
    id: "19",
    name: "எம்.ஜி. ராமச்சந்திரன்",
    image: "https://freeimghost.net/images/2023/05/07/emjr.jpeg",
    to: "10 Feb 1985",
    from: "24 Dec 1987",
    party_name: "அதிமுக",
  },
  {
    id: "20",
    name: "எம்.ஜி.ராமச்சந்திரன்",
    image: "https://freeimghost.net/images/2023/05/07/emjr.jpeg",
    to: "09 Jun 1980",
    from: "15 Nov 1984",
    party_name: "அதிமுக",
  },
  {
    id: "21",
    name: "ஜனாதிபதி ஆட்சி",
    image: "https://freeimghost.net/images/2023/05/07/govt.png",
    to: "17 Feb 1980",
    from: "09 Jun 1980",
    party_name: "",
  },
  {
    id: "22",
    name: "எம்.ஜி.ராமச்சந்திரன்",
    image: "https://freeimghost.net/images/2023/05/07/emjr.jpeg",
    to: "01 Jul 1977",
    from: "17 Feb 1980",
    party_name: "அதிமுக",
  },
  {
    id: "23",
    name: "ஜனாதிபதி ஆட்சி",
    image: "https://freeimghost.net/images/2023/05/07/govt.png",
    to: "31 Jan 1976",
    from: "30 Jun 1977",
    party_name: "",
  },
  {
    id: "24",
    name: "மு.கருணாநிதி",
    image: "https://freeimghost.net/images/2023/05/07/karunathi.jpeg",
    to: "15 Mar 1971",
    from: "31 Jan 1976",
    party_name: "திமுக",
  },
  {
    id: "25",
    name: "மு.கருணாநிதி",
    image: "https://freeimghost.net/images/2023/05/07/karunathi.jpeg",
    to: "10 Feb 1969",
    from: "04 Jan 1971",
    party_name: "திமுக",
  },
  {
    id: "26",
    name: "வி.ஆர். நெடுஞ்செழியன்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "03 Feb 1969",
    from: "10 Feb 1969",
    party_name: "திமுக",
  },
  {
    id: "27",
    name: "சி.என்.அண்ணாதுரை",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "01 Mar 1967",
    from: "03 Feb 1969",
    party_name: "திமுக",
  },
  {
    id: "28",
    name: "சி.என். அண்ணாதுரை",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "06 Mar 1967",
    from: "14 Jan 1969",
    party_name: "திமுக",
  },
  {
    id: "29",
    name: "எம். பக்தவச்சலம்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "02 Oct 1963",
    from: "06 Mar 1967",
    party_name: "காங்.",
  },
  {
    id: "30",
    name: "கு. காமராஜ்",
    image: "https://freeimghost.net/images/2023/05/07/kamaraj-cm.jpeg",
    to: "15 Mar 1962",
    from: "02 Oct 1963",
    party_name: "காங்.",
  },
  {
    id: "31",
    name: "கு. காமராஜ்",
    image: "https://freeimghost.net/images/2023/05/07/kamaraj-cm.jpeg",
    to: "13 Apr 1957",
    from: "01 Mar 1962",
    party_name: "காங்.",
  },
  {
    id: "32",
    name: "கு. காமராஜ்",
    image: "https://freeimghost.net/images/2023/05/07/kamaraj-cm.jpeg",
    to: "13 Apr 1954",
    from: "31 Mar 1957",
    party_name: "காங்.",
  },
  {
    id: "33",
    name: "சி. ராஜகோபாலச்சாரி",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "10 Apr 1952",
    from: "13 Apr 1954",
    party_name: "காங்.",
  },
  {
    id: "34",
    name: "பி.எஸ்.குமாரசாமி ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "26 Jan 1950",
    from: "10 Apr 1952",
    party_name: "காங்.",
  },
  {
    id: "35",
    name: "பி.எஸ். குமாரசாமி ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "06 Apr 1949",
    from: "26 Jan 1950",
    party_name: "காங்.",
  },
  {
    id: "36",
    name: "ஓ.பி. ராமசாமி ரெட்டியார்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "23 Mar 1947",
    from: "06 Apr 1949",
    party_name: "காங்.",
  },
  {
    id: "37",
    name: "தெங்குட்டுரி பிரகாசம்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "30 Apr 1946",
    from: "23 Mar 1947",
    party_name: "காங்.",
  },
  {
    id: "38",
    name: "ஜனாதிபதி ஆட்சி",
    image: "https://freeimghost.net/images/2023/05/07/govt.png",
    to: "29 Oct 1939",
    from: "30 Apr 1946",
    party_name: "காங்.",
  },
  {
    id: "39",
    name: "சி. ராஜகோபாலாச்சாரி",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "14 Jul 1937",
    from: "29 Oct 1939",
    party_name: "காங்.",
  },
  {
    id: "40",
    name: "கர்மா வெங்கட ரெட்டி நாயுடு",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "01 Apr 1937",
    from: "14 Jul 1937",
    party_name: "Interim provisional ministry",
  },
  {
    id: "41",
    name: "பொப்பிலி ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "24 Aug 1936",
    from: "01 Apr 1937",
    party_name: "Justice Party",
  },
  {
    id: "42",
    name: "பி.டி.ராஜன்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "04 Apr 1936",
    from: "24 Aug 1936",
    party_name: "Justice Party",
  },
  {
    id: "43",
    name: "பொப்பிலி ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "05 Nov 1934",
    from: "04 Apr 1936",
    party_name: "Justice Party",
  },
  {
    id: "44",
    name: "பொப்பிலி ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "05 Nov 1932",
    from: "05 Nov 1934",
    party_name: "Justice Party",
  },
  {
    id: "45",
    name: "பி. முனுசாமி நாயுடு",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "27 Oct 1930",
    from: "05 Nov 1932",
    party_name: "Justice Party",
  },
  {
    id: "46",
    name: "பி.சுப்பராயன்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "04 Dec 1926",
    from: "27 Oct 1930",
    party_name: "Unaffiliated",
  },
  {
    id: "47",
    name: "பனகல் ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "19 Nov 1923",
    from: "04 Dec 1926",
    party_name: "Justice Party",
  },
  {
    id: "48",
    name: "பனகல் ராஜா",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "11 Jul 1921",
    from: "11 Sep 1923",
    party_name: "Justice Party",
  },
  {
    id: "49",
    name: "சுப்பராயலு ரெட்டியார்",
    image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
    to: "17 Dec 1920",
    from: "11 Jul 1921",
    party_name: "Justice Party",
  },
];
localStorage.setItem("past_leader", JSON.stringify(past_leader));

if (JSON.parse(localStorage.getItem("governor_details"))) {
  console.log("contitue");
} else {
  localStorage.setItem(
    "governor_details",
    JSON.stringify([
      {
        id: "1",
        governor_name: "ஆர்.என்.ரவி",
        image: "https://freeimghost.net/images/2023/05/07/ravi-gover.jpeg",
        position: "ஆளுநர்",
        from: "10 September 2021",
        to: "Present Governor",
      },
      {
        id: "2",
        governor_name: "பன்வாரிலால் புரோஹித்",
        image: "https://freeimghost.net/images/2023/05/07/pannish-gover.jpeg",
        from: "6 October 2017",
        to: "10 September 2021",
      },
      {
        id: "3",
        governor_name: "சி. வித்யாசாகர ராவ்",
        image: "https://freeimghost.net/images/2023/05/07/rav-gover.jpeg",
        from: "2 September 2016",
        to: "October 6, 2017",
      },
      {
        id: "4",
        governor_name: "கோனிஜெட்ஜி ரோசய்யா",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "31 August 2011",
        to: "August 30, 2016",
      },
      {
        id: "5",
        governor_name: "சுர்ஜித் சிங் பர்ணாலா",
        image: "https://freeimghost.net/images/2023/05/07/sigh-governer.jpeg",
        from: "3 November 2004",
        to: "August 31, 2011",
      },
      {
        id: "6",
        governor_name: "பி.எஸ். ராம் மோகன ராவ்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "18 January 2002",
        to: "November 3, 2004",
      },
      {
        id: "7",
        governor_name: "சி. ரங்கராஜன்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "3 July 2001",
        to: "January 18, 2002",
      },
      {
        id: "8",
        governor_name: "எம். பாத்திமா பீவி",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "25 January 1997",
        to: "July 3, 2001",
      },
      {
        id: "9",
        governor_name: "கிருஷ்ணகாந்த்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "2 December 1996",
        to: "January 25, 1997",
      },
      {
        id: "10",
        governor_name: "மரி சென்னா ரெட்டி",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "31 May 1993",
        to: "2 December 1996",
      },
      {
        id: "11",
        governor_name: "பீஷ்ம நாராயண் சிங்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "15 February 1991",
        to: "May 31, 1993",
      },
      {
        id: "12",
        governor_name: "சுர்ஜித் சிங் பர்ணாலா",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "24 May 1990",
        to: "February 15, 1991",
      },
      {
        id: "13",
        governor_name: "பி.சி. அலெக்சாண்டர்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "17 February 1988",
        to: "May 24, 1990",
      },
      {
        id: "14",
        governor_name: "சுந்தர் லால் குரானா",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "3 September 1982",
        to: "February 17, 1988",
      },
      {
        id: "15",
        governor_name: "சாதிக் அலி",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "4 November 1980",
        to: "September 3, 1982",
      },
      {
        id: "16",
        governor_name: "எம்எம் இஸ்மாயில்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "27 October 1980",
        to: "November 4, 1980",
      },
      {
        id: "17",
        governor_name: "பிரபுதாஸ் பட்வாரி",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "27 April 1977",
        to: "October 27, 1980",
      },
      {
        id: "18",
        governor_name: "பி.கோவிந்தன் நாயர்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "9 April 1977",
        to: "April 27, 1977",
      },
      {
        id: "19",
        governor_name: "மகோன்லால் சுக்காடியா",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "16 June 1976",
        to: "April 8, 1977",
      },
      {
        id: "20",
        governor_name: "கோடராஸ் காளிதாஸ் ஷா",
        from: "27 May 1971",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "June 16, 1976",
      },
      {
        id: "21",
        governor_name: "சர்தார் உஜ்ஜைல் சிங்",
        from: "14 January 1969",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "May 27, 1971",
      },
      {
        id: "22",
        governor_name: "சர்தார் உஜ்ஜைல் சிங் (1967 ஜூன் 16 வரை)",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "28 June 1966",
        to: "14 January 1969",
      },
      {
        id: "23",
        governor_name: "மகாராஜாரா ஸ்ரீ ஜெயசாமராஜ உடையார் பகதூர்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "7 December 1965",
        to: "28 June 1966",
      },
      {
        id: "24",
        governor_name: "ப. சந்திரா ரெட்டி",
        from: "24 November 1964",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "7 December 1965",
      },
      {
        id: "25",
        governor_name: "மகாராஜா சர் ஜெயசாமராஜ உடையார் பகதூர்",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "4 May 1964",
        to: "24 November 1964",
      },
      {
        id: "26",
        governor_name: "பிஷ்ணுராம் மேதி",
        from: "24 January 1958",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "4 May 1964",
      },
      {
        id: "27",
        governor_name: "பகல வெங்கட ராஜமண்ணார்",
        from: "1 October 1957",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "24 January 1958",
      },
      {
        id: "28",
        governor_name: "ஏ.ஜே. ஜான்",
        from: "10 December 1956",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "30 September 1957",
      },
      {
        id: "29",
        governor_name: "ஸ்ரீ பிரகாசா",
        from: "12 March 1952",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        to: "10 December 1956",
      },
      {
        id: "30",
        governor_name: "மகாராஜா ஸ்ரீ கிருஷ்ண குமாரசிங்ஜி பவ் சிங்ஜி",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "7 September 1948",
        to: "12 March 1952",
      },
      {
        id: "31",
        governor_name: "லெப்டினென்ட் ஜெனரல் சர் ஆர்ச்சிபால்ட் எட்வர்ட் நை",
        image: "https://freeimghost.net/images/2023/05/13/not-iamge.jpeg",
        from: "6 May 1946",
        to: "September 7, 1948",
      },
    ])
  );
}

const mla_details_english = [
  {
    mla_id: "1",
    constituency_Name: "Gummidipoondi",
    candidate_Name: "T J Govindarajan",
    Party: "DMK",
    votes: "126,452",
    margin: "50,938",
    vote_Rate: "56.94 %",
  },
  {
    mla_id: "2",
    constituency_Name: "Ponneri",
    candidate_Name: "Durai Chandrasekhar",
    Party: "INC",
    votes: "94,528",
    margin: "9,689",
    vote_Rate: "44.94 %",
  },
  {
    mla_id: "3",
    constituency_Name: "Tiruttani",
    candidate_Name: "S Chandran",
    Party: "DMK",
    votes: "120,314",
    margin: "29,253",
    vote_Rate: "51.72 %",
  },
  {
    mla_id: "4",
    constituency_Name: "Thiruvallur",
    candidate_Name: "Rajendran",
    Party: "DMK",
    votes: "107,709",
    margin: "22,701",
    vote_Rate: "50.27 %",
  },
  {
    mla_id: "5",
    constituency_Name: "Poonamallee",
    candidate_Name: "A Krishnasami",
    Party: "DMK",
    votes: "149,578",
    margin: "94,110",
    vote_Rate: "56.72 %",
  },
  {
    mla_id: "6",
    constituency_Name: "Avadi",
    candidate_Name: "Nazar",
    Party: "DMK",
    votes: "150,287",
    margin: "55,275",
    vote_Rate: "49.94 %",
  },
  {
    mla_id: "7",
    constituency_Name: "Maduravoyal",
    candidate_Name: "Karapakkam Ganapathi",
    Party: "DMK",
    votes: "121,298",
    margin: "31,721",
    vote_Rate: "44.29 %",
  },
  {
    mla_id: "8",
    constituency_Name: "Ambattur",
    candidate_Name: "Joseph Samuel",
    Party: "DMK",
    votes: "114,554",
    margin: "42,146",
    vote_Rate: "47.67 %",
  },
  {
    mla_id: "9",
    constituency_Name: "Madavaram",
    candidate_Name: "Sudharsanam",
    Party: "DMK",
    votes: "151,485",
    margin: "57,071",
    vote_Rate: "50.04 %",
  },
  {
    mla_id: "10",
    constituency_Name: "Thiruvottiyur",
    candidate_Name: "Sankar",
    Party: "DMK",
    votes: "88,185",
    margin: "37,661",
    vote_Rate: "44.09 %",
  },
  {
    mla_id: "11",
    constituency_Name: "Dr.Radhakrishnan Nagar",
    candidate_Name: "J J Ebenesar",
    Party: "DMK",
    votes: "95,763",
    margin: "42,479",
    vote_Rate: "51.20 %",
  },
  {
    mla_id: "12",
    constituency_Name: "Perambur",
    candidate_Name: "R D Sekar",
    Party: "DMK",
    votes: "105,267",
    margin: "54,976",
    vote_Rate: "52.53 %",
  },
  {
    mla_id: "13",
    constituency_Name: "Kolathur",
    candidate_Name: "M K Stalin",
    Party: "DMK",
    votes: "105,522",
    margin: "70,384",
    vote_Rate: "60.86 %",
  },
  {
    mla_id: "14",
    constituency_Name: "Villivakkam",
    candidate_Name: "Vetriyazhagan",
    Party: "DMK",
    votes: "76,127",
    margin: "37,237",
    vote_Rate: "52.83 %",
  },
  {
    mla_id: "15",
    constituency_Name: "Thiru-Vi-Ka-Nagar",
    candidate_Name: "Thayagam Kavi",
    Party: "DMK",
    votes: "81,727",
    margin: "55,013",
    vote_Rate: "61.13 %",
  },
  {
    mla_id: "16",
    constituency_Name: "Egmore",
    candidate_Name: "Parandhaman",
    Party: "DMK",
    votes: "68,832",
    margin: "38,768",
    vote_Rate: "57.71 %",
  },
  {
    mla_id: "17",
    constituency_Name: "Royapuram",
    candidate_Name: "Ira Moorthi",
    Party: "DMK",
    votes: "64,424",
    margin: "27,779",
    vote_Rate: "53.16 %",
  },
  {
    mla_id: "18",
    constituency_Name: "Harbour",
    candidate_Name: "Sekar Babu",
    Party: "DMK",
    votes: "59,317",
    margin: "27,274",
    vote_Rate: "58.35 %",
  },
  {
    mla_id: "19",
    constituency_Name: "Chepauk-Thiruvallikeni",
    candidate_Name: "Udhayanidhi Stalin",
    Party: "DMK",
    votes: "93,285",
    margin: "69,355",
    vote_Rate: "67.89 %",
  },
  {
    mla_id: "20",
    constituency_Name: "Thousand Lights",
    candidate_Name: "Dr. Ezhilan",
    Party: "DMK",
    votes: "71,437",
    margin: "32,200",
    vote_Rate: "52.81 %",
  },
  {
    mla_id: "21",
    constituency_Name: "Anna Nagar",
    candidate_Name: "M K Mohan",
    Party: "DMK",
    votes: "80,054",
    margin: "27,445",
    vote_Rate: "48.49 %",
  },
  {
    mla_id: "22",
    constituency_Name: "Virugampakkam",
    candidate_Name: "A M V Prabhakar Raja",
    Party: "DMK",
    votes: "74,351",
    margin: "18,367",
    vote_Rate: "43.97 %",
  },
  {
    mla_id: "23",
    constituency_Name: "Saidapet",
    candidate_Name: "Ma Subramaniam",
    Party: "DMK",
    votes: "80,194",
    margin: "29,408",
    vote_Rate: "50.02 %",
  },
  {
    mla_id: "24",
    constituency_Name: "Thiyagarayanagar",
    candidate_Name: "J Karunanidhi",
    Party: "DMK",
    votes: "56,035",
    margin: "137",
    vote_Rate: "40.57 %",
  },
  {
    mla_id: "25",
    constituency_Name: "Mylapore",
    candidate_Name: "Mylai Velu",
    Party: "DMK",
    votes: "68,392",
    margin: "12,633",
    vote_Rate: "44.58 %",
  },
  {
    mla_id: "26",
    constituency_Name: "Velachery",
    candidate_Name: "J.m.h.hassan",
    Party: "INC",
    votes: "68,493",
    margin: "4,352",
    vote_Rate: "38.76 %",
  },
  {
    mla_id: "27",
    constituency_Name: "Shozhinganallur",
    candidate_Name: "Aravind Ramesh",
    Party: "DMK",
    votes: "171,558",
    margin: "35,405",
    vote_Rate: "44.18 %",
  },
  {
    mla_id: "28",
    constituency_Name: "Alandur",
    candidate_Name: "Tha Mo Anbarasan",
    Party: "DMK",
    votes: "116,785",
    margin: "40,571",
    vote_Rate: "49.12 %",
  },
  {
    mla_id: "29",
    constituency_Name: "Sriperumbudur",
    candidate_Name: "K.selvaperunthagai",
    Party: "INC",
    votes: "115,353",
    margin: "10,879",
    vote_Rate: "43.65 %",
  },
  {
    mla_id: "30",
    constituency_Name: "Pallavaram",
    candidate_Name: "Karunanidhi",
    Party: "DMK",
    votes: "126,427",
    margin: "37,781",
    vote_Rate: "47.49 %",
  },
  {
    mla_id: "31",
    constituency_Name: "Tambaram",
    candidate_Name: "S R Raja",
    Party: "DMK",
    votes: "116,840",
    margin: "36,824",
    vote_Rate: "46.93 %",
  },
  {
    mla_id: "32",
    constituency_Name: "Chengalpattu",
    candidate_Name: "Varalakshmi Madhusoodhanan",
    Party: "DMK",
    votes: "130,573",
    margin: "26,665",
    vote_Rate: "47.64 %",
  },
  {
    mla_id: "33",
    constituency_Name: "Thiruporur",
    candidate_Name: "S.s.balaji",
    Party: "VCK",
    votes: "93,954",
    margin: "1,947",
    vote_Rate: "41.44 %",
  },
  {
    mla_id: "34",
    constituency_Name: "Cheyyur",
    candidate_Name: "Babu",
    Party: "VCK",
    votes: "82,750",
    margin: "4,042",
    vote_Rate: "46.20 %",
  },
  {
    mla_id: "35",
    constituency_Name: "Madurantakam",
    candidate_Name: "Maragatham Kumaravel",
    Party: "AIADMK",
    votes: "86,646",
    margin: "3,570",
    vote_Rate: "46.62 %",
  },
  {
    mla_id: "36",
    constituency_Name: "Uthiramerur",
    candidate_Name: "Sundar",
    Party: "DMK",
    votes: "93,427",
    margin: "1,622",
    vote_Rate: "44.38 %",
  },
  {
    mla_id: "37",
    constituency_Name: "Kancheepuram",
    candidate_Name: "Ezhilarasan",
    Party: "DMK",
    votes: "102,712",
    margin: "11,595",
    vote_Rate: "44.77 %",
  },
  {
    mla_id: "38",
    constituency_Name: "Arakkonam",
    candidate_Name: "Ravi",
    Party: "AIADMK",
    votes: "85,399",
    margin: "27,169",
    vote_Rate: "49.82 %",
  },
  {
    mla_id: "39",
    constituency_Name: "Sholingur",
    candidate_Name: "A.m.munirathinam",
    Party: "INC",
    votes: "110,228",
    margin: "26,698",
    vote_Rate: "49.18 %",
  },
  {
    mla_id: "40",
    constituency_Name: "Katpadi",
    candidate_Name: "Durai Murugan",
    Party: "DMK",
    votes: "85,140",
    margin: "746",
    vote_Rate: "45.71 %",
  },
  {
    mla_id: "41",
    constituency_Name: "Ranipet",
    candidate_Name: "Gandhi",
    Party: "DMK",
    votes: "103,291",
    margin: "16,498",
    vote_Rate: "49.79 %",
  },
  {
    mla_id: "42",
    constituency_Name: "Arcot",
    candidate_Name: "J L Eeswarappan",
    Party: "DMK",
    votes: "103,885",
    margin: "19,958",
    vote_Rate: "49.52 %",
  },
  {
    mla_id: "43",
    constituency_Name: "Vellore",
    candidate_Name: "Karthikeyan",
    Party: "DMK",
    votes: "84,299",
    margin: "9,181",
    vote_Rate: "46.86 %",
  },
  {
    mla_id: "44",
    constituency_Name: "Anaikattu",
    candidate_Name: "Nandhakumar",
    Party: "DMK",
    votes: "95,159",
    margin: "6,360",
    vote_Rate: "48.11 %",
  },
  {
    mla_id: "45",
    constituency_Name: "Kilvaithinankuppam",
    candidate_Name: "M. Jaganmoorthy",
    Party: "PBK",
    votes: "84,579",
    margin: "10,582",
    vote_Rate: "48.57 %",
  },
  {
    mla_id: "46",
    constituency_Name: "Gudiyattam",
    candidate_Name: "V Amalu",
    Party: "DMK",
    votes: "100,412",
    margin: "6,901",
    vote_Rate: "47.45 %",
  },
  {
    mla_id: "47",
    constituency_Name: "Vaniyambadi",
    candidate_Name: "Senthilkumar",
    Party: "AIADMK",
    votes: "88,018",
    margin: "4,904",
    vote_Rate: "46.33 %",
  },
  {
    mla_id: "48",
    constituency_Name: "Ambur",
    candidate_Name: "A S Viswanathan",
    Party: "DMK",
    votes: "90,476",
    margin: "20,232",
    vote_Rate: "50.86 %",
  },
  {
    mla_id: "49",
    constituency_Name: "Jolarpet",
    candidate_Name: "Devaraji",
    Party: "DMK",
    votes: "89,490",
    margin: "1,091",
    vote_Rate: "45.57 %",
  },
  {
    mla_id: "50",
    constituency_Name: "Tirupattur",
    candidate_Name: "Nallathambi",
    Party: "DMK",
    votes: "96,522",
    margin: "28,240",
    vote_Rate: "51.91 %",
  },
  {
    mla_id: "51",
    constituency_Name: "Uthangarai",
    candidate_Name: "T.m.tamilselvm",
    Party: "AIADMK",
    votes: "99,675",
    margin: "28,387",
    vote_Rate: "52.96 %",
  },
  {
    mla_id: "52",
    constituency_Name: "Bargur",
    candidate_Name: "Madhiyazhagan",
    Party: "DMK",
    votes: "97,256",
    margin: "12,614",
    vote_Rate: "49.17 %",
  },
  {
    mla_id: "53",
    constituency_Name: "Krishnagiri",
    candidate_Name: "Ashok Kumar",
    Party: "AIADMK",
    votes: "96,050",
    margin: "794",
    vote_Rate: "45.38 %",
  },
  {
    mla_id: "54",
    constituency_Name: "Veppanahalli",
    candidate_Name: "K.p. Munusamy",
    Party: "AIADMK",
    votes: "94,104",
    margin: "3,054",
    vote_Rate: "45.87 %",
  },
  {
    mla_id: "55",
    constituency_Name: "Hosur",
    candidate_Name: "Y Prakash",
    Party: "DMK",
    votes: "118,231",
    margin: "12,367",
    vote_Rate: "47.65 %",
  },
  {
    mla_id: "56",
    constituency_Name: "Thalli",
    candidate_Name: "Ramachandran",
    Party: "CPI",
    votes: "120,641",
    margin: "56,226",
    vote_Rate: "62.18 %",
  },
  {
    mla_id: "57",
    constituency_Name: "Palacode",
    candidate_Name: "K.p.anbazhagan",
    Party: "AIADMK",
    votes: "110,070",
    margin: "28,100",
    vote_Rate: "53.28 %",
  },
  {
    mla_id: "58",
    constituency_Name: "Pennagaram",
    candidate_Name: "G.k.mani",
    Party: "PMK",
    votes: "106,123",
    margin: "21,186",
    vote_Rate: "50.46 %",
  },
  {
    mla_id: "59",
    constituency_Name: "Dharmapuri",
    candidate_Name: "S.p.venkateshwaran",
    Party: "PMK",
    votes: "105,630",
    margin: "26,860",
    vote_Rate: "48.60 %",
  },
  {
    mla_id: "60",
    constituency_Name: "Pappireddippatti",
    candidate_Name: "A.govindasami",
    Party: "AIADMK",
    votes: "114,507",
    margin: "36,943",
    vote_Rate: "51.81 %",
  },
  {
    mla_id: "61",
    constituency_Name: "Harur",
    candidate_Name: "V.sampathkumar",
    Party: "AIADMK",
    votes: "99,061",
    margin: "30,362",
    vote_Rate: "49.89 %",
  },
  {
    mla_id: "62",
    constituency_Name: "Chengam",
    candidate_Name: "Mu Pe Giri",
    Party: "DMK",
    votes: "108,081",
    margin: "11,570",
    vote_Rate: "48.26 %",
  },
  {
    mla_id: "63",
    constituency_Name: "Tiruvannamalai",
    candidate_Name: "A V Velu",
    Party: "DMK",
    votes: "137,876",
    margin: "94,673",
    vote_Rate: "66.02 %",
  },
  {
    mla_id: "64",
    constituency_Name: "Kilpennathur",
    candidate_Name: "Ku Pichchaandi",
    Party: "DMK",
    votes: "104,675",
    margin: "26,787",
    vote_Rate: "51.34 %",
  },
  {
    mla_id: "65",
    constituency_Name: "Kalasapakkam",
    candidate_Name: "Pe Su Thi Saravanan",
    Party: "DMK",
    votes: "94,134",
    margin: "9,222",
    vote_Rate: "47.92 %",
  },
  {
    mla_id: "66",
    constituency_Name: "Polur",
    candidate_Name: "Agri Krishnamoorthy",
    Party: "AIADMK",
    votes: "97,732",
    margin: "9,725",
    vote_Rate: "48.38 %",
  },
  {
    mla_id: "67",
    constituency_Name: "Arani",
    candidate_Name: "Sevur Ramachandran",
    Party: "AIADMK",
    votes: "102,961",
    margin: "3,128",
    vote_Rate: "46.50 %",
  },
  {
    mla_id: "68",
    constituency_Name: "Cheyyar",
    candidate_Name: "O Jothi",
    Party: "DMK",
    votes: "102,460",
    margin: "12,271",
    vote_Rate: "47.78 %",
  },
  {
    mla_id: "69",
    constituency_Name: "Vandavasi",
    candidate_Name: "S Ambethkumar",
    Party: "DMK",
    votes: "102,064",
    margin: "35,953",
    vote_Rate: "54.88 %",
  },
  {
    mla_id: "70",
    constituency_Name: "Gingee",
    candidate_Name: "K S Masthan",
    Party: "DMK",
    votes: "109,625",
    margin: "35,803",
    vote_Rate: "52.99 %",
  },
  {
    mla_id: "71",
    constituency_Name: "Mailam",
    candidate_Name: "Sivakumar",
    Party: "PMK",
    votes: "81,044",
    margin: "2,230",
    vote_Rate: "45.79 %",
  },
  {
    mla_id: "72",
    constituency_Name: "Tindivanam",
    candidate_Name: "Arjunan",
    Party: "AIADMK",
    votes: "87,152",
    margin: "9,753",
    vote_Rate: "47.74 %",
  },
  {
    mla_id: "73",
    constituency_Name: "Vanur",
    candidate_Name: "Chakkarabani",
    Party: "AIADMK",
    votes: "92,219",
    margin: "21,727",
    vote_Rate: "50.61 %",
  },
  {
    mla_id: "74",
    constituency_Name: "Villupuram",
    candidate_Name: "R Lakshmanan",
    Party: "DMK",
    votes: "102,271",
    margin: "14,868",
    vote_Rate: "49.92 %",
  },
  {
    mla_id: "75",
    constituency_Name: "Vikravandi",
    candidate_Name: "Na Pugazhendhi",
    Party: "DMK",
    votes: "93,730",
    margin: "9,573",
    vote_Rate: "48.41 %",
  },
  {
    mla_id: "76",
    constituency_Name: "Tirukkoyilur",
    candidate_Name: "K.ponmudi",
    Party: "DMK",
    votes: "110,980",
    margin: "59,680",
    vote_Rate: "56.56 %",
  },
  {
    mla_id: "77",
    constituency_Name: "Ulundurpettai",
    candidate_Name: "A J Manikannan",
    Party: "DMK",
    votes: "115,451",
    margin: "5,256",
    vote_Rate: "47.15 %",
  },
  {
    mla_id: "78",
    constituency_Name: "Rishivandiyam",
    candidate_Name: "Vasantham Karthikeyan",
    Party: "DMK",
    votes: "113,912",
    margin: "41,728",
    vote_Rate: "52.96 %",
  },
  {
    mla_id: "79",
    constituency_Name: "Sankarapuram",
    candidate_Name: "Tha Udhayasuriyan",
    Party: "DMK",
    votes: "121,186",
    margin: "45,963",
    vote_Rate: "56.16 %",
  },
  {
    mla_id: "80",
    constituency_Name: "Kallakurichi",
    candidate_Name: "Senthilkumar",
    Party: "AIADMK",
    votes: "110,643",
    margin: "25,891",
    vote_Rate: "48.99 %",
  },
  {
    mla_id: "81",
    constituency_Name: "Gangavalli",
    candidate_Name: "Nallathambi",
    Party: "AIADMK",
    votes: "89,568",
    margin: "7,361",
    vote_Rate: "48.02 %",
  },
  {
    mla_id: "82",
    constituency_Name: "Attur",
    candidate_Name: "Jayasankaran",
    Party: "AIADMK",
    votes: "95,308",
    margin: "8,257",
    vote_Rate: "47.72 %",
  },
  {
    mla_id: "83",
    constituency_Name: "Yercaud",
    candidate_Name: "Chitra",
    Party: "AIADMK",
    votes: "121,561",
    margin: "25,955",
    vote_Rate: "50.88 %",
  },
  {
    mla_id: "84",
    constituency_Name: "Omalur",
    candidate_Name: "R.mani",
    Party: "AIADMK",
    votes: "142,488",
    margin: "55,294",
    vote_Rate: "57.22 %",
  },
  {
    mla_id: "85",
    constituency_Name: "Mettur",
    candidate_Name: "Sadhasivam",
    Party: "PMK",
    votes: "97,055",
    margin: "656",
    vote_Rate: "44.43 %",
  },
  {
    mla_id: "86",
    constituency_Name: "Edappadi",
    candidate_Name: "Palaniswami. K",
    Party: "AIADMK",
    votes: "163,154",
    margin: "93,802",
    vote_Rate: "65.97 %",
  },
  {
    mla_id: "87",
    constituency_Name: "Sankari",
    candidate_Name: "Sundaraj",
    Party: "AIADMK",
    votes: "115,472",
    margin: "20,045",
    vote_Rate: "49.72 %",
  },
  {
    mla_id: "88",
    constituency_Name: "Salem (West)",
    candidate_Name: "R.arul",
    Party: "PMK",
    votes: "105,483",
    margin: "21,499",
    vote_Rate: "48.69 %",
  },
  {
    mla_id: "89",
    constituency_Name: "Salem (North)",
    candidate_Name: "R Rajendhiran",
    Party: "DMK",
    votes: "93,432",
    margin: "7,588",
    vote_Rate: "46.17 %",
  },
  {
    mla_id: "90",
    constituency_Name: "Salem (South)",
    candidate_Name: "Balasubramanian",
    Party: "AIADMK",
    votes: "97,506",
    margin: "22,609",
    vote_Rate: "48.76 %",
  },
  {
    mla_id: "91",
    constituency_Name: "Veerapandi",
    candidate_Name: "M.raja",
    Party: "AIADMK",
    votes: "111,682",
    margin: "19,895",
    vote_Rate: "49.92 %",
  },
  {
    mla_id: "92",
    constituency_Name: "Rasipuram",
    candidate_Name: "Dr.m.madhivendhan",
    Party: "DMK",
    votes: "90,727",
    margin: "1,952",
    vote_Rate: "46.08 %",
  },
  {
    mla_id: "93",
    constituency_Name: "Senthamangalam",
    candidate_Name: "K Ponnusami",
    Party: "DMK",
    votes: "90,681",
    margin: "10,493",
    vote_Rate: "45.51 %",
  },
  {
    mla_id: "94",
    constituency_Name: "Namakkal",
    candidate_Name: "P. Ramalingam",
    Party: "DMK",
    votes: "106,494",
    margin: "27,861",
    vote_Rate: "51.51 %",
  },
  {
    mla_id: "95",
    constituency_Name: "Paramathi-Velur",
    candidate_Name: "S.sekar",
    Party: "AIADMK",
    votes: "86,034",
    margin: "7,662",
    vote_Rate: "46.83 %",
  },
  {
    mla_id: "96",
    constituency_Name: "Tiruchengodu",
    candidate_Name: "E.r.eshwaran",
    Party: "KMDK",
    votes: "81,688",
    margin: "2,862",
    vote_Rate: "44.23 %",
  },
  {
    mla_id: "97",
    constituency_Name: "Kumarapalayam",
    candidate_Name: "Thangamani",
    Party: "AIADMK",
    votes: "100,800",
    margin: "31,646",
    vote_Rate: "49.92 %",
  },
  {
    mla_id: "98",
    constituency_Name: "Erode (East)",
    candidate_Name: "Thirumagan Evera",
    Party: "INC",
    votes: "67,300",
    margin: "8,904",
    vote_Rate: "44.27 %",
  },
  {
    mla_id: "99",
    constituency_Name: "Erode (West)",
    candidate_Name: "S. Muthusami",
    Party: "DMK",
    votes: "100,757",
    margin: "22,089",
    vote_Rate: "49.01 %",
  },
  {
    mla_id: "100",
    constituency_Name: "Modakkurichi",
    candidate_Name: "C.k.saraswathi",
    Party: "BJP",
    votes: "78,125",
    margin: "281",
    vote_Rate: "42.96 %",
  },
  {
    mla_id: "101",
    constituency_Name: "Dharapuram(sc)",
    candidate_Name: "Kayalvizhi Selvaraj",
    Party: "DMK",
    votes: "89,986",
    margin: "1,393",
    vote_Rate: "46.39 %",
  },
  {
    mla_id: "102",
    constituency_Name: "Kangayam",
    candidate_Name: "Saminathan",
    Party: "DMK",
    votes: "94,197",
    margin: "7,331",
    vote_Rate: "47.14 %",
  },
  {
    mla_id: "103",
    constituency_Name: "Perundurai",
    candidate_Name: "Jayakumar",
    Party: "AIADMK",
    votes: "85,125",
    margin: "14,507",
    vote_Rate: "44.84 %",
  },
  {
    mla_id: "104",
    constituency_Name: "Bhavani",
    candidate_Name: "K.c.karupannan",
    Party: "AIADMK",
    votes: "100,915",
    margin: "22,523",
    vote_Rate: "50.11 %",
  },
  {
    mla_id: "105",
    constituency_Name: "Anthiyur",
    candidate_Name: "Venkatachalam",
    Party: "DMK",
    votes: "79,096",
    margin: "1,275",
    vote_Rate: "44.84 %",
  },
  {
    mla_id: "106",
    constituency_Name: "Gobichettipalayam",
    candidate_Name: "K.a.sengottayan",
    Party: "AIADMK",
    votes: "108,608",
    margin: "28,563",
    vote_Rate: "50.68 %",
  },
  {
    mla_id: "107",
    constituency_Name: "Bhavanisagar",
    candidate_Name: "Bannari",
    Party: "AIADMK",
    votes: "99,181",
    margin: "16,008",
    vote_Rate: "49.45 %",
  },
  {
    mla_id: "108",
    constituency_Name: "Udhagamandalam",
    candidate_Name: "R.ganesh",
    Party: "INC",
    votes: "65,530",
    margin: "5,348",
    vote_Rate: "46.44 %",
  },
  {
    mla_id: "109",
    constituency_Name: "Gudalur",
    candidate_Name: "Pon Jeyaseelan",
    Party: "AIADMK",
    votes: "64,496",
    margin: "1,945",
    vote_Rate: "46.65 %",
  },
  {
    mla_id: "110",
    constituency_Name: "Coonoor",
    candidate_Name: "K. Ramachandran",
    Party: "DMK",
    votes: "61,820",
    margin: "4,105",
    vote_Rate: "45.49 %",
  },
  {
    mla_id: "111",
    constituency_Name: "Mettuppalayam",
    candidate_Name: "A.k.selvaraj",
    Party: "AIADMK",
    votes: "105,231",
    margin: "2,456",
    vote_Rate: "46.75 %",
  },
  {
    mla_id: "112",
    constituency_Name: "Avanashi (SC)",
    candidate_Name: "Dhanapal",
    Party: "AIADMK",
    votes: "117,284",
    margin: "50,902",
    vote_Rate: "55.16 %",
  },
  {
    mla_id: "113",
    constituency_Name: "Tiruppur (North)",
    candidate_Name: "Vijayakumar",
    Party: "AIADMK",
    votes: "113,384",
    margin: "40,102",
    vote_Rate: "47.62 %",
  },
  {
    mla_id: "114",
    constituency_Name: "Tiruppur (South)",
    candidate_Name: "K. Selvaraj",
    Party: "DMK",
    votes: "75,535",
    margin: "4,709",
    vote_Rate: "43.31 %",
  },
  {
    mla_id: "115",
    constituency_Name: "Palladam",
    candidate_Name: "M.s.m.anandhan",
    Party: "AIADMK",
    votes: "126,903",
    margin: "32,691",
    vote_Rate: "48.53 %",
  },
  {
    mla_id: "116",
    constituency_Name: "Sulur",
    candidate_Name: "Vp Kandhasamy",
    Party: "AIADMK",
    votes: "118,968",
    margin: "31,932",
    vote_Rate: "49.23 %",
  },
  {
    mla_id: "117",
    constituency_Name: "Kavundampalayam",
    candidate_Name: "Arunkumar",
    Party: "AIADMK",
    votes: "135,669",
    margin: "9,776",
    vote_Rate: "43.78 %",
  },
  {
    mla_id: "118",
    constituency_Name: "Coimbatore (North)",
    candidate_Name: "Amman Archunan",
    Party: "AIADMK",
    votes: "81,454",
    margin: "4,001",
    vote_Rate: "40.16 %",
  },
  {
    mla_id: "119",
    constituency_Name: "Thondamuthur",
    candidate_Name: "S.p.velumani",
    Party: "AIADMK",
    votes: "124,225",
    margin: "41,630",
    vote_Rate: "53.89 %",
  },
  {
    mla_id: "120",
    constituency_Name: "Coimbatore (South)",
    candidate_Name: "Vanathi Srinivasan",
    Party: "BJP",
    votes: "53,209",
    margin: "1,728",
    vote_Rate: "34.38 %",
  },
  {
    mla_id: "121",
    constituency_Name: "Singanallur",
    candidate_Name: "K.r.jayaram",
    Party: "AIADMK",
    votes: "81,244",
    margin: "10,854",
    vote_Rate: "40.22 %",
  },
  {
    mla_id: "122",
    constituency_Name: "Kinathukadavu",
    candidate_Name: "Dhamodharan",
    Party: "AIADMK",
    votes: "101,537",
    margin: "1,095",
    vote_Rate: "43.68 %",
  },
  {
    mla_id: "123",
    constituency_Name: "Pollachi",
    candidate_Name: "Jayaraman",
    Party: "AIADMK",
    votes: "80,567",
    margin: "1,725",
    vote_Rate: "45.44 %",
  },
  {
    mla_id: "124",
    constituency_Name: "Valparai",
    candidate_Name: "Amul Kandhasamy",
    Party: "AIADMK",
    votes: "71,672",
    margin: "12,223",
    vote_Rate: "49.37 %",
  },
  {
    mla_id: "125",
    constituency_Name: "Udumalaipettai",
    candidate_Name: "K.radhakrishnan",
    Party: "AIADMK",
    votes: "96,893",
    margin: "21,895",
    vote_Rate: "49.85 %",
  },
  {
    mla_id: "126",
    constituency_Name: "Madathukulam",
    candidate_Name: "C.mahendran",
    Party: "AIADMK",
    votes: "84,313",
    margin: "6,438",
    vote_Rate: "46.35 %",
  },
  {
    mla_id: "127",
    constituency_Name: "Palani",
    candidate_Name: "I.p.senthilkumar",
    Party: "DMK",
    votes: "108,566",
    margin: "30,056",
    vote_Rate: "52.86 %",
  },
  {
    mla_id: "128",
    constituency_Name: "Oddanchatram",
    candidate_Name: "R. Sakkarapani",
    Party: "DMK",
    votes: "109,970",
    margin: "28,742",
    vote_Rate: "54.51 %",
  },
  {
    mla_id: "129",
    constituency_Name: "Athoor",
    candidate_Name: "I.periyasamy",
    Party: "DMK",
    votes: "165,809",
    margin: "135,571",
    vote_Rate: "72.11 %",
  },
  {
    mla_id: "130",
    constituency_Name: "Nilakkottai",
    candidate_Name: "S. Thenmozhi",
    Party: "AIADMK",
    votes: "91,461",
    margin: "27,618",
    vote_Rate: "49.49 %",
  },
  {
    mla_id: "131",
    constituency_Name: "Natham",
    candidate_Name: "Vishwanathan",
    Party: "AIADMK",
    votes: "107,762",
    margin: "11,932",
    vote_Rate: "47.84 %",
  },
  {
    mla_id: "132",
    constituency_Name: "Dindigul",
    candidate_Name: "Srinivasan",
    Party: "AIADMK",
    votes: "90,595",
    margin: "17,747",
    vote_Rate: "46.43 %",
  },
  {
    mla_id: "133",
    constituency_Name: "Vedasandur",
    candidate_Name: "S.gandhirajan",
    Party: "DMK",
    votes: "106,481",
    margin: "17,553",
    vote_Rate: "49.97 %",
  },
  {
    mla_id: "134",
    constituency_Name: "Aravakurichi",
    candidate_Name: "R.elango",
    Party: "DMK",
    votes: "93,369",
    margin: "24,816",
    vote_Rate: "52.72 %",
  },
  {
    mla_id: "135",
    constituency_Name: "Karur",
    candidate_Name: "Senthil Balaji",
    Party: "DMK",
    votes: "101,757",
    margin: "12,448",
    vote_Rate: "49.08 %",
  },
  {
    mla_id: "136",
    constituency_Name: "Krishnarayapuram",
    candidate_Name: "K.sivakamasundari",
    Party: "DMK",
    votes: "96,540",
    margin: "31,625",
    vote_Rate: "53.37 %",
  },
  {
    mla_id: "137",
    constituency_Name: "Kulithalai",
    candidate_Name: "R.manickam",
    Party: "DMK",
    votes: "100,829",
    margin: "23,540",
    vote_Rate: "51.06 %",
  },
  {
    mla_id: "138",
    constituency_Name: "Manapparai",
    candidate_Name: "Abdul Samadh",
    Party: "MMK",
    votes: "98,077",
    margin: "12,243",
    vote_Rate: "44.23 %",
  },
  {
    mla_id: "139",
    constituency_Name: "Srirangam",
    candidate_Name: "M.palaniandi",
    Party: "DMK",
    votes: "113,904",
    margin: "19,915",
    vote_Rate: "47.41 %",
  },
  {
    mla_id: "140",
    constituency_Name: "Tiruchirappalli (West)",
    candidate_Name: "K.n.nehru",
    Party: "DMK",
    votes: "118,133",
    margin: "85,109",
    vote_Rate: "64.52 %",
  },
  {
    mla_id: "141",
    constituency_Name: "Tiruchirappalli (East)",
    candidate_Name: "Inigo Irudhayaraj",
    Party: "DMK",
    votes: "94,302",
    margin: "53,797",
    vote_Rate: "54.56 %",
  },
  {
    mla_id: "142",
    constituency_Name: "Thiruverumbur",
    candidate_Name: "Anbil Mahesh Poyyamozhi",
    Party: "DMK",
    votes: "105,424",
    margin: "49,697",
    vote_Rate: "53.51 %",
  },
  {
    mla_id: "143",
    constituency_Name: "Lalgudi",
    candidate_Name: "A.soundrapandiyan",
    Party: "DMK",
    votes: "84,914",
    margin: "16,949",
    vote_Rate: "48.59 %",
  },
  {
    mla_id: "144",
    constituency_Name: "Manachanallur",
    candidate_Name: "C.kathiravan",
    Party: "DMK",
    votes: "116,334",
    margin: "59,618",
    vote_Rate: "59.14 %",
  },
  {
    mla_id: "145",
    constituency_Name: "Musiri",
    candidate_Name: "N.thiyagarajan",
    Party: "DMK",
    votes: "90,624",
    margin: "26,836",
    vote_Rate: "50.43 %",
  },
  {
    mla_id: "146",
    constituency_Name: "Thuraiyur",
    candidate_Name: "Stalin Kumar",
    Party: "DMK",
    votes: "87,786",
    margin: "22,071",
    vote_Rate: "49.91 %",
  },
  {
    mla_id: "147",
    constituency_Name: "Perambalur",
    candidate_Name: "M Prabhakaran",
    Party: "DMK",
    votes: "122,090",
    margin: "31,034",
    vote_Rate: "50.87 %",
  },
  {
    mla_id: "148",
    constituency_Name: "Kunnam",
    candidate_Name: "S S Sivashankar",
    Party: "DMK",
    votes: "103,922",
    margin: "6,329",
    vote_Rate: "47.26 %",
  },
  {
    mla_id: "149",
    constituency_Name: "Ariyalur",
    candidate_Name: "Chinappa",
    Party: "MDMK",
    votes: "103,975",
    margin: "3,234",
    vote_Rate: "46.16 %",
  },
  {
    mla_id: "150",
    constituency_Name: "Jayankondam",
    candidate_Name: "K S K Kannan",
    Party: "DMK",
    votes: "99,529",
    margin: "5,452",
    vote_Rate: "46.00 %",
  },
  {
    mla_id: "151",
    constituency_Name: "Tittagudi (SC)",
    candidate_Name: "C V Ganesan",
    Party: "DMK",
    votes: "83,726",
    margin: "21,563",
    vote_Rate: "49.78 %",
  },
  {
    mla_id: "152",
    constituency_Name: "Vridhachalam",
    candidate_Name: "M.r.r.radhakrishnan",
    Party: "INC",
    votes: "77,064",
    margin: "862",
    vote_Rate: "39.17 %",
  },
  {
    mla_id: "153",
    constituency_Name: "Neyveli",
    candidate_Name: "Saba Rajendiran",
    Party: "DMK",
    votes: "75,177",
    margin: "977",
    vote_Rate: "45.80 %",
  },
  {
    mla_id: "154",
    constituency_Name: "Panruti",
    candidate_Name: "Velmurugan",
    Party: "TVK",
    votes: "93,801",
    margin: "4,697",
    vote_Rate: "47.60 %",
  },
  {
    mla_id: "155",
    constituency_Name: "Cuddalore",
    candidate_Name: "Ko Ayyappan",
    Party: "DMK",
    votes: "84,563",
    margin: "5,151",
    vote_Rate: "46.46 %",
  },
  {
    mla_id: "156",
    constituency_Name: "Kurinjipadi",
    candidate_Name: "M R K Panneerselvam",
    Party: "DMK",
    votes: "101,456",
    margin: "17,527",
    vote_Rate: "51.04 %",
  },
  {
    mla_id: "157",
    constituency_Name: "Bhuvanagiri",
    candidate_Name: "Arunmozhithevan",
    Party: "AIADMK",
    votes: "96,453",
    margin: "8,259",
    vote_Rate: "48.92 %",
  },
  {
    mla_id: "158",
    constituency_Name: "Chidambaram",
    candidate_Name: "K.a.pandian",
    Party: "AIADMK",
    votes: "91,961",
    margin: "16,937",
    vote_Rate: "50.16 %",
  },
  {
    mla_id: "159",
    constituency_Name: "Kattumannarkoil(SC)",
    candidate_Name: "Sindhanaiselvan",
    Party: "VCK",
    votes: "86,056",
    margin: "10,565",
    vote_Rate: "49.02 %",
  },
  {
    mla_id: "160",
    constituency_Name: "Sirkazhi",
    candidate_Name: "Mu Panneerselvam",
    Party: "DMK",
    votes: "94,057",
    margin: "12,148",
    vote_Rate: "49.16 %",
  },
  {
    mla_id: "161",
    constituency_Name: "Mayiladuthurai",
    candidate_Name: "Rajakumar",
    Party: "INC",
    votes: "73,642",
    margin: "2,742",
    vote_Rate: "42.17 %",
  },
  {
    mla_id: "162",
    constituency_Name: "Poompuhar",
    candidate_Name: "Nivetha Murugan",
    Party: "DMK",
    votes: "96,102",
    margin: "3,299",
    vote_Rate: "46.24 %",
  },
  {
    mla_id: "163",
    constituency_Name: "Nagapattinam",
    candidate_Name: "Aloor Shanavas",
    Party: "VCK",
    votes: "66,281",
    margin: "7,238",
    vote_Rate: "46.17 %",
  },
  {
    mla_id: "164",
    constituency_Name: "Kilvelur",
    candidate_Name: "Maali",
    Party: "CPM",
    votes: "67,988",
    margin: "16,985",
    vote_Rate: "47.55 %",
  },
  {
    mla_id: "165",
    constituency_Name: "Vedaranyam",
    candidate_Name: "O.s. Maniyan",
    Party: "AIADMK",
    votes: "78,719",
    margin: "12,329",
    vote_Rate: "49.80 %",
  },
  {
    mla_id: "166",
    constituency_Name: "Thiruthuraipoondi",
    candidate_Name: "Marimuthu",
    Party: "CPI",
    votes: "97,092",
    margin: "30,068",
    vote_Rate: "52.23 %",
  },
  {
    mla_id: "167",
    constituency_Name: "Mannargudi",
    candidate_Name: "Trb Raja",
    Party: "DMK",
    votes: "87,172",
    margin: "37,393",
    vote_Rate: "45.11 %",
  },
  {
    mla_id: "168",
    constituency_Name: "Thiruvarur",
    candidate_Name: "Poondi Kalaivanan",
    Party: "DMK",
    votes: "108,906",
    margin: "51,174",
    vote_Rate: "52.29 %",
  },
  {
    mla_id: "169",
    constituency_Name: "Nannilam",
    candidate_Name: "R.kamaraj",
    Party: "AIADMK",
    votes: "103,637",
    margin: "4,424",
    vote_Rate: "46.70 %",
  },
  {
    mla_id: "170",
    constituency_Name: "Thiruvidaimarudur",
    candidate_Name: "Kovi Chezhiyan",
    Party: "DMK",
    votes: "95,763",
    margin: "10,680",
    vote_Rate: "48.26 %",
  },
  {
    mla_id: "171",
    constituency_Name: "Kumbakonam",
    candidate_Name: "Anbazhagan",
    Party: "DMK",
    votes: "96,057",
    margin: "21,383",
    vote_Rate: "48.62 %",
  },
  {
    mla_id: "172",
    constituency_Name: "Papanasam",
    candidate_Name: "M. H. Jawahirullah",
    Party: "MMK",
    votes: "86,567",
    margin: "16,273",
    vote_Rate: "43.95 %",
  },
  {
    mla_id: "173",
    constituency_Name: "Thiruvaiyaru",
    candidate_Name: "Durai Chandrasekaran",
    Party: "DMK",
    votes: "103,210",
    margin: "53,650",
    vote_Rate: "48.82 %",
  },
  {
    mla_id: "174",
    constituency_Name: "Thanjavur",
    candidate_Name: "Tkg Neelamegam",
    Party: "DMK",
    votes: "103,772",
    margin: "47,149",
    vote_Rate: "53.25 %",
  },
  {
    mla_id: "175",
    constituency_Name: "Orathanadu",
    candidate_Name: "Vaithiyalingam",
    Party: "AIADMK",
    votes: "90,063",
    margin: "28,835",
    vote_Rate: "46.95 %",
  },
  {
    mla_id: "176",
    constituency_Name: "Pattukkottai",
    candidate_Name: "Annadurai",
    Party: "DMK",
    votes: "79,065",
    margin: "25,269",
    vote_Rate: "44.62 %",
  },
  {
    mla_id: "177",
    constituency_Name: "Peravurani",
    candidate_Name: "N Ashok Kumar",
    Party: "DMK",
    votes: "89,130",
    margin: "23,503",
    vote_Rate: "52.17 %",
  },
  {
    mla_id: "178",
    constituency_Name: "Gandharvakottai",
    candidate_Name: "M.chinnadurai",
    Party: "CPM",
    votes: "69,710",
    margin: "12,721",
    vote_Rate: "44.23 %",
  },
  {
    mla_id: "179",
    constituency_Name: "Viralimalai",
    candidate_Name: "Vijayabaskar",
    Party: "AIADMK",
    votes: "102,179",
    margin: "23,598",
    vote_Rate: "52.83 %",
  },
  {
    mla_id: "180",
    constituency_Name: "Pudukkottai",
    candidate_Name: "Muthuraja",
    Party: "DMK",
    votes: "85,802",
    margin: "13,001",
    vote_Rate: "47.70 %",
  },
  {
    mla_id: "181",
    constituency_Name: "Thirumayam",
    candidate_Name: "Ragupathi",
    Party: "DMK",
    votes: "71,349",
    margin: "1,382",
    vote_Rate: "41.00 %",
  },
  {
    mla_id: "182",
    constituency_Name: "Alangudi",
    candidate_Name: "Siva Ve Meyyanaadhan",
    Party: "DMK",
    votes: "87,935",
    margin: "25,847",
    vote_Rate: "51.17 %",
  },
  {
    mla_id: "183",
    constituency_Name: "Aranthangi",
    candidate_Name: "S.t.ramachandran",
    Party: "INC",
    votes: "81,835",
    margin: "30,893",
    vote_Rate: "48.70 %",
  },
  {
    mla_id: "184",
    constituency_Name: "Karaikudi",
    candidate_Name: "S.mangudi",
    Party: "INC",
    votes: "75,954",
    margin: "21,589",
    vote_Rate: "35.75 %",
  },
  {
    mla_id: "185",
    constituency_Name: "Tiruppattur",
    candidate_Name: "K R Periyakaruppan",
    Party: "DMK",
    votes: "103,682",
    margin: "37,374",
    vote_Rate: "49.19 %",
  },
  {
    mla_id: "186",
    constituency_Name: "Sivaganga",
    candidate_Name: "Senthilnathan",
    Party: "AIADMK",
    votes: "82,153",
    margin: "11,253",
    vote_Rate: "40.66 %",
  },
  {
    mla_id: "187",
    constituency_Name: "Manamadurai",
    candidate_Name: "Tamilarasi",
    Party: "DMK",
    votes: "89,364",
    margin: "14,091",
    vote_Rate: "44.01 %",
  },
  {
    mla_id: "188",
    constituency_Name: "Melur",
    candidate_Name: "Periyapulla @ Selvam",
    Party: "AIADMK",
    votes: "83,344",
    margin: "35,162",
    vote_Rate: "45.60 %",
  },
  {
    mla_id: "189",
    constituency_Name: "Madurai East",
    candidate_Name: "P Moorthi",
    Party: "DMK",
    votes: "122,729",
    margin: "49,604",
    vote_Rate: "51.59 %",
  },
  {
    mla_id: "190",
    constituency_Name: "Sholavandan",
    candidate_Name: "Venkatesan",
    Party: "DMK",
    votes: "84,240",
    margin: "17,045",
    vote_Rate: "48.04 %",
  },
  {
    mla_id: "191",
    constituency_Name: "Madurai North",
    candidate_Name: "Ko Thalapathi",
    Party: "DMK",
    votes: "73,010",
    margin: "22,916",
    vote_Rate: "46.64 %",
  },
  {
    mla_id: "192",
    constituency_Name: "Madurai South",
    candidate_Name: "Bhoominathan",
    Party: "MDMK",
    votes: "62,812",
    margin: "6,515",
    vote_Rate: "42.49 %",
  },
  {
    mla_id: "193",
    constituency_Name: "Madurai Central",
    candidate_Name: "P. T. R. Palanivel Thiagarajan",
    Party: "DMK",
    votes: "73,205",
    margin: "34,176",
    vote_Rate: "48.99 %",
  },
  {
    mla_id: "194",
    constituency_Name: "Madurai West",
    candidate_Name: "Sellur K.raju",
    Party: "AIADMK",
    votes: "83,883",
    margin: "9,121",
    vote_Rate: "41.59 %",
  },
  {
    mla_id: "195",
    constituency_Name: "Thiruparankundram",
    candidate_Name: "Rajan Chellapa",
    Party: "AIADMK",
    votes: "103,683",
    margin: "29,489",
    vote_Rate: "43.96 %",
  },
  {
    mla_id: "196",
    constituency_Name: "Thirumangalam",
    candidate_Name: "R.b.udhayakumar",
    Party: "AIADMK",
    votes: "100,338",
    margin: "14,087",
    vote_Rate: "45.51 %",
  },
  {
    mla_id: "197",
    constituency_Name: "Usilampatti",
    candidate_Name: "Aiyappan",
    Party: "AIADMK",
    votes: "71,255",
    margin: "7,477",
    vote_Rate: "33.53 %",
  },
  {
    mla_id: "198",
    constituency_Name: "Andipatti",
    candidate_Name: "Maharajan",
    Party: "DMK",
    votes: "93,541",
    margin: "8,538",
    vote_Rate: "44.64 %",
  },
  {
    mla_id: "199",
    constituency_Name: "Periyakulam",
    candidate_Name: "K S Saravanakumar",
    Party: "DMK",
    votes: "92,251",
    margin: "21,321",
    vote_Rate: "45.71 %",
  },
  {
    mla_id: "200",
    constituency_Name: "Bodinayakanur",
    candidate_Name: "O. Panneerselvam",
    Party: "AIADMK",
    votes: "100,050",
    margin: "11,021",
    vote_Rate: "46.58 %",
  },
  {
    mla_id: "201",
    constituency_Name: "Cumbum",
    candidate_Name: "Cumbum Ramakrishnan",
    Party: "DMK",
    votes: "104,800",
    margin: "42,413",
    vote_Rate: "51.81 %",
  },
  {
    mla_id: "202",
    constituency_Name: "Rajapalayam",
    candidate_Name: "Thangapandiyan",
    Party: "DMK",
    votes: "74,158",
    margin: "3,898",
    vote_Rate: "41.50 %",
  },
  {
    mla_id: "203",
    constituency_Name: "Srivilliputhur",
    candidate_Name: "Maanraj",
    Party: "AIADMK",
    votes: "70,475",
    margin: "12,738",
    vote_Rate: "38.09 %",
  },
  {
    mla_id: "204",
    constituency_Name: "Sattur",
    candidate_Name: "A.r.raguraman",
    Party: "MDMK",
    votes: "74,174",
    margin: "11,179",
    vote_Rate: "38.68 %",
  },
  {
    mla_id: "205",
    constituency_Name: "Sivakasi",
    candidate_Name: "A.m.s.g.ashokan",
    Party: "INC",
    votes: "78,947",
    margin: "17,319",
    vote_Rate: "42.66 %",
  },
  {
    mla_id: "206",
    constituency_Name: "Virudhunagar",
    candidate_Name: "A.r.r.srinivasan",
    Party: "DMK",
    votes: "73,297",
    margin: "21,339",
    vote_Rate: "45.32 %",
  },
  {
    mla_id: "207",
    constituency_Name: "Aruppukkottai",
    candidate_Name: "S.s.r.ramachandiran",
    Party: "DMK",
    votes: "91,040",
    margin: "39,034",
    vote_Rate: "53.18 %",
  },
  {
    mla_id: "208",
    constituency_Name: "Tiruchuli",
    candidate_Name: "Thangam Thennarasu",
    Party: "DMK",
    votes: "102,225",
    margin: "60,992",
    vote_Rate: "59.15 %",
  },
  {
    mla_id: "209",
    constituency_Name: "Paramakudi",
    candidate_Name: "Murugesan",
    Party: "DMK",
    votes: "84,864",
    margin: "13,285",
    vote_Rate: "46.59 %",
  },
  {
    mla_id: "210",
    constituency_Name: "Tiruvadanai",
    candidate_Name: "R.m.karumanickam",
    Party: "INC",
    votes: "79,364",
    margin: "13,852",
    vote_Rate: "39.33 %",
  },
  {
    mla_id: "211",
    constituency_Name: "Ramanathapuram",
    candidate_Name: "Kadhar Batcha Alas Muthuramalingam",
    Party: "DMK",
    votes: "111,082",
    margin: "50,479",
    vote_Rate: "51.88 %",
  },
  {
    mla_id: "212",
    constituency_Name: "Mudhukulathur",
    candidate_Name: "Raja Kannapan",
    Party: "DMK",
    votes: "101,901",
    margin: "20,721",
    vote_Rate: "46.06 %",
  },
  {
    mla_id: "213",
    constituency_Name: "Vilathikulam",
    candidate_Name: "Markandeyan",
    Party: "DMK",
    votes: "90,348",
    margin: "38,549",
    vote_Rate: "54.05 %",
  },
  {
    mla_id: "214",
    constituency_Name: "Thoothukkudi",
    candidate_Name: "Geetha Jeevan",
    Party: "DMK",
    votes: "92,314",
    margin: "50,310",
    vote_Rate: "49.00 %",
  },
  {
    mla_id: "215",
    constituency_Name: "Tiruchendur",
    candidate_Name: "Anitha Radhakrishnan",
    Party: "DMK",
    votes: "88,274",
    margin: "25,263",
    vote_Rate: "50.58 %",
  },
  {
    mla_id: "216",
    constituency_Name: "Srivaikuntam",
    candidate_Name: "Urvasi S.amirtharaj",
    Party: "INC",
    votes: "76,843",
    margin: "17,372",
    vote_Rate: "46.75 %",
  },
  {
    mla_id: "217",
    constituency_Name: "Ottapidaram",
    candidate_Name: "Shanmugayyaa",
    Party: "DMK",
    votes: "73,110",
    margin: "8,510",
    vote_Rate: "41.11 %",
  },
  {
    mla_id: "218",
    constituency_Name: "Kovilpatti",
    candidate_Name: "Kadambur Raju",
    Party: "AIADMK",
    votes: "68,556",
    margin: "12,403",
    vote_Rate: "37.89 %",
  },
  {
    mla_id: "219",
    constituency_Name: "Sankarankovil",
    candidate_Name: "E.raja",
    Party: "DMK",
    votes: "71,347",
    margin: "5,297",
    vote_Rate: "38.92 %",
  },
  {
    mla_id: "220",
    constituency_Name: "Vasudevanallur",
    candidate_Name: "Sathan Tirumalaikumar",
    Party: "MDMK",
    votes: "68,730",
    margin: "2,367",
    vote_Rate: "39.08 %",
  },
  {
    mla_id: "221",
    constituency_Name: "Kadayanallur",
    candidate_Name: "Krishnamurali",
    Party: "AIADMK",
    votes: "88,474",
    margin: "24,349",
    vote_Rate: "43.08 %",
  },
  {
    mla_id: "222",
    constituency_Name: "Tenkasi",
    candidate_Name: "S.palani Nadar",
    Party: "INC",
    votes: "89,315",
    margin: "370",
    vote_Rate: "41.71 %",
  },
  {
    mla_id: "223",
    constituency_Name: "Alangulam",
    candidate_Name: "Manoj Pandian",
    Party: "AIADMK",
    votes: "74,153",
    margin: "3,539",
    vote_Rate: "36.44 %",
  },
  {
    mla_id: "224",
    constituency_Name: "Tirunelveli",
    candidate_Name: "Naimar Nagendran",
    Party: "BJP",
    votes: "92,282",
    margin: "23,107",
    vote_Rate: "46.70 %",
  },
  {
    mla_id: "225",
    constituency_Name: "Ambasamudram",
    candidate_Name: "Isakki Subbaiah",
    Party: "AIADMK",
    votes: "85,211",
    margin: "16,915",
    vote_Rate: "47.96 %",
  },
  {
    mla_id: "226",
    constituency_Name: "Palayamkottai",
    candidate_Name: "Abdul Wahab",
    Party: "DMK",
    votes: "89,117",
    margin: "52,141",
    vote_Rate: "55.32 %",
  },
  {
    mla_id: "227",
    constituency_Name: "Nanguneri",
    candidate_Name: "Ruby R.manoharan",
    Party: "INC",
    votes: "75,902",
    margin: "16,486",
    vote_Rate: "39.43 %",
  },
  {
    mla_id: "228",
    constituency_Name: "Radhapuram",
    candidate_Name: "M.appavu",
    Party: "DMK",
    votes: "82,331",
    margin: "5,925",
    vote_Rate: "43.95 %",
  },
  {
    mla_id: "229",
    constituency_Name: "Kanniyakumari",
    candidate_Name: "Thalavai Sundaram",
    Party: "AIADMK",
    votes: "109,745",
    margin: "16,213",
    vote_Rate: "48.80 %",
  },
  {
    mla_id: "230",
    constituency_Name: "Nagercoil",
    candidate_Name: "M.r.gandhi",
    Party: "BJP",
    votes: "88,804",
    margin: "11,669",
    vote_Rate: "48.21 %",
  },
  {
    mla_id: "231",
    constituency_Name: "Colachel",
    candidate_Name: "Prince",
    Party: "INC",
    votes: "90,681",
    margin: "24,832",
    vote_Rate: "49.56 %",
  },
  {
    mla_id: "232",
    constituency_Name: "Padmanabhapuram",
    candidate_Name: "Mano Thangaraj",
    Party: "DMK",
    votes: "87,744",
    margin: "26,885",
    vote_Rate: "51.57 %",
  },
  {
    mla_id: "233",
    constituency_Name: "Vilavancode",
    candidate_Name: "Vijayatharani",
    Party: "INC",
    votes: "87,473",
    margin: "28,669",
    vote_Rate: "52.12 %",
  },
  {
    mla_id: "234",
    constituency_Name: "Killiyoor",
    candidate_Name: "S.rajeshkumar",
    Party: "INC",
    votes: "101,541",
    margin: "55,400",
    vote_Rate: "59.76 %",
  },
];
localStorage.setItem(
  "mla_details_english",
  JSON.stringify(mla_details_english)
);

const past_leaders_english = [
  {
    id: "1",
    name: "M.K.Stalin",
    to: "07 May 2021",
    from: "Present",
    party_name: "DMK",
  },
  {
    id: "2",
    name: "Edappadi K. Palaniswami",
    to: "16 Feb 2017",
    from: "03 May 2021",
    party_name: "AIADMK",
  },
  {
    id: "3",
    name: "O. Panneerselvam",
    to: "06 Dec 2016",
    from: "15 Feb 2017",
    party_name: "AIADMK",
  },
  {
    id: "4",
    name: "J. Jayalalithaa",
    to: "24 May 2016",
    from: "04 Dec 2016",
    party_name: "AIADMK",
  },
  {
    id: "5",
    name: "J. Jayalalithaa",
    to: "23 May 2015",
    from: "23 May 2016",
    party_name: "AIADMK",
  },
  {
    id: "6",
    name: "O. Panneerselvam",
    to: "29 Sep 2014",
    from: "22 May 2015",
    party_name: "AIADMK",
  },
  {
    id: "7",
    name: "J. Jayalalithaa",
    to: "16 May 2011",
    from: "27 Sep 2014",
    party_name: "AIADMK",
  },
  {
    id: "8",
    name: "M. Karunanidhi",
    to: "13 May 2006",
    from: "15 May 2011",
    party_name: "DMK",
  },
  {
    id: "9",
    name: "J. Jayalalithaa",
    to: "02 Mar 2002",
    from: "12 May 2006",
    party_name: "AIADMK",
  },
  {
    id: "10",
    name: "O. Panneerselvam",
    to: "21 Sep 2001",
    from: "01 Mar 2002",
    party_name: "AIADMK",
  },
  {
    id: "11",
    name: "J. Jayalalithaa",
    to: "14 May 2001",
    from: "21 Sep 2001",
    party_name: "AIADMK",
  },
  {
    id: "12",
    name: "M. Karunanidhi",
    to: "13 May 1996",
    from: "13 May 2001",
    party_name: "DMK",
  },
  {
    id: "13",
    name: "J. Jayalalithaa",
    to: "24 Jun 1991",
    from: "13 May 1996",
    party_name: "AIADMK",
  },
  {
    id: "14",
    name: "President's rule",
    to: "30 Jan 1991",
    from: "24 Jun 1991",
    party_name: "",
  },
  {
    id: "15",
    name: "M. Karunanidhi",
    to: "27 Jan 1989",
    from: "30 Jan 1991",
    party_name: "DMK",
  },
  {
    id: "4",
    name: "J. Jayalalithaa",
    to: "24 May 2016",
    from: "04 Dec 2016",
    party_name: "AIADMK",
  },
  {
    id: "16",
    name: "President's rule",
    to: "30 Jan 1988",
    from: "27 Jan 1989",
    party_name: "",
  },
  {
    id: "17",
    name: "Janaki Ramachandran",
    to: "07 Jan 1988",
    from: "30 Jan 1988",
    party_name: "AIADMK",
  },
  {
    id: "18",
    name: "V.R. Nedunchezhiyan",
    to: "24 Dec 1987",
    from: "07 Jan 1988",
    party_name: "AIADMK",
  },
  {
    id: "19",
    name: "M. G. Ramachandran",
    to: "10 Feb 1985",
    from: "24 Dec 1987",
    party_name: "AIADMK",
  },
  {
    id: "20",
    name: "M. G. Ramachandran",
    to: "09 Jun 1980",
    from: "15 Nov 1984",
    party_name: "AIADMK",
  },
  {
    id: "21",
    name: "President's rule",
    to: "17 Feb 1980",
    from: "09 Jun 1980",
    party_name: "",
  },
  {
    id: "22",
    name: "M. G. Ramachandran",
    to: "01 Jul 1977",
    from: "17 Feb 1980",
    party_name: "AIADMK",
  },
  {
    id: "23",
    name: "President's rule",
    to: "31 Jan 1976",
    from: "30 Jun 1977",
    party_name: "",
  },
  {
    id: "24",
    name: "M. Karunanidhi",
    to: "15 Mar 1971",
    from: "31 Jan 1976",
    party_name: "DMK",
  },
  {
    id: "25",
    name: "M. Karunanidhi",
    to: "10 Feb 1969",
    from: "04 Jan 1971",
    party_name: "DMK",
  },
  {
    id: "26",
    name: "V.R. Nedunchezhiyan",
    to: "03 Feb 1969",
    from: "10 Feb 1969",
    party_name: "DMK",
  },
  {
    id: "27",
    name: "C. N. Annadurai",
    to: "01 Mar 1967",
    from: "03 Feb 1969",
    party_name: "DMK",
  },
  {
    id: "28",
    name: "C. N. Annadurai",
    to: "01 Mar 1967",
    from: "03 Feb 1969",
    party_name: "DMK",
  },
  {
    id: "29",
    name: "M. Bakthavatsalam",
    to: "02 Oct 1963",
    from: "06 Mar 1967",
    party_name: "INC",
  },
  {
    id: "30",
    name: "K. Kamaraj",
    to: "15 Mar 1962",
    from: "02 Oct 1963",
    party_name: "INC",
  },
  {
    id: "31",
    name: "K. Kamaraj",
    to: "13 Apr 1957",
    from: "01 Mar 1962",
    party_name: "INC",
  },
  {
    id: "32",
    name: "K. Kamaraj",
    to: "13 Apr 1954",
    from: "31 Mar 1957",
    party_name: "INC",
  },
  {
    id: "33",
    name: "C. Rajagopalachari",
    to: "10 Apr 1952",
    from: "13 Apr 1954",
    party_name: "INC",
  },
  {
    id: "34",
    name: "P. S. Kumaraswamy Raja",
    to: "26 Jan 1950",
    from: "10 Apr 1952",
    party_name: "INC",
  },
  {
    id: "35",
    name: "P. S. Kumaraswamy Raja",
    to: "06 Apr 1949",
    from: "26 Jan 1950",
    party_name: "INC",
  },
  {
    id: "36",
    name: "O. P. Ramaswamy Reddiyar",
    to: "23 Mar 1947",
    from: "06 Apr 1949",
    party_name: "INC",
  },
  {
    id: "37",
    name: "Tanguturi Prakasam",
    to: "30 Apr 1946",
    from: "23 Mar 1947",
    party_name: "INC",
  },
  {
    id: "38",
    name: "Governor's Rule",
    to: "29 Oct 1939",
    from: "30 Apr 1946",
    party_name: "INC",
  },
  {
    id: "39",
    name: "C. Rajagopalachari",
    to: "14 Jul 1937",
    from: "29 Oct 19394",
    party_name: "INC",
  },
  {
    id: "40",
    name: "Kurma Venkata Reddy Naidu",
    to: "01 Apr 1937",
    from: "14 Jul 1937",
    party_name: "Interim provisional ministry",
  },
  {
    id: "41",
    name: "Raja of Bobbili",
    to: "24 Aug 1936",
    from: "01 Apr 1937",
    party_name: "Justice Party",
  },
  {
    id: "42",
    name: "P. T. Rajan",
    to: "04 Apr 1936",
    from: "24 Aug 1936",
    party_name: "Justice Party",
  },
  {
    id: "43",
    name: "Raja of Bobbili",
    to: "05 Nov 1934",
    from: "04 Apr 1936",
    party_name: "Justice Party",
  },
  {
    id: "44",
    name: "Raja of Bobbili",
    to: "05 Nov 1932",
    from: "05 Nov 1934",
    party_name: "Justice Party",
  },
  {
    id: "45",
    name: "B. Munuswamy Naidu",
    to: "27 Oct 1930",
    from: "05 Nov 1932",
    party_name: "Justice Party",
  },
  {
    id: "46",
    name: "P. Subbarayan",
    to: "04 Dec 1926",
    from: "04 Dec 1926",
    party_name: "Unaffiliated",
  },
  {
    id: "47",
    name: "Raja of Panagal",
    to: "19 Nov 1923",
    from: "04 Dec 1926",
    party_name: "Justice Party",
  },
  {
    id: "48",
    name: "Raja of Panagal",
    to: "11 Jul 1921",
    from: "11 Sep 1923",
    party_name: "Justice Party",
  },
  {
    id: "49",
    name: "A. Subbarayalu Reddiar",
    to: "17 Dec 1920",
    from: "11 Jul 1921",
    party_name: "Justice Party",
  },
];
localStorage.setItem(
  "past_leaders_english",
  JSON.stringify(past_leaders_english)
);

const tamil_nav = [
  "முகப்பு",
  "விவரம்",
  "அறிக்கைகள்",
  "மாவட்ட வாரியாக அறிக்கை",
  "நிறைவு",
  "நிலுவை",
  "தலைவர்கள்",
  "மேலும்",
  "ஆளுநர்கள்",
  "பிரதிநிதிகள்",
  "நிர்வாகம்",
  " மொழி",
  "தமிழ்",
  "ஆங்கிலம்",
  "சுயவிவரம்",
  "உள்நுழைக",
  "பதிவு செய்யவும்",
  "அரசியல்",
  "வலி மிகவும் முக்கியமானது, நோயாளியின் வலிப்புத்தாக்கத்தின் விளைவு, ஆனால் அது உழைப்பு மற்றும் வலியை ஏற்படுத்தும் ஒரு நேரத்தில் அதைச் செய்யட்டும்.",
  "பயனுள்ள இணைப்புகள்",
  "முகப்பு",
  "விவரம்",
  "மாவட்ட வாரியாக அறிக்கை",
  "பிரதிநிதிகள் பற்றி",
  "பதிவு",
  "எங்கள் புதிய ஊட்டங்களுக்கு குழுசேர தவறாதீர்கள், தயவுசெய்து கீழே உள்ள படிவத்தை நிரப்பவும்.",
];

const english_nav = [
  "Home",
  "Portfolios",
  "Manifesto",
  "District-wise Manifesto",
  "Complete",
  "Bending",
  "past Leaders",
  "More",
  "Governors",
  "Representatives",
  "Admin",
  "Language",
  "Tamil",
  "English",
  "Profile",
  "Login",
  "Register",
  "POLITIFACT",
  "The pain is very important, the effect of the patient's convulsions, but let it be done at a time when it causes exertion and pain.",
  "Useful Links",
  "Home",
  "Portfolio",
  "District wise manifesto",
  "About Representatives",
  "registration",
  "Don't miss to subscribe to our new feeds, please fill the form below.",
];

const tamil = "tamil";
const english = "english";

const change_elem = document.querySelectorAll(".list_li");

document.getElementById("lang_ta").addEventListener("click", () => {
  window.location.reload();
  change_elem.forEach((item, index) => {
    item.innerHTML = tamil_nav[index];
  });

  document.getElementById("searchbar").placeholder = "தேடுக";

  localStorage.setItem("language", tamil);
});

document.getElementById("lang_eng").addEventListener("click", () => {
  window.location.reload();
  change_elem.forEach((item, index) => {
    item.innerHTML = english_nav[index];
  });

  document.getElementById("searchbar").placeholder = "search";

  localStorage.setItem("language", english);
});

const language_setting = localStorage.getItem("language");

if (language_setting === "english") {
  change_elem.forEach((item, index) => {
    item.innerHTML = english_nav[index];
  });

  document.getElementById("searchbar").placeholder = "search";

  const targetLanguage = "en"; // translate to French
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
} else if (language_setting === "tamil") {
  change_elem.forEach((item, index) => {
    item.innerHTML = tamil_nav[index];

    document.getElementById("searchbar").placeholder = "தேடுக";
  });
}

const searchbar = document.getElementById("searchbar");
const recognition = new webkitSpeechRecognition();

// Set the recognition properties
recognition.continuous = false;

if (language_setting === "tamil") {
  recognition.lang = "ta-IN";
} else if (language_setting === "english") {
  recognition.lang = "en-US";
}

// When the user stops speaking, transcribe the speech and perform the search

recognition.onresult = function (event) {
  const searchText = event.results[0][0].transcript;
  searchbar.value = searchText;
  searchbar.focus();
  search();
};

// When the search button is clicked, perform the search

const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener("click", search);

// Perform the search
function search() {
  // const searchText = searchbar.value;
  // Perform your search operation here
}

// When the microphone icon is clicked, start the speech recognition
searchIcon.addEventListener("click", () => {
  recognition.start();
});
