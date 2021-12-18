let sortAll = document.querySelector(".sort-all");
let sortCodes = document.querySelector("p.sort-coding");
let sortDesigns = document.querySelector(".sort-designing");
let sortDrawings = document.querySelector(".sort-drawing");

let codes = document.querySelectorAll(".coding");
let designs = document.querySelectorAll(".designing");
let drawings = document.querySelectorAll(".drawing");

sortAll.addEventListener('click', () => {
    for (let i = 0; i < codes.length; i++) {
        codes[i].classList.remove('hidden');
    }
    for (let i = 0; i < designs.length; i++) {
        designs[i].classList.remove('hidden');
    }
    for (let i = 0; i < drawings.length; i++) {
        drawings[i].classList.remove('hidden');
    }
    sortAll.classList.add('active');
    sortCodes.classList.remove('active');
    sortDesigns.classList.remove('active');
    sortDrawings.classList.remove('active');
})

sortCodes.addEventListener('click', () => {
    for (let i = 0; i < codes.length; i++) {
        codes[i].classList.remove('hidden');
    }
    for (let i = 0; i < designs.length; i++) {
        designs[i].classList.add('hidden');
    }
    for (let i = 0; i < drawings.length; i++) {
        drawings[i].classList.add('hidden');
    }
    sortAll.classList.remove('active');
    sortCodes.classList.add('active');
    sortDesigns.classList.remove('active');
    sortDrawings.classList.remove('active');
})

sortDesigns.addEventListener('click', () => {
    for (let i = 0; i < codes.length; i++) {
        codes[i].classList.add('hidden');
    }
    for (let i = 0; i < designs.length; i++) {
        designs[i].classList.remove('hidden');
    }
    for (let i = 0; i < drawings.length; i++) {
        drawings[i].classList.add('hidden');
    }
    sortAll.classList.remove('active');
    sortCodes.classList.remove('active');
    sortDesigns.classList.add('active');
    sortDrawings.classList.remove('active');
})

sortDrawings.addEventListener('click', () => {
    for (let i = 0; i < codes.length; i++) {
        codes[i].classList.add('hidden');
    }
    for (let i = 0; i < designs.length; i++) {
        designs[i].classList.add('hidden');
    }
    for (let i = 0; i < drawings.length; i++) {
        drawings[i].classList.remove('hidden');
    }
    sortAll.classList.remove('active');
    sortCodes.classList.remove('active');
    sortDesigns.classList.remove('active');
    sortDrawings.classList.add('active');
})

