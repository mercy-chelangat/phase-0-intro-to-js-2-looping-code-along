// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts (gifts){}
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  function writeCards(names, eventName) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        cards.push(message);
    }
    return cards;
}

// Example usage:
const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";
const cards = writeCards(names, eventName);
console.log(cards);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

// Example usage:
countDown(5); // This will log numbers from 5 to 0
