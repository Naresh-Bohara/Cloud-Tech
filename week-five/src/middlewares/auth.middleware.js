import jwt from "jsonwebtoken";
import HttpStatus from "../constants/http-status.constants.js";
import UserModel from "../modules/user/user.model.js";
const checkLogin = async(req, res, next) => {
    try{
      let token = req.headers['authorization'] || null;
      if(!token){
        throw {statusCode:HttpStatus.UNAUTHENTICATED.statusCode, message:"Please login first.", status: HttpStatus.UNAUTHENTICATED.status}
      }
      token = token.split(" ").pop();

      //decode and verify
      const data = jwt.verify(token, process.env.JWT_SECRET)

      const user = await UserModel.findOne({_id: data.sub});
console.log(user)
console.log(data.sub)
      req.loggedInUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      next()

    }catch(exception){
      if(exception instanceof jwt.TokenExpiredError){
        next({statusCode:HttpStatus.UNAUTHENTICATED.statusCode, message:exception.message, status:HttpStatus.UNAUTHENTICATED.status})
      }else if(exception instanceof jwt.JsonWebTokenError){
        next({statusCode:HttpStatus.UNAUTHENTICATED.statusCode, message:exception.message, status:HttpStatus.UNAUTHENTICATED.status})
      }else{
        next(exception)
      }
    }
  };

export default checkLogin;
