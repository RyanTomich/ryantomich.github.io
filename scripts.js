document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("travel-map").setView([39.5, -98.35], 4); // Centered on US

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  const places = [
    { name: "Butte, Montana", lat: 46.0038, lon: -112.5348 },
    { name: "Bozeman, Montana", lat: 45.6793, lon: -111.0373 },
    { name: "Flathead Lake, Montana", lat: 47.9056, lon: -114.1156 },
    { name: "Seattle, Washington", lat: 47.6061, lon: -122.3328 },
    { name: "Bellevue, Washington", lat: 47.6101, lon: -122.2015 },
    { name: "Washington DC", lat: 38.8951, lon: -77.0364 },
    { name: "California", lat: 36.7783, lon: -119.4179 },
    { name: "Idaho", lat: 44.0682, lon: -114.742 },
    { name: "Arizona", lat: 34.0489, lon: -111.0937 },
    { name: "Nevada", lat: 38.8026, lon: -116.4194 },
    { name: "Denver, Colorado", lat: 39.7392, lon: -104.9903 },
    { name: "Massachusetts", lat: 42.4072, lon: -71.3824 },
    { name: "New York City, New York", lat: 40.7128, lon: -74.0060 },
    { name: "Maine", lat: 45.2538, lon: -69.4455 },
    { name: "Florida", lat: 27.9944, lon: -81.7603 },
    { name: "Texas", lat: 31.9686, lon: -99.9018 },
    { name: "Salt Lake City, Utah", lat: 40.7606, lon: -111.8881 },
    { name: "New Mexico", lat: 34.5199, lon: -105.8701 },
    { name: "Charleston, South Carolina", lat: 32.7833, lon: -79.9320 },
    { name: "South Dakota", lat: 43.9695, lon: -99.9018 },
    { name: "Pennsylvania", lat: 41.2033, lon: -77.1945 },
    { name: "Wyoming", lat: 43.0759, lon: -107.2903 },
    { name: "New Orleans, Louisiana", lat: 29.9509, lon: -90.0758 },
    { name: "Cancúnm Mexico", lat: 21.1619, lon: -86.8515 },

    // National Parks + Other Sites
    { name: "Grand Teton", lat: 43.7904, lon: -110.6818 },
    { name: "Yellowstone", lat: 44.6, lon: -110.5 },
    { name: "Glacier", lat: 48.6968, lon: -113.7182 },
    { name: "Acadia", lat: 44.35, lon: -68.21 },
    { name: "Dry Tortugas", lat: 24.6285, lon: -82.8732 },
    { name: "Everglades", lat: 25.2866, lon: -80.8987 },
    { name: "Zion", lat: 37.2982, lon: -113.0263 },
    { name: "Death Valley", lat: 36.5054, lon: -117.0794 },
    { name: "Bryce Canyon", lat: 37.5930, lon: -112.1871 },
    { name: "Arches", lat: 38.7331, lon: -109.5925 },
    { name: "Saguaro", lat: 32.2967, lon: -111.1669 },
    { name: "Channel Islands", lat: 34.0069, lon: -119.7785 },
    { name: "Haleakala, Hawaii", lat: 20.7204, lon: -156.1552 },
    { name: "Joshua Tree", lat: 33.8734, lon: -115.9010 },
    { name: "Grand Canyon", lat: 36.1069, lon: -112.1129 },
    { name: "Mount Rainier", lat: 46.8523, lon: -121.7603 },
    { name: "North Cascades", lat: 48.7718, lon: -121.2985 },
    { name: "Olympic", lat: 47.8021, lon: -123.6044 },
    { name: "Crater Lake", lat: 42.8684, lon: -122.1685 },
    { name: "Big Hole National Battlefield", lat: 45.6476, lon: -113.6456 },
    { name: "Wilson's Creek National Battlefield", lat: 33.5881, lon: -81.2644 },
    { name: "Gettysburg National Military Park", lat: 39.8309, lon: -77.2311 },
    { name: "Grant-Kohrs Ranch NHS", lat: 46.3933, lon: -112.7394 },
    { name: "Pennsylvania Avenue NHS", lat: 38.8946, lon: -77.0230 },
    { name: "Salem Maritime NHS", lat: 42.5209, lon: -70.8886 },
    { name: "Craters of the Moon National Monument", lat: 43.4166, lon: -113.5166 },
    { name: "Montezuma Castle National Monument", lat: 34.6124, lon: -111.8396 },
    { name: "Mount Rushmore National Memorial", lat: 43.8791, lon: -103.4591 },
    { name: "Devils Tower National Monument", lat: 44.5902, lon: -104.7154 },
    { name: "Lake Chelan National Recreation Area", lat: 48.3293, lon: -120.6286 },
    { name: "Bighorn Canyon National Recreation Area", lat: 45.1372, lon: -108.1965 },
    { name: "Cape Cod National Seashore", lat: 41.9578, lon: -69.9664 }
  ];


  places.forEach((place) => {
    L.marker([place.lat, place.lon]).addTo(map).bindPopup(place.name);
  });
});
