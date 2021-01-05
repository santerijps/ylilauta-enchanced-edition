// NAME: Ylilauta Enchanced Edition
// FILE: thread.js
// DESC: This file gets run in every thread

(() => {

  //
  // Match the thread path format:
  // => /text/digits
  if (!location.pathname.match(/\/\w+\/\d+/))
    return

  console.log('Running Ylilauta Enchanced Edition:', 'thread.js')

  //
  // Add 'return' arrow to topbar
  const span = document.createElement('SPAN')
  span.setAttribute('data-before', '\e943')
  span.classList.add('icon-arrow-left')

  const anchor = document.createElement('A')
  anchor.href = document.querySelector('.return-to-board').href
  anchor.classList.add('return-to-board')
  anchor.appendChild(span)

  document.getElementById('topbar')
    .insertBefore(anchor, document.getElementById('board-selector').nextElementSibling)

})()
