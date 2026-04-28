import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import Container from "../Container";
import Image from "../Image";
import { Link } from "react-router-dom";
import BrandLogoWhite from "../../assets/brandLogoWhite.png";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-center font-sans overflow-hidden">
          {/* Card Wrapper */}
          <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
            {/* ── LEFT PANEL ── */}
            <div className="relative bg-[#0d0d0d] flex-col justify-between px-10 py-0 lg:py-5 my-0 lg:my-5 overflow-hidden hidden lg:flex rounded-2xl border border-gray-100">
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
                  Start your
                  <br />
                  <em className="not-italic text-white/40">journey</em>
                  <br />
                  with us today.
                </h1>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  Join thousands of teams
                  <br />
                  who move fast and think clearly.
                </p>
              </div>

              {/* Back to Home */}
              <button
                onClick={() => navigate("/")}
                className="relative z-10 flex items-center gap-2 text-sm text-white font-medium border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-200 px-4 py-2 rounded-lg w-fit cursor-pointer"
              >
                <IoArrowBack className="text-sm" />
                Back to home
              </button>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="bg-white flex flex-col justify-center px-10 py-0 lg:py-5 my-0 lg:my-5 rounded-2xl border border-gray-300 overflow-hidden">
              {/* Header */}
              <div className="mb-8">
                <h2
                  className="text-[26px] font-medium text-[#0d0d0d] mb-1.5"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Create an account
                </h2>
                <p className="text-sm text-gray-400 font-light">
                  Sign up to get started with your workspace
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                {/* First Name + Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium uppercase tracking-[0.9px] text-gray-600">
                      First name
                    </label>
                    <div className="relative">
                      <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none" />
                      <input
                        type="text"
                        placeholder="John"
                        required
                        className="w-full h-11 pl-10 pr-3 text-sm text-[#0d0d0d] bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium uppercase tracking-[0.9px] text-gray-600">
                      Last name
                    </label>
                    <div className="relative">
                      <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Doe"
                        required
                        className="w-full h-11 pl-10 pr-3 text-sm text-[#0d0d0d] bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium uppercase tracking-[0.9px] text-gray-600">
                    Email address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none" />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full h-11 pl-10 pr-3 text-sm text-[#0d0d0d] bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium uppercase tracking-[0.9px] text-gray-600">
                    Password
                  </label>
                  <div className="relative">
                    <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none" />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full h-11 pl-10 pr-10 text-sm text-[#0d0d0d] bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors text-xs cursor-pointer"
                    >
                      {showPass ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium uppercase tracking-[0.9px] text-gray-600">
                    Confirm password
                  </label>
                  <div className="relative">
                    <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-base pointer-events-none" />
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full h-11 pl-10 pr-10 text-sm text-[#0d0d0d] bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#0d0d0d] focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors text-xs cursor-pointer"
                    >
                      {showConfirmPass ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center gap-2 -mt-1">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="w-4 h-4 accent-black cursor-pointer rounded"
                  />
                  <label
                    htmlFor="agreed"
                    className="text-sm text-gray-500 cursor-pointer select-none"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#0d0d0d] font-medium border-b border-black/20 hover:border-black transition-colors"
                    >
                      Terms
                    </a>{" "}
                    &{" "}
                    <a
                      href="#"
                      className="text-[#0d0d0d] font-medium border-b border-black/20 hover:border-black transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-[#0d0d0d] text-white text-xs font-medium uppercase tracking-[2px] rounded-lg hover:bg-[#2a2a2a] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                >
                  Create account
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-300 whitespace-nowrap">
                    or continue with
                  </span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Google + GitHub Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="h-11 flex items-center justify-center gap-2 bg-gray-50 border border-gray-500 rounded-lg text-base text-[#0d0d0d] hover:bg-gray-100 hover:border-gray-300 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    <FcGoogle className="text-2xl text-[#EA4335]  shrink-0" />
                    Google
                  </button>
                  <button
                    type="button"
                    className="h-11 flex items-center justify-center gap-2 bg-gray-50 border border-gray-500 rounded-lg text-base text-[#0d0d0d] hover:bg-gray-100 hover:border-gray-300 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    <FaGithub className="text-[#0d0d0d] text-2xl shrink-0" />
                    GitHub
                  </button>
                </div>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-400 mt-1">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#0d0d0d] font-medium border-b border-black/20 hover:border-black transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
