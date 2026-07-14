document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".certificate-card");
    const next = document.querySelector(".nav-btn.next");
    const prev = document.querySelector(".nav-btn.prev");
    let current = 0;

    function showCard(index) {

        cards.forEach(card => card.classList.remove("active"));

        if (index >= cards.length) current = 0;
        if (index < 0) current = cards.length - 1;

        cards[current].classList.add("active");
    }

    next.addEventListener("click", () => {
        current++;
        showCard(current);
    });

    prev.addEventListener("click", () => {
        current--;
        showCard(current);
    });

    showCard(current);
});