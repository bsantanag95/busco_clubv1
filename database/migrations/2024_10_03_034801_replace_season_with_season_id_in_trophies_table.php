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
        Schema::table('trophies', function (Blueprint $table) {
            $table->dropColumn('season');
            $table->unsignedBigInteger('season_id')->nullable();
            $table->foreign('season_id')->references('id')->on('seasons')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trophies', function (Blueprint $table) {
            $table->string('season')->nullable();
            $table->dropForeign(['season_id']);
            $table->dropColumn('season_id');
        });
    }
};
