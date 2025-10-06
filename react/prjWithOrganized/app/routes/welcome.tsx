import { Link } from "react-router";

export default function WelcomePage() {
  return (
    <div className="welcome">
      <header className="welcome__hero">
        <h1 className="welcome__title">Welcome to MC Wiki</h1>
        <p className="welcome__subtitle">一个轻量、组织良好的知识库与学习空间</p>
        <div className="welcome__cta">
          <Link to="/register" className="btn btn--primary">立即注册</Link>
          <Link to="/login" className="btn btn--ghost">已有账号？登录</Link>
        </div>
      </header>

      <section className="welcome__features">
        <div className="feature">
          <h3>结构清晰</h3>
          <p>按主题与项目组织内容，快速定位所需信息。</p>
        </div>
        <div className="feature">
          <h3>专注写作</h3>
          <p>简洁界面和快捷操作，让记录与分享更顺手。</p>
        </div>
        <div className="feature">
          <h3>随处访问</h3>
          <p>响应式设计，桌面与移动设备一致流畅。</p>
        </div>
      </section>

      <section className="welcome__footer-cta">
        <h2>现在开始你的知识之旅</h2>
        <Link to="/home" className="btn btn--primary">进入主页</Link>
      </section>
    </div>
  );
}

