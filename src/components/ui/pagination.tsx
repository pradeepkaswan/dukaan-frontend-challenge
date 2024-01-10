import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <PaginationItem>
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  </PaginationItem>
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5 border rounded', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('gap-1 pr-2.5 border rounded', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1458 19.0795C9.90051 19.0795 9.69005 18.9917 9.51438 18.8161C9.33872 18.6404 9.25089 18.4299 9.25089 18.1847C9.25089 17.9394 9.33872 17.7289 9.51438 17.5533C9.69005 17.3776 9.90051 17.2898 10.1458 17.2898C10.391 17.2898 10.6015 17.3776 10.7772 17.5533C10.9528 17.7289 11.0407 17.9394 11.0407 18.1847C11.0407 18.3471 10.9992 18.4962 10.9164 18.6321C10.8368 18.768 10.7291 18.8774 10.5932 18.9602C10.4606 19.0398 10.3115 19.0795 10.1458 19.0795ZM14.0012 19.0795C13.756 19.0795 13.5455 18.9917 13.3699 18.8161C13.1942 18.6404 13.1064 18.4299 13.1064 18.1847C13.1064 17.9394 13.1942 17.7289 13.3699 17.5533C13.5455 17.3776 13.756 17.2898 14.0012 17.2898C14.2465 17.2898 14.457 17.3776 14.6326 17.5533C14.8083 17.7289 14.8961 17.9394 14.8961 18.1847C14.8961 18.3471 14.8547 18.4962 14.7718 18.6321C14.6923 18.768 14.5846 18.8774 14.4487 18.9602C14.3161 19.0398 14.167 19.0795 14.0012 19.0795ZM17.8567 19.0795C17.6114 19.0795 17.401 18.9917 17.2253 18.8161C17.0497 18.6404 16.9618 18.4299 16.9618 18.1847C16.9618 17.9394 17.0497 17.7289 17.2253 17.5533C17.401 17.3776 17.6114 17.2898 17.8567 17.2898C18.102 17.2898 18.3124 17.3776 18.4881 17.5533C18.6638 17.7289 18.7516 17.9394 18.7516 18.1847C18.7516 18.3471 18.7102 18.4962 18.6273 18.6321C18.5478 18.768 18.44 18.8774 18.3042 18.9602C18.1716 19.0398 18.0224 19.0795 17.8567 19.0795Z"
          fill="#4D4D4D"
        />
      </svg>
    </div>

    <span className="sr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
