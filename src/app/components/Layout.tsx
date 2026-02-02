import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import imgTascLogo from "figma:asset/0399c2ba8c161094279ce73755571815f5821b3f.png";

export function Layout() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-[72px]">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <NavLink to="/" className="h-[40px]">
              <img alt="TASC Logo" className="h-full w-auto object-contain" src={imgTascLogo} />
            </NavLink>

            {/* Navigation Links */}
            <nav className="flex items-center gap-[40px]">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-[16px] font-['Poppins'] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#005f83] border-b-2 border-[#00bfff]"
                      : "text-gray-600 hover:text-[#005f83]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  `text-[16px] font-['Poppins'] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#005f83] border-b-2 border-[#00bfff]"
                      : "text-gray-600 hover:text-[#005f83]"
                  }`
                }
              >
                Newsletter
              </NavLink>
              <NavLink
                to="/who-we-are"
                className={({ isActive }) =>
                  `text-[16px] font-['Poppins'] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#005f83] border-b-2 border-[#00bfff]"
                      : "text-gray-600 hover:text-[#005f83]"
                  }`
                }
              >
                Who We Are
              </NavLink>
              <NavLink
                to="/whats-happening"
                className={({ isActive }) =>
                  `text-[16px] font-['Poppins'] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#005f83] border-b-2 border-[#00bfff]"
                      : "text-gray-600 hover:text-[#005f83]"
                  }`
                }
              >
                What's Happening
              </NavLink>
            </nav>

            {/* User Section */}
            <div className="flex items-center gap-[20px]">
              {userEmail && (
                <span className="text-[14px] font-['Gotham'] text-gray-600">
                  {userEmail}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-[8px] bg-gray-100 hover:bg-[#005f83] text-gray-700 hover:text-white px-[16px] py-[8px] rounded-[50px] text-[14px] font-['Poppins'] font-medium transition-all"
              >
                <LogOut className="w-[16px] h-[16px]" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#005f83] py-[40px] mt-[80px]">
        <div className="max-w-[1400px] mx-auto px-[72px]">
          <div className="text-center">
            <p className="text-white text-[14px] font-['Gotham'] opacity-80">
              © 2026 TASC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}