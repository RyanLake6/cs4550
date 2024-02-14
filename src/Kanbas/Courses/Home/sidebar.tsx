import {
  FaFileImport,
  FaArrowCircleRight,
  FaBullseye,
  FaChartBar,
  FaBullhorn,
  FaBell,
  FaCircle,
  FaCalendar,
} from "react-icons/fa";

import "./index.css";

function SideBar() {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaFileImport className="me-2" />
              Import Existing Content
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaArrowCircleRight className="me-2" />
              Import From Commons
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaBullseye className="me-2" />
              Choose Home Page
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaChartBar className="me-2" />
              View Course Stream
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaBullhorn className="me-2" />
              New Announcement
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaChartBar className="me-2" />
              New Analytics
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button style={{ width: "100%", textAlign: "left" }}>
              <FaBell className="me-2" />
              View Course Notifications
            </button>
          </a>
        </li>
      </ul>

      <h4>To Do</h4>
      <hr />
      <a href="#" className="text-danger links">
        Grade A1 - ENV + HTML
        <span className="d-block small-sub-text text-secondary">
          100 points
          <FaCircle className="me-2" /> Sep 18 at 11:59 pm
        </span>
      </a>

      <hr />

      <h4 className="coming-up">
        Coming Up
        <span className="view-calendar">
          <p>
            <a
              href="#"
              className="text-danger links"
              style={{ fontSize: "0.6em" }}
            >
              View Calendar
              <FaCalendar className="me-2" />
            </a>
          </p>
        </span>
      </h4>

      <hr />

      <ul className="list-group">
        <li>
          <a href="#" className="text-danger links">
            Lecture
            <span className="d-block small-sub-text text-secondary">
              <i className="fa-regular fa-calendar"></i>
              CS4550.12631.202410 Sep 7 at 11:45 am
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="text-danger links">
            Lecture
            <span className="d-block small-sub-text text-secondary">
              <i className="fa-regular fa-calendar"></i>
              CS3200.3930.0002 Sep 10 at 3:25 pm
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="text-danger links">
            Lecture
            <span className="d-block small-sub-text text-secondary">
              <i className="fa-regular fa-calendar"></i>
              CS3940.3294320.32 Sep 12 at 9:15 am
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
