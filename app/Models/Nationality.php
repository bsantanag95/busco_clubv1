<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nationality extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    //Relación uno a muchos
    public function clubs()
    {
        return $this->hasMany(Club::class);
    }
    public function nationals()
    {
        return $this->hasMany(National::class);
    }
    //Relación muchos a muchos
    public function players()
    {
        return $this->belongsToMany(Player::class);
    }
}
