<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('statistics', function (Blueprint $table) {
            $table->id();
            $table->string('starting')->nullable();
            $table->string('substitute')->nullable();
            $table->integer('goals')->nullable();
            $table->integer('assists')->nullable();
            $table->integer('red_cards')->nullable();
            $table->integer('yellow_cards')->nullable();
            $table->integer('goals_conceded')->nullable();
            $table->string('season')->nullable();
            $table->integer('season_number')->nullable();
            $table->unsignedBigInteger('club_id')->nullable();
            $table->unsignedBigInteger('player_id')->nullable();

            $table->foreign('club_id')->references('id')->on('clubs')->onDelete('set null');
            $table->foreign('player_id')->references('id')->on('players')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistics');
    }
};
