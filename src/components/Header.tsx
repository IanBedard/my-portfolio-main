import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1">

<div className="flex-1">
    <a href="#header" className="btn btn-ghost">Header</a>
  <a href="#about" className="btn btn-ghost">About</a>
  <a href="#portfolio" className="btn btn-ghost">Portfolio</a>
  <a href="#pricing" className="btn btn-ghost">Pricing</a>
  <a href="#contact" className="btn btn-ghost">Contact</a>
</div>

        </div>
        <div className="flex-none">
          {/* THEME SWITCHER */}
          <label className="flex cursor-pointer gap-2 items-center">
            {/* Sun */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 
                   0V3a1 1 0 011-1zm4 8a4 4 0 11-8 
                   0 4 4 0 018 0zm-.464 4.95l.707.707a1 
                   1 0 001.414-1.414l-.707-.707a1 1 
                   0 00-1.414 1.414zM17 11a1 1 0 
                   100-2h-1a1 1 0 100 2h1zM4 11a1 1 
                   0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="checkbox"
              className="toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            {/* Moon */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 
                       2.707a8.001 8.001 0 1010.586 
                       10.586z" />
            </svg>
          </label>
        </div>
      </div>

      {/* HERO SECTION with bouncing circles */}
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  );
};
