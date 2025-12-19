import { FaExclamation } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

export const PopupIcons = {
  error: (
    <div className="w-21 h-21 rounded-full bg-pink-200 flex items-center justify-center">
      <FaExclamation className="text-pink-600 text-2xl" />
    </div>
  ),
  loading: (
    <div className="w-21 h-21 rounded-full bg-light-pink flex items-center justify-center animate-spin">
      <HiOutlineRefresh className="text-4xl" />
    </div>
  ),
};
