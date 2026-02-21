import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Welcome to HonoX App</h1>
        <p class="text-gray-700 mb-6">This is a SSR page powered by HonoX</p>
        <nav>
          <ul class="space-y-2">
          <li>
            <a href="/about" class="text-blue-500 hover:text-blue-700 underline">About</a>
          </li>
          <li>
            <a href="/api/health" class="text-blue-500 hover:text-blue-700 underline">API Health Check</a>
          </li>
        </ul>
      </nav>
    </div>,
		{ title: 'Home' }
	);
});
