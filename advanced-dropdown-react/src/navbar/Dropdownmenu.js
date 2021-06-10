import React from "react";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

export function DropDownMenu({ submenus }) {
  console.log(submenus);
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      {submenus.map((e) => (
        <DropDownItem>{e}</DropDownItem>
      ))}
    </div>
  );
}
