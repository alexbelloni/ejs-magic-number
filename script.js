const magicNumber = Math.floor(Math.random() * 100) + 1;

const userNumberElement = document.querySelector("#your-number");
const userNumberElements = document.querySelector('#attempts');

document.querySelector("#your-number-button").addEventListener('click', () => {
    const userAttempt = parseInt(userNumberElement.value);

    if (magicNumber !== userAttempt) {
        addAttemptElement(userAttempt);
    } else {
        document.querySelector('#magic-number').innerText = magicNumber;
        userNumberElement.disabled= true;
    }

    userNumberElement.value = '';
})

const userNumberElementTemplate = document.querySelector('template');

function addAttemptElement(value) {
    const elementClone = userNumberElementTemplate.content.cloneNode(true)   
    const attempt =  elementClone.querySelector('span');
    attempt.innerText = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
    userNumberElements.appendChild(attempt);
}



