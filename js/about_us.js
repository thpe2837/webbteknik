document.addEventListener("DOMContentLoaded", function () {
	const submitButton = document.querySelector('input[type="submit"]');

	submitButton.addEventListener("click", function (event) {
		
		event.preventDefault();

		this.classList.add("clicked");

		setTimeout(() => {
			this.classList.remove("clicked");
			document.querySelector('form').submit();
		}, 200);
	});
});