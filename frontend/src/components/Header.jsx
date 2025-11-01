import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#4b6f63] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          TRENDSPIRE
        </Link>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <NavItem to="/" active={pathname === "/"}>Home</NavItem>
          <NavItem to="/about">About Us</NavItem>
          <NavItem to="/testimonials">Testimonials</NavItem>
          <NavItem to="/admin">Admin</NavItem>

          <Link to="/cart" className="text-2xl hover:text-green-300 transition">
            🛒
          </Link>

          {user ? (
            <>
              <button
                onClick={logout}
                className="bg-[#2d3331] px-4 py-2 rounded-lg hover:bg-black transition shadow-md"
              >
                Logout
              </button>

              <span className="bg-[#1e8c6d] px-4 py-2 rounded-lg shadow-md font-semibold">
                {user.name?.toUpperCase().replace(" ", "_")}
              </span>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition shadow"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-white text-3xl"
        >
          <HiMenu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-[70] flex justify-end">

          <div className="w-72 bg-[#4b6f63] h-full p-6 shadow-xl animate-slideLeft">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl mb-6 float-right"
            >
              <HiX />
            </button>

            <div className="flex flex-col gap-6 mt-10">

              <MobileLink to="/" text="Home" close={() => setOpen(false)} />
              <MobileLink to="/about" text="About Us" close={() => setOpen(false)} />
              <MobileLink to="/admin" text="Admin" close={() => setOpen(false)} />
              <MobileLink to="/testimonials" text="Testimonials" close={() => setOpen(false)} />
              <MobileLink to="/cart" text="Cart 🛒" close={() => setOpen(false)} />

              {user ? (
                <>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="bg-[#2d3331] w-full py-3 rounded-lg font-semibold hover:bg-black transition shadow"
                  >
                    Logout
                  </button>

                  <div className="bg-[#1e8c6d] w-full py-3 rounded-lg text-center font-semibold shadow">
                    {user.name?.toUpperCase().replace(" ", "_")}
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="bg-green-600 w-full py-3 rounded-lg text-center font-semibold hover:bg-green-700 transition shadow"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

        </div>
      )}
    </header>
  );
}

function NavItem({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`relative group ${
        active ? "text-green-300" : "text-white"
      } hover:text-green-300`}
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 group-hover:w-full transition-all"></span>
    </Link>
  );
}

function MobileLink({ to, text, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="text-xl font-medium border-b pb-2 border-white/20 hover:text-green-200 transition"
    >
      {text}
    </Link>
  );
}
