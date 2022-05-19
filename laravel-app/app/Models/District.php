<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;

    protected $fillable = ["district","city_id"];

    public function getCity(){
        return $this->belongsTo(City::class, "id","id");
    }
}
