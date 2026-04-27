import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import Container from "../Container";

import Image from "../Image";
import { Link } from "react-router-dom";
import BrandLogoWhite from "../../assets/brandLogoWhite.png";

const Login = () => {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-center  font-sans">
          {/* Card Wrapper */}
          <div className="w-full h-screen py-10 grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
            {/* ── LEFT PANEL ── */}
            <div className="relative bg-[#0d0d0d] flex-col justify-between px-10 py-10 min-h-[540px] overflow-hidden hidden lg:flex">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-[0.04]" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white opacity-[0.03]" />

              {/* Thin vertical accent line */}
              <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {/* Brand */}
              <div className="relative z-10 flex items-center gap-3">
                <Link to="/" className="flex items-center gap-2">
                  <Image
                    className="w-24 h-auto"
                    imgSrc={BrandLogoWhite}
                    imgAlt="Brand Logo"
                  />
                </Link>
              </div>

              {/* Headline */}
              <div className="relative z-10">
                <h1
                  className="text-white text-[32px] font-normal leading-[1.35] mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Navigate your
                  <br />
                  <em className="not-italic text-white/40">workflow</em>
                  <br />
                  with clarity.
                </h1>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  The workspace built for teams
                  <br />
                  who move fast and think clearly.
                </p>
              </div>

              {/* Back to Home — visible white button */}
              <button
                onClick={() => navigate("/")}
                className="relative z-10 flex items-center gap-2 text-sm text-white font-medium border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-200 px-4 py-2 rounded-lg w-fit cursor-pointer"
              >
                <IoArrowBack className="text-sm" />
                Back to home
              </button>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="bg-white flex flex-col justify-center px-10 py-12">
              {/* Header */}
              <div className="mb-8">
                <h2
                  className="text-[26px] font-medium text-[#0d0d0d] mb-1.5"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Welcome back
                </h2>
                <p className="text-sm text-gray-400 font-light">
                  Sign in to continue to your workspace
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium uppercase tracking-[0.9px] text-gray-400">
                    Email address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-lg pointer-events-none" />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full h-14 pl-12 pr-4 text-base text-[#0d0d0d] bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium uppercase tracking-[0.9px] text-gray-400">
                    Password
                  </label>
                  <div className="relative">
                    <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-lg pointer-events-none" />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full h-14 pl-12 pr-12 text-base text-[#0d0d0d] bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors text-sm cursor-pointer"
                    >
                      {showPass ? "Hide" : "Show"}
                    </button>
                  </div>
                  <div className="flex justify-end mt-1">
                    <a
                      href="#"
                      className="text-sm text-[#0d0d0d] border-b border-black/20 hover:border-black transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2 -mt-1">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="w-5 h-5 accent-black cursor-pointer rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="text-base text-gray-500 cursor-pointer select-none"
                  >
                    Remember me for 30 days
                  </label>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-[#0d0d0d] text-white text-sm font-medium uppercase tracking-[2px] rounded-lg hover:bg-[#2a2a2a] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                >
                  Sign in
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-300 whitespace-nowrap">
                    or continue with
                  </span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Google + GitHub Buttons side by side */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="h-14 flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-lg text-base text-[#0d0d0d] hover:bg-gray-100 hover:border-gray-300 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="shrink-0"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="h-14 flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-lg text-base text-[#0d0d0d] hover:bg-gray-100 hover:border-gray-300 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    <FaGithub className="text-[#0d0d0d] text-lg shrink-0" />
                    GitHub
                  </button>
                </div>

                {/* Sign Up */}
                <p className="text-center text-base text-gray-400 mt-1">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-[#0d0d0d] font-medium border-b border-black/20 hover:border-black transition-colors"
                  >
                    Create one free
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
