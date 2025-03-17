var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

function toggleMenu() {
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  menu.classList.toggle("active");

  // Toggle between ☰ and ✖
  if (menu.classList.contains("active")) {
    menuIcon.textContent = "✖";
  } else {
    menuIcon.textContent = "☰";
  }
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyDjEhrImLqceytxSTuVzG42r7iNDMcs2aK1Cg8xfqKToUXCSjqJ-JPZXIYHk9-4t5T/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message has been sent successfully";
      setTimeout(function () {
        msg.innerHTML = " ";
      }, 5000);
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
