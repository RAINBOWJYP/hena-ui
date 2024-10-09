import Icon from "./lib/icons";
import {
  ChatBubble,
  Checkbox,
  Divider,
  Input,
  ProfileThumb,
} from "./lib/components";
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
        <Checkbox onChange={(e) => console.log(e.target.checked)}>
          행복
        </Checkbox>
        <Divider orientation="vertical" variant="middle" />
        <Checkbox onChange={(e) => console.log(e.target.checked)}>
          절망
        </Checkbox>
      </div>
      <ChatBubble
        message="안녕하세요"
        isSender={true}
        sendDate="2024-03-01"
        sender="koongya"
      />
      <ChatBubble
        message="네,, 안녕하세요"
        isSender={false}
        sendDate="2024-03-01"
        sender="koongya"
      />
    </div>
  );
};

export default App;
