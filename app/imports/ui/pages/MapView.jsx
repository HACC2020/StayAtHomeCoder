import React from 'react';
import { Grid, Button, Image, Form } from 'semantic-ui-react';

import HeatMap from '../components/maps/HeatMap';

class MapView extends React.Component {
    /** IMAGES AS TEMP PLACEHOLDERS FOR MAPS */
    render() {
        return (
            <Grid container width={16}>
                <Grid.Column width={8}>
                  <HeatMap/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid.Column>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/2/27/Wkipedia_blank_world_map.jpg"
                               floated='right' size='medium' alt="filler placement for eventual map"/>
                    </Grid.Column>
                    <Grid.Column stretched className='history'>
                        <h2>History</h2>
                        <Button size='large' color='green'>Day</Button>
                        <Button size='large' color='green'> Week </Button>
                        <Button size='large' color='green'>Month</Button>
                    </Grid.Column>
                </Grid.Column>
                <Grid container width={16}>
                    <Grid.Column floated='left' width={5}>
                        <div className='violations'>
                            <h2>Filters</h2>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Building Name' placeholder='Building' />
                                    <Form.Input fluid label='Date' placeholder='Enter Date' start='1' end='12'/>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Threshold' placeholder='Threshold' />
                                    <Form.Input fluid label='Time Period' placeholder='Enter Times' />
                                </Form.Group>
                            </Form>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div className='violations'>
                            <h2>Violations</h2>
                            <p>Top Three: </p>
                        </div>
                    </Grid.Column>
                    <Grid.Column right={"true"} width={6}>
                        <div className='map-view'>
                            <h2>Map View</h2>
                            <Button size='large' color='green'>Buildings</Button>
                            <Button size='large' color='green'>Floors</Button>
                            <Button size='large' color='green'>Dorms</Button>
                            <div className='map-stack'>
                                <Button size='large' color='green'>Libraries</Button>
                                <Button size='large' color='green'> Study </Button>
                                <Button size='large' color='green'>Eateries</Button>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </Grid>
        );
    }
}

export default MapView;
