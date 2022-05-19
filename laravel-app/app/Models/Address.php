<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $fillable = ['city_id','district_id'];

    public function getCity(){
        return $this ->hasMany(City::class, 'id','id');
    }

    public function getDistrict(){
        return $this ->hasMany(District::class,'id','id');
    }


    public function getPhone(){
        return $this -> belongsTo(Phone::class,'address_id','id');
    }

    public function getPersonal(){
        return $this -> belongsTo(Personel::class,'address_id','id');
    }
}
