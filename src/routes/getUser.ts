import { Router, RequestHandler } from 'express';
import pool from '../db/db';

const getUserRouter = Router();

// GET a user by ID
const getUserById: RequestHandler = async (req, res) => {
  try {
    // Get user ID from URL
    const { id } = req.params;

    // Get user from DB
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    // Check response failed
    if (user.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Success
    res.json(user.rows[0]);

  } catch (err) {
    // Unexpected error
    res.status(500).json({ error: `Error: ${err}` });
  }
}

getUserRouter.get('/:id', getUserById);

export default getUserRouter;
