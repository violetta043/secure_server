const loginModel = require('./login.model');

class LogiController {
    login = (req, res) => {
        const { name, password } = req.body;

        const user = loginModel.verifyUser(name, password);
        if (user) {
            res.status(200).json({ message: 'Login successful' });
            
        } else {
            res.status(401).json({ message: 'Invalid login or password' });
        }
    }
}

module.exports = new LogiController(); 

