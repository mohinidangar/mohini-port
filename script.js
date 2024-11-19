// Change background color for the About section when the button is clicked
document.getElementById("change-bg-btn").addEventListener("click", function() {
    const aboutSection = document.getElementById("about");
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    aboutSection.style.backgroundColor = randomColor;
});

