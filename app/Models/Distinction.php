<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distinction extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'year', 'player_id'];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }
}
