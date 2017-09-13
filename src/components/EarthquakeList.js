import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes';

class Earthquakelist extends Component  {
constructor(props){
    super(props)
    this.state = {
        earthquakes: earthquakes.features
    }
}
render() {
    console.log(earthquakes)
    const quakes = this.state.earthquakes.map(eq => {
return(
<div className="col-sm-6" key={eq.id}>
    <div className="card" >
        <div className="card-block">
            <h4 className="card-title">{eq.properties.place}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {eq.mag}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(eq.time).format('llll')}</h6>
            <p className="card-text">Coordinates: {eq.geometry.coordinates}</p>

            <a href={eq.properties.url} className="card-link">USGS Event Link</a>

        </div>
    </div>
</div>
)
});
return (
<div className="quake-list">

    <div className="row">
        { quakes }
    </div>

</div>
    );
}
}


export default Earthquakelist;
