import React, { useRef } from 'react';
import { ImageUpload } from '@/assests/Icons';


interface ImageUploaderProps {
  onFileSelect: (file: File) => void; // Hàm callback trả file về cho cha
  className?: string; // Để custom thêm style nếu cần
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelect, className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Xử lý khi click vào dòng chữ "từ máy tính"
  const handleTriggerClick = () => {
    fileInputRef.current?.click();
  };

  // Xử lý khi người dùng chọn file qua dialog
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
    // Reset value để có thể chọn lại cùng 1 file nếu cần
    e.target.value = "";
  };

  // Xử lý sự kiện Kéo (Drag)
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Bắt buộc để cho phép drop
    e.stopPropagation();
  };

  // Xử lý sự kiện Thả (Drop)
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onFileSelect(file);
    }
  };

  return (
    <div 
      className={`bg-tgray05 flex flex-col h-118.75 shrink-0 self-stretch content-center items-center justify-center gap-x-2 gap-y-5 border-2 border-dashed border-transparent hover:border-gray-400 transition-colors ${className}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
        {/* Giả sử component ImageUpload của bạn ở đây */}
        <ImageUpload width={57.4} height={54.56} fill={"none"}/>
        
        <div className="text-xl font-normal text-picture">
            Kéo & thả hình ảnh muốn tải lên
        </div>
        
        <div 
            onClick={handleTriggerClick} 
            className="text-lg font-medium underline decoration-solid decoration-auto text-picture cursor-pointer hover:opacity-80"
        >
            hoặc từ máy tính của bạn
        </div>
        
        {/* Dòng này thường cho mobile, hành vi input file trên mobile tự mở gallery nên giữ nguyên logic click */}
        <div 
            onClick={handleTriggerClick}
            className="text-lg font-medium underline decoration-solid decoration-auto text-picture cursor-pointer md:cursor-default"
        >
            hoặc từ điện thoại của bạn
        </div>
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*" 
        />

    </div>
  );
};

export default ImageUploader;