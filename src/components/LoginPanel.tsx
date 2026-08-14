import { useState, type FormEvent } from "react";
import { cn } from "../utils/cn";

type Status = "idle" | "loading" | "done";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <path d="m4 4 16 16" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("animate-spin", className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.56-5.17 3.56-8.86Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.72-4.95H1.27v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.28 14.29a7.2 7.2 0 0 1 0-4.58V6.61H1.27a12 12 0 0 0 0 10.78l4.01-3.1Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.8l3.44-3.44A11.98 11.98 0 0 0 12 0 12 12 0 0 0 1.27 6.61l4.01 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.37 1.43c.02 1.1-.32 2.18-.96 2.97-.66.83-1.75 1.48-2.96 1.4-.05-1.06.38-2.18 1.02-2.9.69-.78 1.86-1.37 2.9-1.47ZM20.5 17.1c-.46 1.06-.68 1.53-1.28 2.47-.83 1.3-2 2.93-3.45 2.94-1.29.01-1.62-.84-3.37-.83-1.75.01-2.11.85-3.4.83-1.45-.01-2.56-1.48-3.39-2.78-2.32-3.63-2.57-7.9-1.13-10.17 1.02-1.62 2.64-2.57 4.16-2.57 1.55 0 2.52.85 3.8.85 1.24 0 1.99-.85 3.79-.85 1.35 0 2.79.74 3.81 2.01-3.35 1.83-2.8 6.61.46 8.1Z" />
    </svg>
  );
}

export default function LoginPanel({ className }: { className?: string }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 1400);
    window.setTimeout(() => setStatus("idle"), 3200);
  };

  const inputClass =
    "w-full rounded-2xl border border-zinc-200 bg-zinc-50/70 py-3.5 pl-11 pr-4 text-[15px] text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10";

  return (
    <section
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-white lg:h-screen lg:overflow-y-auto",
        className
      )}
    >
      {/* Ambient lighting (ties the two halves together) */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.18), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-50 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.16), transparent 70%)" }}
      />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:min-h-full">
        <div className="stagger w-full max-w-md">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
            Welcome back
          </div>

          {/* Wordmark */}
          <h1 className="font-display mt-4 text-[2.75rem] font-bold leading-none tracking-tight text-zinc-900">
            marl<span className="neon-cyan">oo</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
            Sign in to explore a universe of products, delivered at light speed.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700">
                Email
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <MailIcon className="h-5 w-5" />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@marloo.shop"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-700">
                Password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <LockIcon className="h-5 w-5" />
                </span>
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className={cn(inputClass, "pr-12")}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-600"
                >
                  {show ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember + forgot */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setRemember((r) => !r)}
                className="flex select-none items-center gap-2.5 text-sm text-zinc-500"
              >
                <span
                  className={cn(
                    "grid h-[18px] w-[18px] place-items-center rounded-md border transition",
                    remember
                      ? "border-cyan-400 bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                      : "border-zinc-300 bg-white"
                  )}
                >
                  {remember && <CheckIcon className="h-3 w-3 text-white" />}
                </span>
                Remember me
              </button>
              <a
                href="#"
                className="text-sm font-medium text-zinc-500 transition hover:text-cyan-500"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign in */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-shimmer group relative w-full rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#a855f7] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_34px_-8px_rgba(0,229,255,0.6)] transition duration-300 hover:brightness-105 hover:shadow-[0_18px_44px_-8px_rgba(168,85,247,0.65)] active:scale-[0.99] disabled:opacity-85"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "idle" && (
                  <>
                    Sign in
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Spinner className="h-4 w-4" />
                    Signing in…
                  </>
                )}
                {status === "done" && (
                  <>
                    <CheckIcon className="h-4 w-4" />
                    Signed in
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4 text-[11px] font-medium uppercase tracking-widest text-zinc-400">
            <span className="h-px flex-1 bg-zinc-200" />
            or continue with
            <span className="h-px flex-1 bg-zinc-200" />
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200 bg-white py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.99]">
              <GoogleIcon className="h-[18px] w-[18px]" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-200 bg-white py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.99]">
              <AppleIcon className="h-[18px] w-[18px]" />
              Apple
            </button>
          </div>

          {/* Sign up */}
          <p className="mt-8 text-center text-sm text-zinc-500">
            New to marloo?{" "}
            <a href="#" className="font-semibold text-zinc-900 transition hover:text-cyan-500">
              Create an account
            </a>
          </p>

          <p className="mt-6 text-center text-xs text-zinc-400">
            Protected by marloo secure · 256-bit encryption
          </p>
        </div>
      </div>
    </section>
  );
}
