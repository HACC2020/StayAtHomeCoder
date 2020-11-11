import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={4} padding={0}>
            <Image size="large" src = "/images/occdesign.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Ku Ka &apos;awale</h1>
            <h2>The UHM Occupancy Visualization Application</h2>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
