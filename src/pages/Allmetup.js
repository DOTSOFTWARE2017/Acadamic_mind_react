import { Meetuplist } from "../components/Meetup/MeetupList";
function Allmeetup() {
  const Dummy_data = [
    {
      id: 1,
      img: "https://en.wikipedia.org/wiki/File:Bhadrakali_Amman,_Sivakasi2.jpg",
      About:
        "Sivakasi is a city and Municipal Corporation in Virudhunagar District in the Indian state of Tamil Nadu. This city is known for its firecracker, matchbox and printing industries. Sivakasi city alone meets about 90% fire cracker requirements of India. ",
      State: "Tamil Nadu",
      District: "Virudhunagar",
      RevenueDivision: "Sivakasi",
      Taluk: "Sivakasi",
      Foundedby: "Harikesari Parakkirama Pandian",
      Namedfor: "Lord Varanasi Shivan",
      Type: "Municipal Corporation",
      PIN: "626123, 626124, 626189, 626130",
      Telephonecode: "04562",
      Vehicleregistration: "TN 67, TN 84, TN 95",
    },
  ];

  return (
    <>
      <Meetuplist meetups={Dummy_data} />
    </>
  );
}

export default Allmeetup;
