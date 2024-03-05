import React, { useState } from "react";
import "./index.css";
import { ModuleLesson, modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      <div className="button-container">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules only</option>
          <option>UnPublish All Modules</option>
        </select>
        <button className="red-button">+ Module</button>
        <button>
          <FaEllipsisV className="me-2" />
        </button>
      </div>
      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex flex-grow-1">
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
              className="form-control me-2"
              style={{ border: "1px solid black" }}
            />
            <textarea
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
              className="form-control"
              style={{ border: "1px solid black", height: "8px" }}
            />
          </div>
          <div className="ms-2">
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <button
              className="btn btn-warning"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
          </div>
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                className="btn btn-warning"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>

              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: ModuleLesson, idex: number) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}: ({lesson.description})
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
