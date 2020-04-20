import * as urls from './config';
/**
 * Get fresh shuffled deck, Example response:
 *{
     "success": true,
     "deck_id": "3p40paa87x90",
     "shuffled": true,
     "remaining": 52
 }
 */
export const newDeck = () => {
    axios.get(`${urls.base}/deck/new/shuffle/?deck_count=1`)
    .then(res => {
        console.log(res);
    })
}

/**
 * Draw a specified number of cards from the deck
 * @param {string} deckId 
 * @param {number} count 
 * Example response for parameters:
 * 
 * deckId:3p40paa87x90
 * count:2: 
 *{
     "success": true,
     "cards": [{
             "image": "https://deckofcardsapi.com/static/img/KH.png",
             "value": "KING",
             "suit": "HEARTS",
             "code": "KH"
         },
         {
             "image": "https://deckofcardsapi.com/static/img/8C.png",
             "value": "8",
             "suit": "CLUBS",
             "code": "8C"
         }
     ],
     "deck_id": "3p40paa87x90",
     "remaining": 50
 }
 */

export const drawCard = (deckId, count) => {
    axios.get(`${urls.base}/deck/${deckId}/draw/?count=${count}`)
    .then(res => {
        console.log(res);
    })
}