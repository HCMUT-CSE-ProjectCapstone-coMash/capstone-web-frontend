import React, { useRef } from 'react';
import { ImageUpload } from '@/public/assests/Icons';

interface ImageUploaderProps {
  onFileSelect: (files: File[]) => void; // Hàm callback trả file về cho cha
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
		const files = Array.from(e.target.files ?? []).filter(file =>
			file.type.startsWith('image/')
		);
		
		if (files.length > 0) {
			onFileSelect(files);
		}
	
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
		
		const files = Array.from(e.dataTransfer.files).filter(file =>
			file.type.startsWith("image/")
		);
		
		if (files.length > 0) {
			onFileSelect(files);
		}
	};

  	return (
		<div 
			className={`bg-tgray05 flex flex-col h-118.75 shrink-0 self-stretch content-center items-center justify-center gap-x-2 gap-y-5 border-2 border-dashed border-transparent hover:border-gray-400 transition-colors ${className}`}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
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
				multiple
			/>
		</div>
	);
};

export default ImageUploader;