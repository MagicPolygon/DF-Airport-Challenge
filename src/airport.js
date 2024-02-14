class Airport {

    capacity;
    planes = [];

    constructor(capacity) {

        this.capacity = capacity;

    }

    isAirportFull = (airport) => {

        return this.capacity <= this.planes.length;

    };

}

export function changeAirportCapacity(airport, newCapacity) {

    airport.capacity = newCapacity;

}

export default Airport;