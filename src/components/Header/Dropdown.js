import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropMenu = (props) => {
  return (
    <div className="absolute right-5">
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-3xl"
        onClick={props.toggle}
      />
    </div>
  );
};
export default DropMenu;
