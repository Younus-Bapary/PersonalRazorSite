document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    const speed = 120;

    const animateCounter = (counter) => {
        const target = Number(counter.dataset.target || 0);
        const step = Math.max(1, Math.ceil(target / speed));
        let value = 0;

        const tick = () => {
            value += step;
            if (value >= target) {
                counter.textContent = target.toLocaleString();
                return;
            }
            counter.textContent = value.toLocaleString();
            requestAnimationFrame(tick);
        };

        tick();
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filter = button.dataset.filter;

            portfolioItems.forEach(item => {
                item.style.display = filter === "all" || item.dataset.category === filter ? "block" : "none";
            });
        });
    });
});
