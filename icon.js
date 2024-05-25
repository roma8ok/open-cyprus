const iconURL =
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";

export const Normal = L.icon({
  iconUrl: iconURL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export const Selected = L.icon({
  iconUrl: iconURL,
  iconSize: [30, 49],
  iconAnchor: [15, 49],
});
