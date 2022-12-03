import Castle from "../components/images/locations/first_castle.jpg";
import Forest from "../components/images/locations/forest.jpg";

const buildings = {
  square: {
    id: 0,
    name: "площадь",
    description: "городская площадь с кучей людей бла бла",
    event: "лучше вернуться обратно",
    locImg: Castle,
    locId: 0,
    nextLocName: null,
  },
  cityGate: {
    id: 1,
    name: "городские ворота",
    description: "городские ворота с кучей людей бла бла",
    event: "лучше вернуться обратно",
    locImg: Castle,
    locId: 0,
    nextLocName: "Лес",
  },
  barracks: {
    id: 2,
    name: "казармы",
    description: "казармы с кучей людей бла бла",
    event: "лучше вернуться обратно",
    locImg: Castle,
    locId: 0,
    nextLocName: null,
  },
};

const locations = [
  {
    locId: 0,
    name: "Арракин",
    description: "город в котором мы начинаем путешествие бла бла бла",
    event: "можно идти к воротам",
    buildings: [buildings.square, buildings.cityGate, buildings.barracks],
    locImg: Castle,
  },
  {
    locId: 1,
    name: "Лес",
    description: "дремучий лес с проселочной дорогой",
    event: "в дали виднеется утес",
    buildings: [buildings.cityGate],
    locImg: Forest,
  },
];

export function fetchLocation() {
  return locations;
}
