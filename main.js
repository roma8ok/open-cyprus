import Places, { FieldName } from "./place.js";
import * as label from "./label.js";
import * as filter from "./filter.js";
import * as config from "./config.js";
import * as id from "./id.js";
import * as className from "./class_name.js";
import * as icon from "./icon.js";
import * as qs from "./query_string.js";

const placesFilteredPopular = filter.GetPlaceNamesByPopularity(
  config.PopularityMinValue
);
const placesFilteredFree = filter.GetPlaceNamesByLabel(label.Free);
const placesFilteredAudioGuide = filter.GetPlaceNamesByLink(
  FieldName.AudioGuide
);
const placesFilteredVirtualTour = filter.GetPlaceNamesByLink(
  FieldName.VirtualTour
);
const placesFilteredReset = filter.GetPlaceNames();

let showingPlaceName;
let markers = {};
let selectedFilter;

function placeOnClick(placeName) {
  return () => {
    if (showingPlaceName) {
      markers[showingPlaceName].setIcon(icon.Normal);
    }

    showingPlaceName = placeName;
    markers[showingPlaceName].setIcon(icon.Selected);

    const place = Places[placeName];

    let labelsHTML = "";
    if (place.popularity >= config.PopularityMinValue) {
      labelsHTML += `<div class="place-label">🔝</div>`;
    }
    if (place.labels.includes(label.Free)) {
      labelsHTML += `<div class="place-label">🆓</div>`;
    }

    document.getElementById(id.PlaceName).innerText = placeName;
    document.getElementById(id.PlaceDescription).innerText = place.description;
    document.getElementById(id.PlaceLabels).innerHTML = labelsHTML;
    document.getElementById(id.PlaceInfo).style.display = "flex";

    document.getElementById(id.PlaceInfoShare).style.display = "block";

    if (place.links) {
      let googleMapsLink = "";
      let googleMapsDisplay = "none";
      if (place.links.googleMaps) {
        googleMapsLink = place.links.googleMaps;
        googleMapsDisplay = "block";
      }
      document.getElementById(id.PlaceInfoGoogleMapsLink).href = googleMapsLink;
      document.getElementById(id.PlaceInfoGoogleMaps).style.display =
        googleMapsDisplay;

      let audioGuideLink = "";
      let audioGuideDisplay = "none";
      if (place.links.audioGuide) {
        audioGuideLink = place.links.audioGuide;
        audioGuideDisplay = "block";
      }
      document.getElementById(id.PlaceInfoAudioGuideLink).href = audioGuideLink;
      document.getElementById(id.PlaceInfoAudioGuide).style.display =
        audioGuideDisplay;

      let virtualTourLink = "";
      let virtualTourDisplay = "none";
      if (place.links.virtualTour) {
        virtualTourLink = place.links.virtualTour;
        virtualTourDisplay = "block";
      }
      document.getElementById(id.PlaceInfoVirtualTourLink).href =
        virtualTourLink;
      document.getElementById(id.PlaceInfoVirtualTour).style.display =
        virtualTourDisplay;

      let webLink = "";
      if (place.links.departmentOfAntiquities) {
        webLink = place.links.departmentOfAntiquities;
      } else if (place.links.visitCyprus) {
        webLink = place.links.visitCyprus;
      } else if (place.links.site) {
        webLink = place.links.site;
      } else if (place.links.wikipedia) {
        webLink = place.links.wikipedia;
      }
      let webDisplay = "none";
      if (webLink) {
        webDisplay = "block";
      }
      document.getElementById(id.PlaceInfoWebLink).href = webLink;
      document.getElementById(id.PlaceInfoWeb).style.display = webDisplay;
    }
  };
}

const renderMarkers = (filterName) => {
  let filteredPlaces = Places;

  switch (filterName) {
    case filter.Popular:
      filteredPlaces = placesFilteredPopular;
      break;
    case filter.Free:
      filteredPlaces = placesFilteredFree;
      break;
    case filter.AudioGuide:
      filteredPlaces = placesFilteredAudioGuide;
      break;
    case filter.VirtualTour:
      filteredPlaces = placesFilteredVirtualTour;
      break;
    case filter.Reset:
      filteredPlaces = placesFilteredReset;
      break;
  }
  if (showingPlaceName && !filteredPlaces[showingPlaceName]) {
    hidePlaceInfo();
  }

  for (const placeName in Places) {
    const place = Places[placeName];
    const isIncludeToFilter = filteredPlaces[placeName];

    if (isIncludeToFilter && !markers[placeName]) {
      var marker = L.marker([place.latitude, place.longitude], {
        icon: icon.Normal,
      }).addTo(map);
      markers[placeName] = marker;
      marker.on("click", placeOnClick(placeName));
    } else if (!isIncludeToFilter && markers[placeName]) {
      markers[placeName].remove();
      delete markers[placeName];
    }
  }
};

const setFilter = (filterName) => {
  if (selectedFilter === filterName) {
    return;
  }

  selectedFilter = filterName;

  document.getElementById(filter.Reset).style.display = "block";

  document
    .getElementById(filter.Popular)
    .classList.remove(className.FilterItemSelected);
  document
    .getElementById(filter.Free)
    .classList.remove(className.FilterItemSelected);
  document
    .getElementById(filter.AudioGuide)
    .classList.remove(className.FilterItemSelected);
  document
    .getElementById(filter.VirtualTour)
    .classList.remove(className.FilterItemSelected);

  if (filterName === filter.Reset) {
    document.getElementById(filter.Reset).style.display = "none";
  } else {
    document
      .getElementById(filterName)
      .classList.add(className.FilterItemSelected);
  }

  renderMarkers(filterName);
};

const hidePlaceInfo = () => {
  document.getElementById(id.PlaceInfo).style.display = "none";

  document.getElementById(id.PlaceInfoWeb).style.display = "none";
  document.getElementById(id.PlaceInfoVirtualTour).style.display = "none";
  document.getElementById(id.PlaceInfoAudioGuide).style.display = "none";
  document.getElementById(id.PlaceInfoGoogleMaps).style.display = "none";
  document.getElementById(id.PlaceInfoShare).style.display = "none";

  showingPlaceName = null;
};

let map = L.map(id.Map).setView(config.InitCoordinates, config.ZoomInit);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: config.ZoomMax,
  attribution: `<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`,
}).addTo(map);
map.attributionControl.setPrefix("");

renderMarkers(null);

document.getElementById(filter.Popular).addEventListener("click", function () {
  setFilter(filter.Popular);
});
document.getElementById(filter.Free).addEventListener("click", function () {
  setFilter(filter.Free);
});
document
  .getElementById(filter.AudioGuide)
  .addEventListener("click", function () {
    setFilter(filter.AudioGuide);
  });
document
  .getElementById(filter.VirtualTour)
  .addEventListener("click", function () {
    setFilter(filter.VirtualTour);
  });
document.getElementById(filter.Reset).addEventListener("click", function () {
  setFilter(filter.Reset);
});

document.getElementById(id.PlaceInfoShare).addEventListener("click", () => {
  const url = new URL(window.location);
  const placeName = showingPlaceName;
  if (placeName) {
    url.searchParams.set(qs.Place, placeName);
  } else {
    return;
  }

  const shareURL = url.toString();

  navigator.clipboard.writeText(shareURL).then(() => {
    const message = document.getElementById(id.PlaceInfoShareMessage);
    message.classList.add(className.PlaceInfoShareMessageShowPart);

    setTimeout(() => {
      message.classList.remove(className.PlaceInfoShareMessageShowPart);
    }, config.ShareMessageHideTimeout);
  });
});

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const placeName = urlParams.get(qs.Place);
  const place = Places[placeName];

  if (placeName && place) {
    map.setView([place.latitude, place.longitude], config.ZoomPlace);
    placeOnClick(placeName)();
  }
});

map.on("click", function () {
  if (showingPlaceName) {
    markers[showingPlaceName].setIcon(icon.Normal);
    hidePlaceInfo();
  }
});
