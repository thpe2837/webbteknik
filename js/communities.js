document.addEventListener("DOMContentLoaded", function () {
    const communities = document.querySelectorAll(".communitie");

    communities.forEach(communitie => {
        communitie.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Beräkna positionen och justera för headern
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                // Scrolla till rätt position med smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});