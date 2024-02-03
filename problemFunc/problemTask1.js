/*Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.*/


function celToFahrenheit(Celsius) {
    // console.log(Celsius);
    const fahrenheit = Celsius * 9 / 5 + 32;
    const result = `${fahrenheit} F`
    return result;
}


const temperature = celToFahrenheit(33);
console.log(temperature);