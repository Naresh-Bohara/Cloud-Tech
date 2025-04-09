import authService from './auth.service.js';
import { sendSuccess, sendError } from '../../utils/response.util.js';
import jwt from 'jsonwebtoken';

class AuthController {
   signup = async(req, res, next)=>{
    try {
      const user = await authService.registerUser(req.body);
      return sendSuccess(res, 'Signup successful!', user, 201);
    } catch (err) {
      return sendError(res, err);
    }
  }

  login = async(req, res, next) =>{
    try {
      const { username, password } = req.body;
      const user = await authService.authenticateUser(username, password);

      const payload = {
        id: user._id,
        username: user.username,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10h' });

      return sendSuccess(res, 'Login successful!', { id: user._id, token });
    } catch (err) {
      return sendError(res, err);
    }
  }
}

export default new AuthController();
