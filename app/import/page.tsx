"use client";
import { ImageUpload } from "@/assests/Icons"
import { Button } from "@/components/button";
export default function ImportPage () {
    const handleUpload = () => {
    alert("Đang tải ảnh lên...");
  };
    return (
        <div className="font-display">
            <div className="flex flex-col justify-center mt-5 px-25 gap-y-12.5"> 
                {/* div 1 chữ Nhập hàng */}
                <div className="text-3xl font-semibold text-purple">Nhập hàng</div>
                {/* div 2 tải hình ảnh và các trường thông tin */}
                <div className="flex flex-row self-stretch gap-x-52.5">
                    {/* div 2.1 tải hình ảnh */}
                    <div className="flex flex-col h-171.75 items-start gap-y-2.5">
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
                        <div className="flex py-2.5 flex-column items-start gap-5">Ô thông tin</div>
                    </div>
                </div>
                <div>Danh sách</div>
            </div>
        </div>
    )
}