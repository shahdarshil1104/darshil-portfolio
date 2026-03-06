import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Layers } from "lucide-react";
const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: Layers }
];
export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="glass rounded-2xl shadow-glow">
          <div className="flex items-center justify-around py-2">
            {items.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs transition ${
                    isActive
                      ? "bg-white/10 dark:bg-white/10 bg-black/6"
                      : "hover:bg-white/6 dark:hover:bg-white/6 hover:bg-black/4"
                  }`
                }
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}