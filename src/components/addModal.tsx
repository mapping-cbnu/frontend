/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from 'react-modal';
import { useState } from 'react';
import './css/modal.css';
import axios from 'axios';

function AddModal(props: any) {
  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '11',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    content: {
      width: '80%',
      zIndex: '12',
      minHeight: '47%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      justifyContent: 'center',
      overflow: 'auto',
    },
  };

  const [values, setValues] = useState({
    tag: '',
    content: '',
    lat: props.data.lat,
    lng: props.data.lng,
    file: '',
    writer: 'anyone', //유저이 이름을 가져와서 여기 대입
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://mapping.kro.kr:8080/memo/upload', values);
      // 데이터 전송 후 원하는 작업 수행
      console.log('메모가 성공적으로 생성되었습니다.');
    } catch (error) {
      console.error('메모 생성에 실패했습니다.', error);
    }
    props.close(); //입력 창 닫기
    props.markerSign(); //마커 추가 활성화 버튼 끄기
  };

  return (
    <>
      <Modal
        isOpen={props.modalState}
        onRequestClose={props.close}
        style={customModalStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal">
          <h2>메모 작성</h2>
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            <p>
              태그:
              <select name="tag" value={values.tag} onChange={handleChange}>
                <option value="기타">기타</option>
                <option value="쓰레기통">쓰레기통</option>
                <option value="화장실">화장실</option>
                <option value="공사중">공사중</option>
              </select>
            </p>
            <p>
              내용:
              <input
                type="text"
                name="content"
                value={values.content}
                onChange={handleChange}
              />
            </p>
            <p>
              이미지:
              <input
                className="upload-name"
                type="file"
                name="file"
                accept="image/*"
                value={values.file}
                onChange={handleChange}
                placeholder="이미지를 업로드 하세요"
              />
            </p>
            <div className="buttons">
              <button type="submit" className="save-button">
                저장
              </button>
              <button onClick={props.close} className="close-button">
                닫기
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
export default AddModal;
