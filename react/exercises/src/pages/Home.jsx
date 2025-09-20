import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

// 将数据移到组件外部，使其能被多个组件访问
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function Profile() {
  return (
    <img
      src="https://source.boomplaymusic.com/group10/M00/11/08/f29fcf61d01e48a2a9943db3bf57d7f6H3000W3000_464_464.jpg"
      alt="用户头像"
      style={{ width: "200px", marginBottom: "20px" }}
    />
  );
}

function Message() {
  // 直接返回表格组件，不需要额外定义App函数
  return (
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
}

export default function Home() {
  return (
    <section style={{ padding: "20px" }}>
      <h1>This is the Home Page!</h1>
      <h2>Welcome Home Bro!</h2>
      <p>这是来自 pages/Home.jsx 文件的内容！</p>

      <Profile />

      <div style={{ margin: "20px 0" }}>
        <input type="text" placeholder="请输入信息" />
      </div>

      {/* 添加Message组件，展示表格 */}
      <Message />
    </section>
  );
}
