"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function FacebookLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    const login = async () => {
      try {
        const provider = new FacebookAuthProvider();

        await signInWithPopup(auth, provider);

        router.replace("/plans");
      } catch (err: any) {
        console.error("Facebook login error:", err);
        setError(err?.message || "Facebook login failed.");
      }
    };

    login();
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-sm tracking-[0.35em] text-white/40">
          AEVORA
        </div>

        <h1 className="text-xl font-light tracking-wide">
          CONNECTING WITH FACEBOOK
        </h1>

        <p className="mt-3 text-sm text-white/40">
          Authenticating your Aevora account...
        </p>

        {error && (
          <p className="mt-6 max-w-md text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}
