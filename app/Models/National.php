<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class National extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    //Relación uno a muchos inversa
    public function nationality()
    {
        return $this->belongsTo(Nationality::class);
    }
    public function player()
    {
        return $this->belongsTo(Player::class);
    }
}
