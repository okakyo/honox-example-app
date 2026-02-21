
import type { Child, FC, ReactNode } from 'hono/jsx';
import { TheHeader } from './TheHeader';

export type TheLayoutProps = {
  currentPath: string;
  children: Child;
};

export const TheLayout:FC<TheLayoutProps> = ({ children, currentPath }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TheHeader currentPath={currentPath} />
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 My HonoX App
      </footer>
    </div>
  );
};
