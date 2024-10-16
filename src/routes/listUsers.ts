import { Router, RequestHandler } from 'express';
import pool from '../db/db';

const listUsersRouter = Router();


// LIST all users
const listUsers: RequestHandler = async (req, res) => {
  try {
    // Get all users from DB
    const allUsers = await pool.query('SELECT * FROM users');

    // Check response failed
    if (allUsers.rows.length === 0) {
      res.status(404).json({ error: 'No User found' });
      return;
    }

    // Success
    res.json(allUsers.rows);

  } catch (err) {
    // Unexpected error
    res.status(500).json({ error: `Error: ${err}` });
  }
}


listUsersRouter.get('/', listUsers);


export default listUsersRouter;
