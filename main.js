var albumdefotos = ["nheum 2.png","nheum 3.png","nheum 4.png","nheum 5.png","nheum 6.png","nheum 7.png","nheum 8.png","nheum 9.png","nheum 10.png","nheum 1.png"];
var i = 0;
function funcaolegal() {
    document.getElementById("willianjoestar").src=albumdefotos [i];
    i ++;
    if (i>9) {
        i=0;
    }
}