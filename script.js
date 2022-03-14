const magicNumber = Math.floor(Math.random() * 100) + 1;

const userNumberElement = document.querySelector("#your-number");
const userNumberElements = document.querySelector('#attempts');

document.querySelector("#your-number-button").addEventListener('click', () => {
    const userAttempt = parseInt(userNumberElement.value);

    if (magicNumber !== userAttempt) {
        addAttemptElement(userAttempt);
    } else {
        document.querySelector('#magic-number').innerText = magicNumber;
        userNumberElement.disabled = true;
    }

    userNumberElement.value = '';
})

let userNumberElementTemplate = '';
async function getTemplate(url) {
    if (userNumberElementTemplate) return userNumberElementTemplate
    let res = await fetch(url);
    return res.text();
}

function addAttemptElement(value) {
    getTemplate('./ejs-template.html')
    .then(userNumberElementTemplate=>{
        const attempt = ejs.compile(userNumberElementTemplate)({ magicNumber, value });
        userNumberElements.innerHTML += attempt;
    })
}
