import type { Product } from "@/store/productSlice";

interface ProductTableProps {
  data?: Product[];
}

const ProductTable = ({ data = [] }: ProductTableProps) => {
    const headers = ["Mã sản phẩm", "Tên sản phẩm", "Phân loại", "Màu sắc", "Hoạ tiết", "Giá nhập", "Giá bán"];

	const cellClass = "py-4 text-black text-sm";

	const sortedData = [...data].sort((a, b) => {
		const numA = Number(a.id.replace(/\D/g, ""));
		const numB = Number(b.id.replace(/\D/g, ""));
		return numA - numB;
	});

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
						sortedData.map((product) => (
							<tr key={product.id} className="border-b border-tgray5 hover:bg-gray-50 transition-colors">
								<td className={cellClass}>{product.id}</td>
								<td className={cellClass}>{product.name}</td>
								<td className={cellClass}>{product.clothType}</td>
								<td className={cellClass}>{product.color}</td>
								<td className={cellClass}>{""}</td>
								<td className={cellClass}>{product.importPrice}</td>
								<td className={cellClass}>{product.salePrice}</td>
							</tr>
						))
					) : (
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