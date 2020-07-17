const Pet = require('../model/pet');
const { request, response } = require('express');

class PetController {

    constructor(app) {
        this.app = app;
        this.pet = new Pet();
    }


    async addPetToWishlist(request, response) {
        let petName = request.body.petName;
        let note = request.body.note;
        let photoUrl=request.body.photoUrl;
        let profileUrl=request.body.profileUrl
        let petId = request.body.petId;
        let userId = request.body.userid;
        try {
            await this.pet.addWishList(petName, note,photoUrl,profileUrl,petId, userId);
            response.status(200).json({ success: 'wishlist added sucessfully' });
        }
        catch (error) {
            response.status(500).json({ error: 'unable to add pet to wishlist' });
        }
    }

    async getWishList(request, response) {
        let userId = request.params.userid;
        try {
            let userWishList = await this.pet.getWishList(userId);
            response.json(userWishList);
        }
        catch (error) {
            response.status(500).json({ error: 'unable to get user wishlist' });
        }
    }

    async updateWishlistNote(request, response) {
        let note = request.body.note;
        let wishlistId = request.body.wishlistId;

        try {
            await this.pet.update(wishlistId, note);
            response.json({ success: 'update' });
        }
        catch (error) {
            response.status(500).json({ error: 'unable to update wishlist note' });
        }
    }

    async deletewishlist(request, response) {
        let id = request.body.wishlistId;
        try {
            await this.pet.deletewishlistItem(id);
            response.json({ success: 'wishlist deleted' });
        }
        catch (error) {
            response.status(500).json({ error: 'unable to delete wishlist' });

        }
    }

    createRoutes() {
        this.app.post('/animals/add', (request, response) => this.addPetToWishlist(request, response));
        this.app.get('/animals/wishlist/:userid', (request, response) => this.getWishList(request, response));
        this.app.patch('/animals/wishlist/note', (request, response) => this.updateWishlistNote(request, response));
        this.app.delete('/animals/wishlist/delete', (request, response) => this.deletewishlist(request, response));
    }
}


module.exports = PetController;