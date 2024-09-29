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
        Schema::table('nationals', function (Blueprint $table) {
            $table->integer('first_year')->nullable();
            $table->integer('last_year')->nullable();
            $table->dropColumn('year');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nationals', function (Blueprint $table) {
            $table->string('year')->nullable();

            $table->dropColumn(['first_year', 'last_year']);
        });
    }
};
