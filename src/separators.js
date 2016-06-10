'use strict';

function thousands_separators(number) {
    var number = number.toString();

    if (number.indexOf('.') === -1) {

        return numberIsInteger(number);
    }
    else {
        var number = number.split('.');

        return numberIsInteger(number[0]) + '.' + number[1];
    }
}

function numberIsInteger(number) {
    var result = '';

    while (number.length > 3) {
        result += ',' + number.slice(-3);
        number = number.slice(0, number.length - 3);
    }
    if (number) {
        result = number + result;
    }

    return result;
}

module.exports = thousands_separators;