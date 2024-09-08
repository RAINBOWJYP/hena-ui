import React from "react";
import FilledButton from "./components/FilledButton";
import ProfileThumb from "./components/ProfileThumb";

const App = () => {
  return (
    <div className="">
      <FilledButton label={"dd"} />
      <ProfileThumb src="/image/onion_koongya.jpg" alt="profile-img" />
    </div>
  );
};

export default App;
