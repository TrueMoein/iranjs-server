import PreUser from '../models/PreUser';


/**
 * Get a preUser with token.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function tokenValidation(req, res, next) {
  try {
    const preUser = await new PreUser({token: req.params.token}).fetch();

    return res.json(preUser)
  } catch(e) {
    next(e)
  }
}

