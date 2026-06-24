import { ChevronRight, Home, LogIn, SearchX } from "lucide-react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[75vh] w-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl rounded-lg border-2 border-[rgba(0,212,255,0.12)] bg-[rgba(255,255,255,0.03)] px-6 py-10 text-center sm:px-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md border border-amber-300/20 bg-amber-300/10 text-amber-300">
          <SearchX className="h-7 w-7" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <ChevronRight className="h-5 w-5 text-[#00D4FF]" />
          <p className="title text-sm font-semibold tracking-widest text-[#00D4FF]">
            ROUTE NOT FOUND
          </p>
        </div>

        <h1 className="title mt-5 text-4xl font-bold text-[#F8FAFC] sm:text-5xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#8892B0] sm:text-base">
          This page does not exist, or the link may have moved. Head back to the
          converter and keep building.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NavLink
            to="/"
            className="title flex w-full items-center justify-center gap-2 rounded-md bg-[#00D4FF] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#0A0F1E] transition-colors hover:bg-[#00B8FF] sm:w-auto"
          >
            <Home className="h-4 w-4" />
            <span>Back Home</span>
          </NavLink>
          <NavLink
            to="/login"
            className="title flex w-full items-center justify-center gap-2 rounded-md border-2 border-[rgba(0,212,255,0.15)] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#F8FAFC] transition-colors hover:border-[#00D4FF] hover:text-[#00D4FF] sm:w-auto"
          >
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
