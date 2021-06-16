//get form element
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault(); //prevent default

  var status = document.getElementById("my-form-status"); //get status element

  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.remove("current-status"); //remove the current class

    status.innerHTML = "Message sent successfully!";

    void status.offsetWidth; //add class
    status.className += "current-status";
    status.style.color = "green"; //change color

    grecaptcha.reset(); //reset recaptcha and form
    form.reset()
  }).catch(error => {
    status.classList.remove("current-status"); //remove the current class

    status.innerHTML = "Oops! There was a problem.";
    
    void status.offsetWidth; //add class
    status.className += "current-status";
    status.style.color = "rgb(237, 67, 55)"; //change color

    grecaptcha.reset(); //reset recaptcha
  }); 
}

form.addEventListener("submit", handleSubmit);
