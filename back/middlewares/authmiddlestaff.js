import jwt from "jsonwebtoken";
import db from '../schema.js'
const authMiddlewarestaff = async (req, res, next) => {
    // Get the token from the authorization header
    const authHeader = req.headers.authorization;
    // Check if the token exists
    if (!authHeader) {
        return res.status(401).json({ error: "No token provided" });
    }
    // Check if the authorization header is in the correct format. "Bearer <token>"
    if (!authHeader.startsWith("Bearer") || authHeader.split(" ").length !== 2) {
        return res.status(401).json({ error: "Invalid tokenn" });
    }
    // Get the token from the authorization header
    const token = authHeader.split(" ")[1];
    try {
        // Verify the token and get the user's id from it
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        //return res.json(id);
        // Get the user from the database
        //const user = await User.findById(id);\
        let q=`SELECT * FROM staff where SID=${id}`
        db.query(q, (err, data) => {
            if (err) return res.json(err);
            else {
               //return res.json("salma");        
       if (data==[]) {
            return res.status(404).json({ error: `User not found with that id${data}` });
        }
        else{
        // Attach the user to the request object
        req.staff = data[0];
        //res.json(req.staff);
        next();
    }
    }});
    
        // Call the next middleware
       // next();
    } catch (err) {
        console.log(err);
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Your token has expired. Please log in again." });
        }
        res.status(401).json({ error: "Invalid token" });
    }
};
export default authMiddlewarestaff;