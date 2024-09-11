import React from "react";
import ProfileThumb from "./components/ProfileThumb";
import Icon from "icons";
import Input from "components/Input";

const App = () => {
  return (
    <div className="">
      <ProfileThumb src="/image/onion_koongya.jpg" alt="profile-img" />
      <Icon.Menu />
      <Input error="error" label="email" />
    </div>
  );
};

export default App;
