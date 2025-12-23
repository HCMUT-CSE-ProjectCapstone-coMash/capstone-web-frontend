import type { Product } from "@/store/productSlice";

const CATEGORY_PREFIX: Record<string, string> = {
    "Đầm": "DAM",
    "Áo": "AO",
    "Quần": "QUAN",
    "Váy": "VAY",
};


const getNextProductCode = (products: Product[], clothType: string): string => {
    const prefix = CATEGORY_PREFIX[clothType];
    if (!prefix) return "";

    const sameCategoryProducts = products.filter(p => p.id.startsWith(prefix));

    if (sameCategoryProducts.length === 0) {
        return `${prefix}000001`;
    }

    const maxNumber = Math.max(
        ...sameCategoryProducts.map(p =>
            parseInt(p.id.replace(prefix, ""), 10)
        )
    );
  
    const nextNumber = (maxNumber + 1).toString().padStart(6, "0");
  
    return `${prefix}${nextNumber}`;
};

export default getNextProductCode;
  