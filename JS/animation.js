//array for contents
const texts = ['Fullstack Devoloper', 'Programmer', 'System Administrator & Computer Technician...'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

//selfinvoked function

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.sm-heading').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 200);

}());


