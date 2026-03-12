import Link from "next/link";

export default function Sidebar({
    currentPage = "/dashboard",
}: {
    currentPage: string;
}) {
    const navigation = [
        {
            name: "Dashboard",
            href: "/dashboard",
        },
        {
            name: "Inventory",
            href: "/inventory",
        },
        {
            name: "Add Product",
            href: "/add-product",
        },
        {
            name: "Settings",
            href: "/settings",
        },
    ];

    return (
        <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                    <div className="">logo</div>
                    <span className="text-lg font-semibold">交易所後台</span>
                </div>
            </div>
            <nav className="space-y-1">
                <div className="text-sm font-semibold text-gray-400 uppercase">
                    Inventory
                </div>
                {navigation.map((item, key) => {
                    const isActive = item.href === currentPage;
                    return (
                        <Link
                            href={item.href}
                            key={key}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${isActive ? "bg-purple-100 text-gray-800" : "hover:bg-gray-800 text-gray-300"}`}
                        >
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
