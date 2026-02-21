
import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, Script } from 'honox/server';
import { TheLayout } from '../client/components/layouts/TheLayout';

export default jsxRenderer(({ children, title }) => {
	return (
		<html lang="ja">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'HonoX App'}</title>
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" />
      </head>
      <body className="bg-gray-100 min-h-screen" >
        <TheLayout currentPath=''>
          {children}
        </TheLayout>
      </body>
		</html>
	);
});
