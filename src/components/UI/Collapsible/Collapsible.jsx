import React, { useState } from "react";
import classes from "./Collapsible.module.scss";
/**
 * React component representing a collapsible section.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.label - The label or heading for the collapsible section.
 * @param {any[]} props.content - An array representing the content of the collapsible section.
 * @returns {JSX.Element} JSX element representing the Collapsible component.
 * @example
 * // Example usage of Collapsible component
 * <Collapsible label="Section Title" content={[item1, item2, item3]} />
 */
const Collapsible = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerClasses = [classes.collapsibleContainer];
  if (isOpen) {
    containerClasses.push(classes._active);
  }
  function collapseContent() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={classes.collapsible}>
      <div className={containerClasses.join(" ")}>
        <h2 onClick={collapseContent}>{label}</h2>
        <div className={classes.collapsibleContent}>
          <ul className={classes.collapsibleContentContainer}>
            {content && content.map((v) => <li>{v}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
