import User from '../models/User';

export async function getById(req, res, next) {
  try {
    const user = await new User({id: req.params.id}).fetch();

    return res.json(user);
  } catch(e) {
    next(e);
  }
}

export async function profile(req, res, next) {
  try {
    const user = await new User({id: req.user.id}).fetch();

    
return res.json(user);
  } catch(e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const {email, username, fullname, password} = req.body;
    const user = await new User({email, username, fullname, password}).save();

    
    return res.send(user);
  } catch(e) {
    next(e);
  }
}