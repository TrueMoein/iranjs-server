import User from '../models/User';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchAll(req, res, next) {
  try {
    const users = await User.fetchAll();

    res.json(users);
  } catch(e) {
    next({succsess: false})
  }
}



/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function getById(req, res, next) {
  try {
    const user = await new User({id: req.params.id}).fetch();

    return res.json(user)
  } catch(e) {
    next(e)
  }
}
