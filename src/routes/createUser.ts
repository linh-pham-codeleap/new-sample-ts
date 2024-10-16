import { Router } from 'express';
import pool from '../db/db';
import { z } from 'zod';

const createUserRouter = Router();

// Validation schema
const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

// CREATE a new user
createUserRouter.post('/', async (req, res) => {
  try {
    // Validate request body
    const parsedData = userSchema.parse(req.body);

    // Create User in DB
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
});

export default createUserRouter;
