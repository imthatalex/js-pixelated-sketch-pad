import tinycolor from "tinycolor2";

// declare core DOM elements
const gridContainer = document.getElementById('gridContainer');
const textContainer = document.getElementById('textContainer');
const gridStatus = document.getElementById('status');

// declare global core variables
let pixels;
let color = '#000';


// create & append buttons
const sixteenBy16Button = document.createElement('button');
sixteenBy16Button.classList.add('button');
sixteenBy16Button.textContent = '16 x 16';
textContainer.appendChild(sixteenBy16Button);

const sixtyFourBy64Button = document.createElement('button');
sixtyFourBy64Button.classList.add('button');
sixtyFourBy64Button.textContent = '64 x 64';
textContainer.appendChild(sixtyFourBy64Button);

const ninetySixBy96Button = document.createElement('button');
ninetySixBy96Button.classList.add('button');
ninetySixBy96Button.textContent = '96 x 96';
textContainer.appendChild(ninetySixBy96Button);

const changePixelsButton = document.createElement('button');
changePixelsButton.classList.add('button');
changePixelsButton.textContent = 'Custom Grid';
textContainer.appendChild(changePixelsButton);

const rainbowFillButton = document.createElement('button');
rainbowFillButton.classList.add('button');
rainbowFillButton.textContent = 'Rainbow';
textContainer.appendChild(rainbowFillButton);

const chooseColorButton = document.createElement('button');
chooseColorButton.classList.add('button');
chooseColorButton.textContent = 'Choose Color';
textContainer.appendChild(chooseColorButton);

const resetButton = document.createElement('button');
resetButton.classList.add('button');
resetButton.textContent = 'Reset';
textContainer.appendChild(resetButton);

// generate random colors
function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// render pixels to DOM
function createPixels(x, y) {
    gridStatus.textContent = 'Grid Loading...';
    // set time out to allow for textContent to render before rendering pixels
    setTimeout(() => {
        console.log('Creating Pixels...');
        for (let k = 0; k < pixels; k++) {
            // create pixel
            const gridElement = document.createElement('div');
            gridElement.classList.add('gridElement');

            // add event listener to change pixel background color
            gridElement.addEventListener('mousedown', () => {
                gridElement.style.backgroundColor = color;
            })
            gridElement.addEventListener('mouseover', (event) => {
                // if primary button is held down
                if (event.buttons === 1) {
                    gridElement.style.backgroundColor = color;
                }
            })

            // add touch event listener to change pixel background color on touch screen devices
            gridElement.addEventListener('touchstart', (event) => {
                event.preventDefault(); // prevent scrolling on touch devices
                gridElement.style.backgroundColor = color;
                console.log('touched');
            });

            gridContainer.addEventListener('touchmove', (event) => {
                event.preventDefault(); // prevent scrolling on touch devices
                // points to the touch objects in the touches array, stores the first object touched
                const touch = event.touches[0];
                // uses method elementFromPoint to gather the coordinates of the touch element
                const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                // if the touch element at specified coordinates has className gridElement change backgroundColor
                if (targetElement && targetElement.classList.contains('gridElement')) {
                    targetElement.style.backgroundColor = color;
                    console.log('moved');
                }
            });

            // add event listener to change pixel backgroundColor to randomColor
            rainbowFillButton.addEventListener('click', () => {
                gridElement.addEventListener('mousedown', () => {
                    gridElement.style.backgroundColor = getRandomRgb();
                })
                gridElement.addEventListener('mouseover', (event) => {
                    if (event.buttons === 1) {
                        gridElement.style.backgroundColor = getRandomRgb();
                    }
                })

                // add touch event listener to change pixel background color on touch screen devices
                gridElement.addEventListener('touchstart', (event) => {
                    event.preventDefault(); // prevent scrolling on touch devices
                    gridElement.style.backgroundColor = getRandomRgb();;
                    console.log('touched');
                });

                gridContainer.addEventListener('touchmove', (event) => {
                    event.preventDefault(); // prevent scrolling on touch devices
                    const touch = event.touches[0];
                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (targetElement && targetElement.classList.contains('gridElement')) {
                        targetElement.style.backgroundColor = getRandomRgb();;
                        console.log('moved');
                    }
                });
            })

            // change backgroundColor to color value
            resetButton.addEventListener('click', () => {
                gridElement.addEventListener('mousedown', () => {
                    gridElement.style.backgroundColor = color;
                })
                gridElement.addEventListener('mouseover', (event) => {
                    if (event.buttons === 1) {
                        gridElement.style.backgroundColor = color;
                    }
                })

                // add touch event listener to change pixel background color on touch screen devices
                gridElement.addEventListener('touchstart', (event) => {
                    event.preventDefault(); // prevent scrolling on touch devices
                    gridElement.style.backgroundColor = color;
                    console.log('touched');
                });

                gridContainer.addEventListener('touchmove', (event) => {
                    event.preventDefault(); // prevent scrolling on touch devices
                    const touch = event.touches[0];
                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (targetElement && targetElement.classList.contains('gridElement')) {
                        targetElement.style.backgroundColor = color;
                        console.log('moved');
                    }
                });
            })

            // change backgroundColor to color value
            chooseColorButton.addEventListener('click', () => {
                gridElement.addEventListener('mousedown', () => {
                    gridElement.style.backgroundColor = color;
                })
                gridElement.addEventListener('mouseover', (event) => {
                    if (event.buttons === 1) {
                        gridElement.style.backgroundColor = color;
                    }
                })

                // add touch event listener to change pixel background color on touch screen devices
                gridElement.addEventListener('touchstart', (event) => {
                    event.preventDefault(); // prevent scrolling on touch devices
                    gridElement.style.backgroundColor = color;
                    console.log('touched');
                });

                gridContainer.addEventListener('touchmove', (event) => {
                    event.preventDefault(); // prevent scrolling on touch devices
                    const touch = event.touches[0];
                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (targetElement && targetElement.classList.contains('gridElement')) {
                        targetElement.style.backgroundColor = color;
                        console.log('moved');
                    }
                });
            })

            // create grid
            gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${y}, 1fr)`;
            gridContainer.appendChild(gridElement);
        }
        console.log('Pixels Created');
        gridStatus.textContent = 'Grid Ready';
    }, 2);
}



// change pixels based on userInput
function changePixels() {
    let userPrompt = prompt();
    if (userPrompt < 100) {
        console.log(userPrompt + ' x ' + userPrompt + ' Rendering...');
        resetGrid();
        pixels = userPrompt * userPrompt;
        createPixels(userPrompt, userPrompt);
        console.log(userPrompt + ' x ' + userPrompt + ' Rendered');
    }
    else alert('Please Select a Value Less than 100');
}

function sixteenBy16() {
    console.log('16 x 16 Rendering...');
    resetGrid();
    pixels = 16 * 16;
    createPixels(16, 16);
    console.log('16 x 16 Pixels Rendered');
}

function sixtyFourby64() {
    console.log('64 x 64 Rendering...');
    resetGrid();
    pixels = 64 * 64;
    createPixels(64, 64);
    console.log('64 x 64 Pixels Rendered');
}

function ninetySixby96() {
    console.log('96 x 96 Rendering...');
    resetGrid();
    pixels = 96 * 96;
    createPixels(96, 96);
    console.log('96 x 96 Pixels Rendered');
}

// resets grid by clearing gridElement backgroundColor
function resetGrid() {
    console.log('Resetting Values...');
    let elements = document.getElementsByClassName('gridElement');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'transparent';
    }
    console.log('Values Reset');
    gridStatus.textContent = '';
}


// allows user to select own color for fill
function chooseColor() {
    alert('You may enter colors such as: Blue, #FFF, and rgb(255,0,0)');
    let userPrompt = prompt();
    let validateColor = tinycolor(userPrompt);
    console.log('Validating Color...')
    if (validateColor && validateColor.isValid()) {
        color = userPrompt;
        console.log('Valid Color');
    }
    else {
        alert('Please Enter a Valid Color');
        console.log('Invalid Color')
    }
}


sixteenBy16Button.addEventListener('click', sixteenBy16);
sixtyFourBy64Button.addEventListener('click', sixtyFourby64);
ninetySixBy96Button.addEventListener('click', ninetySixby96);
changePixelsButton.addEventListener('click', changePixels);
resetButton.addEventListener('click', resetGrid);
chooseColorButton.addEventListener('click', chooseColor);
