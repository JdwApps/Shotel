
'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Title from './Title';

const BocasMap = () => {


const markers = [
        {
      name: 'Bocas Airport',
      description: 'Small airport with flights from and to Panama City',
      coordinates: { latitude: 9.340702, longitude: -82.243977 },
      category: 'Airport',
    },
    {
      name: 'La Piscina',
      description: 'Wonderful Beach surrounded by the Jungle',
      coordinates: { latitude: 9.433054, longitude: -82.262511 },
      category: 'Beach',
    },

    {
      name: 'MimiTimbi',
      description: 'Secluded Beach with a high Cliff Island',
      coordinates: { latitude: 9.438565, longitude: -82.276569 },
      category: 'Beach',
    },
    {
      name: 'Carenero',
      description: 'Beach with calm waters',
      coordinates: { latitude: 9.343729, longitude: -82.230186 },
      category: 'Beach',
    },
    {
      name: 'Wizard Beach',
      description: 'Splendid Beach on the Ocean Side',
      coordinates: { latitude: 9.352025, longitude: -82.19712 },
      category: 'Beach',
    },
    {
      name: 'Starfish Beach',
      description: 'Splendid Beach on the Bay Side, lots of starfish in the water',
      coordinates: { latitude: 9.404419, longitude: -82.325668 },
      category: 'Beach',
    },
    {
      name: 'Paunch Beach',
      description: 'Natural pool with low depth.',
      coordinates: { latitude: 9.383058, longitude: -82.235948 },
      category: 'Beach',
    },
    {
      name: 'Zapatilla',
      description: 'Small Islands with wonderful beaches',
      coordinates: { latitude: 9.264106, longitude: -82.055647 },
      category: 'Beach',
    },
    {
      name: 'Carenero Quay',
      description: 'Splendid Beach on the Ocean Side',
      coordinates: { latitude: 9.339879, longitude: -82.239609},
      category: 'Boat',
    },
    {
      name: 'Bastimientos Quay',
      description: 'Splendid Beach on the Ocean Side',
      coordinates: { latitude: 9.337771, longitude: -82.240625 },
      category: 'Boat',
    },
    {
      name: 'Ferry Quay',
      description: 'Splendid Beach on the Ocean Side',
      coordinates: { latitude: 9.335402 , longitude: -82.240936 },
      category: 'Boat',
    },
    {
      name: 'Almirante Quay',
      description: 'Splendid Beach on the Ocean Side',
      coordinates: { latitude: 9.339623 , longitude:  -82.239554 },
      category: 'Boat',
    },
    {
        name: 'Blue Lagoon',
        description: 'Rocky Lagoon surrounded by the Jungle',
        coordinates: { latitude: 9.435685, longitude: -82.266554 },
        category: 'Snorkel',
      },
    {
        name: 'Cayo Coral',
        description: 'Splendid Reefs',
        coordinates: { latitude: 9.252769, longitude: -82.126972 },
        category: 'Snorkel',
      },
    {
        name: 'Ship Wreck',
        description: 'A lot of fish around the wreck',
        coordinates: { latitude: 9.331257, longitude: -82.249027 },
        category: 'Snorkel',
      },
    {
        name: 'Saigon Reef',
        description: 'Nice Corals and colorful fishes',
        coordinates: { latitude: 9.346368, longitude: -82.257104   },
        category: 'Snorkel',
      },
    {
        name: 'Bird Island',
        description: 'Rocky caverns with colorful fishes and lots of birds',
        coordinates: { latitude: 9.453563, longitude: -82.299416   },
        category: 'Snorkel',
      },
    {
      name: 'Bluff Beach',
      description: 'Heavy ShoreBreak on a sandbar, for advanced riders',
      coordinates: { latitude: 9.402422, longitude: -82.246 },
      category: 'Surf',
    },
    {
      name: 'Paunch',
      description: 'Reef Break for advanced riders',
      coordinates: { latitude: 9.374664, longitude: -82.238113 },
      category: 'Surf',
    },
    {
      name: 'Black Rock',
      description: 'Reef Break for advanced riders',
      coordinates: { latitude: 9.343839, longitude: -82.227898 },
      category: 'Surf',
    },
    {
      name: 'Carenero',
      description: 'Reef Break for advanced riders',
      coordinates: { latitude: 9.350891, longitude: -82.227131 },
      category: 'Surf',
    },
    {
      name: 'Bluff Terminus',
      description: 'Terminus for Bluff Beach',
      coordinates: { latitude:  9.401801, longitude:-82.247062 },
      category: 'Bus',
    },
    {
      name: 'Bocas Terminus',
      description: 'Terminus for Bocas Town',
      coordinates: { latitude: 9.33966, longitude: -82.24071 },
      category: 'Bus',
    },

  
  ];
  const categoryColors = {
    Airport: 'grey',
    Boat: 'red',
    Bus: 'green',

    Beach: 'yellow',
    Snorkel: 'blue',
    Surf: 'orange',
   
  };

  const getCategoryIcon = (category) => {
    return categoryColors[category] || 'gray';
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
    <Title text="Bocas del Toro Map" />
    <div className="flex-grow w-3/4 h-3/4">
      <MapContainer center={[9.35, -82.25]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.coordinates.latitude, marker.coordinates.longitude]}
            icon={L.icon({
              iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getCategoryIcon(marker.category)}.png`,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            })}
          >
            <Popup>
              <div>
                <h3>{marker.name}</h3>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    <div className="flex items-center justify-center text-white p-4 z-10">
      {Object.keys(categoryColors).map((category, index) => (
        <div key={index} className="flex items-center justify-center mr-8">
          <img
            src={`https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getCategoryIcon(category)}.png`}
            className="w-5 h-5 mr-2"
          />
          <p>{category}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default BocasMap;