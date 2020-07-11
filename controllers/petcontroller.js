const Pet = require('../model/pet');

class PetController {

    constructor(app) {
        this.app = app;
        this.pet = new Pet();
    }


    async addPetToWishlist(request, response) {
        let petId = request.body.petId;
        let userId = request.body.userId;
        try {
            await this.pet.addWishList(petId, userId);
            response.status(200).json({ success: 'wishlist added sucessfully' });
        }
        catch (error) {
            response.status(500).json({ error: 'unable to get add pet to wishlist' });
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

    createRoutes() {
        this.app.post('/animals/add', (request, response) => this.addPetToWishlist(request, response));
        this.app.get('/animals/wishlist/:userid', (request, response) => this.getWishList(request, response));
    }
}





module.exports = PetController;