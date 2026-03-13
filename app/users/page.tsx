import Sidebar from "../components/sidebar";
import UsersClient from "./users-client";

// server區: http://localhost:3001/users?q=abc&page=3
// 點菜單的時候，UsersPage會重跑，所以畫面會re render，導致API會重新呼叫
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
                {/* 把 server 取得的 params 傳給 Client Component */}
                <UsersClient q={q} page={page} pageSize={pageSize} />
            </div>
        </main>
    </div>;
}