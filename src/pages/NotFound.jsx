import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="glass rounded-3xl p-10 shadow-glow">
      <div className="text-2xl font-semibold">404</div>
      <p className="mt-2 text-zinc-300 dark:text-zinc-300 text-slate-700">Page not found.</p>
      <Link to="/" className="mt-4 inline-flex hover:underline">Go home</Link>
    </div>
  );
}
