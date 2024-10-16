import { Router } from 'express';
import createUserRouter from './routes/createUser';
import getUserRouter from './routes/getUser';
import listUsersRouter from './routes/listUsers';
import updateUserRouter from './routes/updateUser';
import deleteUserRouter from './routes/deleteUser';

const router = Router();

router.use('/users', createUserRouter);
router.use('/users', getUserRouter);
router.use('/list/users', listUsersRouter);
router.use('/users', updateUserRouter);
router.use('/users', deleteUserRouter);

export default router;
