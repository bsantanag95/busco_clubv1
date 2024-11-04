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
            $table->string('gender')->nullable();;
            $table->date('date_of_birth')->nullable();;
            $table->string('place_of_birth')->nullable();;
            $table->string('height')->nullable();;
            $table->string('foot')->nullable();;
            $table->text('attribute')->nullable();;
            $table->text('description')->nullable();
            $table->string('profile_photo')->nullable();
            $table->string('instagram')->nullable();
            $table->string('x')->nullable();
            $table->enum('status', [Player::RETIRADO, Player::BUSCANDO, Player::CONTRATADO])->default(Player::BUSCANDO);
            $table->string('email')->nullable();;
            $table->integer('relevance')->nullable();;
            $table->string('agent')->nullable();
            $table->date('inactive_date')->nullable();
            $table->unsignedBigInteger('last_club_id')->nullable();

            $table->foreign('last_club_id')->references('id')->on('clubs')->onDelete('set null');
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
