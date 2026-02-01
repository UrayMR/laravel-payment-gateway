export type Payment = {
    id: number;
    user: { id: number; name: string; email: string } | null;
    amount: number;
    status: string;
    payment_type: string;
    payment_gateway: string;
    external_id: string;
    metadata: Record<string, unknown>;
    created_at: string;
};
