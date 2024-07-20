import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'
export const authenticate = async (req,res,next)=>{
    //get token from header
    const authToken = req.headers.authorization;
    //get token from header
    if(!authToken||!authToken.startsWith("Bearer")){
        return res.status(401).json({success:false,message:'No token, authorization denied'})
    }
    try {
        const token = authToken.split(" ")[1];
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_kEY);
        // console.log(decoded)
        req.userId=decoded.userId;
        req.role=decoded.role;
        next();//must be call in function
    } catch (err){
        if(err.name==='TokenExpiredError'){
            return res.status(401).json({message:'Token is expired'});
        }
        return res.status(401).json({success:false, message:'Invalid token'});
    }
}

export const restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;
    let user;
    try {
        // Try to find the user in the User collection.
        user = await User.findById(userId);
        // If not found, try to find the user in the Doctor collection.
        if (!user) {
            user = await Doctor.findById(userId);
        }
        // Check if user was found in either collection.
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        // Check if the user's role is included in the roles array.
        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You're not authorized" });
        }
        next();
    } catch (err) {
        // Handle errors, such as a database connection issue.
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

