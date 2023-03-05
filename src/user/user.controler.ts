export type User = {
  name: string;
  age: number;
};

const Johnny = { name: "Johnny", age: 34 };
export function getUser() {
  console.log("User returned");

  return Johnny;
}

