/** Rule 2: Remove Constants */

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); 
    var index = 0; 

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { // O(100)
        console.log('hi');
    }
}

/** Rule 2: Remove Constants
 * O(1 + n/2 + 100)
 * O(n/2 + 1)
 * O(n + 1)
 * O(n)
 */

 function compressBoxesTwice(boxes) {
     boxes.forEach(function(boxes) { // O(n)
         console.log(boxes);
     });

     boxes.forEach(function(boxes) { // O(n)
         console.log(boxes);
     })
 }

 /**
  * O(2n) ==> Drop the Constants ==> O(n)
  */