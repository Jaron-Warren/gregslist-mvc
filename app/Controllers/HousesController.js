import { ProxyState } from "../AppState.js";
import { houseService } from "../Services/HousesService.js";


export default class HousesController {
  async createHouse() {
    try {
      event.preventDefault()
      console.log('creating car step 1')
      let form = event.target
      let rawCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }
      await carsService.createHouse(rawCar)
      form.reset()
    } catch (error) {
      console.error(error)
      window.alert(error.message)
    }
  }

  deleteHouse(houseId) {
    console.log('you are trying to delete a house by the id of', houseId)
    carsService.deleteCar(houseId)
  }

  bidHouse(houseId) {
    console.log('your are bidding on the house with the id of', houseId)
    carsService.bidCar(houseId)
  }

}