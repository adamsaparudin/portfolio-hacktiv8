function getSetColor() {
  $.getJSON("http://www.colr.org/json/color/random", function(result) {
    let color = result.colors[0].hex
    let index = Math.floor(Math.random() * 9)
    console.log(color)
    console.log(index);
    $(".colorized").eq(index).css("background-color", "#"+color)
  })
}

$('.set-color').on('click', getSetColor)
