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
        Schema::create('nationals', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->text('description')->nullable();
            $table->integer('first_year')->nullable();
            $table->integer('last_year')->nullable();
            $table->unsignedBigInteger('nationality_id')->nullable();
            $table->unsignedBigInteger('player_id');

            $table->foreign('nationality_id')->references('id')->on('nationalities')->onDelete('set null');
            $table->foreign('player_id')->references('id')->on('players')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nationals');
    }
};
