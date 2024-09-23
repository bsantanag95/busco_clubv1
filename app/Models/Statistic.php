<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Statistic extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    //Relación uno a muchos inversa
    public function club()
    {
        return $this->belongsTo(Club::class);
    }
    public function player()
    {
        return $this->belongsTo(Player::class);
    }
    public function season()
    {
        return $this->belongsTo(Season::class);
    }
}
