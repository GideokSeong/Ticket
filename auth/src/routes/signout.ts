import express from 'express';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signout', (req, res)=>{
  req.session = null;

  res.send({});
});

export { router as signoutRouter };

