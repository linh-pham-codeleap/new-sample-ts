import { Router, RequestHandler } from 'express';
import pool from '../db/db';
import { z } from 'zod';

const updateUserRouter = Router();


// Validation schema
const userUpdateSchema = z.object({
  username: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
});

// UPDATE a user
const updateUserById: RequestHandler = async (req, res) => {
  try {
    // Get user ID from URL
    const { id } = req.params;
    
    // Validate request body
    const parsedData = userUpdateSchema.parse(req.body);

    // Update user in DB
    const updatedUser = await pool.query(
      'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [parsedData.username, parsedData.email, parsedData.password, id]
    );

    // Check response failed
    if (updatedUser.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Success
    res.json(updatedUser.rows[0]);
  
  } catch (err) {
    // Unexpected error
    res.status(500).json({ error: `Error: ${err}` });
  }
}
updateUserRouter.put('/:id', updateUserById);


export default updateUserRouter;
