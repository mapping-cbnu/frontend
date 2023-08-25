import './css/user.css';
import './css/button.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function Memo(props: any) {
  return (
    <>
      <li>
        <div className="memo-title-container">
          <div className="memo-title">{props.data.tag}</div>
          <div>{props.data.date}</div>
        </div>
        <div className="memo-content-container">
          <img className="memo-img" src={props.data.img} />
          <div className="memo-content">{props.data.content}</div>
        </div>
        <div className="memo-button-container">
          <button className="btn">수정</button>
          <button className="btn red">삭제</button>
        </div>
      </li>
      <hr className="rounded memo" />
    </>
  );
}

export default Memo;
