import { useState } from "react";
import { ChevronRight, Eye, EyeOff, MoveRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { checkAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { username, email, password },
        {
          withCredentials: true,
        },
      );

      // Call checkAuth to update user in context
      await checkAuth();

      toast.success("Sign in Successfully");
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Sign in Failed. Try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const inputType = showPassword ? "text" : "password";

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="h-[80vh] w-full flex flex-col items-center justify-center px-4">
          <div className="bg-[rgba(255,255,255,0.03)] border-2 border-[rgba(0,212,255,0.12)] px-8 py-8 rounded-lg w-full max-w-sm">
            <div className="flex gap-2 items-center">
              <h1 className="text-[#00D4FF]">
                <ChevronRight className="w-5 h-5" />
              </h1>
              <h1 className="text-[#00D4FF] title tracking-widest text-sm font-semibold">
                ACCESS TERMINAL
              </h1>
            </div>

            <div className="mt-6 mb-6">
              <h1 className="title text-2xl font-bold text-[#F8FAFC]">
                Welcome back
              </h1>
              <p className="text-sm text-[#8892B0] mt-1">
                Sign in to continue converting code
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="text-[#00D4FF] title tracking-widest text-xs font-semibold"
                >
                  USERNAME
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  placeholder="adam@123"
                  className="w-full mt-2 px-3 py-2 rounded-md bg-[rgba(0,212,255,0.05)] border-2 border-[rgba(0,212,255,0.15)] text-[#F8FAFC] placeholder:text-[#4A5578] focus:border-[#00D4FF] focus:outline-none transition-colors"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[#00D4FF] title tracking-widest text-xs font-semibold"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="your@example.com"
                  className="w-full mt-2 px-3 py-2 rounded-md bg-[rgba(0,212,255,0.05)] border-2 border-[rgba(0,212,255,0.15)] text-[#F8FAFC] placeholder:text-[#4A5578] focus:border-[#00D4FF] focus:outline-none transition-colors"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-[#00D4FF] title tracking-widest text-xs font-semibold"
                >
                  PASSWORD
                </label>
                <div className="relative mt-2 flex items-center justify-center">
                  <input
                    type={inputType}
                    name="password"
                    id="password"
                    value={password}
                    placeholder="•••••••"
                    className="w-full px-3 py-2 rounded-md bg-[rgba(0,212,255,0.05)] border-2 border-[rgba(0,212,255,0.15)] text-[#F8FAFC] placeholder:text-[#4A5578] focus:border-[#00D4FF] focus:outline-none transition-colors"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-3 top-2.5 text-[#8892B0] hover:text-[#00D4FF] transition-colors"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              {error && (
                <div className="mt-4 p-3 rounded-md border-2 text-[#E24B4A] text-sm border-[rgba(0,212,255,0.15)]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-6 py-2.5 rounded-md bg-[#00D4FF] hover:bg-[#00B8FF] text-[#0A0F1E] font-semibold title tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                <span>Sign in</span>
                <MoveRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
