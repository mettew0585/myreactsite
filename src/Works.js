import "./works.css";

function Works({ hook }) {
  return (
    <>
      <div className="room-for-hook" ref={hook}></div>
      <div className="room-for-title">
        <h className="works-title">works</h>
      </div>
      <div className="room-for-worklist">
        <div className="work">prototype</div>
        <div className="work">prototype</div>
        <div className="work">prototype</div>
        <div className="work">prototype</div>
      </div>
    </>
  );
}
export default Works;
