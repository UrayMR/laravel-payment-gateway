interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onPageChange }: PaginationProps) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <nav className="flex items-center gap-1">
      <button
        className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 0}
      >
        Previous
      </button>
      {pages.map(p => (
        <button
          key={p}
          className={`px-2 py-1 rounded ${p === page ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
          onClick={() => onPageChange(p)}
          disabled={p === page}
        >
          {p + 1}
        </button>
      ))}
      <button
        className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= pageCount - 1}
      >
        Next
      </button>
    </nav>
  );
}
