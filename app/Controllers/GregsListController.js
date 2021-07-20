import { ProxyState } from "../AppState.js"
import { gregsListService } from "../Services/GregsListService.js"

const dropdown = document.getElementById("category")

dropdown.onchange = changeCategory

function changeCategory() {
  let selection = dropdown.value.toLowerCase()
  ProxyState.currentview = selection
  _draw(ProxyState.currentview)
  if (selection == 'cars') {
    document.getElementById('pageform').innerHTML = carsTemplate
    console.log('displaying cars')
  } else if (selection == 'houses') {
    document.getElementById('pageform').innerHTML = housesTemplate
    console.log('displaying houses')
  } else if (selection == 'jobs') {
    document.getElementById('pageform').innerHTML = jobsTemplate
    console.log('displaying jobs')
  }
}

function _draw(selection) {
  observersOff(selection)
  let itemTemplate = ''
  ProxyState[selection].forEach(selection => {
    itemTemplate += selection.Template
  })

  document.getElementById('items').innerHTML = itemTemplate
}

function observersOff(category) {
  ProxyState.off('cars', _draw)
  ProxyState.off('houses', _draw)
  ProxyState.off('jobs', _draw)
  ProxyState.on(category, _draw)
}

export default class GregsController {

}

const carsTemplate = `
  <form class="d-flex" onsubmit="app.carsController.createCar()">
                  <div class="form-group">
                      <label for="make">Make</label>
                      <input type="text" name="make" id="make" class="form-control" placeholder="Make..." required>
                  </div>
                  <div class="form-group">
                      <label for="model">Model</label>
                      <input type="text" name="model" id="model" class="form-control" placeholder="Model..." required>
                  </div>
                  <div class="form-group">
                      <label for="year">Year</label>
                      <input type="number" name="year" id="year" class="form-control" placeholder="Year..." required
                          min="1950" max="2021">
                  </div>
                  <div class="form-group">
                      <label for="price">Price</label>
                      <input type="number" name="price" id="price" class="form-control" placeholder="Price..."
                          required min="1">
                  </div>
                  <div class="form-group">
                      <label for="imgUrl">Image Url</label>
                      <input type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder="Url...">
                  </div>
                  <div class="form-group">
                      <label for="description">Description</label>
                      <input type="text" name="description" id="description" class="form-control"
                          placeholder="Description..." maxlength="240">
                  </div>
                  <div class="d-flex align-items-center">
                      <button type="submit" class="btn btn-outline-success">Add</button>
                  </div>
              </form>
  `
const housesTemplate = `
  <form class="d-flex" onsubmit="app.carsController.createCar()">
                  <div class="form-group">
                      <label for="make">Make</label>
                      <input type="text" name="make" id="make" class="form-control" placeholder="Make..." required>
                  </div>
                  <div class="form-group">
                      <label for="model">Model</label>
                      <input type="text" name="model" id="model" class="form-control" placeholder="Model..." required>
                  </div>
                  <div class="form-group">
                      <label for="year">Year</label>
                      <input type="number" name="year" id="year" class="form-control" placeholder="Year..." required
                          min="1950" max="2021">
                  </div>
                  <div class="form-group">
                      <label for="price">Price</label>
                      <input type="number" name="price" id="price" class="form-control" placeholder="Price..."
                          required min="1">
                  </div>
                  <div class="form-group">
                      <label for="imgUrl">Image Url</label>
                      <input type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder="Url...">
                  </div>
                  <div class="form-group">
                      <label for="description">Description</label>
                      <input type="text" name="description" id="description" class="form-control"
                          placeholder="Description..." maxlength="240">
                  </div>
                  <div class="d-flex align-items-center">
                      <button type="submit" class="btn btn-outline-success">Add</button>
                  </div>
              </form>
  `
const jobsTemplate = `
  <form class="d-flex" onsubmit="app.carsController.createCar()">
                  <div class="form-group">
                      <label for="make">Make</label>
                      <input type="text" name="make" id="make" class="form-control" placeholder="Make..." required>
                  </div>
                  <div class="form-group">
                      <label for="model">Model</label>
                      <input type="text" name="model" id="model" class="form-control" placeholder="Model..." required>
                  </div>
                  <div class="form-group">
                      <label for="year">Year</label>
                      <input type="number" name="year" id="year" class="form-control" placeholder="Year..." required
                          min="1950" max="2021">
                  </div>
                  <div class="form-group">
                      <label for="price">Price</label>
                      <input type="number" name="price" id="price" class="form-control" placeholder="Price..."
                          required min="1">
                  </div>
                  <div class="form-group">
                      <label for="imgUrl">Image Url</label>
                      <input type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder="Url...">
                  </div>
                  <div class="form-group">
                      <label for="description">Description</label>
                      <input type="text" name="description" id="description" class="form-control"
                          placeholder="Description..." maxlength="240">
                  </div>
                  <div class="d-flex align-items-center">
                      <button type="submit" class="btn btn-outline-success">Add</button>
                  </div>
              </form>
  `