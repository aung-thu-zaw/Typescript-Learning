function userInfo(
  name: string,
  currentYear: number,
  birthYear: number
): string {
  return `${name} is ${currentYear - birthYear} years old.`;
}
console.log(userInfo("Aung Thu Zaw", 2023, 2002));

function gender(is_male: boolean): string {
  return is_male ? "He is a male." : "She is a female.";
}
console.log(gender(true));

const person: {
  name: string;
  age: number;
  gender: string;
  hobbies: string[];
  role: [number, string]; // Tuple type
} = {
  name: "Aung Thu Zaw",
  age: 21,
  gender: "male",
  hobbies: [
    "listening to music",
    "watching movies",
    "learning new something about technology.",
  ],
  role: [2, "writer"],
};
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

enum type {
  GOLDEN = "GOLDEN",
  HUSKY = "HUSKY",
}
const pet = {
  name: "chilly",
  age: 1,
  gender: "male",
  type: type.GOLDEN,
};
console.log(pet.type);

type unionAliase = string | boolean;

function isAdmin(answer: unionAliase): boolean | string {
  return answer;
}

console.log(isAdmin("true"));

// Different Between undefined and void
function greetingOne(name: string): void {
  console.log("Hi, " + name);

  // return; void can use this syntax.
}

function greetingTwo(name: string): undefined {
  console.log("Hi, " + name);
  return;
}

greetingOne("Mr.Aung Thu Zaw");
greetingTwo("Mr.Aung Thu Zaw");

function add(num1: number, num2: number): number {
  return num1 + num2;
}

let combineValues: (num1: number, num2: number) => number;

combineValues = add;
console.log(combineValues(1, 2));

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(1, 2, (result) => {
  console.log(result);
});

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Server Error", 500);
