import Castle from "../components/images/locations/first_castle.jpg";

const locations = [
  {
    id: 0,
    name: "Арракин",
    description: "город в котором мы начинаем путешествие бла бла бла",
    event: "можно идти на лево",
    buildings: ["площадь", "городские ворота", "казармы"],
    locImg: Castle,
  },
];

export function fetchLocation() {
  return locations;
}
