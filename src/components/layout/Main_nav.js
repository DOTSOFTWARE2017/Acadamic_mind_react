import { Link } from "react-router-dom";
import './Main_nav.css'
export const Main_nav = () => {
  return (
 <>
 <nav className="navbar navbar-inverse bg-primary">
  <div className="continer-fluied">
    <div className="navbar-header">
      <h3>ReactBooking System</h3>
    </div>
      </div>
      <ul className="nav navbar-nav navbar-right"><li>
        <Link to='/'>
        MeetupList 
        </Link>
        </li></ul>
        <ul className="nav navbar-nav navbar-right"><li>
        <Link to='fev_page'>
        ToDo
        </Link>
        </li></ul>
        <ul className="nav navbar-nav navbar-right"><li>
        <Link to='new_page'>
      Newmeetup
        </Link>
        </li></ul>
      
 </nav>
     
    </>
  );
};
