// Initialize the map
var map = L.map('map').setView([49.1520, 9.6693], 4);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create a custom icon
var teapot_marker = L.icon({
    iconUrl: 'article_images/png-teapot.png',
    iconSize: [20, 13.6],
    iconAnchor: [10, 13.6],
    popupAnchor: [0, -13.6]
});

var photo_marker = L.icon({
    iconUrl: 'article_images/png-camera.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
});

// Add markers with custom icons
var marker1 = L.marker([51.4597, -2.5879], { icon: teapot_marker, id: 'bakery' }).addTo(map);
var marker2 = L.marker([51.4941, -0.1744], { icon: teapot_marker, id: 'bakery'  }).addTo(map);
// var marker3 = L.marker([48.8560, 2.3321], { icon: photo_marker, id: 'photos'  }).addTo(map);
var marker4 = L.marker([41.3880, 2.1754], { icon: teapot_marker, id: 'bakery'  }).addTo(map);

// Add popups to objects
marker1.bindPopup("<b onclick='scrollToSection(1)'class='popup-title'>Sweet treat #1</b><br>Farro Bakery<br><img src='article_images/farro_bakery.jpeg' width='100'>").openPopup();
marker2.bindPopup("<b onclick='scrollToSection(2)'class='popup-title'>Sweet treat #2</b><br>Kensington Bakery<br><img src='article_images/kensington_bakery.jpeg' width='100'>").openPopup();
// marker3.bindPopup("<b onclick='scrollToSection(3)'class='popup-title'>Photo #1</b>").openPopup();
marker4.bindPopup("<b onclick='scrollToSection(2)'class='popup-title'>Sweet treat #3</b><br>Xurreria<br><img src='article_images/churros_bakery.jpeg' width='100'>").openPopup();

// Create a standalone popup
var popup = L.popup()
    .setLatLng([49.1520, 9.6693])
    .setContent("Welcome cracey people! Click on the pins for tasty information")
    .openOn(map);

// Add event handling (click event)
function onMapClick(e) {
    map.closePopup();
    //alert("Oopth looks like you misplaced your mouse!");
}

// Scroll to the relevant section
function scrollToSection(sectionNumber) {
    var sectionId = "section" + sectionNumber;
    var sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}

map.on('click', onMapClick);
