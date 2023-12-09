import db from "../schema.js";
import jwt from "jsonwebtoken";
const Staffcontroller = {
  login: async (req, res) => {
    try {
      // const { id, password } = req.body; // Check if the user exists

      // const s="SELECT Password FROM trainee";
      let commingid = 0;
      let commingpassword = "";
      let p = [];
      let v = req.body.Password;
      const getuser = `SELECT SID FROM staff where SID=${req.body.SID}`;
      db.query(getuser, (err, data) => {
        if (err) return res.json(err);
        else {
          commingid = data;
          //p=data;
          if (commingid == [])
            return res.json({ error: "There is no Staff with that id" });
          else {
            const getuserwithpass = `SELECT Password from staff where SID=${commingid[0].SID}`;
            db.query(getuserwithpass, (err, data) => {
              if (err) return res.json(err);
              else {
                commingpassword = data[0].Password;
                //return res.json(commingpassword);
                if (v != commingpassword)
                  return res.json(`Incorrect Password${v}-${commingpassword}`);
                else {
                  const token = jwt.sign(
                    { id: commingid[0].SID },
                    process.env.JWT_SECRET,
                    {
                      expiresIn: "1h",
                    }
                  );
                  res
                    .status(200)
                    .json({ message: "Logged in successfully", token });
                }
              }
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "An error occurred while logging you in.Please try again.",
      });
    }
  },
  aftertoken:
  (req, res) => {
    try {
        res.status(200).json({ staff: req.staff });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching your data." });

    }}
};
export default Staffcontroller;
