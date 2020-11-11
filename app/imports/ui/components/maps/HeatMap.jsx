import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';

import LoadBuildingsTask from "./tasks/LoadBuildingsTask";
import CampusMap from './CampusMap';

const Heatmap = () => {
  const [buildings, setBuildings] = useState([""]);

  const load = () => {
    const loadBuildingTask = new LoadBuildingsTask();
    loadBuildingTask.load(setBuildings);
  }

  useEffect(load, []);

  return <div>
    { buildings.length === 0 ? (
        <div>Loading..</div> )
        :
        (<div><CampusMap buildings={buildings} /></div>)
    }
    </div>;
};

export default Heatmap;
