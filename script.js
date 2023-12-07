// Getting references to DOM elements
let close_icon = document.getElementById("close_icon");
let open_icon = document.getElementById("list_icon");
let nav_item = document.getElementsByClassName("nav-item");
let nav_item_array = Array.from(nav_item);

// Opening the menu
open_icon.addEventListener("click", function(){
    // Adding the "clicked-menu" class to show the menu
    document.getElementById("nav-links").classList.add("clicked-menu");
    // Adjusting the display of menu icons
    open_icon.style.display = "none";
    close_icon.style.display = "block";
    // Making the body non-scrollable
    document.body.style.overflow = "hidden";
});

// Closing the menu
close_icon.addEventListener("click", function(){
    // Removing the "clicked-menu" class to hide the menu
    document.getElementById("nav-links").classList.remove("clicked-menu");
    // Adjusting the display of menu icons
    open_icon.style.display = "block";
    close_icon.style.display = "none";
    // Making the body scrollable again
    document.body.style.overflow = "scroll";
});

// Adding click event listeners to navigation items
nav_item_array.forEach(function(item){
    item.addEventListener("click", function(){
        // Removing "active" class from all elements with the class "nav-item active"
        var activeItems = document.querySelectorAll(".nav-item.active");
        activeItems.forEach(function(activeItem) {
            activeItem.classList.remove("active");
        });

        // Adding "active" class to the clicked item
        item.classList.add("active");
    });
});
