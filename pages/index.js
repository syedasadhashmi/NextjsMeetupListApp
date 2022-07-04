import MeetupList from "../components/meetups/MeetupList";
const DUMY_MEETUPS = [
  {
    id: "m1",
    title: "The First Meetup",
    image:
      "https://en.wikipedia.org/wiki/Wikipedia:Featured_pictures/Places/Architecture#/media/File:PK_Karachi_asv2020-02_img62_Frere_Hall.jpg",
    address: "Some Address 5, 12345 some city",
    discription: "This is a first Meetup!",
  },
  {
    id: "m2",
    title: "The Second Meetup",
    image:
      "https://en.wikipedia.org/wiki/Wikipedia:Featured_pictures/Places/Architecture#/media/File:PK_Karachi_asv2020-02_img62_Frere_Hall.jpg",
    address: "Some Address 22, 987665 some city",
    discription: "This is a second Meetup!",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMY_MEETUPS} />;
}
export default HomePage;
