import { profile } from "console";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profilePicture: {
        type: String,
        default: "https://images.app.goo.gl/8YGeXzfiW7Augu5m7"
    },
},
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;