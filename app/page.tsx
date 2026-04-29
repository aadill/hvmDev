"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "cdaohvm";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12.25a4.25 4.25 0 1 0-4.25-4.25A4.25 4.25 0 0 0 12 12.25Zm0 1.75c-4.22 0-7.75 2.37-7.75 5.2A.8.8 0 0 0 5.05 20h13.9a.8.8 0 0 0 .8-.8C19.75 16.37 16.22 14 12 14Z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17 10h-1V7.75a4 4 0 1 0-8 0V10H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-7-2.25a2 2 0 1 1 4 0V10h-4ZM13 15.73V17a1 1 0 1 1-2 0v-1.27a1.75 1.75 0 1 1 2 0Z" />
  </svg>
);

const LogoMark = () => (
  <div className="brand" aria-label="HVM Health Value Management">
    <span className="brandHvm">HVM</span>
    <span className="brandText">
      <span>HEALTH</span>
      <span>VALUE</span>
      <span>MANAGEMENT</span>
    </span>
  </div>
);

export default function Home() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid =
      username.trim() === VALID_USERNAME && password === VALID_PASSWORD;

    if (!isValid) {
      setStatus({
        type: "error",
        message: "Invalid username or password. Try admin / cdaohvm.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: rememberMe
        ? "Login successful. Your session preference has been remembered."
        : "Login successful. Welcome to HVM.",
    });

    window.sessionStorage.setItem("hvm-authenticated", "true");

    startTransition(() => {
      router.replace("/introduction");
    });
  };

  return (
    <main className="pageShell">
      <section className="heroPanel">
        <img
          className="heroImage"
          src="/left.png"
          alt="Health Value Management campaign artwork"
        />

        <div className="heroContent">
          <p className="heroEyebrow">ONE PLATFORM FOR ALL CAMPAIGNS</p>
          <h1 className="heroTitle">Intelligence-Led Campaigns.</h1>
          <p className="heroSubtitle">Driven by Data. Defined by Impact.</p>
        </div>
      </section>

      <section className="loginPanel">
        <img className="purecsLogo" src="/purecs-logo.png" alt="PureCS" />

        <div className="loginCard">
          <p className="welcomeLine">Welcome to</p>
          <LogoMark />

          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="inputWrap">
              <span className="iconBox">
                <UserIcon />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
              />
            </label>

            <label className="inputWrap">
              <span className="iconBox">
                <LockIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
            </label>

            <div className="optionsRow">
              <label className="rememberMe">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember Me</span>
              </label>
            </div>

            <div className="actionRow">
              <button type="submit" className="loginButton" disabled={isPending}>
                {isPending ? "OPENING..." : "LOG IN"}
              </button>
              <a href="#" className="forgotLink">
                Forget Password?
              </a>
            </div>

            {status.type !== "idle" ? (
              <p
                className={
                  status.type === "success" ? "statusMessage success" : "statusMessage error"
                }
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>

        <footer className="pageFooter">
          <p>&copy; Copyright 2026 PureCS. All rights reserved.</p>
          <p>Restricted access — Authorized personnel only</p>
        </footer>
      </section>
    </main>
  );
}
