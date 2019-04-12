import User from '../models/User';
import jwt from 'jsonwebtoken';
import { encrypt, decrypt } from '../utils/password';
import Joi from 'joi';
import validate from '../utils/validate';

const userSchema = Joi.object().keys({
  fullname: Joi.string().min(5).max(50).required(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).max(50)
});

export async function register(req, res, next) {
  try {
    const {email, username, password, fullname} = req.body;

    const newUser = {
      email,
      username,
      password,
      fullname
    };

    await validate(newUser, userSchema);

    await new User({...newUser, password: encrypt(password)}).save();

    res.send({message: 'ثبت نام با موفقیت انجام شد.'});

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