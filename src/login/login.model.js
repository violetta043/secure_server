let users = [
    {
        name: 'User',
        password: '1234',
    },
];


class LoginModel { 
    verifyUser = (name, password) => {
        return users.find(user => user.name === name && user.password === password);
    }
}

module.exports = new LoginModel(); 