const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? We can handle + - * / sqrt \nsq (squar 1 number) \ncube (cube a number) \npower (raise a number to another power) \nre (find the remainder when dividing)\n", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);
	console.log('num3', num3);	
	
if (mathSymbol === "+"){
		console.log(num1 + num2 + num3);
}
if (mathSymbol === "-"){
	console.log(num1 - num2 - num3);
}
if (mathSymbol === "*"){
	console.log(num1 * num2 * num3);
}
if (mathSymbol === "/"){
	console.log(num1 / num2 / num3);
}
if (mathSymbol === "sqrt"){
	console.log(Math.sqrt(num1), Math.sqrt(num2), Math.sqrt(num3));
}
if (mathSymbol === "sq"){
	console.log(Math.pow(num1,2));
}
if (mathSymbol === "cube"){
	console.log(Math.pow(num1,3));
}
if (mathSymbol === "power"){
	console.log(Math.pow(num1,num2));
}
if (mathSymbol === "re"){
	console.log(num1 % num2);
}
	// This line closes the connection to the command line interface.
	reader.close()
//does this update???
});
