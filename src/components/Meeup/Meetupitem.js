export const Meetupitem = (props) => {
  return (
    <>
    <div className="card">
      <div>
        <h3>{props.State}</h3>
        <address>{props.About}</address>
        <p>{props.District}</p>
      </div>
      <div>
        <button> ToFav</button>
      </div>
      </div>
    </>
  );
};
