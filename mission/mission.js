
const themeSelector = document.querySelector('#theme-selector');

// Function to change the theme
function changeTheme() {
    const body = document.body; // Select the body element
    const logo = document.getElementById('logo'); // Select the logo image

    // Check the current value of the select element
    if (themeSelector.value === 'dark') {
        // Add the dark class to the body
        body.classList.add('dark');
        // Change the source of the logo to the white BYUI logo
        logo.src = 'byui-logo_white.png'; // Path to the white logo
    } else {
        // Remove the dark class from the body
        body.classList.remove('dark');
        // Change the source of the logo to the blue logo
        logo.src = 'byui-logo_blue.webp'; // Path to the blue logo
    }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);