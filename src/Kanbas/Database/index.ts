import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
export { courses, modules, assignments };

export type CourseType = {
  _id: string;
  name: string;
  subtitle: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

export interface DB {
  courses: CourseType[];
  modules: object;
  assignments: object;
}

const db: DB = {
  courses: courses,
  modules: modules,
  assignments: assignments,
};

export default db;
