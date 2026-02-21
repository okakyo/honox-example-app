import { ErrorHandler } from "hono";

const handler: ErrorHandler = (e,c) => {
  return c.render(
    <div style={{ padding: '16px', backgroundColor: '#f7fafc' }}>
      <h1>{c.status}</h1>
      <div>
        {e.message}
      </div>
    </div>
  );
}

export default handler;
