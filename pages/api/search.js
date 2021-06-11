
module.exports = async ( req, res ) => {

  console.log(req.body);
  
  res.status(200).json({ message: 'success!', id: req.body.id })

}