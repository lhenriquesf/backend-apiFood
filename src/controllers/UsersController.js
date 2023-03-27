const AppError = require("../utils/AppError");

class UsersController{
    create(request, response){
        const {name, email, password, isAdmin} = request.body;

        if(!name){
            throw new AppError("preencher o nome");
        }

        response.status(201).json({name, email, password, isAdmin});
    }
}

module.exports = UsersController;