// The element where we will inject our contents
var $verse = $('#verse');

// adds a class to the body
document.body.className = 'theme-warm';

// The default category
var category = 'love';

// Fetch the data for the category
$.getJSON('./data/' + category + '.json', function (verses) { // verses is the result from our AJAX request, which is an Array

  /* Solve for x (index)
   * 100   X
   * 365 = 50
   */
  var index = Math.floor((dayOfTheYear() * verses.length)/365);

  // Injects it into the DOM
  // verse is an object
  var verse = verses[index];
  $verse.find('h1').text(verse.book + " " + verse.chapter + ":" + verse.verse );
  $verse.find('p').html(verse.text.replace(category, '<i>'+category+'</i>'));
});

function dayOfTheYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}
