const questions = document.querySelectorAll('.question');
const radios = document.querySelectorAll('input[type="radio"]');

console.log(radios);
let values = 0;

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', changeEvent);
}

function changeEvent(e) {
    values += parseInt(e.target.value);
    console.log(values);
    window.location.href = `#section${parseInt(e.target.name.split('q')[1]) + 1}`;
    if (e.target.name === 'q10') {
        let percentage = (values / 10) * 20;
        document.querySelector('.score').innerHTML = percentage + '%';
        document.querySelector('.level').innerHTML = defineLevel(percentage);
    }

}

function defineLevel(score) {
    if(score >= 71) return 'Advance Level';
    if(score >= 31) return 'Intermediate Level';
    return 'Basic Level';
}