# Domain Models and Test Plan

## Task 1:

### Question
*Explain the benefits of the software to the client - why they need it and how it will help them. You should include:*

- *The problem that the software is solving*
- *The benefits that the software will bring to the client*
- *The risks associated with the software*

### Answer
Our client's ability to manage the flow of planes at an airport needs improvement. They require a basic model of the airport that tracks its varying occupance against its maximum capacity. As a bonus, the model should prevent planes from landing or taking off in  stormy weather. This is the problem the software is solving.

The benefits that the software will bring to the client are the optimisation and increase in confidence of airport logistics, and improved safety of passengers and flight attendents during stormy weather. This can lead to time and money savings, and an increased customer satisfaction of airport service.

The risk associated with the software is sub-optimal flow of planes (pilots delaying their landing when there's actually space at the airport to accomodate them, a pilot lands at a full airport) and misinformed decision making in stormy conditions. This could lead to delayed or cancelled flights, monetary costs, or even accidents involving the planes.


## Task 2:

### Question
*From the requirements, devise a set of user stories that describe the functionality that the client has requested*

### Answer
[Trello board](https://trello.com/invite/b/R2ET4MRL/ATTIfafc0eaf239e065a4a88c61ab132d106B14588A1/airport-challenge)

#### User Stories
1. As an Air Traffic Controller, I want to be able to override the maximum number of planes that an airport can hold at any one time, so that I can work on airports of varying capacity.

2. As an Air Traffic Controller, if instructing a plane to land, I want to know if the plane is already at an airport, so that I know which planes can land.

3. As an Air Traffic Controller, if instructing a plane to land, I want to know if an airport is full, so that I know when not to instruct the plane to land.

4. As an Air Traffic Controller, if an airport isn't full and if a plane isn't already at the airport, I want to instruct the plane to land, so that I can safely instruct a landable plane to land.

5. As an Air Traffic Controller, if instructing a plane to take off, I want to know if the plane isn't at an airport, so that I know which planes can take off.

6. As an Air Traffic Controller, if a plane is at an airport, I want to instruct the plane to take off, so that I can instruct a plane (that is able to take off) to take off.

##### *Using Copilot prompt: Can you write user stories for the additional features mentioned in README.md?*

7. User Story: Prevent Landing in Stormy Weather
- As a pilot,
- I want the system to prevent me from landing the plane
- So that I can ensure the safety of the passengers and crew in stormy weather.

8. User Story: Prevent Takeoff in Stormy Weather
- As a pilot,
- I want the system to prevent me from taking off
- So that I can ensure the safety of the passengers and crew in stormy weather.


## Task 3:

### Question
*From these user stories, create a domain model to describe how the objects will use messages to communicate with one another*

### Answer
[Trello board](https://trello.com/invite/b/R2ET4MRL/ATTIfafc0eaf239e065a4a88c61ab132d106B14588A1/airport-challenge)

#### Domain Models
1. 
| Objects | Properties       | Messages                       | Outputs |
|---------|------------------|--------------------------------|---------|
| Airport | capacity @Number |                                |         |
|         |                  | changeAirportCapacity(@Number) | @Void   |

2. 
| Objects | Properties            | Messages               | Outputs  |
|---------|-----------------------|------------------------|----------|
| Airport | planes @Array[@Plane] | planeAtAirport(@Plane) | @Boolean |
| Plane   | id @String            | getId()                | @String  |

3. 
| Objects | Properties                              | Messages        | Outputs  |
|---------|-----------------------------------------|-----------------|----------|
| Airport | capacity @Number, planes @Array[@Plane] | isAirportFull() | @Boolean |

4. 
| Objects | Properties            | Messages | Outputs |
|---------|-----------------------|----------|---------|
| Airport | planes @Array[@Plane] |          |         |
| Plane   | id @String            | land()   | @Void   |

5. 
| Objects | Properties            | Messages               | Outputs  |
|---------|-----------------------|------------------------|----------|
| Airport | planes @Array[@Plane] | planeAtAirport(@Plane) | @Boolean |
| Plane   | id @String            | getId()                | @String  |

6. 
| Objects | Properties            | Messages  | Outputs |
|---------|-----------------------|-----------|---------|
| Airport | planes @Array[@Plane] |           |         |
| Plane   | id @String            | takeOff() | @Void   |

##### *Using Copilot prompts: Can you write domain models for User Story 7 and 8 mentioned in README.md? Can you put your produced domain models in the format of the domain model I've highlighted?*
7. 
| Objects | Properties            | Messages        | Outputs |
|---------|-----------------------|-----------------|---------|
| Plane   | status @String        | land()          | @Void   |
| Weather | condition @String     | isStormy()      | @Boolean|
| Airport | planes @Array[@Plane] | preventLanding()| @Void   |

8. 
| Objects | Properties            | Messages        | Outputs |
|---------|-----------------------|-----------------|---------|
| Plane   | status @String        | takeOff()       | @Void   |
| Weather | condition @String     | isStormy()      | @Boolean|
| Airport | planes @Array[@Plane] | preventTakeoff()| @Void   |

## Task 4:

### *Copilot prompts*
1. Using this, help me proceed to implement the code necessary to implement the functionality described in the user stories, using a test driven approach.
2. Can you convert the Jest test into a Jasmine test?