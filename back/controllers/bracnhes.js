import db from '../schema.js'

const branchescontroller={
    fineall:async (req, res) => {
    const d="SELECT * FROM branches "
    db.query(d,(err,data)=>{
        if(err)
        return (res.json(err));
        else
        return (res.json(data));

    }) 
   
},
insertBranch:async(req,res)=>{
    const d='INSERT INTO branches   values(?,?,?)'
   
    db.query(d,[req.body.BID,req.body.BranchNum,req.body.City],(err,data)=>{
        if(err)
        return (res.json(err));
        else
        return (res.json(data));

    })
}

}
export default branchescontroller;