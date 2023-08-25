import { SetStateAction, useState } from 'react';
import './css/user.css';

// 로그인
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Signin(props: any) {
  const [Id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [blankMessage, setBlankMessage] = useState('');
  const onChangeId = (e: { target: { value: SetStateAction<string> } }) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const checkingBlank = () => {
    if (Id && password) {
      setBlankMessage('');
    } else {
      setBlankMessage('빈칸이 있습니다.');
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
              type="ID"
              placeholder="아이디"
              className="input"
              id="ID"
              onChange={onChangeId}
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
          <button
            type={blankMessage ? 'button' : 'submit'}
            className="signin__btn"
            onClick={checkingBlank}
          >
            로그인
          </button>
        </form>
        <div className="sign__link" onClick={props.signup}>
          회원가입
        </div>
      </div>
    </>
  );
}

export default Signin;
