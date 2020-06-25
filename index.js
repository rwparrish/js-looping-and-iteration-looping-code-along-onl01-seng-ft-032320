const names = ["Lisa", "Kaitlin", "Jan"]

const event = 'suprise'

function writeCards(names, event) {
    var arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      }
     
      return arr;
    }
    
function countDown() {
    let i = 10;
    while (i > -1) {
        console.log(i--);
      }
    }
    countDown(10)