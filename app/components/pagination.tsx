

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams: Record<string, string>;
}

export default function Pagination({ currentPage, totalPages, baseUrl, searchParams }: PaginationProps) {
    if(totalPages <= 1 ) return null; 
    

}