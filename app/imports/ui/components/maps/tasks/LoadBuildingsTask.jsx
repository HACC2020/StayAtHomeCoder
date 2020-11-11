import { features } from "../../../../api/data/UHgjson_FINAL.json";
import papa from "papaparse";

class LoadBuildingsTask {
  load = (setState) => {
    papa.parse("app/imports/api/data/2020-0824_300am-559am_devices_1598287869.csv",{
      head: "true",
      complete: () => {
      }
    });
    setState(features);
  }
}

export default LoadBuildingsTask;
