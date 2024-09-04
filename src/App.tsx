import React from "react";
import Button from "./components/Button";
import ProfileThumb from "./components/ProfileThumb";

const App = () => {
  return (
    <div className="">
      <Button label={"dd"} />
      <ProfileThumb src="/image/onion_koongya.jpg" alt="profile-img" />
    </div>
  );
};

export default App;
