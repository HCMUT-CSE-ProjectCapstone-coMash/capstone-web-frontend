"use client";
import { ImageUpload } from "@/assests/Icons"
import { Button } from "@/components/button";
import { SimpleInput } from "@/components/FormInput";
import { CustomSelect } from "@/components/FormInput";
import { useState } from 'react';
import ProductTable from "@/components/ProductTable";

export default function ImportPage () {
    const handleUpload = () => {
    alert("Đang tải ảnh lên...");
  };

    const [selectedCategories, setSelectedCategories] = useState<string | number>("");
    const [selectedColors, setSelectedColors] = useState<string | number>("");
    const [selectedPattern, setSelectedPattern] = useState<string | number>("");
      
    const [isNumberMode, setIsNumberMode] = useState(true);
    const sizesNumber = ["Freesize", "30", "34", "38", "28", "32", "36", "40"];
    const sizesLetter = ["Freesize", "M", "XL", "3XL", "S", "L", "2XL", "4XL++"];
  // Chọn danh sách hiển thị dựa vào state
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
                                <div className="text-lg font-medium underline decoration-solid decoration-auto text-picture">hoặc từ máy tính của bạn</div>
                                <div className="text-lg font-medium underline decoration-solid decoration-auto text-picture">hoặc từ điện thoại của bạn</div>
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
                                    onClick={handleUpload}
                                    className="bg-pink"
                                >
                                    <span>Thêm ảnh từ điện thoại</span>
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col py-2.5 items-start gap-5">
                            <SimpleInput label="Mã sản phẩm"/>
                            <SimpleInput label="Tên sản phẩm"/>
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
                            <div className="grid grid-cols-4 gap-x-8 gap-y-6 py-2.5">
                                {currentSizes.map((size, index) => (
                                <div key={index} className="flex flex-row items-center justify-between w-full font-display">
                                    {/* Label Size (28, 30... hoặc S, M...) */}
                                    <label className="text-sm font-normal text-tgray9">{size}</label>

                                    {/* Input Số lượng */}
                                    <input
                                    type="number"
                                    placeholder="0"
                                    defaultValue={0}
                                    className="w-17.5 h-7.5 px-2.5 text-center rounded-lg border-[0.5px] border-solid border-tgray5 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple focus:text-purple text-tgray5"
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-2.5 flex justify-end">
                            <Button 
                                onClick={handleUpload}
                                className="bg-pink"
                                >
                                <span>Cập nhật thông tin</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4.75 self-stretch">
                    <div className="text-purple text-lg font-semibold">Danh sách sản phẩm chưa duyệt</div>
                    <ProductTable/>
                    <div className="flex justify-end">
                        <Button 
                            onClick={handleUpload}
                            className="bg-purple"
                            >
                            <span>Thêm vào hệ thống</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}