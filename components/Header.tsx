

export function Header() {

    return (
        <div className="bg-gray-white flex-col justify-content-center items-center px-6.25">
            <div className="flex px-3.75 h-24 items-center justify-between">
                <div className="font-display font-semibold text-4xl text-pink">co
                    <span className="text-purple">Mash</span>
                </div>
                <div className="flex font-display font-semibold  text-sm text-tgray5 justify-between items-center">
                    <div className="px-3 py-2">Nhà chính</div>
                    <div className="px-3 py-2">Sản phẩm</div>
                    <div className="px-3 py-2">Nhập hàng</div>
                    <div className="px-3 py-2">Bán hàng</div>
                    <div className="px-3 py-2">Khuyến mãi</div>
                    <div className="px-3 py-2">Đổi trả hàng</div>
                    <div className="px-3 py-2">Khách hàng nợ</div>

                </div>
                <div className="flex justify-between items-center">
                    <div className="bg-pink text-white flex justify-between items-center p-2.5 rounded-lg">Đoàn Lê Vy</div>
                </div>
            </div>
            
        </div>
    )
}