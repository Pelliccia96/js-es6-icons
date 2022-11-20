/* import { iconsArray } from "./data.js";
import { createElement, generateArrayOfRandomColors } from "./utilities.js"; */
const iconsArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const mainConainer_El = document.getElementById("main-container");
const selectContainer_El = document.getElementById("select-container");
const cardContainer_El = document.querySelector("#main-container #card-container");

const newArray = [];
let iconTypes;
let iconFamily;
let unactivatedCards;
let activatedCards;
let unactivatedIcons;

const iconColors = generateArrayOfRandomColors(iconsArray.length);

iconTypes = iconsArray.filter((element, i, array, CreateCard) => {
    const cardCol_El = createElement("div", "col", "p-3");
    cardCol_El.dataset.type = `${element.type}  ${element.family}`;
    const card_El = createElement("div", "card", "text-center");
    const iconClass1 = element.prefix + element.name;
    const iconClass2 = element.prefix + "solid";
    const cardIcon_El = createElement("i", iconClass1, iconClass2);

    cardIcon_El.style.color = iconColors[i];
    const cardTitle_El = createElement("h5", "title", "text-uppercase");
    cardTitle_El.innerHTML = element.name;

    cardCol_El.append(card_El);
    card_El.append(cardIcon_El, cardTitle_El);
    cardContainer_El.append(cardCol_El);

    if (!newArray.includes(element.type)) {
        newArray.push(element.type);
        return (newArray);
    }
});

iconFamily = iconsArray.filter((element, i, array) => {
    if (!newArray.includes(element.family)) {
        newArray.push(element.family);
        return (newArray);
    }
});

const select_El = createElement("select", "form-select", "select-icon-type");
let familyOptions = iconFamily.map((element, i, array) => { return element.family });
let typesOptions = iconTypes.map((element, i, array) => { return element.type });
let selectOptions = familyOptions.concat(typesOptions);
selectContainer_El.prepend(select_El);

selectOptions.forEach((element, i) => {
    const option_El = createElement("option", "icon-type", element);
    option_El.innerText = element;
    option_El.setAttribute("name", element);
    option_El.setAttribute("value", element);
    if (i === 0) {
        option_El.innerText = "all";
        option_El.setAttribute("selected", true);
    }
    select_El.appendChild(option_El);
});

select_El.addEventListener("change", filterCards);

function filterCards() {
    for (let i = 0; i < selectOptions.length; i++) {
        if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value);
            activeCards(select_El.value);
        } else if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value);
            activeCards(select_El.value);
        } else if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value);
            activeCards(select_El.value);
        } else if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value);
            activeCards(select_El.value);
        }
    }
}

function disactiveCards(selectValue) {
    unactivatedCards = document.querySelectorAll(`[data-type]:not([data-type*="${selectValue}"])`);
    let newArrayColors = generateArrayOfRandomColors(unactivatedCards.length);
    unactivatedIcons = document.querySelectorAll(`[data-type]:not([data-type*="${selectValue}"]) i`);

    unactivatedCards.forEach((element, i) => {
        unactivatedCards[i].classList.toggle("d-none", true);
        unactivatedIcons[i].style.color = newArrayColors[i];
    });
}

function activeCards(selectValue) {
    activatedCards = document.querySelectorAll(`[data-type*="${selectValue}"]`);
    activatedCards.forEach((element, i) => {
        activatedCards[i].classList.toggle("d-none", false);
    });
}

function createElement(tagEl, class1, class2) {
    const created_El = document.createElement(tagEl);
    created_El.classList.add(class1);
    created_El.classList.add(class2);
    return created_El;
}

function sortRandomString(randomStringlength, stringAdmittedCaracters) {
    let result = '';
    for (var i = randomStringlength; i > 0; --i) result += stringAdmittedCaracters[Math.round(Math.random() * (stringAdmittedCaracters.length - 1))];
    return result;
}

function generateArrayOfRandomColors(arrayLenghtNumber) {
    const array = [];
    const esadecimalColorCaracters = "0123456789abcdef";

    while (array.length < arrayLenghtNumber) {
        const randomString = "#"+sortRandomString(6, esadecimalColorCaracters);
        array.push(randomString);
    }
    return array;
}
