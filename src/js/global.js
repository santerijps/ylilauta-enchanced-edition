// NAME: Ylilauta Enchanced Edition
// FILE: global.js
// DESC: This file gets run on every single page of Ylilauta

(() => {

  console.log('Running Ylilauta Enchanced Edition:', 'global.js')

  //
  // Remove all iframes
  document.querySelectorAll('iframe')
    .forEach(iframe => iframe.remove())

})()
