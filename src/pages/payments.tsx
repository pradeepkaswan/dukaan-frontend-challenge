import { ArrowDownUp, ChevronDown, Download } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { DataTable } from '@/components/sections/payments/data-table';
import { columns } from '@/components/sections/payments/columns';
import paymentsData from '@/common/data/payments.json';
import { SearchIcon } from '@/common/media/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

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
                <img src={SearchIcon} alt="search" />
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
          <DataTable columns={columns} data={paymentsData} />
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
  );
};

export default Payments;
