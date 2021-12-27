export class User {

    constructor(apiRepository)
    {
        this.apiRepository = apiRepository;
    }

    async getAllUsers()
    {
        let usersList = [];
        let data = await this.apiRepository.fetchApi();
        data.forEach(userData => {
            let user = new Object();
            user.id = userData.id
            user.name = userData.name
            user.email = userData.email
            user.phone = userData.phone
            usersList.push(user)
        });

        return usersList;
    }

    async getUser(id)
    {
        let data = await this.apiRepository.fetchApi();
        let user = {};
        data.forEach(userData => {
            if(userData.id === id) {
                user = userData;
            }
        })

        return user;
    }


}