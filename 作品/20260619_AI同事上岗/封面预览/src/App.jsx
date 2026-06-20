export function App() {
  return (
    <main className="preview">
      <article className="cover" aria-label="短视频封面预览">
        <img
          className="portrait"
          src="/zhangbandan-reference.png"
          alt="张半蛋真人口播形象"
        />

        <div className="photo-shade" aria-hidden="true" />

        <section className="copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            AI 职场观察
          </div>

          <h1>
            <span>上班最累的</span>
            <span className="number-line">
              <strong>3</strong> 件事
            </span>
          </h1>

          <div className="accent-copy">
            <span>AI</span>
            <span>开始接手了</span>
          </div>

          <p className="pain-points">找人 · 等人 · 求人</p>
        </section>

        <div className="identity">张半蛋</div>
      </article>
    </main>
  );
}
