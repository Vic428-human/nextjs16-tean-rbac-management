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
            <div className="space-y-6">
                {/* search */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <form className="flex gap-2" action="/users" method="GET">
                        <input name="q" placeholder="請輸入" type="text" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                        <button type="button" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">搜尋</button>
                    </form>
                </div>
                {/* product table */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    {/* 把 server 取得的 params 傳給 Client Component */}
                    <UsersClient q={q} page={page} pageSize={pageSize} />

                   
                </div>

            </div>

        </main>
    </div>;
}