/**
 * Create a function that reverses a string:
 *    'Hi! my name is Thamonwan' should be;
 *    'nawnomahT si eman ym !iH'
*/

/** Coding Version 1 */
function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length -1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}
console.log('VERSION 1: ', reverse('Hi! my name is Thamonwan'));

/** 
 * Coding Version 2 
 * (build in methods)
*/
function reverse2(str) {
    return str.split('').reverse().join('');
}
console.log('VERSION 2: ', reverse2('Hi! my name is Thamonwan'));

/** 
 * Coding Version 3 
 * (ES6)
*/
const reverse3 = str => str.split('').reverse().join('');
console.log('VERSION 3: ', reverse3('Hi! my name is Thamonwan'));

/** 
 * Coding Version 4 
 * (Spread operator)
 **/
const reverse4 = str => [...str].reverse().join('');
console.log('VERSION 4: ', reverse4('Hi! my name is Thamonwan'));