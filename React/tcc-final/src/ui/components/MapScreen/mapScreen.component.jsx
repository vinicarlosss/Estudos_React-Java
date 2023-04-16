import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from '@react-google-maps/api';
import { useState } from 'react';
import { Button, Modal, PlaceCard, TextInput } from '../../index';
import './map.style.css';

export function MapScreen() {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [formInput, setFormInput] = useState('');
  const [places, setPlaces] = useState([]);
  const [addressModal, setAddressModal] = useState(true);
  const [searchBox, setSearchBox] = useState();

  const toggleModal = () => {
    setAddressModal(!addressModal);
  };

  function handleChange(event) {
    setFormInput(event.target.value);
  }

  const containerStyle = {
    width: '60%',
    height: '800px',
  };

  function searchByQuery(event) {
    event.preventDefault();
    try {
      if (formInput.length === 0) {
        setPlaces([]);
      } else {
        const service = new window.google.maps.places.PlacesService(map);
        setPlaces([]);

        const request = {
          location: center,
          radius: 1500,
          keyword: formInput,
        };

        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaces(results);
          }
        });
      }
    } catch (error) {
      return;
    }
  }

  function onLoad(mapBuilder) {
    window.navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });

    setMap(mapBuilder);
  }

  const onLoadSearch = (loadSearchBuilder) => {
    setSearchBox(loadSearchBuilder);
  };

  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    map.panTo(location);
    setCenter(location);
    toggleModal();
  };

  return (
    <>
      <div className="map-box">
        <div className="map-infoFind-box">
          <form className="map-find-form" onSubmit={searchByQuery}>
            <div className="map-find-form-button-adjust">
              <TextInput
                type="text"
                placeholder="Digite um serviço essencial, ex.: farmácia"
                className="map-input"
                onChange={handleChange}
              />
              <Button className="map-button">Buscar</Button>
            </div>
            <div className="search-address">
              <p>
                Clique no botão abaixo e adicione seu endereço para uma
                localização exata:
              </p>
              <Button onClick={toggleModal}>Endereço</Button>
            </div>
          </form>
          {places?.map((place) => {
            return <PlaceCard key={place.place_id} place={place} map={map} />;
          })}
        </div>
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyBkAJl8Xavyuqs8SEehzkL13MvTOUi9X2w"
          libraries={['places']}
        >
          <GoogleMap
            onLoad={onLoad}
            center={center}
            mapContainerStyle={containerStyle}
            zoom={15}
          >
            <Marker position={center} />
            {addressModal && (
              <Modal toggleModal={toggleModal}>
                <h1 className="address-title">Nos informe seu endereço</h1>
                <StandaloneSearchBox
                  onLoad={onLoadSearch}
                  onPlacesChanged={onPlacesChanged}
                >
                  <TextInput
                    labelText="Endereço:"
                    inputName="address"
                    className="addressField"
                    forId="address"
                    placeholder="Digite um endereço"
                  />
                </StandaloneSearchBox>
              </Modal>
            )}
            {places?.map((place) => {
              return (
                <Marker
                  key={place.place_id}
                  name={place.name}
                  position={{
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                  }}
                />
              );
            })}
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}
