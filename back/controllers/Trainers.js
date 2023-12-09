import db from '../schema.js'

const trainercontroller={
    loadProfile:(req, res) => {
        try {
            const id=req.staff.SID;
            const qu=`SELECT * FROM staff,trainer where staff.SID=trainer.SID and staff.SID=${id}`;
            db.query(qu, (err, data) => {
                if (err) return res.json(err);
                else 
                    return res.json(data[0])});
               
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while fetching your data." });
    
        }},
        getSepclization:(req, res) => {
            try {
                const id=req.staff.SID;
                const qu=`SELECT Nme FROM specialization where SID=${id}`;
                db.query(qu, (err, data) => {
                    if (err) return res.json(err);
                    else 
                        return res.json(data)});
                   
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: "An error occurred while fetching your data." });
        
            }}
}
export default trainercontroller;