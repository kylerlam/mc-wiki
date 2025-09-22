const today = new Date();
function formatDate(date) {
  // JavaScript 內建的國際化 API,把 日期 格式化成符合指定語言/地區習慣的字串
  return new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date);
}

export default function ToDoList() {
  return (
    <>
      <br />
      <p>
        // JavaScript 內建的國際化 API,把 日期
        格式化成符合指定語言/地區習慣的字串<br></br>
        const formatter = new Intl.DateTimeFormat("zh-CN"); <br></br>
        console.log(formatter.format(new Date())); <br></br>
      </p>
      <br />
      输出如下:<br></br>
      <h1>To Do List for {formatDate(today)}</h1>
    </>
  );
}
