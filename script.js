const hexNumbers = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorbtn = document.querySelector('.colorbtn');
const bodybg = document.querySelector('body');
const hex = document.querySelector('.hex');



colorbtn.addEventListener('click', getHex);

function getHex() {
    let hexcolor = "#";

    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        
        hexcolor +=hexNumbers[random];
        // console.log(hexcolor);
    }

    bodybg.style.backgroundColor = hexcolor;
    hex.innerHTML = hexcolor;
}