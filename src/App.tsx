import Icon from "./lib/icons";
import { Input, ProfileThumb } from "./lib/components";
import React from "react";
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
