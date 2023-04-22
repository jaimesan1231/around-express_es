const router = require('express').Router();

const {
  getUsers,
  getUsersById,
  postUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/', postUser);
router.patch('/me', updateProfile);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
