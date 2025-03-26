import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 50,
        min: 2,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user",
    },
    
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
  
