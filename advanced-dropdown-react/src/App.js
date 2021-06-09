import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

import { Navbar } from "./navbar/Navbar";
import { Navitem } from "./navbar/Navitem";
import { DropDownMenu } from "./navbar/Dropdownmenu";

function App() {
  return (
    <Navbar>
      <Navitem icon={<BellIcon />}></Navitem>
      <Navitem icon={<MessengerIcon />}></Navitem>

      <Navitem icon={<CaretIcon />}>
        <DropDownMenu></DropDownMenu>
      </Navitem>
    </Navbar>
  );
}

export default App;
