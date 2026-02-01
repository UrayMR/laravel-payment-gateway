import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { Payment } from '@/types';
import { columns } from '@/components/payments/columns';
import { DataTable } from '@/components/ui/data-table';

export default function PaymentsIndex() {
    const { payments } = usePage<{ payments: Payment[] }>().props;

    return (
        <AppLayout>
            <Head title="Payments" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">Payments</h1>
                <DataTable columns={columns} data={payments} />
            </div>
        </AppLayout>
    );
}
