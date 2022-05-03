////var
const gridContainer = document.querySelector('.gridContainer')
const pixelTest = document.querySelector('div')


let userInt = 16
let sizeInt = userInt * userInt







////func


//create initial gridbox 64x64. 1. run a func w/ passthru of #, then call it initially using 64 as a default variable for "userInput"

let gridPopulate = () => {
    for (let i = 0; i < sizeInt; i++) {
        const makePixel = document.createElement('div')
        makePixel.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'hsla(60, 10%, 6%, 0.8)';
        })
    gridContainer.appendChild(makePixel);
    gridContainer.style.cssText = `grid-template-columns: repeat(${userInt}, 1fr);
    grid-template-rows: repeat(${userInt}, 1fr);`
}}




//clear color from all pixels or delete all pixels 







//run
gridPopulate()
