let bdy = document.body
let pboxes = document.getElementsByClassName("block");
let color_show_boxes = document.getElementsByClassName("box");

initialize()
document.addEventListener("keydown", function (event) {
    if (Number(event.which) == 32){
        let i = 0;
        for (pbox of pboxes) {
            let set_color = colorShift(pbox);
            setColorBox(color_show_boxes[i],set_color);
            i++;
        }
    }
})






function stop(item){
    item.classList.toggle("stoped_showbox");
    item.classList.toggle("box");
    item.parentElement.classList.toggle("stopedblock");
    item.parentElement.classList.toggle("block")
}
function initialize(){
    let i = 0;
    for (pbox of pboxes) {
        let set_color = colorShift(pbox);
        setColorBox(color_show_boxes[i], set_color);
        i++;
    }
}
function setColorBox(box, color){
    box.innerHTML = color;
}
function colorShift(item) {
    let color = randomHex();
    item.style.backgroundColor = color;
    return color;
}
function randomHex(){
    let C = randomRGB();
    return "#" + rgbToHex(C[0]) + rgbToHex(C[1]) + rgbToHex(C[2]);
}
function randomRGB(){
    const R = Math.floor(Math.random() * 257);
    const G = Math.floor(Math.random() * 257);
    const B = Math.floor(Math.random() * 257);
    return [R,G,B]
}
function randomSpread() {
    return Math.floor(Math.random() * 30);
}
function rgbToHex(rgb) {
     var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
           hex = "0" + hex; 
        } 
           return hex; 
}