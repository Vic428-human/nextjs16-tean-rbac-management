import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams: Record<string, string>;
}

export default function Pagination({
    currentPage,
    totalPages,
    baseUrl,
    searchParams,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        const delta = 2; // 目前頁數左右各顯示 2 頁。
        const range = [];
        const rangeWithDots = [];

        for (
            // 中間頁碼只負責產生「第 2 頁到倒數第 2 頁」之間的動態範圍。
            // 第 1 頁與最後 1 頁會固定顯示，因此這裡從 2 開始，不讓迴圈碰到首尾頁。
            //
            // 例：currentPage = 5、delta = 2 時，
            // 理想範圍會是 3 ~ 7，也就是 [3, 4, 5, 6, 7]
            //
            // Math.max(2, currentPage - delta) 的目的：
            // 避免 currentPage 靠近左側時，起始頁碼小於 2。
            // 例如 currentPage = 1 時，1 - 2 = -1，但實際上中間頁碼最小只能從 2 開始。
            let i = Math.max(2, currentPage - delta);

            // 只產生中間區段，不包含最後一頁。
            // 最後一頁會固定顯示，所以這裡最多只能跑到 totalPages - 1。
            //
            // Math.min(totalPages - 1, currentPage + delta) 的目的：
            // 避免 currentPage 靠近右側時，結束頁碼超出中間區段上限。
            // 例如 totalPages = 10、currentPage = 9、delta = 2 時，
            // 9 + 2 = 11，但中間頁碼最多只能到 9（也就是 totalPages - 1）。
            i <= Math.min(totalPages - 1, currentPage + delta);

            // 逐頁加入可見頁碼，組出連續的中間分頁範圍。
            i++
        ) {
            range.push(i);
        }

        // 一個是判斷中間頁碼的前半段
        if (currentPage - delta > 2) {
            // 中間動態頁碼的起點已經大於 2，
            // 代表第 1 頁和中間區段之間有斷層，所以需要補上省略號。
            // 例如：currentPage = 6、delta = 2 時，中間頁碼會是 [4, 5, 6, 7, 8]，
            // 左側顯示應為：1 ... 4 5 6 7 8
            rangeWithDots.push(1, "...");
        } else {
            // 中間動態頁碼從第 2 頁開始，代表第 1 頁和中間區段是連續的，
            // 不需要省略號。
            // 例如：1 2 3 4 5 6
            rangeWithDots.push(1);
        }

        // 把中間動態頁碼接到結果後面 => [1, "...", 4, 5, 6, 7, 8]，假設當前頁是第6頁
        rangeWithDots.push(...range);

        // 一個是判斷中間頁碼的前半段
        if (currentPage + delta < totalPages - 1) {
            // 中間動態頁碼的起點已經小於 totalPages - 1,
            // 代表最後一頁和中間區段之間有斷層，所以需要補上省略號。
            // 例如：currentPage = 6、delta = 2 時，中間頁碼會是 [4, 5, 6, 7, 8]，
            // 右側顯示應為：4 5 6 7 8 ...
            rangeWithDots.push("...", totalPages);
        } else {
            // 中間動態頁碼從最後一頁開始，代表最後一頁和中間區段是連續的,
            // 不需要省略號。
            // 例如：4 5 6 7 8 9
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    const visiblePages = getVisiblePages()

    return (
        <nav className="flex items-center justify-center gap-1">
            <Link
                href=""
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage <= 1 ? "text-gray-400 cursor-not-allowed bg-gray-100" : ""}`}
            >
                <SquareChevronLeft /> 上一頁
            </Link>
            {visiblePages.map((page, key) => {
                const pageNumber = page as number;
                const isCurrentPage = page === currentPage;

                return (
                    <Link
                        href={`?page=${page}`}
                        key={key}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isCurrentPage ? "bg-gray-100" : ""}`}
                    >
                        {page}
                    </Link>
                );
            })}
            <Link
                href=""
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage >= totalPages ? "text-gray-400 cursor-not-allowed bg-gray-100" : ""}`}
            >
                下一頁 <SquareChevronRight />
            </Link>
        </nav>
    );
}
