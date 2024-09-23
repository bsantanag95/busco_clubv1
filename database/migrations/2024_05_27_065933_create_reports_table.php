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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('review')->nullable();
            $table->string('observation')->nullable();
            $table->string('improvement')->nullable();
            $table->string('strength')->nullable();
            $table->string('weakness')->nullable();
            $table->string('skill')->nullable();
            $table->string('comment')->nullable();
            $table->string('conclusion')->nullable();
            $table->string('author')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->unsignedBigInteger('player_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
