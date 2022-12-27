const lis = document.querySelectorAll(".levels ul li");
const pens = document.querySelectorAll("ul.pens > li");

let log = console.log;

lis.forEach((li) => {
	li.addEventListener("click", function () {
		lis.forEach((li) => {
			li.classList.remove("active");
			this.classList.add("active");
		});
		pens.forEach((el) => {
			el.style.display = "none";
		});
		document.querySelectorAll(this.dataset.level).forEach((el) => {
			el.style.display = "block";
		});
	});
});

