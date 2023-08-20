import './css/menu.css';
import { MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Buttons(props: any) {
  const location = props.data;
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  console.log('toggle', toggle);

  return (
    <div>
      {toggle ? (
        // 추가 버튼 활성화
        <button
          className="customButton"
          style={{
            bottom: '8em',
            background:
              'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -194px -350px',
          }}
          onClick={clickedToggle}
        ></button>
      ) : (
        // 추가 버튼 비활성화
        <button
          className="customButton"
          style={{
            bottom: '8em',
            background:
              'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -194px -450px',
          }}
          onClick={clickedToggle}
        ></button>
      )}

      <button
        className="customButton"
        style={{
          bottom: '5em',
          background:
            'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -105px -450px',
        }}
      ></button>

      <button
        className="customButton"
        style={{
          bottom: '2em',
          background:
            'url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/img_search.png) no-repeat -153px -450px',
        }}
      ></button>
      {toggle && (
        <MapMarker
          position={location}
          image={{
            src: './public_assets/addMarker.png',
            size: { width: 200, height: 60 },
            options: {
              offset: {
                x: 16,
                y: 52,
              },
            },
          }}
          onClick={}
        />
      )}
    </div>
  );
}
export default Buttons;
