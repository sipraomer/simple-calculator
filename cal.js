var num1, num2, result;

function setValues() {
	num1 = Number(document.getElementById("input1").value);
	num2 = Number(document.getElementById("input2").value);
}

function add() {

	setValues();
	result = num1 + num2;
	document.getElementById("total").value = result;
	
}

function sub() {

	setValues();
	result = num1 - num2;
	document.getElementById("total").value = result;
	
}

function mul() {

	setValues();
	result = num1 * num2;
	document.getElementById("total").value = result;
	
}

function div() {

	setValues();
	result = num1 / num2;
	document.getElementById("total").value = result;
	
}