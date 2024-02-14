import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

describe('Plane tests', () => {

    describe('User Story 2 - As an Air Traffic Controller, if instructing a plane to land, I want to know if the plane is already at an airport, so that I know which planes can land.', () => {

        // Test 2
        it("if a plane isn't at an airport, it should return false", () => {

            // Arrange
            let airport = new Airport(1);   // initial capacity = 1
            let plane = new Plane(1);   // id = 1
            let expectedValue = false;
            let actualValue;

            // Act
            actualValue = plane.atAirport(airport);

            // Assert
            expect(actualValue).toBe(expectedValue);

        });
    });

    describe('User Story 4 - As an Air Traffic Controller, if an airport is not full and if a plane is not already at the airport, I want to instruct the plane to land, so that I can safely instruct a landable plane to land.', () => {

        // Test 4
        it("should increase the amount of planes at the airport by 1", () => {

            // Arrange
            let airport = new Airport(1);   // initial capacity = 1, no planes at airport
            let plane = new Plane(1);   // id = 1
            let expectedValue = 1;
            let actualValue;

            // Act
            plane.land(airport);
            actualValue = airport.planes.length;

            // Assert
            expect(actualValue).toBe(expectedValue);

        });

        // Test 5
        it("should add the provided plane to the airport", () => {

            // Arrange
            let airport = new Airport(1);   // initial capacity = 1, no planes at airport
            let plane = new Plane(1);   // id = 1
            let plane2 = new Plane(2);  // id = 2
            let expectedValue = plane2;
            let actualValue;

            // Act
            plane2.land(airport);
            actualValue = airport.planes[0];

            // Assert
            expect(actualValue).toBe(expectedValue);

        });

        // Test 8
        it("should not land at airport if already at airport", () => {

            // Arrange
            let airport = new Airport(2);   // initial capacity = 1, no planes at airport
            let plane = new Plane(1);   // id = 1
            let expectedValue = 1;      // There should only be one plane at the airport
            let actualValue;

            // Act
            // Landing a plane, then landing that landed plane
            plane.land(airport);
            plane.land(airport);
            actualValue = airport.planes.length;

            // Assert
            expect(actualValue).toBe(expectedValue);

        });
    });

    describe('User Story 6 - As an Air Traffic Controller, if a plane is at an airport, I want to instruct the plane to take off, so that I can instruct a plane (that is able to take off) to take off.', () => {

        // Test 6
        it("should leave the airport if it is at the airport", () => {

            // Arrange
            let airport = new Airport(1);   // initial capacity = 1
            let plane = new Plane(1);   // id = 1
            let expectedValue = false;
            let actualValue;

            // Act
            plane.land(airport);
            plane.takeOff(airport);
            actualValue = plane.atAirport(airport);

            // Assert
            expect(actualValue).toBe(expectedValue);

        });
    });
});