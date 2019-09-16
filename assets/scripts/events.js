'use strict'

const onWheel = function (event) {
  event.preventDefault()

  $('#chart').show()
  $('.img').hide()
  $('.text').hide()
}

const onHome = function (event) {
  event.preventDefault()

  $('#chart').hide()
  $('.img').show()
  $('.text').show()
}


module.exports = {
  onWheel,
  onHome
}
