import { useCallback, useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import noImage from '../../../assets/noImage.jpg';
import './placeCard.style.css';

export function PlaceCard({ place, map }) {
  const [placeSelected, setPlaceSelected] = useState();
  const [addressComponents, setAddressComponents] = useState({
    number: '',
    street: '',
    neighborhood: '',
    city: '',
    postalCode: '',
    active: false,
  });

  const getDetails = useCallback(() => {
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      placeId: place.reference,
    };

    service.getDetails(request, (result, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaceSelected(result);
      }
    });
  }, [place, map]);

  const getAddressComponents = () => {
    placeSelected?.address_components.forEach((component) => {
      if (component.types.find((element) => element === 'street_number')) {
        setAddressComponents((oldAddressComponents) => ({
          ...oldAddressComponents,
          number: component.long_name,
          active: true,
        }));
      } else if (component.types.find((element) => element === 'route')) {
        setAddressComponents((oldAddressComponents) => ({
          ...oldAddressComponents,
          street: component.short_name,
          active: true,
        }));
      } else if (
        component.types.find((element) => element === 'sublocality_level_1')
      ) {
        setAddressComponents((oldAddressComponents) => ({
          ...oldAddressComponents,
          neighborhood: component.short_name,
          active: true,
        }));
      } else if (
        component.types.find(
          (element) => element === 'administrative_area_level_2'
        )
      ) {
        setAddressComponents((oldAddressComponents) => ({
          ...oldAddressComponents,
          city: component.short_name,
          active: true,
        }));
      } else if (component.types.find((element) => element === 'postal_code')) {
        setAddressComponents((oldAddressComponents) => ({
          ...oldAddressComponents,
          postalCode: component.short_name,
          active: true,
        }));
      }
    });
  };

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  useEffect(() => {
    getAddressComponents();
  }, [placeSelected]);
  return (
    <>
      <section className="place-card">
        <div className="place-card-photo-box">
          <img
            className="place-card-photo"
            src={place.photos ? place.photos[0].getUrl() : noImage}
            alt="foto do lugar"
          />
        </div>
        <div className="place-card-infos">
          <h2>{place.name}</h2>
          <ReactStars
            count={5}
            isHalf
            value={place.rating}
            edit={false}
            activeColor="#e7711c"
            size={20}
          />
          {addressComponents.active ? (
            <>
              <p>
                {addressComponents.street}
                {addressComponents.number !== ''
                  ? ',' + addressComponents.number
                  : null}
              </p>
              <p>
                {addressComponents.neighborhood !== ''
                  ? addressComponents.neighborhood
                  : null}
                {addressComponents.city
                  ? ', ' + addressComponents.city + ' '
                  : null}
                {addressComponents.postalCode
                  ? '- ' + addressComponents.postalCode
                  : null}
              </p>
            </>
          ) : (
            <p>{place.vicinity}</p>
          )}

          <p>{placeSelected?.formatted_phone_number}</p>
          <p>
            {place.opening_hours?.isOpen
              ? 'Aberto agora'
              : 'Fechado no momento'}
          </p>
        </div>
      </section>
    </>
  );
}
