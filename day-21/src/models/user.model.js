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
        role: {
            type: String,
            enum: ['admin', 'seller', 'user'],
            default: "user",
        },
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
  
