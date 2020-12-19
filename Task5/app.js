// Create form with the following fields: name, username, email, phone, website.
// When you fill the form and hit submit button it must send POST request on the following URL: https://jsonplaceholder.typicode.com/users.
// All fields are required. If you leave one field empty and submit the form, request must not be make and that field must become red: 
// https://getbootstrap.com/docs/4.2/components/forms/#server-side
// Add button "Load random user" above the table, which generates random number (from 1 to 10) and makes request on the following url: https://jsonplaceholder.typicode.com/users/{random}
// fetches the user and loads that inside the form. 
// When you submit the form it will make put request on the same url from which user was grabbed and update that user.
// Hint: If user does not have ID, you should make POST request, otherwise put request.

let Submit = document.querySelector('#submit');
let Random = document.querySelector('#generate');
let ISVALID = 0;
let nameField;
let username;
let email;
let phone;
let website;
let url = '';
let RandomNum = null;
let dig = 0;

Submit.addEventListener('click', ev => {
    Validation();

})

Random.addEventListener('click', ev => {
    nameField = document.querySelector('#name')
    username = document.querySelector('#username')
    email = document.querySelector('#email')
    phone = document.querySelector('#phone')
    website = document.querySelector('#website')
    generateRandomUser();
})


function Validation(){
    let checker = new Set();
    nameField = document.querySelector('#name')
    username = document.querySelector('#username')
    email = document.querySelector('#email')
    phone = document.querySelector('#phone')
    website = document.querySelector('#website')
    checker.add(checkValid(nameField));
    checker.add(checkValid(username));
    checker.add(checkValid(email));
    checker.add(checkValid(phone));
    checker.add(checkValid(website));
    if (!checker.has(false)){
        if(RandomNum == null){
            postRequest();
        } else {
            putRequest();
            RandomNum = null;
        }
    }
}

function checkValid(field){
    if( field.value == ""){
        field.classList.add('is-invalid');
        return false;
    } else {
        field.classList.remove('is-invalid');
        return true;
    }
}


async function postRequest(){
    dig++;
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            name: nameField.value,
            username: username.value,
            email: email.value,
            phone: phone.value,
            website: website.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function putRequest(){
    fetch(`https://jsonplaceholder.typicode.com/users/${RandomNum}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: nameField.value,
            username: username.value,
            email: email.value,
            phone: phone.value,
            website: website.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

async function generateRandomUser(){
    RandomNum = (Math.round(((Math.random() * 10))) % 10);
    url = `https://jsonplaceholder.typicode.com/users/${RandomNum}`;
    const response = fetch(url)
    .then(data => data.json())
    .then(parsed => {
        nameField.value = parsed.name;
        username.value = parsed.username;
        email.value = parsed.email;
        phone.value = parsed.phone;
        website.value = parsed.website;
    })

}