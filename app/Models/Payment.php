<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'amount',
    'status',
    'payment_type',
    'payment_gateway',
    'external_id',
    'metadata',
  ];

  protected function casts(): array
  {
    return [
      'metadata' => 'array',
    ];
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
