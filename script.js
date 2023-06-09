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