var Hand = require('pokersolver').Hand;

const cards = [
    {
        value: 'KING',
        suit: 'HEARTS'
    },
    {
        value: 'QUEEN',
        suit: 'DIAMONDS'
    },
    {
        value: '8',
        suit: 'HEARTS'
    },
    {
        value: '8',
        suit: 'SPADES'
    }
]

const compareValues = (card1, card2) => { // Pure
  const result = card1.value === card2.value ? true : false;
  return result;
}

var hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', 'Qc', 'Qs', 'Qd']);
var winner = Hand.winners([hand1, hand2]); // hand2

console.log(winner[0]);




