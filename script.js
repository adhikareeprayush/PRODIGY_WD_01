let close_icon = document.getElementById("close_icon");
let open_icon = document.getElementById("list_icon");
let nav_item = document.getElementsByClassName("nav-item");
let nav_item_array = Array.from(nav_item);

//opening the menu
open_icon.addEventListener("click", function(){
    document.getElementById("nav-links").classList.add("clicked-menu");
    open_icon.style.display = "none";
    close_icon.style.display = "block";
    //make the body non-scrollable
    document.body.style.overflow = "hidden";
});

//closing the menu
close_icon.addEventListener("click", function(){
    document.getElementById("nav-links").classList.remove("clicked-menu");
    open_icon.style.display = "block";
    close_icon.style.display = "none";

    //make the body scrollable again
    document.body.style.overflow = "scroll";
});

nav_item_array.forEach(function(item){
    item.addEventListener("click", function(){
         // Remove "active" class from all elements with the class "nav-item active"
         var activeItems = document.querySelectorAll(".nav-item.active");
         activeItems.forEach(function(activeItem) {
             activeItem.classList.remove("active");
         });
 
         // Add "active" class to the clicked item
         item.classList.add("active");
    });
});