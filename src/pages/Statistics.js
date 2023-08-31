import React, { useEffect, useState } from "react";
import StatisticsCard from "../components/StatisticsCard";

const Statistics = () => {
  const [conf, setConf] = useState(0);
  const [src, setSrc] = useState(0);
  const [dir, setDir] = useState(0);

  useEffect(() => {
    const treeData = JSON.parse(localStorage.getItem("treeData"));
    const numOfConfigFiles = treeData.filter((item) => !item.children).length;
    setConf(numOfConfigFiles);

    const srcItem = treeData.find((item) => item.label === "src");
    const numOfSrcFiles = srcItem ? srcItem.children.length : 0;
    setSrc(numOfSrcFiles);

    const numOfDirectories = treeData.filter((item) => item.children).length;
    setDir(numOfDirectories);
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <StatisticsCard
          title="Source Files"
          number={src}
          iconurl="https://cdn-icons-png.flaticon.com/128/8297/8297370.png"
        />
        <StatisticsCard
          title="Configuration Files"
          number={conf}
          iconurl="https://cdn-icons-png.flaticon.com/128/887/887997.png"
        />
        <StatisticsCard
          title="Directories"
          number={dir}
          iconurl="https://cdn-icons-png.flaticon.com/128/10061/10061767.png"
        />
      </div>
    </>
  );
};

export default Statistics;
