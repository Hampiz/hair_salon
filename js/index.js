// Vänta tills hela HTML-dokumentet har laddats innan scriptet körs
document.addEventListener("DOMContentLoaded", function() {

    // Hämta elementet med id="mobile-menu" (hamburgermenyn)
    const menuToggle = document.getElementById("mobile-menu");
    
    // Hämta elementet med klassen "nav-list" (navigationsmenyn)
    const navList = document.querySelector(".nav-list");

    // Lägg till en klickhändelse på hamburgermenyn
    menuToggle.addEventListener("click", function() {
        
        // Växla (toggle) mellan att lägga till eller ta bort klassen "active" på navList
        navList.classList.toggle("active");
    });

});
