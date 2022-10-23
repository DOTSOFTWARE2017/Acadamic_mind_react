import { Link } from "react-router-dom";

export const Main_nav = () => {
  return (
    <>
      <h1>React Meetup Page</h1>
      <Link to={"/"}>Allmeetup</Link>
      <Link to={"/fev_page"}>fev_page</Link>
      <Link to={"/new_page"}>Newmeetup</Link>
    </>
  );
};
