import { ProxyState } from "../AppState.js";
import { houseService } from "../Services/HousesService.js";

function _draw() {
  //   let template = ''
  //   ProxyState.cars.forEach(car => {
  //     template += car.Template
  //   })
  //   document.getElementById('cars').innerHTML = template
}
export default class HousesController {

  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })

  }

}