function Card({ children, title }) {
  return (
    <>
      <div className="card-content">
        <div className="Avatar">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="煞笔资料">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="蜡笔小新">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={180}
          height={180}
        />
      </Card>

      <Card title="屁话">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
