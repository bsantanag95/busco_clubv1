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
            $table->renameColumn('name', 'category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nationals', function (Blueprint $table) {
            $table->renameColumn('category', 'name');
        });
    }
};
