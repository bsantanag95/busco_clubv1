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
            $table->dropColumn('is_international');
            $table->integer('year')->nullable();
            $table->string('organizer')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trophies', function (Blueprint $table) {
            $table->boolean('is_international')->default(false);
            $table->dropColumn(['year', 'organizer']);
        });
    }
};
