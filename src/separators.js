'use strict';

function thousands_separators(number) {

    var number = number.toString();
    var result = '';

    if (number.indexOf('.') === -1) {
        while (number.length > 3) {
            result += ',' + number.slice(-3);
            number = number.slice(0, number.length - 3);
        }
        if (number) {
            result = number + result;
        }
    } else {
        var array = number.split('.');

        while (array[0].length > 3) {
            result += ',' + array[0].slice(-3);
            array[0] = array[0].slice(0, array[0].length - 3);
        }
        if (array[0]) {
            result = array[0] + result + '.' + array[1];
        }
    }

    return result;
}

module.exports = thousands_separators;