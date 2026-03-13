"use client";

import { useQuery } from "@tanstack/react-query";

export default function UsersClient({
  q,
  page,
  pageSize,
}: {
  q: string;
  page: number;
  pageSize: number;
}) {
  const {
    data: getUserData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", page, pageSize, q],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8080/todos?page=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
          signal: AbortSignal.timeout(10000),
        },
      );

      if (!response.ok) {
        throw new Error(`API 錯誤：${response.status} ${response.statusText}`);
      }

      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
  if (isLoading) return <div>載入中...</div>;
  if (error)
    return <div className="text-red-500">錯誤：{(error as Error).message}</div>;

  const totalPages = Math.max(1, Math.ceil(getUserData.totalCount / pageSize));


  return (
    <>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {getUserData?.items?.map((todo, key) => (
            <tr key={key} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-500">{todo.title}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <button
                  type="button"
                  className="text-red-600 hover:text-red-900"
                >
                  編輯
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">pagination</div>
      )}
    </>
  );
}
