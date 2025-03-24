import HttpResponse from "../constants/http-response.js"
import HttpStatus from "../constants/http-status.constants.js"

const checkPermission = (allowedby)=>{
    return (req, res, next)=>{
        if(!allowedby || allowedby.length === 0){
            next({statusCode: HttpStatus.UNAUTHORIZED.statusCode, message:"User Role Required.", status: HttpResponse.emptyRole})
        }else if(!Array.isArray(allowedby)){
            next({statusCode: HttpStatus.UNAUTHORIZED.statusCode, message:"Allowed Roles should be an array", status:HttpResponse.roleShouldBeArray})
        }else{
            const loggedInUserRole = req.loggedInUser.role
            if(allowedby.includes(loggedInUserRole)){
                next()
            }else{
            next({statusCode:HttpStatus.UNAUTHORIZED.statusCode, message:"You don't permission to access this endpoint ", status:HttpStatus.UNAUTHORIZED.status})
            }
        }
    }
} 
 
export {checkPermission}