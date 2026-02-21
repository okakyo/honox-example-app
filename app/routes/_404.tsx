import { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  return c.render(
    <div style={{ padding: '16px', backgroundColor: '#f7fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>404 Not Found</h1>
      <h1>Sorry, the page you are looking for does not exist.</h1>
      <a href="/" style={{ marginTop: '16px', color: '#3182ce', textDecoration: 'underline' }}>Back to Home</a>
    </div>
  );
}

export default handler
