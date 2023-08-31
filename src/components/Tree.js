import React from "react";
import TreeNode from "./TreeNode";

const Tree=(props)=>{
const {treeData}=props;

return(
    <ul>
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
)
}
export default Tree;