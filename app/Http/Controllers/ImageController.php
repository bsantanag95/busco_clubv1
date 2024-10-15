<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'player_id' => 'required|exists:players,id',
        ]);

        $playerId = $request->input('player_id');
        $player = Player::findOrFail($playerId);

        if ($request->hasFile('images')) {
            $uploadedImages = $request->file('images');

            foreach ($uploadedImages as $image) {
                $imageName = $player->slug . '-' . uniqid() . '.' . $image->getClientOriginalExtension();

                $path = $image->storeAs('images', $imageName, 'public');

                Image::create([
                    'player_id' => $playerId,
                    'url' => $path,
                ]);
            }

            return redirect()->back()->with('success', 'Imagenes subidas exitosamente');
        }

        return redirect()->back()->with('error', 'No se seleccionaron imágenes para subir.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $image)
    {
        if (Storage::disk('public')->exists($image->url)) {
            Storage::disk('public')->delete($image->url);
        }

        $image->delete();

        return redirect()->back()->with('success', 'Imagen eliminada exitosamente');
    }
}
