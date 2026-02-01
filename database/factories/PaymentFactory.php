<?php

namespace Database\Factories;

use App\Models\Payment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Payment>
 */
class PaymentFactory extends Factory
{
    protected $model = Payment::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'amount' => $this->faker->numberBetween(10000, 1000000),
            'status' => $this->faker->randomElement(['pending', 'paid', 'failed', 'expired']),
            'payment_type' => $this->faker->randomElement(['bank_transfer', 'ewallet', 'credit_card']),
            'payment_gateway' => $this->faker->randomElement(['midtrans', 'xendit']),
            'external_id' => $this->faker->uuid(),
            'metadata' => [
                'note' => $this->faker->sentence(),
            ],
        ];
    }
}
