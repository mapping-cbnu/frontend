import { Map, ZoomControl } from 'react-kakao-maps-sdk';
import CurrentLocation from '../components/currentLocation';
import Markers from '../components/markers';
import Buttons from '../components/buttons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainPage(props: any) {
  return (
    <>
      <Map
        center={props.data}
        style={{
          height: '100vh',
        }}
      >
        <CurrentLocation data={props.data} />
        <Markers />
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <Buttons />
      </Map>
    </>
  );
}

export default MainPage;
