function imageClicked(){
    window.open('https://www.austrg.com.au/')
}

  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

// sticky nav
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);


// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.querySelector(".expand-button");
//     const list = document.querySelector(".dropdown-list");

//     // Toggle the display of the list when the button is clicked
//     button.addEventListener("click", function () {
//         list.style.display = list.style.display === "block" ? "none" : "block";
//     });

//     // Close the list when clicking outside of it
//     document.addEventListener("click", function (event) {
//         if (!list.contains(event.target) && event.target !== button) {
//             list.style.display = "none";
//         }
//     });
// });
function openContactPageAndPopup() {
  // Open the "Contact.html" page in the current window
  window.location.href = '/html/Contact.html';

  // Display a popup after the input is done (you can modify this part)
  alert('Form submitted successfully!'); // This is a simple alert popup, you can customize it
}
