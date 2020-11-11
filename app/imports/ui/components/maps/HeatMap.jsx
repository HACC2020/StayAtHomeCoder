import React from 'react';
import { Spinner } from 'semantic-ui-react';

const Heatmap = () => {
  const [buildings, setBuildings] = useState([]);

  return <div>{builings.length === 0 ? <Spinner/> : <div>has data<div/>}</div>
}
