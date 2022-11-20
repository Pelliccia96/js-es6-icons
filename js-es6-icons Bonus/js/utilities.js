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

export { createElement, generateArrayOfRandomColors };
