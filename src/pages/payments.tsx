import { ArrowDownUp, ChevronDown, Download } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { DataTable } from "@/components/payments/data-table"
import { columns } from "@/components/payments/columns"
import { payments } from "@/assets/data"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"

const Payments = () => {
  return (
    <main className="p-8 w-full gap-8 flex flex-col">
      <section className="flex flex-col gap-6">
        <div className="flex-between">
          <h5 className="font-normal text-xl tracking-wide">Overview</h5>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Last Month <ChevronDown className="ml-2 " />
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
        <div className="flex gap-6">
          <Card>
            <CardHeader>
              <CardDescription>Online orders</CardDescription>
            </CardHeader>
            <CardContent>
              <h1>231</h1>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Amount received</CardDescription>
            </CardHeader>
            <CardContent>
              <h1>$23,92,312.19</h1>
            </CardContent>
          </Card>
        </div>
      </section>
      <h5 className="font-normal text-xl tracking-wide">
        Transactions | This Month
      </h5>
      <div className="shadow p-2 pb-6 rounded-2xl bg-[#fff]">
        <div className="flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
              <div className="text-normal">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                    fill="#808080"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by order ID..."
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
                Sort
                <ArrowDownUp className="h-4 w-4" />
              </button>
              <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto py-2 border-b">
          <DataTable columns={columns} data={payments} />
        </div>
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">11</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">12</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">13</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">14</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">15</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">16</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">17</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">18</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  )
}

export default Payments
