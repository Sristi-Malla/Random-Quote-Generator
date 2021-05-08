var arrayOfQuotes = [
  {
    "author" : "Jim Rohn",
    "quote" : "Beware of what you become in pursuit of what you want."
  },

  {
    "author" : "Louis L’Amour",
    "quote" : "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."
  },

  {
    "author" : "Octavia E. Butler",
    "quote" : "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."
  },

  {
    "author" : "Ray Bradbury",
    "quote" : "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out."
  },

  {
    "author" : "Maya Angelou",
    "quote" : "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it."
  },

  {
    "author" : "Oscar Wilde",
    "quote" : "Life is never fair, and perhaps it is a good thing for most of us that it is not."
  },

  {
    "author" : "Brad Meltzer",
    "quote" : "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day."
  },

  {
    "author" : "Chuck Palahniuk",
    "quote" : "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace."
  },

  {
    "author" : "Ernest Hemingway",
    "quote" : "We are all broken, that's how the light gets in."
  },

  {
    "author" : "Albert Einstein",
    "quote" : "Anyone who has never made a mistake has never tried anything new."
  },

  {
    "author" : "Dr. Seuss",
    "quote" : "Don't cry because it's over. Smile because it happened."
  }
]

function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
function generateQuote() {

  var randomNumber = randomSelector(arrayOfQuotes.length)

  document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
  document.getElementById('authorOutput').innerHTML = '- ' + arrayOfQuotes[randomNumber].author;
}