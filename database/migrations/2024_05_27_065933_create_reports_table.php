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
            $table->text('review')->nullable();
            $table->text('observation')->nullable();
            $table->text('improvement')->nullable();
            $table->text('strength')->nullable();
            $table->text('weakness')->nullable();
            $table->text('skill')->nullable();
            $table->text('comment')->nullable();
            $table->text('conclusion')->nullable();
            $table->string('author')->nullable();
            $table->string('x')->nullable();
            $table->string('instagram')->nullable();
            $table->double('stars', 2, 1)->default(1)->check('stars >= 1 and stars <= 5');
            $table->unsignedBigInteger('player_id');
            $table->timestamps();

            $table->foreign('player_id')->references('id')->on('players')->onDelete('cascade');
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
