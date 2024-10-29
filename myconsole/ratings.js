export const consoleRatings = {
    'PROCESSING POWER': {
        xbox: 5,
        ps5: 4,
        switch: 1,
        pc: 3,
        description: "Xbox leads with 12.15 teraflops in the Xbox X, followed by PlayStation at 10.3 teraflops. The Switch has only 0.39 teraflops docked, and PCs vary widely depending on configuration."
    },
    'GRAPHICS': {
        xbox: 5,
        ps5: 5,
        switch: 2,
        pc: 3,
        description: "The Xbox and PS5 are tied in graphics. Both can run games up to 8k graphics and 120 fps. The switch only works up to 1080p with 60 fps. Computers vary in graphics."
    },
    'COST': {
        xbox: 3,
        ps5: 2,
        switch: 5,
        pc: 1,
        description: "The switch and the Xbox S both cost around $300. The PS5 cost around $400 and the Xbox X cost around $500. Computers vary but if one would like a gaming computer, the cost for a reasonable computer is around $800-$1000."
    },
    'AVAILABLE GAMES': {
        xbox: 4,
        ps5: 4,
        switch: 3,
        pc: 5,
        description: "Computers have more games available to it than other consoles. Both PS5 and Xbox have a wide variety of different games. The Switch has less games but these games are only found in the switch."
    },
    'MOBILITY': {
        xbox: 3,
        ps5: 3,
        switch: 5,
        pc: 4,
        description: "The swtitch is more mobile than the rest. Computers can be more mobile if they are laptops. The playstation and Xbox cannot be played on the move and do need a TV or monitor to play them."
    },
    'CUSTOMIZATION': {
        xbox: 3,
        ps5: 2,
        switch: 3,
        pc: 5,
        description: "Computers can be easily customized. There are many differenent computer options to choose from. Both the Xbox and the Switch have their different choices at different costs. Consoles sometimes can be specially decorated when a new and exciting video game comes out."
    },
    
};

export function updateRatings(consoleId, rating) {
    const boxes = Array.from(document.querySelectorAll(`#${consoleId} .box`)); 
    boxes.forEach((box, index) => {
        box.classList.remove('green', 'red', 'yellow', 'orange'); 
        if (index < rating) {
            if (index === 0) {  
                box.classList.add('red');
            } else if (index === 1) {  
                box.classList.add('orange');
            } else if (index === 2) {  
                box.classList.add('yellow');
            } else {
                box.classList.add('green');
            }
        }
    });
}

export function clearBoxes() {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.classList.remove('green', 'red', 'yellow', 'orange');
    });
}