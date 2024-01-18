import React from "react";
import "./NavButton.scss";

const NavButton = ({ isNext, ...props }) => {
  const buttonClasses = ["nav-button__button"];
  if (isNext) {
    buttonClasses.push("next");
  } else {
    buttonClasses.push("prev");
  }
  return (
    <button {...props} className={buttonClasses.join(" ")}>
      {isNext ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g>
            <g>
              <path
                d="M2.071 13c-.552 0-1-.448-1-1s.448-1 1-1h7V4c0-.552.448-1 1-1s1 .448 1 1v8c0 .513-.386.936-.883.993L10.07 13h-8z"
                transform="rotate(-45 6.071 8)"
                fill="currentColor"
              ></path>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g>
            <g>
              <path
                d="M6.071 13c-.552 0-1-.448-1-1s.448-1 1-1h7V4c0-.552.448-1 1-1s1 .448 1 1v8c0 .513-.386.936-.883.993L14.07 13h-8z"
                transform="rotate(135 10.071 8)"
                fill="currentColor"
              ></path>
            </g>
          </g>
        </svg>
      )}
    </button>
  );
};

export default NavButton;
