import Places from "./place.js";

export const Popular = "filter-popular";

export const Free = "filter-free";

export const AudioGuide = "filter-audio-guide";
export const VirtualTour = "filter-virtual-tour";

export const Reset = "filter-reset";

export const GetPlaceNames = () => {
  let placeNames = {};
  for (const placeName in Places) {
    placeNames[placeName] = {};
  }
  return placeNames;
};

export const GetPlaceNamesByPopularity = (minPopularity) => {
  let filteredNames = {};
  for (const placeName in Places) {
    const place = Places[placeName];
    if (place.popularity >= minPopularity) {
      filteredNames[placeName] = {};
    }
  }
  return filteredNames;
};

export const GetPlaceNamesByLabel = (filterName) => {
  let filteredNames = {};
  for (const placeName in Places) {
    const place = Places[placeName];
    if (place.labels.includes(filterName)) {
      filteredNames[placeName] = {};
    }
  }
  return filteredNames;
};

export const GetPlaceNamesByLink = (linkName) => {
  let filteredNames = {};
  for (const placeName in Places) {
    const place = Places[placeName];
    if (place.links[linkName]) {
      filteredNames[placeName] = {};
    }
  }
  return filteredNames;
};
