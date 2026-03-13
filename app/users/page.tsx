import Sidebar from "../components/sidebar";

export default async function UsersPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; page?: string }>;
}) {
    // /users?q=book&page=3
    const params = await searchParams;
    const q = (params.q ?? "").trim(); // 拿關鍵字
    const page = Math.max(1, Number(params.page ?? 1)); // 拿當前第幾頁
    const pageSize = 5; // 每頁幾筆
    console.log("params", params, q, page, pageSize);
    return <div className="min-h-screen bg-gray-50">
        <Sidebar currentPage="/users" />
        <main className="ml-64 p-8 ">
            {/* header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">users</h1>
                        <p className="text-sm text-gray-500">這邊預計查詢曾經註冊過交易所的用戶</p>
                    </div>

                </div>
            </div>
            {/* product table */}
            <div className="bg-white rounded-lg shadow">
                123
            </div>
        </main>
    </div>;
}