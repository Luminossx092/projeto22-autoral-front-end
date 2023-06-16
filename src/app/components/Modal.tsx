/* import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="w-2/3 h-1/2">
            <div className="modal-wrapper">
                <div className="bg-slate-100 h-full w-full rounded-2xl p-4">
                    <div className="modal-header">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal */
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
        padding: 40,
        backgroundColor: "rgb(0 0 0 / 50%)",
      }}
    >
      <div
        ref={wrapper}
        style={{
          background: "white",
          padding: 20,
        }}
      >
        {children}
      </div>
    </div>
  );
}
