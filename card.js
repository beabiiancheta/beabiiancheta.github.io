const cards = document.querySelectorAll(".certificate-card");
const next = document.querySelector(".nav-btn.next");
const prev = document.querySelector(".nav-btn.prev");

let current = 0;

function showCard(index){

    if(index >= cards.length) current = 0;
    else if(index < 0) current = cards.length - 1;
    else current = index;

    cards.forEach(card => card.classList.remove("active"));

    cards[current].classList.add("active");
}

next.addEventListener("click", () => {
    showCard(current + 1);
});

prev.addEventListener("click", () => {
    showCard(current - 1);
});

showCard(0);