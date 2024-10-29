import { consoleRatings, updateRatings, clearBoxes } from './ratings.js';

document.querySelector('.choiceArea').addEventListener('click', function(event) {
    if (event.target.classList.contains('choice')) {
        const choice = event.target.textContent.trim();
        clearBoxes();

        const description = document.getElementById('description');

        if (consoleRatings[choice]) {
            const ratings = consoleRatings[choice];
            updateRatings('xbox-boxes', ratings.xbox);
            updateRatings('ps5-boxes', ratings.ps5);
            updateRatings('switch-boxes', ratings.switch);
            updateRatings('pc-boxes', ratings.pc);

            description.textContent = ratings.description;
        }
    }
});