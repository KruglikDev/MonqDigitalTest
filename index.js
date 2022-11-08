//Set theme
const form = document.querySelector('.form');
const lightButton = document.querySelector('#light-theme');
const darkButton = document.querySelector('#dark-theme');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    localStorage.setItem('theme', formProps.theme);
    document.documentElement.className = formProps.theme;
})

const setTheme = () => {
    if (localStorage.getItem('theme')) {
        if(localStorage.getItem('theme') === 'light') {
            lightButton.checked = true;
        } else {
            darkButton.checked = true;
        }

        document.documentElement.className = localStorage.getItem('theme');
    }
}

//Toggle dropdown menu
const selected = document.querySelector(".row__selected");
const optionsContainer = document.querySelector(".row__options-container");

const optionsList = document.querySelectorAll(".row__option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});