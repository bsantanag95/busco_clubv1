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
            $table->dropColumn('country');
            $table->unsignedBigInteger('nationality_id')->nullable();
            $table->foreign('nationality_id')->references('id')->on('nationalities')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trophies', function (Blueprint $table) {
            $table->string('country')->nullable();
            $table->dropForeign(['nationality_id']);
            $table->dropColumn('nationality_id');
        });
    }
};
