let select = document.querySelector("select");
let div = document.querySelector(".container div");

select.onchange = function () {
	let value = select.value;
	console.log(value);
	div.style.fontFamily = value;
};
