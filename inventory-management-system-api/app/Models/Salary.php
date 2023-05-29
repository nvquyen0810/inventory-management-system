<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;
    protected $fillable=[
        "employee_id",
        "salary_month",
        "salary_year",
        "paid_amount",
    ];
}
