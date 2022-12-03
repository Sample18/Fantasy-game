import Castle from "../components/images/locations/first_castle.jpg";
import Forest from "../components/images/locations/forest.jpg";

const buildings = {
  square: {
    id: 0,
    name: "Площадь",
    description: "Городская площадь с кучей людей бла бла",
    event: "Лучше вернуться обратно",
    locImg: Castle,
    locId: 0,
    nextLocName: null,
  },
  cityGate: {
    id: 1,
    name: "Городские ворота",
    description: "Городские ворота с кучей людей бла бла",
    event: "Лучше вернуться обратно",
    locImg: Castle,
    locId: 0,
    nextLocName: "Лес",
  },
  barracks: {
    id: 2,
    name: "Казармы",
    description: "Казармы с кучей людей бла бла",
    event: "Лучше вернуться обратно",
    locImg: Castle,
    locId: 0,
    nextLocName: null,
  },
};

const locations = [
  {
    locId: 0,
    name: "Арракин",
    description: "Город в котором мы начинаем путешествие бла бла бла",
    event: "Можно идти к воротам",
    buildings: [buildings.square, buildings.cityGate, buildings.barracks],
    locImg: Castle,
  },
  {
    locId: 1,
    name: "Лес",
    description: "Дремучий лес с проселочной дорогой",
    event: "В дали виднеется утес",
    buildings: [buildings.cityGate],
    locImg: Forest,
  },
];

export function fetchLocation() {
  return locations;
}
