"use client";

import { useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

type AuthPanelProps = {
  onSuccess?: () => void;
};

export default function AuthPanel({ onSuccess }: AuthPanelProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleFacebook() {
    try {
      setLoading(true);
      setMessage("");

      const provider = new FacebookAuthProvider();

      try {
        await signInWithPopup(auth, provider);
      } catch (error: any) {
        if (error?.code === "auth/account-exists-with-different-credential") {
          const email = error?.customData?.email;

          if (email) {
            const methods = await fetchSignInMethodsForEmail(auth, email);

            setMessage(
              "This email is already registered with: " +
                methods.join(", ") +
                ". Please sign in using that method first."
            );

            return;
          }
        }

        throw error;
      }

      console.log("AEVORA: FACEBOOK LOGIN SUCCESS");
      onSuccess?.();
    } catch (error: any) {
      console.error("AEVORA: FACEBOOK LOGIN ERROR", error);
      setMessage(error?.message || "Facebook authentication failed.");
    } finally {
      setLoading(false);
    }
  }
  async function handleProvider(
    provider:
      | GoogleAuthProvider
      | GithubAuthProvider
      | FacebookAuthProvider
  ) {
    try {
      setLoading(true);
      setMessage("");

      try {
        await signInWithPopup(auth, provider);
      } catch (error: any) {
        if (error?.code === "auth/account-exists-with-different-credential") {
          const email = error?.customData?.email;

          if (email) {
            const methods = await fetchSignInMethodsForEmail(auth, email);

            setMessage(
              "This email is already registered with: " +
                methods.join(", ") +
                ". Please sign in using that method first."
            );

            return;
          }
        }

        throw error;
      }
      
      onSuccess?.();
    } catch (error: any) {
      console.error(error);
      setMessage(error?.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmail() {
    if (!email || !password) {
      setMessage("ENTER YOUR EMAIL AND PASSWORD");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      

      onSuccess?.();
    } catch (error: any) {
      console.error(error);
      setMessage(error?.message || "Email authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative w-full overflow-hidden text-white">

      {/* Atmospheric cloud layers */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[90px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[260px] w-[260px] rounded-full bg-white/[0.025] blur-[80px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#A3FF9A]/[0.018] blur-[100px]" />

      {/* Soft orbital ring */}
      <div className="pointer-events-none absolute left-1/2 top-[115px] h-[210px] w-[210px] -translate-x-1/2 rounded-full border border-white/[0.035]" />

      <div className="pointer-events-none absolute left-1/2 top-[132px] h-[176px] w-[176px] -translate-x-1/2 rounded-full border border-white/[0.025]" />

      {/* Header */}
      <div className="relative z-10 mb-8 text-center">

        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/[0.08]" />

          <span className="text-[8px] tracking-[0.45em] text-white/30">
            AEVORA
          </span>

          <span className="h-px w-10 bg-white/[0.08]" />
        </div>

        {/* Core */}
        <div className="relative mx-auto mb-7 flex h-14 w-14 items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-white/[0.10]" />

          <div className="absolute inset-[7px] rounded-full border border-white/[0.07]" />

          <div className="absolute inset-[15px] rounded-full bg-white/[0.025] blur-sm" />

          <div className="relative h-[5px] w-[5px] rounded-full bg-[#A3FF9A] shadow-[0_0_14px_#A3FF9A]" />
        </div>

        <div className="mb-3 flex items-center justify-center gap-2 text-[9px] tracking-[0.32em] text-[#A3FF9A]/50">
          <span className="relative flex h-[5px] w-[5px]">
            <span className="absolute inset-0 rounded-full bg-[#A3FF9A]/50 animate-ping" />
            <span className="relative h-[5px] w-[5px] rounded-full bg-[#A3FF9A] shadow-[0_0_8px_#A3FF9A]" />
          </span>
          <span>SYSTEM ONLINE</span>
        </div>

        <h2 className="text-[26px] font-extralight tracking-[0.12em] text-white/90">
          {mode === "login" ? "WELCOME BACK" : "BEGIN WITH AEVORA"}
        </h2>

        <p className="mx-auto mt-3 max-w-[260px] text-[10px] leading-5 tracking-[0.05em] text-white/25">
          {mode === "login"
            ? "Reconnect with your personal intelligence."
            : "Create your personal intelligence space."}
        </p>
      </div>

      {/* Social authentication */}
      <div className="relative z-10 space-y-2.5">

        <button
          onClick={() => handleProvider(new GoogleAuthProvider())}
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3.5 text-[9px] tracking-[0.18em] text-white/55 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.20] hover:bg-white/[0.045] hover:text-white disabled:opacity-30"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">CONTINUE WITH GOOGLE</span>
        </button>

        <button
          onClick={() => handleProvider(new GithubAuthProvider())}
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3.5 text-[9px] tracking-[0.18em] text-white/55 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.20] hover:bg-white/[0.045] hover:text-white disabled:opacity-30"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">CONTINUE WITH GITHUB</span>
        </button>

        <button onClick={handleFacebook}
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3.5 text-[9px] tracking-[0.18em] text-white/55 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.20] hover:bg-white/[0.045] hover:text-white disabled:opacity-30"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">CONTINUE WITH FACEBOOK</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative z-10 my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/[0.07]" />

        <span className="text-[8px] tracking-[0.35em] text-white/15">
          OR
        </span>

        <div className="h-px flex-1 bg-white/[0.07]" />
      </div>

      {/* Email */}
      <div className="relative z-10 space-y-2.5">

        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3.5 text-[9px] tracking-[0.12em] text-white outline-none backdrop-blur-xl placeholder:text-white/15 transition-all duration-300 focus:border-white/[0.20] focus:bg-white/[0.035]"
        />

        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3.5 text-[9px] tracking-[0.12em] text-white outline-none backdrop-blur-xl placeholder:text-white/15 transition-all duration-300 focus:border-white/[0.20] focus:bg-white/[0.035]"
        />

        <button
          onClick={handleEmail}
          disabled={loading}
          className="relative mt-1 w-full overflow-hidden rounded-full bg-white py-3.5 text-[9px] font-medium tracking-[0.22em] text-black transition-all duration-300 hover:bg-white/90 disabled:opacity-30"
        >
          {loading
            ? "CONNECTING..."
            : mode === "login"
            ? "ENTER AEVORA"
            : "CREATE IDENTITY"}
        </button>
      </div>

      {/* Switch mode */}
      <button
        onClick={() => {
          setMode(mode === "login" ? "signup" : "login");
          setMessage("");
        }}
        className="relative z-10 mt-6 w-full text-center text-[8px] tracking-[0.18em] text-white/20 transition hover:text-white/50"
      >
        {mode === "login"
          ? "NEW TO AEVORA  /  CREATE IDENTITY"
          : "ALREADY CONNECTED  /  SIGN IN"}
      </button>

      {/* Error */}
      {message && (
        <div className="relative z-10 mt-5 border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center text-[8px] tracking-[0.08em] text-white/40 backdrop-blur-xl">
          {message}
        </div>
      )}

      {/* Footer signal */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-2">

        <span className="h-px w-6 bg-white/[0.06]" />

        <span className="h-[3px] w-[3px] rounded-full bg-[#A3FF9A] shadow-[0_0_8px_#A3FF9A]" />

        <span className="text-[7px] tracking-[0.35em] text-white/10">
          VOICE • MEMORY • ACTION
        </span>

        <span className="h-[3px] w-[3px] rounded-full bg-[#A3FF9A] shadow-[0_0_8px_#A3FF9A]" />

        <span className="h-px w-6 bg-white/[0.06]" />
      </div>
    </div>
  );
}