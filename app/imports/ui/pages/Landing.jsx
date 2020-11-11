import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column fluid>

          </Grid.Column>

          <Grid.Column width={8}>
            <h1>UH Occupancy application</h1>
            <p>Now you can view occupancy of the buildings on campus</p>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Landing;
