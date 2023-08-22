import './user.css';

// 로그인
function Signin() {
  return (
    <>
      <div className="container">
        <h1>로그인</h1>

        <form action="" method="post">
          <div className="input__block">
            <input type="ID" placeholder="아이디" className="input" id="ID" />
          </div>
          <div className="input__block">
            <input
              type="password"
              placeholder="비밀번호"
              className="input"
              id="password"
            />
          </div>
          <button className="signin__btn">로그인</button>
        </form>
        <div className="test">
          <a href="">회원가입</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
