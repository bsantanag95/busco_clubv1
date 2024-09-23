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
        Schema::table('players', function (Blueprint $table) {
            // Eliminar columnas last_club y last_club_flag
            $table->dropColumn(['last_club', 'last_club_flag']);
            // Agregar columna last_club_id como clave foránea
            $table->unsignedBigInteger('last_club_id')->nullable();

            // Establecer la clave foránea
            $table->foreign('last_club_id')->references('id')->on('clubs')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('players', function (Blueprint $table) {
            // Agregar las columnas eliminadas
            $table->string('last_club')->nullable();
            $table->string('last_club_flag')->nullable();
            // Eliminar la columna last_club_id y la clave foránea
            $table->dropForeign(['last_club_id']);
            $table->dropColumn('last_club_id');
        });
    }
};
