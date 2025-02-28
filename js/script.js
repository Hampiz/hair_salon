document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
