import { SetStateAction, useState } from 'react';
import axios from 'axios';
import './css/user.css';

// 로그인
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Signin(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [blankMessage, setBlankMessage] = useState('');
  const onChangeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
    checkingBlank();
  };
  const onChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    checkingBlank();
  };
  const checkingBlank = () => {
    if (email && password) {
      setBlankMessage('');
    } else {
      setBlankMessage('빈칸이 있습니다.');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      await axios.post('', formData, {
        headers: { Accept: 'application/json' },
      });
      console.log('로그인되었습니다.');
      window.location.reload(); //메인이 아니라 로그인 페이지로 이동해야 한다
    } catch (error) {
      console.error('로그인에에 실패했습니다.', error);
    }
  };
  return (
    <>
      <button
        type="button"
        className="signin-close-button"
        onClick={props.close}
      />
      <div className="container">
        <h1>로그인</h1>

        <form action="" method="post">
          <div className="input__block">
            <input
              type="email"
              placeholder="이메일"
              className="input"
              id="email"
              onChange={onChangeEmail}
            />
          </div>
          <div className="input__block">
            <input
              type="password"
              placeholder="비밀번호"
              className="input"
              id="password"
              onChange={onChangePassword}
            />
          </div>
          <div className={blankMessage ? 'message-active' : ''}>
            {blankMessage}
          </div>
          {email && password ? (
            <button
              type="submit"
              className="signin__btn"
              onClick={handleSubmit}
            >
              로그인
            </button>
          ) : (
            <button
              type="button"
              className="signin__btn"
              onClick={checkingBlank}
            >
              로그인
            </button>
          )}
        </form>
        <div className="sign__link" onClick={props.signup}>
          회원가입
        </div>
      </div>
    </>
  );
}

export default Signin;
