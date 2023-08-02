// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";




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


  const firebaseConfig = {
    apiKey: "AIzaSyB33KAK6Vv32j2IpV0kUWRirIMycjnRMJM",
    authDomain: "lims-98b02.firebaseapp.com",
    databaseURL: "https://lims-98b02-default-rtdb.firebaseio.com",
    projectId: "lims-98b02",
    storageBucket: "lims-98b02.appspot.com",
    messagingSenderId: "246662920260",
    appId: "1:246662920260:web:70b4193f5dc946166f6411"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  signup.addEventListener('click', (e) =>{

    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value


    createUserWithEmailAndPassword(auth,username, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('errorMessage')
    // ..
  });
  })
