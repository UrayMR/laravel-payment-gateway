import type { ColumnDef } from '@tanstack/react-table';
import type { Payment } from '@/types';

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'user.name',
        header: 'User',
        cell: ({ row }) => row.original.user?.name || '-',
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ getValue }) =>
            `Rp${getValue<number>().toLocaleString('id-ID')}`,
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'payment_type',
        header: 'Type',
    },
    {
        accessorKey: 'payment_gateway',
        header: 'Gateway',
    },
    {
        accessorKey: 'external_id',
        header: 'External ID',
    },
    {
        accessorKey: 'created_at',
        header: 'Created At',
        cell: ({ getValue }) =>
            new Date(getValue<string>()).toLocaleString('id-ID'),
    },
];
