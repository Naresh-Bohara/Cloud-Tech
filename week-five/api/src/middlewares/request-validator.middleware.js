//to validate request 
import HttpStatus from "../constants/http-status.constants.js";

const bodyValidator = (schemaDto)=>{
    return async(req, res, next)=>{
        try{
            let data = req.body
            //validate your data
            const validatedData = await schemaDto.validateAsync(data, { abortEarly: false });
            next()
            //handel validation error
        }catch(exception){
            
            //let msg = {}
            let msg = {}
            
            //exception.details
            exception.details.map((error)=>{
                msg[error.context.label] = error.message
            })
            next({detail:msg, statusCode:HttpStatus.BAD_REQUEST.statusCode, message:"Validation Failed", status: "VALIDATION_FAILED"})
        }
    }
}

export {bodyValidator};