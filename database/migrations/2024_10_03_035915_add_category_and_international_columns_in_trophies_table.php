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
            $table->string('category')->nullable();
            $table->enum('level', ['Nacional', 'Internacional', 'Selección'])->nullable();
            $table->boolean('is_international')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trophies', function (Blueprint $table) {
            $table->dropColumn('category');
            $table->dropColumn('level');
            $table->dropColumn('is_international');
        });
    }
};
