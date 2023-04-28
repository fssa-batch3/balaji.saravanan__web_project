let root = window.location.origin;


const logged_email = localStorage.getItem("admin_login");

let nav = document.getElementById("nave_side");

let header = `<nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
id="navbarVertical">
<div class="container-fluid">
    <!-- Toggler -->
    <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse"
        data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Brand -->
    <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="${root}/../index.html">
        POITIFACT
    </a>
    <!-- User menu (mobile) -->
    <div class="navbar-user d-lg-none">
        <!-- Dropdown -->
        <div class="dropdown">
            <!-- Toggle -->
            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <div class="avatar-parent-child">
                    <img alt="Image Placeholder"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        class="avatar avatar- rounded-circle">
                    <span class="avatar-child avatar-badge bg-success"></span>
                </div>
            </a>
            <!-- Menu -->
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                <a href="#" class="dropdown-item">Profile</a>

                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">Logout</a>
            </div>
        </div>
    </div>
    <!-- Collapse -->
    <div class="collapse navbar-collapse" id="sidebarCollapse">
        <!-- Navigation -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="${root}/admin/admin_dashboard.html">
                    <i class="bi bi-house"></i> Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${root}/admin/pages/leader_portfoie/profile_list_page.html">
                    <i class="bi bi-bar-chart"></i> create list
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-chat"></i> comments
                    <span
                        class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">0</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-bookmarks"></i> manifesto
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-people"></i> bloger
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-people"></i> users
                </a>
            </li>
        </ul>
        <!-- Divider -->
        <hr class="navbar-divider my-5 opacity-20">

        <!-- Push content down -->
        <div class="mt-auto"></div>
        <!-- User (md) -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-person-square"></i> Account
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-box-arrow-left"></i> Logout
                </a>
            </li>
        </ul>
    </div>
</div>
</nav>`;



if (logged_email !== null) {

    nav.insertAdjacentHTML("afterbegin", header);

} else {

    nav.insertAdjacentHTML("afterbegin", header);

}


