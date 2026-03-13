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
  const { data, isLoading, error } = useQuery({
  queryKey: ["todos", page, pageSize, q],
  queryFn: async () => {
    const response = await fetch(
      `http://localhost:3000/todos?page=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(10000),
      }
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
    if (error) return <div className="text-red-500">錯誤：{(error as Error).message}</div>;

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}