"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] =
    useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleGoogle() {
    try {
      setLoading(true);
      setMessage("");

      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      router.push("/");
    } catch (error: any) {
      setMessage(error.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGitHub() {
    try {
      setLoading(true);
      setMessage("");

      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);

      router.push("/");
    } catch (error: any) {
      setMessage(error.message || "GitHub sign-in failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleApple() {
    try {
      setLoading(true);
      setMessage("");

      const provider = new OAuthProvider("apple.com");
      await signInWithPopup(auth, provider);

      router.push("/");
    } catch (error: any) {
      setMessage(error.message || "Apple sign-in failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmail() {
    try {
      setLoading(true);
      setMessage("");

      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      router.push("/");
    } catch (error: any) {
      setMessage(error.message || "Email authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  async function sendPhoneCode() {
    try {
      setLoading(true);
      setMessage("");

      if (!phone.startsWith("+")) {
        setMessage(
          "Enter your phone number with the country code, for example +91XXXXXXXXXX."
        );
        return;
      }

      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
          }
        );
      }

      const result = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );

      setConfirmationResult(result);
      setMessage("Verification code sent.");
    } catch (error: any) {
      setMessage(error.message || "Could not send verification code.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyPhoneCode() {
    try {
      setLoading(true);
      setMessage("");

      if (!confirmationResult) {
        setMessage("Send a verification code first.");
        return;
      }

      await confirmationResult.confirm(verificationCode);

      router.push("/");
    } catch (error: any) {
      setMessage(error.message || "Invalid verification code.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <div className="text-3xl font-semibold tracking-[0.3em]">
            AEVORA
          </div>

          <p className="mt-3 text-white/50">
            Your personal AI productivity ecosystem.
          </p>
        </div>

        <div className="space-y-3">

          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full rounded-xl bg-white text-black py-3.5 font-medium hover:bg-white/90 transition disabled:opacity-50"
          >
            Continue with Google
          </button>

          <button
            onClick={handleGitHub}
            disabled={loading}
            className="w-full rounded-xl border border-white/20 py-3.5 font-medium hover:bg-white/10 transition disabled:opacity-50"
          >
            Continue with GitHub
          </button>

          <button
            onClick={handleApple}
            disabled={loading}
            className="w-full rounded-xl border border-white/20 py-3.5 font-medium hover:bg-white/10 transition disabled:opacity-50"
          >
            Continue with Apple
          </button>

        </div>

        <div className="flex items-center gap-4 my-7">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-xs text-white/30">OR</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <div className="space-y-3">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 outline-none focus:border-white/40"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 outline-none focus:border-white/40"
          />

          <button
            onClick={handleEmail}
            disabled={loading}
            className="w-full rounded-xl bg-white text-black py-3.5 font-medium hover:bg-white/90 transition disabled:opacity-50"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>

        </div>

        <button
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
          className="w-full mt-4 text-sm text-white/50 hover:text-white transition"
        >
          {mode === "login"
            ? "Don't have an account? Create one"
            : "Already have an account? Sign in"}
        </button>

        <div className="flex items-center gap-4 my-7">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-xs text-white/30">PHONE</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <div className="space-y-3">

          <input
            type="tel"
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 outline-none focus:border-white/40"
          />

          {!confirmationResult ? (
            <button
              onClick={sendPhoneCode}
              disabled={loading}
              className="w-full rounded-xl border border-white/20 py-3.5 font-medium hover:bg-white/10 transition disabled:opacity-50"
            >
              Send verification code
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Verification code"
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(e.target.value)
                }
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 outline-none focus:border-white/40"
              />

              <button
                onClick={verifyPhoneCode}
                disabled={loading}
                className="w-full rounded-xl bg-white text-black py-3.5 font-medium hover:bg-white/90 transition disabled:opacity-50"
              >
                Verify phone
              </button>
            </>
          )}

        </div>

        <div id="recaptcha-container" />

        {message && (
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            {message}
          </div>
        )}

      </div>
    </main>
  );
}
