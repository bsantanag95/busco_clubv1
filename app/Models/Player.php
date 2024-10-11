<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Str;

class Player extends Model
{
    const RETIRADO = 1;
    const BUSCANDO = 2;
    const CONTRATADO = 3;

    use HasFactory;

    protected $guarded = ['id', 'status'];
    protected $withCount = ['trophies'];
    protected $appends = ["age"];

    //Relación uno a muchos
    public function distinctions()
    {
        return $this->hasMany(Distinction::class);
    }
    public function nationals()
    {
        return $this->hasMany(National::class);
    }
    public function trophies()
    {
        return $this->hasMany(Trophy::class);
    }
    public function statistics()
    {
        return $this->hasMany(Statistic::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public function report()
    {
        return $this->hasOne(Report::class);
    }
    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function lastClub()
    {
        return $this->belongsTo(Club::class, 'last_club_id');
    }
    //Relación muchos a muchos
    public function clubs()
    {
        return $this->belongsToMany(Club::class, 'statistics')
            ->withPivot('goals', 'assists', 'yellow_cards', 'red_cards', 'starting', 'substitute', 'goals_conceded', 'season_id')
            ->withTimestamps();
    }

    public function nationalities()
    {
        return $this->belongsToMany(Nationality::class);
    }

    public function positions()
    {
        return $this->belongsToMany(Position::class);
    }

    public function transfers()
    {
        return $this->hasMany(Transfer::class);
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this->attributes['date_of_birth'])->age;
    }

    public function generateSlug()
    {
        return $this->slug = Str::slug($this->surname . ' ' . $this->forename);
    }

    public function generateName()
    {
        return $this->name = $this->surname . ' ' . $this->forename;
    }
}
