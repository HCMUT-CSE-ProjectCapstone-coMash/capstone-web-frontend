
import { BellIcon } from "@/assests/Icons"
import { ArrowDownIcon } from "@/assests/Icons"
import { UserProfileIcon } from "@/assests/Icons"
export function Header() {

    return (
        <div className="bg-gray-white flex-col justify-center items-center px-6.25 font-display">
            <div className="flex px-3.75 h-24 items-center justify-between">
                <div className="font-semibold text-4xl text-pink">co
                    <span className="text-purple">Mash</span>
                </div>
                <div className="flex font-medium text-lg text-tgray5 justify-between items-center">
                    <div className="px-3 py-2">Nhà chính</div>
                    <div className="px-3 py-2">Sản phẩm</div>
                    <div className="px-3 py-2">Nhân viên</div>
                    <div className="px-3 py-2">Nhập hàng</div>
                    <div className="px-3 py-2">Bán hàng</div>
                    <div className="px-3 py-2">Khuyến mãi</div>
                    <div className="px-3 py-2">Đổi trả hàng</div>
                    <div className="px-3 py-2">Khách hàng nợ</div>

                </div>
                <div className="flex justify-between items-center">
                    <div className="p-3"><BellIcon width={30} height={30}/></div>
                    <div className="bg-pink text-white flex justify-between items-center rounded-lg">
                        <div className="p-3"><UserProfileIcon width={30} height={30}/></div>
                        <div className="text-base font-semibold">Đoàn Lê Vy</div>
                        <div className="p-3"><ArrowDownIcon width={20} height={20}/></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}