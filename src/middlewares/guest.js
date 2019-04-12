export default function guest(req, res, next) {
  if(req.headers['x-iranjs-token-x']) {
    return res.sendStatus(403);
  }

  next();
}