import Sidebar from "../components/sidebar";

export default function UsersPage() {
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
        </main>
    </div>;
}