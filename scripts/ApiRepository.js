export class ApiUserRepository {
    
    constructor(url)
    {
        this.url = url;
    }

    async fetchApi()
    {
        try {
            let response = await fetch(this.url);
            let data = await response.json();
            let users = await data;
            return users;    
        }
        catch(error) {
            console.log('Error message: ' +  error.message);
        }
    }

}