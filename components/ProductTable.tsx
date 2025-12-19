

const ProductTable = () => {
  // Dữ liệu mô phỏng theo hình ảnh
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
          {products.map((product, index) => (
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