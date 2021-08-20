const floors = document.querySelectorAll('path[data-floor]');
const floorCounter = document.querySelector('.main__counter')
const buttons = document.querySelectorAll('.main__btn')

let currentFloor = floorCounter.textContent;
let usCurrentFloor;

const showCurrentFloor = () => {
    floors.forEach((floor) => {
        if (currentFloor == floor.getAttribute('data-floor')) {
            floors.forEach((floor) => {
                floor.classList.remove('active-floor');
            })
            floor.classList.add('active-floor')
        }
    })
}

floors.forEach((floor) => {
    floor.addEventListener('mouseover', () => {
        currentFloor = floor.getAttribute('data-floor');
        floorCounter.textContent = currentFloor;
        showCurrentFloor();
    })
})

buttons.forEach((button) => {
    if (button.classList.contains('main__btn--up')) {
        button.addEventListener('click', () => {
            if (currentFloor < 18) {
                currentFloor++;
                usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
                floorCounter.textContent = usCurrentFloor;
                showCurrentFloor();
            }
        })
    } else {
        button.addEventListener('click', () => {
            if (currentFloor > 2) {
                currentFloor--;
                usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
                floorCounter.textContent = usCurrentFloor;
                showCurrentFloor();
            }
        })
    }
})
