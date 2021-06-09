import React from "react";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

export function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropDownItem>My profile</DropDownItem>
      <DropDownItem>Settings</DropDownItem>
      <DropDownItem>Log out</DropDownItem>
    </div>
  );
}
