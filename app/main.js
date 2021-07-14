import CarsController from "./Controllers/CarsController.js";
import GregsController from "./Controllers/GregsListController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()
  gregController = new GregsController()
  houseController = new HousesController()
  jobsController = new JobsController()
}

window["app"] = new App();
