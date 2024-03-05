/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <span style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ marginRight: "10px" }}>Add New Course</h5>
        <button onClick={addNewCourse} className="btn btn-success">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-warning">
          Update
        </button>
      </span>
      <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">
            Course Name
          </label>
          <input
            id="courseName"
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseSubtitle" className="form-label">
            Subtitle
          </label>
          <input
            id="courseSubtitle"
            value={course.subtitle}
            className="form-control"
            onChange={(e) => setCourse({ ...course, subtitle: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseNumber" className="form-label">
            Course Number
          </label>
          <input
            id="courseNumber"
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseStartDate" className="form-label">
            Start Date
          </label>
          <input
            id="courseStartDate"
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseEndDate" className="form-label">
            End Date
          </label>
          <input
            id="courseEndDate"
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
      </form>
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}{" "}
                  </Link>
                  <p className="card-text">{course.subtitle}</p>
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
