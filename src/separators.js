'use strict';

function thousands_separators(number) {

    var number = number.toString();

    if (number.indexOf('.') === -1) {
        return numberHasNotPoint(number);
    } else {
        return numberHasPoint(number);
    }
}

function numberHasNotPoint(number) {

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

function numberHasPoint(number) {

    var array = number.split('.');
    var result = '';

    while (array[0].length > 3) {
        result += ',' + array[0].slice(-3);
        array[0] = array[0].slice(0, array[0].length - 3);
    }
    if (array[0]) {
        result = array[0] + result + '.' + array[1];
    }

    return result;
}

module.exports = thousands_separators;