let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function getRandomInt(largo) {
    var randomNumber = Math.floor(Math.random() * largo);
    return randomNumber;
}

function excusa() {
        return valor = who[getRandomInt(who.length)] + " " + action[getRandomInt(action.length)] + " " + what[getRandomInt(what.length)] + " " + when[getRandomInt(when.length)]
    }
window.onload = () => {
    let excusa1=excusa();
    document.querySelector('#excuse').innerHTML=excusa1;
console.log('excusa()'+excusa1)
}
