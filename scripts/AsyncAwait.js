

export async function fetchApi()
{
    let url = 'https://jsonplaceholder.typicode.com/users';

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;    
    }
    catch(error) {
        console.log('Error message: ' +  error.message);
    }
}
