const mainDiv = document.querySelector('.grid');
const sliderValue = document.querySelector('.input');
const leftDivOutput = document.querySelector('.sliderValue');
leftDivOutput.textContent = sliderValue.value;
console.log(sliderValue.value);

sliderValue.addEventListener('input', (event) => {
    leftDivOutput.textContent = sliderValue.value;
});

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.className = 'gridDivs';
    mainDiv.appendChild(div);
}

let gridDivs = document.querySelectorAll('.gridDivs');
//console.log(gridDivs.length);
gridDivs.forEach((div) => {
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
}); 