import './Newmeet.css'
export const Newmeetupsession = () => {
  return (
    // <div className=" card">
    //   <h3 className="text-center">Add New Meetup </h3>
    //   <form>
    //     <label>UserName : </label>
    //     <input placeholder="Enter the User Name"></input>
    //   </form>
    // </div>
    
    
    <div className='container mt-5' style={{width:"45%"}}>
    <form >
  <div class="mb-3 ">
    <label for="Username" class="form-label">UserName</label>
    <input type="text" class="form-control" id="Username"  required/>
  </div>
  <div class="mb-3">
    <label for="MailID" class="form-label">EmailID</label>
    <input type="text" class="form-control" id="MailID" required/>
  </div>
  <div class="mb-3">
    <label for="Gender" class="form-label">Gender</label>
    <input type="text" class="form-control" id="Gender" required/>
  </div>
  <div class="mb-3">
    <label for="MailID" class="form-label">Mobile No:</label>
    <input type="number" class="form-control" id="MailID" required/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
    <label class="form-check-label" for="exampleCheck1" >Check me out</label>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    

  );
};
