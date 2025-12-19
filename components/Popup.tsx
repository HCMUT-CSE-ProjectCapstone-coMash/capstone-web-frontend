"use client";

import { PopupIcons } from "@/public/assets/PopupIcons";

export type PopupType = "error" | "confirm" | "loading";

type PopupProps = {
  open: boolean;
  type: PopupType;
  message: string;
  onClose?: () => void;
  onConfirm?: () => void;
};


export default function Popup({
  open,
  type,
  message,
  onClose,
  onConfirm,
}: PopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-[640px] h-[400px] rounded-[16px] bg-white py-15 shadow-lg">

        <button onClick={onClose} className="absolute top-1 right-2  hover:text-tgray5">
            ✕
        </button>

        <div className="flex justify-center mb-5">
          {type !== "confirm"
            ? PopupIcons[type]
            : PopupIcons.error}
        </div>

        <p className="text-lg font--medium text-center mb-6 whitespace-pre-line leading-10">
          {message}
        </p>

        {type === "confirm" && (
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="bg-purple text-white px-4 py-2 rounded-lg"
            >
              Quay lại
            </button>
            <button
              onClick={onConfirm}
              className="bg-pink text-white px-4 py-2 rounded-lg"
            >
              Xác nhận
            </button>
          </div>
        )}

        {type === "error" && (
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="border px-6 py-2 rounded-lg"
            >
              Đóng
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
