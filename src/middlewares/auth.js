import jwt from 'jsonwebtoken';


export default function auth(req, res, next) {
  try {
    const user = jwt.verify(req.headers['x-iranjs-token-x'], process.env.PRIVATE_KEY);

    req.user = user;
    next();
  } catch(e) {
    res.sendStatus(403);
  }
}