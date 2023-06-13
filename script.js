const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn");
const iconClose =document.querySelector(".icon-close");


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})



loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})



let expertContainer = document.getElementById('experts');

const getExperts = ()=>{
   return fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error.message)
};



const displayExperts = async()=>{
    const experts = await getExperts();
    console.log(experts.experts);
    experts.experts.map(item =>{
        let div = document.createElement('div');
        div.className = 'people';
        let img = document.createElement('img');
        let names = document.createElement('h2');
        let userName = document.createElement('p');

        img.src = item.image;
        names.innerHTML = `${item.firstName} ${item.lastName}`;
        userName.innerHTML = item.username;
        div.appendChild(img);
        div.appendChild(names);
        div.appendChild(userName);
        userContainer.appendChild(div);

    })
}
displayExperts();




// Simulated data for messages and user list
const messages = [
    { content: 'Hello!', timestamp: '9:00 AM' },
    { content: 'How are you?', timestamp: '9:02 AM' },
    { content: 'Im good, thanks!', timestamp: '9:05 AM' },
  ];
  
  const userList = ['User1', 'User2', 'User3'];
  
  // Display messages in the chat window
  const chatMessages = document.getElementById('chat-messages');
  messages.forEach((message) => {
    const content = document.createElement('p');
    content.textContent = message.content;
  
    const timestamp = document.createElement('span');
    timestamp.textContent = message.timestamp;
  
    const messageContainer = document.createElement('div');
    messageContainer.appendChild(content);
    messageContainer.appendChild(timestamp);
  
    chatMessages.appendChild(messageContainer);
  });
  
  // Display user list
  const userContainer = document.getElementById('user-list');
  userList.forEach((user) => {
    const userElement = document.createElement('p');
    userElement.textContent = user;
  
    userContainer.appendChild(userElement);
  });
  
  // Submit message
  const chatForm = document.getElementById('chat-form');
  const messageInput = document.getElementById('message-input');
  
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = messageInput.value;
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
  
    const timestamp = document.createElement('span');
    timestamp.textContent = new Date().toLocaleTimeString();
  
    const messageContainer = document.createElement('div');
    messageContainer.appendChild(contentElement);
    messageContainer.appendChild(timestamp);
  
    chatMessages.appendChild(messageContainer);
  
    messageInput.value = '';
  });
  


// $(document).ready(function() 
//     // Load messages on page load
//     $.get('/get_messages/', function(data) {
//         for (var i = 0; i < data.messages.length; i++) {
//             var message = data.messages[i];
//             var content = $('<p>').text(message.content);
//             var timestamp = $('<span>').text(message.timestamp);
//             $('#chat-messages').append(content).append(timestamp);
//         }
//     });

//     $('#chat-form').submit(function(e) {
//         e.preventDefault();
//         var content = $('#message-input').val();
//         $.post('/post_message/', {content: content}, function(data) {
//             if (data.success) {
//                 var content = $('<p>').text(content);
//                 var timestamp = $('<span>').text(new Date().toISOString());
//                 $('#chat-messages').append(content).append(timestamp);
//                 $('#message-input').val('');
//             }
//         });
//     });
// });
