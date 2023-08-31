import React, { useState } from "react";
import Tree from "./Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile, faCaretRight, faCaretDown , faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const TreeNode=({node})=>{
    const { children, label } = node;

    const [showChildren, setShowChildren] = useState(false);
  
    const handleClick = () => {
      setShowChildren(!showChildren);
    };
    return (
        <>
      <div onClick={handleClick} style={{ marginBottom: "10px" }}>
        {children && children.length > 0 ? (
          <FontAwesomeIcon icon={showChildren ? faCaretDown : faCaretRight} style={{  marginLeft:"-15px" ,marginRight: "5px",color: "#007bff" }}/>
        ) : (
          <FontAwesomeIcon icon={faFile} style={{ marginRight: "5px",color: "#a6c1ee" }} />
        )}
        {children && children.length > 0 && (
          <FontAwesomeIcon icon={showChildren ? faFolderOpen : faFolder} style={{color: "#a6c1ee"}}/>
        )}
        <span>{label}</span>
      </div>
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
      );
}
export default TreeNode;