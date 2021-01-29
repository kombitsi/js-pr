'use strict'

function numberBydigits(number) {
    if (number < 0 || number > 999 || !Number.isInteger(number)){
        console.log('Необходимо ввести целое число от 0 до 999');
        return {};
    }

    return {
        units: number % 10,
        dozens: Math.floor(number / 10) % 10,
        hundreds: Math.floor(number /100),

    }
}

console.log(numberBydigits(1000));
