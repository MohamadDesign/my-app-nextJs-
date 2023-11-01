"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationComponent: FC<PaginationProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";
  return (
    <>
      <div className="join">
        <button
          className="mx-1 rounded-lg join-item btn"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(
              `/chart/?page=${Number(page) - 1}&per_page=${per_page}`
            );
          }}
        >
          last
        </button>
        <button
          className="mx-1 rounded-lg join-item btn"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(
              `/chart/?page=${Number(page) + 1}&per_page=${per_page}`
            );
          }}
        >
          next
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
