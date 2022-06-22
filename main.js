// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const form = document.querySelector('h2');
form.className = 'hidden';



// Code to make the like button a obj
likeBtn = document.querySelectorAll('.like'); 

// Code to loop thru like buttons
for (const item of likeBtn) {

  console.log(item);

  item.addEventListener('click', () => {

    if (item.querySelector('span').textContent === EMPTY_HEART) {

      mimicServerCall().then (() => item.querySelector('span').textContent = FULL_HEART)
      .catch(() => {form.className = '';
       setTimeout(hidden());
    }
      );
      
    
  } else  { 

    item.querySelector('span').textContent = EMPTY_HEART;

  }


})

}


function hidden(){
  const form = document.querySelector('h2');
  form.className = 'hidden';
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
