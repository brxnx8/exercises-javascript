function grausCelsius(temp){
    let celsius = (temp - 32)*5/9;
    return celsius
}
var temp = 32
var celsius = grausCelsius(temp);
console.log(temp, 'fahrenheit em celsius é ', celsius, 'c°');

var temp = 212
var celsius = grausCelsius(temp);
console.log(temp, 'fahrenheit em celsius é ', celsius, 'c°');
