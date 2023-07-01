var menuButton = document.getElementById('menuButton');

var menuItems = document.getElementById('menuItems');


// ajouter un gestionnaire d'evenement sur le button de menu

menuButton.addEventListener('click', function () {
    // verifier si la liste des elements de menu est visible

    if (menuItems.style.display === 'none') {
        // aficher la liste des elements de menu

        menuItems.style.display = 'block';
    } else{
        // masquez la liste des elements de menu 

        menuItems.style.display = 'none';
    }
})