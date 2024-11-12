const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

const switcher = document.querySelector(".switch input");
const about = document.querySelector(".about");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
  themeText.textContent = "Dark Mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
};
const lightMode = () => {
  themeText.textContent = "Light Mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

const switchTheme = (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

switcher.addEventListener("change", switchTheme);

const backToTopButton = document.querySelector(".top-button");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 400) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const Form = document.querySelector("form");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".password2");
const message = document.querySelector(".message");

Form.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    message.textContent = "Hesla se neshodují. Zadejte je znovu.";
    message.style.color = "red";
  } else {
  }
});
