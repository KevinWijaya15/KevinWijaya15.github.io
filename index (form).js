//get form element
var form = document.getElementById("my-form");

function handleSubmit(event) {
  //prevent default
  event.preventDefault();

  //determine submission success
  var status = document.getElementById("my-form-status");

  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Message sent successfully!";
    status.className = "success";

    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem sunding your message.";
    status.className = "error";
  }); 
}

form.addEventListener("submit", handleSubmit);