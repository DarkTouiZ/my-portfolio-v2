import NavBar from "../../component/navbar";
import ABOUT_ME from "../../component/about_me";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="m-5 p-3">
        <h1>
          “The thing that <span className="text-bold">you</span> can control is
          your thoughts”
        </h1>
      </div>
      <ABOUT_ME />
    </div>
  );
}
