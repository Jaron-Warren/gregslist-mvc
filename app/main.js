import CarsController from "./Controllers/CarsController.js";
import GregsController from "./Controllers/GregsListController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()
  gregController = new GregsController()
}

window["app"] = new App();
