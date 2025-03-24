import HttpStatus from "../../constants/http-status.constants.js";
import UserModel from "../user/user.model.js";

class AuthService {
    formatUserRegistrationData = async (req) =>{
        try {
            const data = req.body;
            const formattedData = {
                name: data.name,
                email: data.email,
                password: data.password, 
                role: data.role || "user",
              };
              return formattedData;
        }catch(exception){
            throw exception;
        }
    }

    registerUser = async (data) => {
        try {
          // Check if user with this email already exists.
          const existingUser = await UserModel.findOne({ email: data.email });
          if (existingUser) {
              throw new Error("Email is already registered.");
          }
    
          // If no user exists, proceed to save the new user.
          const userObj = new UserModel(data);
          return await userObj.save();
        } catch (exception) {
          throw exception;
        }
      };

      getUserByFilter = async (filter) => {
        try {
          const user = await UserModel.findOne(filter);
          if (!user) {
            throw {
              statusCode: HttpStatus.BAD_REQUEST.statusCode,
              message: "User Not Found",
              status: "VALIDATION_FAILED",
            };
          }
          return user;
        } catch (exception) {
          throw exception;
        }
      };
    
}

const authSvc = new AuthService();
export default authSvc;