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

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface sudentConstructor {
  new (firstName: string, lastName: string): studentClassInterface;
}

class StudentClass implements studentClassInterface {
  private firstName: string;
  private lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  workOnHomework = (): string => "currently working";
  displayName = (): string =>{
    return `${this.firstName}`
  }


}

console.log(director)
console.log(printTeacher("Olayode", "Yusuf"))
console.log("====================================")
const student = new StudentClass("Olayode", "Yusuf")
console.log(student)
console.log(student.workOnHomework());
console.log(student.displayName());
