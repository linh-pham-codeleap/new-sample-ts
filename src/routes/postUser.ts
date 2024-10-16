import { Router, RequestHandler } from 'express';
import pool from '../db/db';
import { z } from 'zod';


const createUserRouter = Router();

// Validation schema
const userSchema = z.object({
    username: z.string().min(3).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
});


const createUser: RequestHandler = async (req, res) => {
  try {
    // Validate body
    const parsedData = userSchema.parse(req.body);

    // Create user in DB
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [parsedData.username, parsedData.email, parsedData.password]
    );

    // Success
    res.json(newUser.rows[0]);

  } catch (err) {
    // Unexpected error
    res.status(500).json({ error: `Error: ${err}` });
  }
}
createUserRouter.post('/', createUser);

export default createUserRouter;

