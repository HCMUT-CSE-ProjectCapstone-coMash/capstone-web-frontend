"use client";
import { Button } from "@/components/ButtonComponent";
import ImageUploader from "@/components/ImageUploader";
import { SimpleInput } from "@/components/FormInput";
import { CustomSelect } from "@/components/FormInput";
import { SizeInput } from "@/components/FormInput";
import { PrizeInput } from "@/components/FormInput";
import { useState, useMemo, useEffect, useRef } from 'react';
import ProductTable from "@/components/ProductTable";
import Image from "next/image";

export default function ImportPage () {
    const [images, setImages] = useState<File[]>([]);
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrizeIn, setPrizeIn] = useState("");
    const [productPrizeOut, setPrizeOut] = useState("");
    const [isNumberMode, setIsNumberMode] = useState(true);

    const [selectedCategories, setSelectedCategories] = useState<string | number | undefined>(undefined);
    const [selectedColors, setSelectedColors] = useState<string | number | undefined>(undefined);
    const [selectedPattern, setSelectedPattern] = useState<string | number | undefined>(undefined);
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const hasPredictedRef = useRef(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = (files: File[]) => {
        setImages(prev => [...prev, ...files]);
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []).filter(file =>
            file.type.startsWith("image/")
        );
    
        if (files.length > 0) {
            setImages(prev => [...prev, ...files]);
        }
    
        e.target.value = "";
    };

    const handleUpload = () => {
        fileInputRef.current?.click();
    };

    const handlePredict = async () => {

    }
    
    useEffect(() => {
        if (images.length === 0) return;
        if (hasPredictedRef.current) return;

        handlePredict();
        hasPredictedRef.current = true;
    }, [images]);
    
    const handleQuantityChange = (size: string, value: string) => {
        const numValue = parseInt(value) || 0;
        setQuantities(prev => ({
            ...prev,
            [size]: numValue
        }));
    };

    const formatCurrency = (value: string) => {
        if (!value) return "";
        const numberString = value.replace(/\D/g, ""); 
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const isFormValid = useMemo(() => {
        const hasAtLeastOneSize = Object.values(quantities).some(qty => qty > 0);
        return (
            productCode.trim() !== "" &&       // Mã không rỗng
            productName.trim() !== "" &&       // Tên không rỗng
            productPrizeIn.trim() !== "" && 
            productPrizeOut.trim() !== "" &&
            selectedCategories &&              // Đã chọn phân loại
            selectedColors &&                  // Đã chọn màu
            selectedPattern &&                 // Đã chọn hoạ tiết
            hasAtLeastOneSize                  
        );
    }, [productCode, productName, productPrizeIn, productPrizeOut, selectedCategories, selectedColors, selectedPattern, quantities]);

    // Chọn danh sách hiển thị dựa vào state
    const sizesNumber = ["Freesize", "30", "34", "38", "28", "32", "36", "40"];
    const sizesLetter = ["Freesize", "M", "XL", "3XL", "S", "L", "2XL", "4XL++"];
    const currentSizes = isNumberMode ? sizesNumber : sizesLetter;

    const categories = [
    { label: "Đầm", value: "dress" },
    { label: "Áo", value: "shirt" },
    { label: "Quần", value: "pants" },
    { label: "Váy", value: "skirt" },
  ];
  const colors = [
    { label: "Đen", value: "black" },
    { label: "Trắng", value: "white" },
    { label: "Đỏ", value: "red" },
    { label: "Cam", value: "orange" },
    { label: "Vàng", value: "yellow" },
    { label: "Xanh Lá", value: "green" },
    { label: "Xanh Dương", value: "blue" },
    { label: "Tím", value: "purple" },
    { label: "Hồng", value: "pink" },
  ];
  const patternOptions = [
    { label: "Trơn", value: "plain" },
    { label: "Sọc Dọc", value: "striped" },
    { label: "Sọc Ngang", value: "horizontal_striped" },
    { label: "Caro", value: "caro" },
    { label: "Hoa Văn", value: "flower" },
  ];
  const products = [
    {
      id: "DAM-1203",
      name: "Đầm đen dáng...",
      category: "Đầm",
      color: "Đen",
      pattern: "Hoa văn",
      prizeIn: "50.000 VND",
      prizeOut: "100.000 VND"
    },
    {
      id: "QUAN-0501",
      name: "Quần jean dài",
      category: "Quần",
      color: "Xanh",
      pattern: "Trơn",
      prizeIn: "50.000 VND",
      prizeOut: "100.000 VND"
    },
    {
      id: "AOTHUN-051",
      name: "Áo thun tay ngắn",
      category: "Áo",
      color: "Đỏ",
      pattern: "Sọc",
      prizeIn: "50.000 VND",
      prizeOut: "100.000 VND"
    },
  ];

    return (
        <div className="font-display">
            <div className="flex flex-col justify-center mt-5 mb-5 px-25 gap-y-5"> 
                {/* div 1 chữ Nhập hàng */}
                <div className="text-3xl font-semibold text-purple">Nhập hàng</div>
                {/* div 2 tải hình ảnh và các trường thông tin */}
                <div className="flex flex-row self-stretch gap-x-52.5">
                    {/* div 2.1 tải hình ảnh */}
                    <div className="flex flex-col h-auto items-start gap-y-2">
                        <div className="text-lg font-normal">Hình ảnh sản phẩm</div>
                        <div className="w-103.75 items-start">
                            {images.length === 0 ? (
                                <ImageUploader onFileSelect={handleImageSelect} />
                            ) : (
                                <>
                                    <div className="relative w-full aspect-square overflow-hidden rounded-lg border">
                                        <Image src={URL.createObjectURL(images[0])} alt="main-preview" fill className="object-cover" unoptimized/>
                                    </div>

                                    <div className="flex gap-2 mt-5">
                                    {images.slice(1, 4).map((file, index) => (
                                        <div
                                            key={index}
                                            className="relative w-30 h-30 rounded-md overflow-hidden border cursor-pointer"
                                        >
                                            <Image src={URL.createObjectURL(file)} alt={`thumb-${index}`} fill className="object-cover" unoptimized/>
                                        </div>
                                    ))}

                                    {images.length > 4 && (
                                        <div className="relative w-30 h-30 rounded-md overflow-hidden border bg-black/60 flex items-center justify-center text-white text-sm">
                                            + {images.length - 4}
                                        </div>
                                    )}
                                    </div>
                                </>
                            )}
                            <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" accept="image/*" multiple/>
                        </div>
                    </div>
                    {/* div 2.2 Nhập thông tin */}
                    <div className="flex flex-col flex-1 gap-y-2.5">
                        <div className="flex justify-between items-center self-stretch">
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
                                placeHolder=""
                                value={productCode}
                                type="text"
                                onChange={(e) => setProductCode(e.target.value)}
                            />
                            <SimpleInput 
                                label="Tên sản phẩm" 
                                placeHolder=""
                                value={productName}
                                type="text"
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <div className="flex flex-row justify-between w-full gap-x-5 items-center">
                                <PrizeInput 
                                    label="Giá nhập" 
                                    value={productPrizeIn} 
                                    type="text" 
                                    onChange={(e) => {
                                        const formattedValue = formatCurrency(e.target.value);
                                        setPrizeIn(formattedValue);
                                    }}
                                />
                                <PrizeInput 
                                    label="Giá bán" 
                                    value={productPrizeOut}
                                    type="text"
                                    onChange={(e) => {
                                        const formattedValue = formatCurrency(e.target.value);
                                        setPrizeOut(formattedValue);
                                    }}
                                />
                            </div>
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
                            <div className="grid grid-cols-4 gap-x-12 gap-y-6 w-full py-2.5">
                                {currentSizes.map((size, index) => (
                                <div key={index}>
                                    <SizeInput 
                                        label={size}
                                        value={String((quantities[size]) || 0)}
                                        type="number"
                                        onChange={(e) => {
                                            const cleanVal = e.target.value.replace(/[^0-9]/g, '');
                                            const numVal = cleanVal === '' ? 0 : Number(cleanVal);
                                           handleQuantityChange(size, String(numVal));
                                        }}
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