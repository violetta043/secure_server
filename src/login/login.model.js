let users = [
    {
        name: 'User',
        password: '1234',
    },
];

const hardcodedJwt = '768jdjndkevudgs'; 


class LoginModel { 
    verifyUser = (name, password) => {
        return users.find(user => user.name === name && user.password === password);
    }

    getJwt() {
        return hardcodedJwt; 
    }
}

module.exports = new LoginModel(); 