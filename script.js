const mainDiv = document.querySelector('.grid');
const sliderValue = document.querySelector('.input');
const leftDivOutput = document.querySelector('.sliderValue');
const grid = document.querySelector('.grid');
const btnApply = document.querySelector('.btnApply');
leftDivOutput.textContent = sliderValue.value;
let sliderInput = sliderValue.value;
let string = 'auto ';

grid.style.display = 'grid';
grid.style['grid-template-columns'] = string.repeat(Number(sliderValue.value));
grid.style['grid-template-rows'] = string.repeat(Number(sliderValue.value));

divCreation(sliderInput);
let gridDivs = document.querySelectorAll('.gridDivs');

sliderValue.addEventListener('input', (event) => {
    leftDivOutput.textContent = sliderValue.value;
    sliderInput = sliderValue.value;
});


btnApply.addEventListener('click', (event) => {
    grid.style['grid-template-columns'] = string.repeat(Number(sliderValue.value));
    grid.style.gridTemplateRows = string.repeat(Number(sliderValue.value));
    gridDivs.forEach(div => {
        div.remove();
    });
    divCreation(sliderInput);
    gridDivs = document.querySelectorAll('.gridDivs');
    gridDivs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black';
        });
    }); 
});

function divCreation(sliderInput) {
    grid.style['grid-template-columns'] = string.repeat(Number(sliderValue.value));
    grid.style['grid-template-rows'] = string.repeat(Number(sliderValue.value));

    for (let i = 0; i < (sliderInput*sliderInput); i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'red';
        div.className = 'gridDivs';
        mainDiv.appendChild(div); 
    }
}
console.log(gridDivs.length);
gridDivs.forEach((div) => {
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
}); 