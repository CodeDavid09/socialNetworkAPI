const router = require('express').Router();
const thoughtRoutes = require('./thought');

router.use('/users', userRoutes);
router.use("/thoughts", thoughtRoutes)
// router.use((req, res) => {
//     res.status(404).send('<h1>404 Error....</h1>');
// });

module.exports = router;