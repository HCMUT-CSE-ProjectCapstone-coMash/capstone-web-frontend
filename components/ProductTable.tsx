
interface ProductTableProps {
    data?: any[]; // Nhận mảng dữ liệu từ ImportPage
}

const ProductTable = ({ data = [] }: ProductTableProps) => {
  // Dữ liệu mô phỏng theo hình ảnh

  return (
    <div className="w-full bg-white">
      <table className="w-full min-w-200 text-center border-collapse">
        <thead>
          <tr className="border-b border-black">
            <th className="py-4 text-sm font-semibold text-black tracking-wide">Mã sản phẩm</th>
            <th className="py-4 text-sm font-semibold text-black tracking-wide">Tên sản phẩm</th>
            <th className="py-4 text-sm font-semibold text-black tracking-wide">Phân loại</th>
            <th className="py-4 text-sm font-semibold text-black tracking-wide">Màu sắc</th>
            <th className="py-4 text-sm font-semibold text-black tracking-wide">Hoạ tiết</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index} className="border-b border-tgray5">
              <td className="py-4 text-black">{product.id}</td>
              <td className="py-4 text-black">{product.name}</td>
              <td className="py-4 text-black">{product.category}</td>
              <td className="py-4 text-black">{product.color}</td>
              <td className="py-4 text-black">{product.pattern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;