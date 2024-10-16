import { Router, RequestHandler } from 'express';
import pool from '../db/db';

const deleteUserRouter = Router();

// DELETE a user
const deleteUserById: RequestHandler = async (req, res) => {
  try {
    // Get user ID from URL
    const { id } = req.params;

    // Hard delete user from DB
    const deletedUser = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

    // Check response failed
    if (deletedUser.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Success
    res.json({ message: `User ${id} deleted successfully` });

  } catch (err) {
    // Unexpected error
    res.status(500).json({ error: `Error: ${err}` });
  }
}
deleteUserRouter.put('/:id', deleteUserById);


export default deleteUserRouter;
