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
            $table->unsignedBigInteger('club_id')->nullable();
            $table->unsignedBigInteger('national_team_id')->nullable();
            $table->foreign('club_id')->references('id')->on('clubs')->onDelete('set null');
            $table->foreign('national_team_id')->references('id')->on('nationalities')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trophies', function (Blueprint $table) {
            $table->dropForeign(['club_id']);
            $table->dropColumn('club_id');
            $table->dropForeign(['national_team_id']);
            $table->dropColumn('national_team_id');
        });
    }
};
