<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Phone extends Model
{
    use HasFactory;
    protected $fillable = ["phone","address_id"];

    public function getAddress(){
        return $this -> hasMany(Address::class,'id','id');
        }

}
