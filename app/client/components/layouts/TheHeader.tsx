import { FC, useState } from "hono/jsx";

const NAV_LIST = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "API Health", href: "/api/health" },
];

export type TheHeaderProps = {
  currentPath: string;
};

export const TheHeader:FC<TheHeaderProps> = ({currentPath}) => {
  const [] = useState(false);
  return (
    <header className="bg-gray-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">HonoX App</a>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {NAV_LIST.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
