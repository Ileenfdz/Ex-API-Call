
export function retrieveUsers(axios,url)
{
    axios.get(url)
        .then( response => console.log(response))
        .catch( error => {
            console.log(error);
        })
}