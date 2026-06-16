window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".project-card, .skill-box");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});