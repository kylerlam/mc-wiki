// Sample List
smpList = [
  {
    Fruits: ["Apple", "Banana", "Strawberry"],
    Devices: ["Mac Book", "iPhone", "Hua Wei Mate X6"],
    People: ["Donald Trump", "Lei Jun", "Peter"],
  },
];

// 比较新手
smpList.forEach((items) => {
  // Fruits 数组
  // console.log(items.Fruits);

  console.log("新手小白:");
  // 再取一层
  items.Fruits.forEach((item) => {
    console.log(item);
  });
});

console.log("==================================");

// 更精简
smpList.forEach((items) => {
  console.log("更精简:");
  // Fruits 数组
  items.Fruits.forEach((item) => {
    console.log(item);
  });
});

console.log("==================================");
