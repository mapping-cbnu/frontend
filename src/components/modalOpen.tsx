/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from 'react-modal';
import { useState } from 'react';

function ModalOpen(props: any) {
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
      height: '70%',
      zIndex: '12',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
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
    user: 'anyone',
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
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
        <form onSubmit={handleSubmit}>
          <p>
            태그:
            <input
              type="text"
              name="tag"
              value={values.tag}
              onChange={handleChange}
            />
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
          <button type="submit">저장</button>
        </form>
        <button onClick={props.close}>닫기</button>
      </Modal>
    </>
  );
}
export default ModalOpen;
