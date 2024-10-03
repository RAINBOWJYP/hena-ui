import Icon from "./lib/icons";
import { Checkbox, Divider, Input, ProfileThumb } from "./lib/components";
import React, { useState } from "react";
const App = () => {
  const [value, setValue] = useState<string>("");
  const errorMsg = () => {
    if (value === "") return "값을 입력해주세요.";
    return "";
  };

  return (
    <div className="p-4">
      <Input
        error={errorMsg()}
        label="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="값을 입력해주세요."
      />
      <ProfileThumb src="/image/onion_koongya.jpg" alt="profile-img" />
      <Icon.Menu />
      <Divider variant="middle" />
      <div className="flex">
        <Checkbox id="happy" onChange={(e) => console.log(e.target.checked)}>
          행복
        </Checkbox>
        <Divider orientation="vertical" variant="middle" />
        <Checkbox id="sad" onChange={(e) => console.log(e.target.checked)}>
          절망
        </Checkbox>
      </div>
    </div>
  );
};

export default App;
