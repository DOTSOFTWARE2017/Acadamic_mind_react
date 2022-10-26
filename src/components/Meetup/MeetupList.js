import { Meetupitem } from "./Meetupitem";

 export const Meetuplist = (props) => {
  return (
    <>
      {props.meetups.map((meetup) => (
        <Meetupitem
          
          State={meetup.State}
          About={meetup.About}
          District={meetup.District}
        />
      ))}
    </>
  );
};
