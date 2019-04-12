import User from '../models/User';
import jwt from 'jsonwebtoken';
import { encrypt, decrypt } from '../utils/password';

export async function register(req, res, next) {
  try {
    const {email, username, password, fullname} = req.body;

    const user = await new User({
      email,
      username,
      password: encrypt(password),
      fullname
    }).save();

    res.send({
      username: user.attributes.username,
      fullname: user.attributes.fullname,
      email: user.attributes.email,
    });
  } catch(e) {
    next(e);
  }
} 



export async function login(req, res, next) {
  try {
    const {email, password} = req.body;
    const user = await new User({email}).fetch();

    if(user) {
      const pass = decrypt(user.attributes.password);

      if(pass === password) {
        const token = jwt.sign({id: user.attributes.id, email: user.attributes.email}, process.env.PRIVATE_KEY);

      
        return res.send({token});
      }

    }
    res.send({error: 'اطلاعات وارد شده صحیح نمی‌باشد.'});
  } catch(e) {
    next(e);
  }
}