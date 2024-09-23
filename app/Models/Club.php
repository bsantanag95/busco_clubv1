<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    //Relación uno a muchos
    public function statistics()
    {
        return $this->hasMany(Statistic::class);
    }

    public function players()
    {
        return $this->belongsToMany(Player::class, 'statistics')
            ->withPivot('goals', 'assists', 'yellow_cards', 'red_cards', 'starting', 'substitute', 'goals_conceded', 'season_id')
            ->withTimestamps();
    }

    public function lastClubPlayers()
    {
        return $this->hasMany(Player::class, 'last_club_id');
    }

    //Relación uno a muchos inversa
    public function nationality()
    {
        return $this->belongsTo(Nationality::class);
    }
    public function transfers()
    {
        return $this->hasMany(Transfer::class);
    }
}
