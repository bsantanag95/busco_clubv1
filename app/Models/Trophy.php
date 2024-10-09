<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trophy extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }

    public function nationality()
    {
        return $this->belongsTo(Nationality::class);
    }
    public function season()
    {
        return $this->belongsTo(Season::class);
    }

    public function national_team()
    {
        return $this->belongsTo(Nationality::class);
    }
    public function club()
    {
        return $this->belongsTo(Club::class);
    }
}
