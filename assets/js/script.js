// TODO: Declare any global variables we need
let headsFlip = 0
let tailsFlip = 0

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
      // Flip Button Click Handler
    document.getElementById('flip').addEventListener('click', () => {
        // TODO: Determine flip outcome

        let flippedHeads = Math.random() < 0.5

        // TODO: Update image and status message in the DOM
        if (flippedHeads) {

            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            // outcome
            headsFlip += 1
        }
        else {
       
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            //outcome
            tailsFlip += 1
        }

        // Update the scoreboard

       // TODO: Calculate the total number of rolls/flips
        let totalFlip = headsFlip + tailsFlip
  // Make variables to track the percentages of heads and tails
        let headsPerc = 0
        let tailsPerc = 0
// TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if (totalFlip > 0) {
          
            headsPerc = Math.round((headsFlip / totalFlip) * 100)
            tailsPerc = Math.round((tailsFlip / totalFlip) * 100)
        }

        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsFlip
        document.getElementById('heads-percent').textContent = headsPerc + '%'
        document.getElementById('tails').textContent = tailsFlip
        document.getElementById('tails-percent').textContent = tailsPerc + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {

        // Reset 
        
        headsFlip = 0
        tailsFlip = 0

        // Update the message 
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // Update the scoreboard
        
        // Calculate total number of rolls
        let totalFlip = headsFlip + tailsFlip

        // Create variables to track percent heads and tails
        let headsPerc = 0
        let tailsPerc = 0

        // Before trying to divide, make sure total is not zero
        if (totalFlip > 0) {
            // Calculate percentage of heads and tails
            headsPerc = Math.round((headsFlip / totalFlip) * 100)
            tailsPerc = Math.round((tailsFlip / totalFlip) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsFlip
        document.getElementById('heads-percent').textContent = headsPerc + '%'
        document.getElementById('tails').textContent = tailsFlip
        document.getElementById('tails-percent').textContent = tailsPerc + '%'
    })
})
