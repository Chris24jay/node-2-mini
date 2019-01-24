module.exports = {
    getPlanes: function(req,res,next){
        req.app.get('db').get_planes(25)
        .then((planes) => {res.status(200).send(planes)})
        .catch((err) => {res.status(500).send(err)})
    }
}