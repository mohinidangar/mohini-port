document.getElementById("change-bg-btn").addEventListener("click", function() {
    const aboutSection = document.getElementById("about");
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`; // Random color
    aboutSection.style.backgroundColor = randomColor; // Change background color
});


