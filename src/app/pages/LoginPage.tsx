import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { SplineViewer } from "@/app/components/SplineViewer";
import imgTascLogo from "@/assets/0399c2ba8c161094279ce73755571815f5821b3f.png";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate authentication - replace with real authentication
    setTimeout(() => {
      if (email && password) {
        // Store authentication state
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", email);
        navigate("/");
      } else {
        setError("Please enter your email and password");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] flex items-center justify-center px-[20px] py-[40px] relative overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SplineViewer url="https://prod.spline.design/QjXhS9RSPg7tzqko/scene.splinecode" />
      </div>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-[#005f83]/70 z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00bfff]/20 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#56db46]/20 rounded-full blur-3xl z-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffe102]/10 rounded-full blur-3xl z-20"></div>

      <div className="w-full max-w-[480px] relative z-30">
        {/* Logo and Header */}
        <div className="text-center mb-[40px]">
          <div className="flex justify-center mb-[30px]">
            <div className="bg-white rounded-[24px] p-[20px] shadow-xl">
              <img alt="TASC Logo" className="h-[50px] w-auto object-contain" src={imgTascLogo} />
            </div>
          </div>
          <h1 className="text-[42px] font-['Poppins'] font-bold text-white leading-[52px] mb-[12px]">
            Welcome Back
          </h1>
          <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
            Sign in to access the TASC Intranet
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[32px] shadow-2xl p-[45px]">
          <form onSubmit={handleSubmit} className="space-y-[24px]">
            {/* Email Field */}
            <div>
              <label className="block text-[#005f83] text-[14px] font-['Poppins'] font-semibold mb-[8px]">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-[16px] top-1/2 transform -translate-y-1/2 text-gray-400">
                  <User className="w-[20px] h-[20px]" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@tasc.com"
                  className="w-full pl-[48px] pr-[16px] py-[14px] text-[15px] font-['Gotham'] rounded-[12px] border-2 border-gray-200 focus:border-[#00bfff] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[#005f83] text-[14px] font-['Poppins'] font-semibold mb-[8px]">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-[16px] top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Lock className="w-[20px] h-[20px]" strokeWidth={2} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-[48px] pr-[48px] py-[14px] text-[15px] font-['Gotham'] rounded-[12px] border-2 border-gray-200 focus:border-[#00bfff] focus:outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#005f83] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-[20px] h-[20px]" strokeWidth={2} />
                  ) : (
                    <Eye className="w-[20px] h-[20px]" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-[8px] cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] rounded-[4px] border-2 border-gray-300 text-[#00bfff] focus:ring-2 focus:ring-[#00bfff]/30"
                />
                <span className="text-[14px] font-['Gotham'] text-gray-600 group-hover:text-[#005f83] transition-colors">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-[14px] font-['Poppins'] font-semibold text-[#00bfff] hover:text-[#005f83] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-[12px] p-[12px]">
                <p className="text-red-600 text-[14px] font-['Gotham']">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[12px] px-[24px] py-[16px] text-white text-[16px] font-['Poppins'] font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[10px]"
            >
              {isLoading ? (
                <>
                  <div className="w-[20px] h-[20px] border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-[20px] h-[20px]" />
                </>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-[30px] pt-[30px] border-t border-gray-200">
            <p className="text-center text-[14px] font-['Gotham'] text-gray-600">
              Need help accessing your account?{" "}
              <button className="text-[#00bfff] font-semibold hover:text-[#005f83] transition-colors">
                Contact IT Support
              </button>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-[24px] text-center">
          <p className="text-white/60 text-[13px] font-['Gotham'] leading-[20px]">
            This is a secure system. Access is restricted to authorized TASC employees only.
          </p>
        </div>
      </div>
    </div>
  );
}
