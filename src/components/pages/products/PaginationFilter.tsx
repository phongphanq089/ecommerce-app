'use client'
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../ui/pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const PaginationFilter = ({
  currentPage,
  hasPrev,
  hasNext,
  totalPages,
  totalCount,
  limit,
}: {
  currentPage: number
  hasPrev: boolean
  hasNext: boolean
  totalPages: number
  totalCount: number
  limit: number
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {!hasPrev ? (
            <PaginationPrevious href='#' />
          ) : (
            <PaginationPrevious
              href='#'
              onClick={() => createPageUrl(currentPage - 1)}
            />
          )}
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href='#'
              isActive={currentPage === index}
              onClick={(e) => {
                e.preventDefault()
                createPageUrl(index)
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          {!hasNext ? (
            <PaginationNext href='#' />
          ) : (
            <PaginationNext
              href='#'
              onClick={() => createPageUrl(currentPage + 1)}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationFilter
