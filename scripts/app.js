import { ApiUserRepository } from './ApiRepository.js';
import { fetchApi } from './AsyncAwait.js';
import { User } from './User.js';

async function app() {

    let url = 'https://jsonplaceholder.typicode.com/users'

    // Using classes
    let apiRepo = new ApiUserRepository(url);
    let users = await new User(apiRepo).getAllUsers();
    printUsers(users);
    // Searching User with id 5
    let user = await new User(apiRepo).getUser(5);
    console.log(user);

    // Using only Async/Await function
    callWithAsync();

    // Using fecth API with .then
    fetchData();

    // Using Axios
    axios.get(url)
      .then(response => console.log(response))
      .catch(error => {
        console.log(error);
      }) 

}

app();


async function callWithAsync()
{
    let data = await fetchApi();
    console.log(data);
}


function fetchData() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch( (error) => {
            console.log(error.message)
        });
}

function printUsers(data) {
    
    const app = document.getElementById('app');

    data.forEach(user => {

        app.innerHTML += /* html */ `
        <table class="table">
        <tbody>
          <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
          </tr>
        </tbody>
      </table>
        `
    });
}