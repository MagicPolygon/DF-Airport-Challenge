class Plane {

    id;

    constructor(id) {

        this.id = id

    }

    atAirport = (airport) => {

        if (airport.planes.indexOf(this) !== -1) {

            return true;

        }

        else {

            return false;

        }

    };

    land = (airport) => {

        if (!this.atAirport(airport) && !airport.isAirportFull()) {

            airport.planes.push(this);

        }
    };

    takeOff = (airport) => {

        if (this.atAirport(airport)) {

            airport.planes = airport.planes.filter((plane) => plane !== this);

        }
    };
}

export default Plane;