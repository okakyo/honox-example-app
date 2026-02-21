import {Hono} from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { UserService } from '../../usecases/user.service';

// API用のHonoインスタンス
const api = new Hono();

// Example: GET /api/health
api
  .get("/", (c) => {
    return c.json({
      message: "Hello from API!"
    });
  })
  .get('/health', (c) => {
	return c.json({
		status: 'ok',
		timestamp: new Date().toISOString()
	});
});


export default api;
