<?php

use App\Models\Player;
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
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string('forename');
            $table->string('slug');
            $table->string('genre');
            $table->date('date_of_birth');
            $table->string('place_of_birth');
            $table->string('height');
            $table->string('foot');
            $table->text('attribute');
            $table->text('distinction');
            $table->text('description')->nullable();
            $table->string('profile_photo')->nullable();
            $table->string('instagram')->nullable();
            $table->string('x')->nullable();
            $table->string('twitter')->nullable();
            $table->enum('status', [Player::RETIRADO, Player::BUSCANDO, Player::CONTRATADO])->default(Player::BUSCANDO);
            $table->string('email');
            $table->integer('relevance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
