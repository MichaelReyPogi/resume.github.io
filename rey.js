const toggleButton = document.createElement("button");
toggleButton.innerText = "Dark Mode";
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("section").forEach((section) => {
        section.classList.toggle("dark-mode");
    });
});

document.body.appendChild(toggleButton);

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("animated");
});


console.log("Script.js loaded!");