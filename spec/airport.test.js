import Airport from "../src/airport.js";
import { changeAirportCapacity } from "../src/airport.js";

describe('Airport tests', () => {

    describe('User Story 1 - As an Air Traffic Controller, I want to be able to override the maximum number of planes that an airport can hold at any one time, so that I can work on airports of varying capacity.', () => {

        // Test 1
        it('should change the capacity from 1 to 2', () => {

            // Arrange
            let airport = new Airport(1);   // initial capacity = 1
            let expectedValue = 2;

            // Act
            changeAirportCapacity(airport, 2);

            // Assert
            expect(airport.capacity).toBe(expectedValue);

        });
    });

    describe('User Story 3 - As an Air Traffic Controller, if instructing a plane to land, I want to know if an airport is full, so that I know when not to instruct the plane to land.', () => {

        // Test 3
        it("should return false if airport is not full", () => {

            // Arrange
            let airport = new Airport(5);   // initial capacity = 5, no planes at airport
            let expectedValue = false;

            // Act
            let actualValue = airport.isAirportFull();

            // Assert
            expect(actualValue).toBe(expectedValue);

        });
    });
});