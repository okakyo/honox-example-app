import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(
      <div>
        <h1>About</h1>
        <p>This is an example page using HonoX</p>
        <a href="/">Back to Home</a>
        </div>,
		{ title: 'About' }
	);
});
