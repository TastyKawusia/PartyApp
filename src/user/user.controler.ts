export type User = {
  name: string;
  age: number;
};

export const Johnny: User = { name: "Johnny", age: 34 };
export function getUser() {
  console.log("User returned");

  return Johnny;
}
