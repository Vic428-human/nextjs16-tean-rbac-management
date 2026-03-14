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

  return (
    <nav className="flex items-center justify-center gap-1">
      <Link
        href=""
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage <= 1 ? "text-gray-400 cursor-not-allowed bg-gray-100" : ""}`}
      >
        <SquareChevronLeft /> 上一頁
      </Link>
      <Link
        href=""
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage >= totalPages ? "text-gray-400 cursor-not-allowed bg-gray-100" : ""}`}
      >
        下一頁 <SquareChevronRight /> 
      </Link>
    </nav>
  );
}
