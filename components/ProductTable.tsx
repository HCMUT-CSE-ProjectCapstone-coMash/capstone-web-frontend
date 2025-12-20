

// 1. Định nghĩa kiểu dữ liệu cho MỘT sản phẩm (Product)
export interface Product {
  id: string | number; // Dùng làm key   // Mã sản phẩm
  name: string;
  category: string;
  color: string;
  pattern: string;
  prizeIn: string;
  prizeOut: string
}

// 2. Định nghĩa Props cho Component (nhận vào danh sách sản phẩm)
interface ProductTableProps {
  data?: Product[]; // Dấu ? để không lỗi nếu quên truyền data
}

const ProductTable = ({ data = [] }: ProductTableProps) => {
  // Config header để code gọn hơn, tránh lặp lại class
  const headers = [
    "Mã sản phẩm", 
    "Tên sản phẩm", 
    "Phân loại", 
    "Màu sắc", 
    "Hoạ tiết",
    "Giá nhập",
    "Giá bán"
  ];

  // Class chung cho các ô để dễ quản lý style
  const cellClass = "py-4 text-black text-sm";

  return (
    <div className="w-full bg-white">
      <table className="w-full min-w-50 text-center border-collapse">
        <thead>
          <tr className="border-b border-black">
            {headers.map((title, index) => (
              <th 
                key={index} 
                className="py-4 text-sm font-semibold text-black tracking-wide"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((product) => (
              <tr key={product.id} className="border-b border-tgray5 hover:bg-gray-50 transition-colors">
                <td className={cellClass}>{product.id}</td>
                <td className={cellClass}>{product.name}</td>
                <td className={cellClass}>{product.category}</td>
                <td className={cellClass}>{product.color}</td>
                <td className={cellClass}>{product.pattern}</td>
                <td className={cellClass}>{product.prizeIn}</td>
                <td className={cellClass}>{product.prizeOut}</td>
              </tr>
            ))
          ) : (
            // Hiển thị khi không có dữ liệu
            <tr>
              <td colSpan={headers.length} className="py-8 text-tgray5 italic">
                Không có dữ liệu hiển thị
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;