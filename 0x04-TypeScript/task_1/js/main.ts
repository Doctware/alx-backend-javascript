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

const director: Director = {
  firstName: "Alani",
  lastName: "Yusuf",
  fullTimeEmployee: false,
  location: "Lagos, Nigeria",
  numberOfReport: 10,
}

console.log(director)
