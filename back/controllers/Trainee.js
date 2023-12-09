import db from "../schema.js";
import jwt from "jsonwebtoken";
const Traineecontroller = {
  login: async (req, res) => {
    try {
      // const { id, password } = req.body; // Check if the user exists

      // const s="SELECT Password FROM trainee";
      let commingid = 0;
      let commingpassword = "";
      let p = [];
      let v = req.body.Password;
      const getuser = `SELECT TID FROM trainee where TID=${req.body.TID}`;
      db.query(getuser, (err, data) => {
        if (err) return res.json(err);
        else {
          commingid = data;
          //p=data;
          if (commingid == [])
            return res.json({ error: "There is no trainee with that id" });
          else {
            const getuserwithpass = `SELECT Password from trainee where TID=${commingid[0].TID}`;
            db.query(getuserwithpass, (err, data) => {
              if (err) return res.json(err);
              else {
                commingpassword = data[0].Password;
                //return res.json(commingpassword);
                if (v != commingpassword)
                  return res.json(`Incorrect Password${v}-${commingpassword}`);
                else {
                  const token = jwt.sign(
                    { id: commingid[0].TID },
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
        res.status(200).json({ user: req.user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while fetching your data." });

    }}
};
export default Traineecontroller;
