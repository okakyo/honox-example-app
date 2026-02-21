import { showRoutes } from 'hono/dev';
import { createApp } from 'honox/server';
import apiRouter from './api/controllers/routes';

// HonoXアプリケーションの作成（src/client をベースに）
const app = createApp();

// API ルートをマウント（/api/配下）
app.route('/api', apiRouter);

// 開発時にルート一覧を表示
showRoutes(app);

export type AppType = typeof app;

export default app;
