const person = {
  name: "John Smith",
  age: 18,
  gender: "Male",
  mobile: 12345678,
  theme: {
    width: "250px",
    backgroundColor: "purple",
    color: "pink",
  },
};
export default function AllInOneObj() {
  return (
    <>
      <div style={person.theme}>
        <h1>个人信息展示表格: </h1>
        <h3>
          {person.name} <span> is my son</span>
        </h3>
        <p>name: {person.name}</p>
        <p>age: {person.age}</p>
        <p>gender: {person.gender}</p>
        <p>mobile: {person.mobile}</p>
      </div>
    </>
  );
}
