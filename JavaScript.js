var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px")
    {
        sideNav.style.right = "0";   
        menu.img.src = "C:\Users\ASUS\Desktop\BT3\Barber_Shop_img\Barber_Shop_img\close.png"
    }
    else 
    {
        sideNav.style.right =  "-250px";
        menu.img.src = "C:\Users\ASUS\Desktop\BT3\Barber_Shop_img\Barber_Shop_img\menu.png"
    }
} 

var scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000,
    speedAsDuration: true
});