# Dijkstra Routing Excursion

## Development Notes

The idea is for the Graph component to send the `start` (left click) and `destination` (right click) nodes to the Selection and Results components. The Results component will then call the Dijkstra library function to perform the calculation and subsequently display the shortest route.

**See the `dev` branch for more complete functionality.**

## Running Instructions

### Start The Server

    yarn start

Now navigate to http://localhost:3000.

- `Left Click` a node --> set the route start.
- `Right Click` a node --> set the route destination.
- `Mouse Scroll Wheel` --> zoom.

### Run The Tests

    yarn test  -->  Uses the `react-testing-library`.

    CI=true yarn test --coverage  -->  Full test coverage report; see `coverage` dir.

### Run The Integration Tests

    npx cypress open  -->  Full GUI automated tests; interactive.

    npx cypress run  -->  Command line automated tests runner.

## Caveats

- No media queries.
