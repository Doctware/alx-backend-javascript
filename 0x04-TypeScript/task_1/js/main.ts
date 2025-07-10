interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
 numberOfReport: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}, ${lastName}`;
}

const director: Director = {
  firstName: "Alani",
  lastName: "Yusuf",
  fullTimeEmployee: false,
  location: "Lagos, Nigeria",
  numberOfReport: 10,
}

console.log(director)
console.log(printTeacher("Olayode", "Yusuf"))


