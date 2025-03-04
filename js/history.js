document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.querySelectorAll(".category-btn");

	buttons.forEach(button => {
		button.addEventListener("click", function () {
			const targetId = this.getAttribute("data-target");
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	});
});