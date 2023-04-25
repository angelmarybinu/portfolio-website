let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
const text = "Angel Mary"; // The text you want to animate
const delay = 100; // The delay between each letter (in milliseconds)
const repeatDelay = 500; // The delay between each animation repeat (in milliseconds)
let index = 0; // The current index of the letter being typed

function typeLetter() {
  const typingText = document.getElementById("typing-text");
  typingText.innerHTML += text[index];
  index++;
  if (index >= text.length) {
    clearInterval(intervalId);
    setTimeout(() => {
      typingText.innerHTML = "";
      index = 0;
      intervalId = setInterval(typeLetter, delay);
    }, repeatDelay);
  }
}

let intervalId = setInterval(typeLetter, delay);


                                    