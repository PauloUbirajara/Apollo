import express from 'express';

import ProfessionalController from '../controllers/ProfessionalController';
import professionalSchema from '../schemas/professional.schema';
import loginSchema from '../schemas/login.schema';
import validateReq from '../middlewares/validateRequest.middleware';

const professionalRouter = express.Router();

professionalRouter.post(
  '/',
  validateReq(professionalSchema, 'body'),
  ProfessionalController.register
);
professionalRouter.post(
  '/login',
  validateReq(loginSchema, 'body'),
  ProfessionalController.login
);

export default professionalRouter;
