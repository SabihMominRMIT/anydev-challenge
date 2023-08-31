import React, { useState } from "react";
import StatisticsCard from "../components/StatisticsCard";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TestCases = () => {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      desc: "test 1",
      assignee: "SM",
      summary: "Add property",
      status: "TO-DO",
    },
    {
      id: 1,
      desc: "test 1",
      assignee: "SM",
      summary: "Edit property",
      status: "TO-DO",
    },
    {
      id: 2,
      desc: "test 2",
      assignee: "AB",
      summary: "Delte property",
      status: "TO-DO",
    },
    {
      id: 3,
      desc: "test 3",
      assignee: "SM",
      summary: "search property",
      status: "TO-DO",
    },
  ]);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <div className="flex flex-wrap">
        <StatisticsCard
          title="Total"
          number={10}
          iconurl="https://cdn-icons-png.flaticon.com/128/8297/8297370.png"
        />
        <StatisticsCard
          title="Passed"
          number={6}
          iconurl="https://cdn-icons-png.flaticon.com/128/887/887997.png"
        />
        <StatisticsCard
          title="Failed"
          number={4}
          iconurl="https://cdn-icons-png.flaticon.com/128/10061/10061767.png"
        />
      </div>
      <div className="m-4 p-4 md:p-8 rounded-lg border border-gray-300 shadow-md bg-white">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mb-4">
          <input
            type="text"
            className="px-3 py-2 border rounded-lg w-full md:w-auto mb-2 md:mb-0 md:mr-2"
            placeholder="Search Test ID"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg w-1/2 md:w-auto"
            onClick={onOpenModal}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Test Case
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left font-semibold text-slate-700">
            <tbody>
              {tableData?.map((obj) => {
                return (
                  <tr>
                    <td className="border-b p-2">
                      <div className=" rounded-full w-8 h-8 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm mr-3">
                        {obj?.assignee}
                      </div>
                    </td>
                    <td className="border-b p-2 ">{obj?.desc}</td>
                    <td className="border-b p-2">{obj?.summary}</td>
                    <td className="border-b p-2">{obj?.status}</td>
                    <td className="border-b p-2">
                      <button className="text-blue-500 mr-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="text-red-500">
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <div className="p-4 text-slate-500">
          <h2 className=" mb-4 text-center font-bold text-2xl text-slate-500">
            Add a New Test Case
          </h2>
          <div className="mb-4">
            <label className="block font-semibold">Test Case Description</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Test Category ID</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold">
              Test Environment Description
            </label>
            <textarea
              className="border p-2 w-full rounded resize-none"
              rows="3"
              placeholder="Enter environment description"
            ></textarea>
          </div>
          <div className="flex flex-col md:flex-row justify-center mt-8">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded mb-2 md:mb-0 md:mr-2">
              Save
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded"
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TestCases;
