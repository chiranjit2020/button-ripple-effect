const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.left = `${xInside}px`;
        circle.style.top = `${yInside}px`;
        button.appendChild(circle);
        setTimeout(() => {
            circle.remove();
        }, 500);
    });
});