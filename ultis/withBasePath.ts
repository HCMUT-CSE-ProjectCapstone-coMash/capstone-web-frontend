
export const withBasePath = (
    basePath: "/chucuahang" | "/nhanvien",
    items: { label: string; href: string }[]
) => {
    return items.map((item) => ({
        ...item,
        href: `${basePath}${item.href}`,
    }));
};
