import React, { useEffect, useState } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import axios from "axios";
import Tree from "../components/Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [treeData, setTreeData] = useState([]);
  const [owner, setOwner] = useState("adrianhajdin");
  const [repo, setRepo] = useState("chat_application");
  const [searchedRepo, setSearchedRepo] = useState({
    owner: "adrianhajdin",
    repo: "chat_application",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetching children 
  async function fetchFolderContents(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  //building tree structure as per folder and its children
  async function buildTreeStructure(url) {
    const initialData = await fetchFolderContents(url);

    async function processFolder(folder) {
      const contents = await fetchFolderContents(folder.url);
      const children = [];

      for (const item of contents) {
        if (item.type === "dir") {
          const childFolder = await processFolder(item);
          children.push(childFolder);
        } else {
          children.push({
            key: item.name,
            label: item.name,
          });
        }
      }

      return {
        key: folder.name,
        label: folder.name,
        children,
      };
    }

    const treeData = await Promise.all(
      initialData.map(async (item) => {
        if (item.type === "dir") {
          return processFolder(item);
        } else {
          return {
            key: item.name,
            label: item.name,
          };
        }
      })
    );

    return treeData;
  }

  //search button click
  const handleSearch = () => {
    if (owner && repo) {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

      setLoading(true);
      setError(null);

      buildTreeStructure(apiUrl)
        .then((treeData) => {
          setTreeData(treeData);
          localStorage.setItem("treeData", JSON.stringify(treeData));
          setSearchedRepo({
            owner: owner,
            repo: repo,
          });
        })
        .catch((error) => {
          setError("Error fetching repository data.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    const defaultApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;
    setLoading(true);
    setError(null);
    buildTreeStructure(defaultApiUrl)
      .then((treeData) => {
        setTreeData(treeData);
        localStorage.setItem("treeData", JSON.stringify(treeData));
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="m-4 p-6 md:p-8 rounded-lg w-[90%] md:w-[30%] h-[15%] border border-gray-300 shadow-md bg-white">
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex flex-col">
              <label
                htmlFor="owner"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Owner's Name
              </label>
              <input
                type="text"
                placeholder="Owner's Name"
                className="px-2 py-1 border rounded-md"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="owner"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Repo Name
              </label>
              <input
                type="text"
                placeholder="Repository Name"
                className="px-2 py-1 border rounded-md"
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md m-4 w-1/2"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? "Loading..." : <><FontAwesomeIcon icon={faSearch} className="mr-2" /> Search</>}
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 p-6 md:p-8 rounded-lg w-[90%] md:w-[60%] max-w-[100%] border border-gray-300 bg-white shadow-md">
          <div className="flex flex-col md:flex-row justify-center items-center mt-2 mb-6">
            <img
              src="https://t3.ftcdn.net/jpg/04/52/18/48/240_F_452184858_iZXfI1h2BdKB5i9cDwpu9Ue1il8Mxxfq.jpg"
              className="w-8 h-8 md:w-12 md:h-12"
              alt="Logo"
            />
            <div className="text-lg md:text-2xl font-bold overflow-hidden whitespace-nowrap md:ml-4">
              {searchedRepo?.owner}/{searchedRepo?.repo}
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center mt-6">
              <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500"></div>
              <span className="ml-2"></span>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-4">{error}</div>
          ) : (
            <Tree treeData={treeData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
