

    const stars = document.querySelectorAll(".rating span");
    const ratingInput = document.getElementById("rating");

    stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        const rating = index + 1;
        ratingInput.value = rating;

        stars.forEach(s => s.classList.remove("active"));

        for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
        }

    });

    });

    // charger les avis depuis le backend
    function displayStars(rating) {
    return "⭐".repeat(rating);
    }

    fetch("http://localhost:3000/api/testimonials")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("testimonials");

        data.forEach(t => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${displayStars(t.rating)}</h3>
            <p>${t.name}</p>
            <p>${t.message}</p>
        `;

        container.appendChild(div);

        });

    });
