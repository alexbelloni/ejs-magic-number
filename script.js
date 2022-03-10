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

function addAttemptElement(value) {
    const attempt = document.createElement('span');
    attempt.innerText = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
    attempt.classList.add("attempt");
    userNumberElements.appendChild(attempt);
}



