import { dijkstra } from "../lib/dijkstra";

it("calculates shortest path", () => {
  const graph = {
    A: { C: 2 },
    B: { D: 4, E: 7 },
    C: { D: 1, F: 4 },
    D: { C: 1, F: 1, G: 2 },
    E: { H: 10 },
    F: { G: 3 },
    G: { H: 4 },
    H: {}
  };

  const solution = { distance: 10, path: ["B", "D", "G", "H"] };
  const result = dijkstra(graph, "B", "H");
  expect(result).toMatchObject(solution);

  const sol2 = { distance: 5, path: ["A", "C", "D", "G"] };
  const res2 = dijkstra(graph, "A", "G");
  expect(res2).toMatchObject(sol2);

  // Won't work - loops between nodes
  // Need to keep count of traversed edges.
  //
  // const sol2 = { distance: 7, path: ["A", "C", "D", "B"] };
  // const res2 = dijkstra(graph, "A", "B");
  // console.log("result : ", result);
  // expect(res2).toMatchObject(sol2);
});
