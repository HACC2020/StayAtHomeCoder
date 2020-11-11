import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid centered stackable={true} textAlign='center'>
            <Grid.Column textAlign='center' width={8}>
                <Image size='huge' circular src='/images/occdesign.png'/>
                <div>
                    <Header as='h1' inverted>Ku Ka'awale</Header>
                </div>
                <div>
                    <Header as='h2' inverted>The UHM Occupancy Visualization Application.</Header>
                </div>
            </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
