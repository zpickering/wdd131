const menuButton = document.querySelector(".menu-button");
console.log(menuButton);
const gallery = document.querySelector('.gallery');


function toggleMenu() {
    console.log("Button clicked!");
    const menuLinks = document.querySelectorAll(".links a");
    menuLinks.forEach(link => {
        link.classList.toggle("hide");
    });
}

function handleResize() {
    const menu = document.querySelectorAll(".links a");
    if (window.innerWidth > 1000) {
      menu.forEach(link => {
        link.classList.remove("hide");
      });
    } else {
      menu.forEach(link => {
        link.classList.add("hide");
      });
    }
  }

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}
function viewHandler(event) {
  // Create a variable to hold the element that was clicked on from event.target
  const clickedElement = event.target;

  // Get the src attribute from that element and 'split' it on the "-"
  const imgSrc = clickedElement.getAttribute('src');
  const imgSrcParts = imgSrc.split('-');

  // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const fullImgSrc = `${imgSrcParts[0]}-full.jpeg`;

  // Insert the viewerTemplate into the top of the body element
  const altText = clickedElement.getAttribute('alt'); 
  const modalHTML = viewerTemplate(fullImgSrc, altText);
  document.body.insertAdjacentHTML('afterbegin', modalHTML);

  //Add a listener to the close button (X) that calls a function called closeViewer when clicked
  const closeButton = document.querySelector('.close-viewer');
  closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  if (viewer) {
    viewer.remove();
  }
}


handleResize();
gallery.addEventListener('click', viewHandler);
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", toggleMenu);