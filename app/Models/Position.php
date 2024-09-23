<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    //Relación muchos a muchos
    public function players()
    {
        return $this->belongsToMany(Player::class);
    }
}
