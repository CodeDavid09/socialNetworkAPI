const router = require('express').Router();

const { 
    getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughtController');


router.route('/').get(getAllThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought); 
router.route('/:userId').post(createThought);
router.route('/:thoughtId/reaction').post(addReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;