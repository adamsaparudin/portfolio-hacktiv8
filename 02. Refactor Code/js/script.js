// $(document).ready( () => {
//   $('#roller button.add').on('click', () => {
//     console.log("WAT");
//     $('.dice').append('<div class="die">0</div>')
//   })
//
//   $('#roller button.roll').on('click', () => {
//     $('.die').each( (k, die) => {
//       let value = Math.floor((Math.random() * 6) + 1)
//       $('.die').text(value)
//     })
//   })
// })


function addDiceSlot() {
  $('.dice').append('<div class="die">0</div>')
}

function rollDice() {
  $('.die').each( (k, die) => {
    let value = Math.floor((Math.random() * 6) + 1)
    $('.die').text(value)
  })
}
