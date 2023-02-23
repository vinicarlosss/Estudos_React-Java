import { useState } from "react"

export function usePagination() {
  const [page, setPage] = useState(1)

  function handlePreviousPage() {
    if (page > 1) {
      setPage((lastPage) => lastPage - 1)
    }
  }

  function handleNextPage() {
    setPage((lastPage) => lastPage + 1)
  }

  return { page, handlePreviousPage, handleNextPage }
}
