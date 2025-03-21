import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        username:{ 
         type: String,
         required: true,
         unique: true 
        },
        password:{
         type: String,
         required: true 
        },
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
  
