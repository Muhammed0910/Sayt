const header = document.querySelector('header');
const buttonContainer = header.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    header.style.backgroundColor = 'blue';
  }
});

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  window.location.href = 'https://facebook.com';
});

const responses = {
  "hi": "Hello!",
  "how are you": "I'm doing well, thanks for asking.",
  "what is your name": "My name is Chatbot.",
  "bye": "Goodbye!"
};

// Send user message and display response
function handleUserInput() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const chatOutput = document.getElementById("chat-output");
  
  if (userInput in responses) {
    const chatbotResponse = responses[userInput];
    const newMessage = document.createElement("div");
    newMessage.textContent = chatbotResponse;
    chatOutput.appendChild(newMessage);
  } else {
    const errorMessage = "Sorry, I don't understand.";
    const newMessage = document.createElement("div");
    newMessage.textContent = errorMessage;
    chatOutput.appendChild(newMessage);
  }
  
  document.getElementById("user-input").value = "";
}

// Set up event listener for send button
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("send-btn").addEventListener("click", handleUserInput);
});