"use client";

import { useCallback, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Modal({ children }) {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();
  const pathname = usePathname();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      key={pathname}
      ref={overlay}
      onClick={onClick}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgba(255, 255, 255,0.7)",
      }}
    >
      <div
        ref={wrapper}
        style={{
          background: "white",
          padding: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
