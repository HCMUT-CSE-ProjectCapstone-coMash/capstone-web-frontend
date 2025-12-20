"use client";
import { ImageUpload } from "@/assests/Icons"
import { Button } from "@/components/ButtonComponent";
import { SimpleInput } from "@/components/FormInput";
import { CustomSelect } from "@/components/FormInput";
import { SizeInput } from "@/components/FormInput";
import { useState, useMemo, useRef } from 'react';
import ProductTable from "@/components/ProductTable";

export default function ImportPage () {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleUpload = () => {
        fileInputRef.current?.click();
    };
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Tạo URL xem trước ảnh
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            setImageFile(file);
            
            // Log để kiểm tra
            console.log("File đã chọn:", file); 
        }
    };

    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [isNumberMode, setIsNumberMode] = useState(true);

    const [selectedCategories, setSelectedCategories] = useState<string | number | undefined>(undefined);
    const [selectedColors, setSelectedColors] = useState<string | number | undefined>(undefined);
    const [selectedPattern, setSelectedPattern] = useState<string | number | undefined>(undefined);
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    
    const handleQuantityChange = (size: string, value: string) => {
        const numValue = parseInt(value) || 0;
        setQuantities(prev => ({
            ...prev,
            [size]: numValue
        }));
    };

    const isFormValid = useMemo(() => {
        const hasAtLeastOneSize = Object.values(quantities).some(qty => qty > 0);
        return (
            productCode.trim() !== "" &&       // Mã không rỗng
            productName.trim() !== "" &&       // Tên không rỗng
            selectedCategories &&              // Đã chọn phân loại
            selectedColors &&                  // Đã chọn màu
            selectedPattern &&                 // Đã chọn hoạ tiết
            hasAtLeastOneSize                  
        );
    }, [productCode, productName, selectedCategories, selectedColors, selectedPattern, quantities]);

  // Chọn danh sách hiển thị dựa vào state
    const sizesNumber = ["Freesize", "30", "34", "38", "28", "32", "36", "40"];
    const sizesLetter = ["Freesize", "M", "XL", "3XL", "S", "L", "2XL", "4XL++"];
    const currentSizes = isNumberMode ? sizesNumber : sizesLetter;

    const categories = [
    { label: "Áo", value: "ao" },
    { label: "Quần", value: "quan" },
    { label: "Váy", value: "vay" },
  ];
  const colors = [
    { label: "Đỏ", value: "do" },
    { label: "Xanh", value: "xanh" },
    { label: "Vàng", value: "vang" },
  ];
  const patternOptions = [
    { label: "Trơn", value: "tron" },
    { label: "Kẻ sọc", value: "ke_soc" },
  ];
  const products = [
    {
      id: "DAM-1203",
      name: "Đầm đen dáng...",
      category: "Đầm",
      color: "Đen",
      pattern: "Hoa văn",
    },
    {
      id: "QUAN-0501",
      name: "Quần jean dài",
      category: "Quần",
      color: "Xanh",
      pattern: "Trơn",
    },
    {
      id: "AOTHUN-051",
      name: "Áo thun tay ngắn",
      category: "Áo",
      color: "Đỏ",
      pattern: "Sọc",
    },
  ];

    return (
        <div className="font-display">
            <div className="flex flex-col justify-center mt-5 mb-5 px-25 gap-y-12.5"> 
                {/* div 1 chữ Nhập hàng */}
                <div className="text-3xl font-semibold text-purple">Nhập hàng</div>
                {/* div 2 tải hình ảnh và các trường thông tin */}
                <div className="flex flex-row self-stretch gap-x-52.5">
                    {/* div 2.1 tải hình ảnh */}
                    <div className="flex flex-col h-auto items-start gap-y-2.5">
                        <div className="text-lg font-normal">Hình ảnh sản phẩm</div>
                        <div className="w-103.75 items-start gap-y-2.5">
                            <div className="bg-tgray05 flex flex-col h-118.75 shrink-0 self-stretch content-center items-center justify-center gap-x-2 gap-y-5">
                                <ImageUpload width={57.4} height={54.56} fill={"none"}/>
                                <div className="text-xl font-normal  text-picture">Kéo & thả hình ảnh muốn tải lên</div>
                                <div onClick={handleUpload} className="text-lg font-medium underline decoration-solid decoration-auto text-picture cursor-pointer">hoặc từ máy tính của bạn</div>
                                <div className="text-lg font-medium underline decoration-solid decoration-auto text-picture">hoặc từ điện thoại của bạn</div>
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    onChange={onFileChange} 
                                    className="hidden" // Class hidden của Tailwind để ẩn input
                                    accept="image/*"   // Chỉ cho phép chọn ảnh
                                />
                            </div>
                        </div>
                    </div>
                    {/* div 2.2 Nhập thông tin */}
                    <div className="flex flex-col flex-1 gap-y-2.5">
                        <div className="flex py-2.5 justify-between items-center self-stretch">
                            <div className="text-lg">Thông tin sản phẩm</div>
                            <div className="flex justify-center items-center gap-x-2.5">
                                <Button 
                                    onClick={handleUpload}
                                    className="bg-purple"
                                >
                                    <span>Thêm ảnh từ máy tính</span>
                                </Button>
                                <Button 
                                    // onClick={}
                                    className="bg-pink"
                                >
                                    <span>Thêm ảnh từ điện thoại</span>
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col py-2.5 items-start gap-5">
                            <SimpleInput 
                                label="Mã sản phẩm" 
                                value={productCode}
                                type="text"
                                onChange={(e) => setProductCode(e.target.value)}
                            />
                            <SimpleInput 
                                label="Tên sản phẩm" 
                                value={productName}
                                type="text"
                                onChange={(e) => setProductName(e.target.value)}
                            />

                            <div className="flex justify-between self-stretch gap-2.5">
                                <CustomSelect
                                    label="Phân loại"
                                    placeholder="Chọn phân loại"
                                    options={categories}
                                    value={selectedCategories}
                                    onChange={(val) => {
                                        console.log("Giá trị đã chọn:", val);
                                        setSelectedCategories(val)
                                    }}
                                />
                                <CustomSelect
                                    label="Màu sắc" 
                                    placeholder="Chọn màu sắc"
                                    options={colors}
                                    value={selectedColors}
                                    onChange={(val) => {
                                        console.log("Giá trị đã chọn:", val);
                                        setSelectedColors(val)
                                    }}
                                />
                                <CustomSelect
                                    label="Hoạ tiết" 
                                    placeholder="Chọn hoạ tiết"
                                    options={patternOptions}
                                    value={selectedPattern}
                                    onChange={(val) => {
                                        console.log("Giá trị đã chọn:", val);
                                        setSelectedPattern(val)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex flex-row justify-between text-sm text-tgray9">
                                <div>Kích cỡ - số lượng</div>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <div>Size số</div>
                                    <button
                                        onClick={() => setIsNumberMode(!isNumberMode)}
                                        className={`
                                        inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none
                                        ${isNumberMode ? "bg-[#6B21A8]" : "bg-gray-300"} 
                                        `}
                                    >
                                        <span
                                        className={`
                                            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm
                                            ${isNumberMode ? "translate-x-6" : "translate-x-1"}
                                        `}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-x-20 gap-y-6 w-full py-2.5">
                                {currentSizes.map((size, index) => (
                                <div key={index}>
                                    <SizeInput 
                                        label={size}
                                        value={(quantities[size] || 0)}
                                        type="number"
                                        onChange={(e: any) => handleQuantityChange(size, e.target.value)}
                                        isActive = {quantities[size] > 0}
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-2.5 flex justify-end">
                            <Button
                                // onClick={}
                                disabled={!isFormValid} // Vô hiệu hóa nút nếu form chưa điền đủ
                                className={`
                                    transition-colors duration-300
                                    ${isFormValid 
                                        ? "bg-pink hover:bg-pink/90 text-white" // Style khi đủ dữ liệu
                                        : "bg-light-pink  text-white cursor-not-allowed" // Style khi thiếu dữ liệu (màu xám)
                                    }
                                `}
                            >
                                <span>Thêm vào danh sách sản phẩm mới</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4.75 self-stretch">
                    <div className="text-purple text-lg font-semibold">Danh sách sản phẩm mới</div>
                    <ProductTable data={products}/>
                    <div className="flex justify-end">
                        <Button 
                            // onClick={}
                            disabled={products.length === 0}
                            className={`transition-colors duration-300
                            ${products.length > 0 
                            ? "bg-purple hover:bg-purple/90 text-white" // Có dữ liệu: Màu tím
                            : "bg-light-purple text-white cursor-not-allowed" // Rỗng: Màu xám (dùng tgray5 hoặc gray-400)
                                }
                            `}
                        >
                            <span>Thêm vào hệ thống</span>
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}