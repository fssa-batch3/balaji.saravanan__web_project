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
                <a class="nav-link active" aria-current="page" href="${root}/index.html">முகப்பு</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="${root}/pages/portfolio/parties-profile.html">விவரம்</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    அறிக்கைகள்
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-dark" href="${root}/pages/manifesto/complte.html">நிறைவு</a></li>
                    <li><a class="dropdown-item text-dark" href="${root}/pages/manifesto/bending.html">நிலுவை</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${root}/pages/passt leaders/past leaders.html">தலைவர்கள்</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    மேலும்
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-dark" href="${root}/pages/more/Governer list.html">ஆளுநர்கள்</a></li>
                    <li><a class="dropdown-item text-dark" href="${root}/pages/more/mla.html">பிரதிநிதிகள்</a></li>
                </ul>
            </li>
            <li class="nav-item" id="admin">
                <a class="nav-link" href="">ADMIN</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li> -->
        </ul>


        <ul class="nav navbar-nav">
            <li>
                   <form class="navbar-form">
                       <div class="input-group">

                           <input type="search" class="form-control" id="searchbar" placeholder="தேடல்"  aria-label="Username"
                               aria-describedby="basic-addon1">
                           <div class="input-group-prepend">
                               <span class="input-group-text" id="basic-addon1"><i class="fa fa-search p-1" id="search-icon"></i></span>
                           </div>
                         </div>

                   </form>
            </li>
        </ul>



        <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Language
                    </a>
                   <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                         <li><a class="dropdown-item text-dark" href=#"">Tamil</a></li>
                         <li><button class="dropdown-item text-dark" id="lang_eng">English</button></li>
                     </ul>
             </li>

            <li class="nav-item" id="my-account">
                <a class="nav-link" href="${root}/pages/your opinion/profilepage.html"><span class="glyphicon glyphicon-user"></span> Profile</a>
            </li>

            <li class="nav-item dropdown" id="option_six">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    உள்நுழைக
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-dark" href="${root}/pages/register.html">Login</a></li>
                    <li><a class="dropdown-item text-dark" href="${root}/pages/register.html">Sign Up</a></li>
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
                            <a href="${root}/index.html">அரசியல்</a>
                        </div>
                        <div class="footer-text">
                            <p>
                                வலி மிகவும் முக்கியமானது, நோயாளியின் வலிப்புத்தாக்கத்தின் விளைவு, ஆனால் அது உழைப்பு
                                மற்றும் வலியை
                                ஏற்படுத்தும் ஒரு நேரத்தில் அதைச் செய்யட்டும்.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>பயனுள்ள இணைப்புகள்</h3>
                        </div>
                        <ul>
                            <li><a href="${root}/index.html">முகப்பு</a></li>
                            <li><a href="${root}/pages/portfolio/parties-profile.html">விவரம்</a></li>
                            <li><a href="#">தொடர்பு</a></li>
                            <li><a href="#">எங்களை பற்றி</a></li>
                            <li><a href="#">சமீபத்திய செய்திகள்</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>பதிவு</h3>
                        </div>
                        <div class="footer-text mb-25">
                            <p>எங்கள் புதிய ஊட்டங்களுக்கு குழுசேர தவறாதீர்கள், தயவுசெய்து கீழே உள்ள படிவத்தை
                                நிரப்பவும்.</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="https://getform.io/f/3d923c91-e39d-40b0-8763-2d3ec5996787" method="POST">
                                <input class="m-3" type="text" placeholder="மின்னஞ்சல் முகவரி">
                                <input type="text" class="m-3" placeholder="message" name="message" required />

                                <button type="submit"><i class="fa fa-send-o"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>`


if (logged_email !== null) {

    document.body.insertAdjacentHTML("afterbegin", header);

    document.body.insertAdjacentHTML("afterend", footer);

    document.getElementById("option_six").style.display = "none";

    document.getElementById("admin").style.display = "none";


}
else {

    document.body.insertAdjacentHTML("afterbegin", header);

    document.body.insertAdjacentHTML("afterend", footer);

    document.getElementById("my-account").style.display = "none";

    document.getElementById("admin").style.display = "none";


    // window.location.href = `${root}/pages/home/register.html`;
}

let admin_login= localStorage.getItem("admin_login");

if (admin_login){
    
    document.getElementById("my-account").style.display = "none";

    document.getElementById("admin").style.display = "block";

    document.getElementById("option_six").style.display = "none";

}

