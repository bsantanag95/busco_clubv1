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
        Schema::table('statistics', function (Blueprint $table) {
            $table->dropColumn(['starting', 'substitute']);
            $table->integer('games_played')->nullable();
            $table->integer('games_started')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('statistics', function (Blueprint $table) {
            $table->integer('starting')->nullable(); // Reversa agregando los campos originales
            $table->integer('substitute')->nullable();
            $table->dropColumn(['games_played', 'games_started']);
        });
    }
};
