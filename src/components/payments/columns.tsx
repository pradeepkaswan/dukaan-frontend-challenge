import { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: number
  date: string
  amount: number
  fees: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'Order ID',
  },
  {
    accessorKey: 'date',
    header: 'Order date',
  },
  {
    accessorKey: 'amount',
    header: 'Order amount',
  },
  {
    accessorKey: 'fees',
    header: 'Transaction fees',
  },
]
