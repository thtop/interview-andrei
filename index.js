// Coding...
let user = {
    age: 24,
    name: 'Kylie',
    magic: true,
    scream: { function() {
        console.log('ahhhhhhh!');
    }}
}

age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

const a = new Map();
// Sets