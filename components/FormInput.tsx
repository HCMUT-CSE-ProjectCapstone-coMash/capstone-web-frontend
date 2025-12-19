import React, { useState, useRef, useEffect } from "react";

// --- Interfaces (Giữ nguyên) ---
interface SimpleInputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
}

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  value?: string | number;
  placeholder?: string;
  onChange: (value: string | number) => void;
}

// --- SimpleInput (Giữ nguyên) ---
export function SimpleInput({ label, value, onChange, type = "text" }: SimpleInputProps) {
  return (
    <div className="flex flex-col gap-y-2.5 w-full font-display">
      <label className="text-sm font-normal text-tgray9">{label}</label>
      <input
        type={type}
        className="w-full h-12 px-2.5 rounded-lg border-[0.5px] border-solid border-tgray5 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// --- CustomSelect (Đã chỉnh sửa Header) ---
export function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-y-2.5 w-full font-display relative" ref={containerRef}>
        <label className="text-sm font-normal text-tgray9">{label}</label>
      {/* Trigger Box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full h-12 px-2.5 rounded-lg border-[0.5px] border-solid flex items-center justify-between
          bg-white cursor-pointer transition-all
          ${
            isOpen
              ? "border-purple ring-1 ring-purple"
              : "border-tgray5 hover:border-purple-400"
          }
        `}
      >
        <span
          className={`${
            selectedOption ? "text-black" : "text-gray-400"
          } font-normal font-display`}
        >
          {selectedOption ? selectedOption.label : placeholder || "Chọn..."}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 text-purple transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-2 w-full bg-white rounded-lg border-[0.5px] border-solid border-tgray5 overflow-hidden flex flex-col"> 
          <ul className="max-h-60 overflow-y-auto">
            {options.map((opt, index) => {
              const isSelected = value === opt.value;

              return (
                <li
                  key={index}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`
                    p-3 cursor-pointer transition-colors
                    ${
                      isSelected
                        ? "bg-purple text-white font-normal" // Selected: Tím
                        : "text-sm text-black font-normal hover:bg-purple-100 " // Normal: Trắng, Hover xám
                    }
                  `}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}