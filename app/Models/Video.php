<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    //Relación uno a muchos inversa
    public function player()
    {
        return $this->belongsTo('App\Models\Player');
    }
}
