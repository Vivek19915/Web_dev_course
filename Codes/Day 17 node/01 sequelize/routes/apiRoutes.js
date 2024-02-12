//create router instance
let router = require('express').Router()
router.use('/fetch', require('./fetch/fetch'))
router.use('/insert', require('./insert/insert'))
router.use("/update", require('./update/update'))
router.use('/delete', require('./delete/delete'))
//export router
module.exports = router
