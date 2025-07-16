interface DirectorInterface {
  workFromHome(): string;
  getCofeeBreak(): string;
  workDirectorTask(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCofeeBreak(): string;
  workTeacherTask(): string;
}

class Director implements DirectorInterface {

  workFromHome = (): string => "Working from home";
  getCofeeBreak = (): string => "Geetting cofee break";
  workDirectorTask = (): string => "Getting to director task";
}

class Teacher implements TeacherInterface {

  workFromHome = (): string => "Working from home";
  getCofeeBreak = (): string => "Cannot have a break";
  workTeacherTask = (): string => "Getting to teacher task";
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

const director = new Director();
console.log(director.workFromHome());

console.log(createEmployee(60));
console.log(createEmployee(2000));
console.log(createEmployee("$200"));
