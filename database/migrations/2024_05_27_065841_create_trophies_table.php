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
        Schema::create('trophies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category')->nullable();
            $table->enum('level', ['Nacional', 'Internacional', 'Selección'])->nullable();
            $table->integer('year')->nullable();
            $table->string('organizer')->nullable();
            $table->unsignedBigInteger('season_id')->nullable();
            $table->unsignedBigInteger('player_id');
            $table->unsignedBigInteger('nationality_id')->nullable();
            $table->unsignedBigInteger('club_id')->nullable();
            $table->unsignedBigInteger('national_team_id')->nullable();

            $table->foreign('season_id')->references('id')->on('seasons')->onDelete('set null');
            $table->foreign('player_id')->references('id')->on('players')->onDelete('cascade');
            $table->foreign('nationality_id')->references('id')->on('nationalities')->onDelete('set null');
            $table->foreign('club_id')->references('id')->on('clubs')->onDelete('set null');
            $table->foreign('national_team_id')->references('id')->on('nationalities')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trophies');
    }
};
