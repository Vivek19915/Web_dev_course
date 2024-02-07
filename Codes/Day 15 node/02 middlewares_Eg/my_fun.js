module.exports = (obj)=>{
    return (req, res, next) => {
        let uname = obj.uname
        let upwd = obj.upwd
        if (uname == 'admin' && upwd == 'admin')
            next()
        else
            res.json({ 'Authentication': 'Failed' })
    }

}