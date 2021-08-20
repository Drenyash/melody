const floors = document.querySelectorAll('path[data-floor]');
const floorCounter = document.querySelector('.main__counter')
const buttons = document.querySelectorAll('.main__btn')

const showFloors = document.querySelector('.main__show-btn')
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

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
        floor.addEventListener('click', openModal)
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

function openModal() {
    modal.classList.toggle('modal--active');
    const modalFloor = document.querySelector('.modal__counter');
    modalFloor.textContent = floorCounter.textContent;
}

showFloors.addEventListener('click', openModal);

modalClose.addEventListener('click', openModal);

// Выбор этажа в модалке

const modalFlat = document.querySelectorAll('.modal__icon path');
const modalLinks = document.querySelectorAll('.modal__link');

modalFlat.forEach((flat) => {
    flat.addEventListener('mouseover', () => {
        modalFlat.forEach((flat) => {
            flat.classList.remove('active-flat');
        })
        flat.classList.add('active-flat');
        modalLinks.forEach((link) => {
            if (flat.getAttribute('data-number') == link.getAttribute('data-number')) {
                modalLinks.forEach((link) => {
                    link.classList.remove('active--link')
                })
                link.classList.add('active--link')
            }
        })
    })
})

modalLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        modalLinks.forEach((link) => {
            link.classList.remove('active--link');
        })
        link.classList.add('active--link')
        modalFlat.forEach((flat) => {
            if (flat.getAttribute('data-number') == link.getAttribute('data-number')) {
                modalFlat.forEach((flat) => {
                    flat.classList.remove('active-flat')
                })
                flat.classList.add('active-flat')
            }
        })
    })
})