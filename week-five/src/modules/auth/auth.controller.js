import HttpStatus from "../../constants/http-status.constants.js";
import authSvc from "./auth.service.js";
import jwt from "jsonwebtoken"

class AuthController{
    register = async (req, res, next) => {
        try{
          //transforamtion
          const formattedData = await authSvc.formatUserRegistrationData(req);
          const user = await authSvc.registerUser(formattedData)
    
          res.json({
            data: user,
            message: "Register Request",
            status: HttpStatus.OK.status,
            options:null
          })
    
        }catch(exception){
          console.log(exception)
          next(exception)
        }
      };


      login = async(req, res, next)=>{
        try{
          const {email, password} = req.body;
          const user = await authSvc.getUserByFilter({
            email: email
          })

            if(password === user.password){
              // login success
              const payload = {
                sub: user._id,
                role: user.role
              }

              const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '10h', 
              });


              res.json({
                data: {
                  token: token,
                  detail:{
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                  }
                },
                message: "Login Success.",
                status: HttpStatus.OK.status,
                options: null
              })

            }else{
              throw {statusCode: HttpStatus.BAD_REQUEST.statusCode, message:"Credential doesn't match.", status: "CREDENTIAL_NOT_MATCH"}
            }
          

        }catch(exception){
          console.log(exception)
          next(exception)
        }
    }

    getLoggedInUser = (req, res, next)=>{
        try{
          res.json({
            data: req.loggedInUser,
            message: "User Profile Fetched.",
            status: HttpStatus.OK.status,
            options: null
          })
  
        }catch(exception){
          next(exception)
        }
      }

      getUsers = (req, res, next)=>{
        res.json({
          data: req.loggedInUser,
          message: "User Profile Fetched.",
          status: HttpStatus.OK.status,
          options: null
        })
      }
    
}

const authCtrl = new AuthController();
export default authCtrl;