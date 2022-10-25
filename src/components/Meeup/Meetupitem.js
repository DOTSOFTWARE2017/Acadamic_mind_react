import "./Meetupitem.css";

export const Meetupitem = (props) => {
  return (
    <>
      <div className="card shadow">
        <div>
          <h3>{props.State}</h3>
          <address>{props.About}</address>
          <p>{props.District}</p>
        </div>
        <div>
          <button className="btn btn-primary mb-3"> ToFav</button>
        </div>
      </div>
    </>
  );
};
