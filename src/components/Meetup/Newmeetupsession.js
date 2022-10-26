import "./Newmeet.css";
import { useRef } from "react";
 function Newmeetupsession () {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const genderInputRef = useRef();
  const mobileInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;

    const meetupData = {
      name: enteredUsername,
      email: enteredEmail,
      gender: enteredGender,
      mobile: enteredMobile,
    };

    console.log(meetupData);
  }
  return (
    <div className="container mt-5" style={{ width: "45%" }}>
      <form onSubmit={submitHandler}>
        <div className="mb-3 ">
          <label htmlfor="Username" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="Username"
            required
            ref={nameInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="MailID" className="form-label">
            EmailID
          </label>
          <input type="text" className="form-control" id="MailID" required  ref={emailInputRef}/>
        </div>
        <div className="mb-3">
          <label htmlfor="Gender" className="form-label">
            Gender
          </label>
          <input type="text" className="form-control" id="Gender" required  ref={genderInputRef}/>
        </div>
        <div className="mb-3">
          <label htmlfor="MobileNo" className="form-label">
            Mobile No:
          </label>
          <input type="number" className="form-control" id="MobileNo" required ref={mobileInputRef}/>
        </div>
        <div className="mb-3 form-check" htmlfor="check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check"
            required
          />
          <label className="form-check-label" htmlfor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newmeetupsession;
