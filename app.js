const DATA = window.DDL_DATA_MIN;

    const SCOPE_OF_WORK = [
      { t: "브랜드 기획 / 전략", d: "브랜드 캔버스 정의, 연간 사업계획, 월간 전략수립, 월간 손익현황, 제품 기획, 라인시트 작성" },
      { t: "SNS 콘텐츠 운영 (EGC)", d: "콘텐츠 전략 수립, 레퍼런스 아카이빙, 인스타·스레드 오리지널 콘텐츠 기획·촬영·보정·업로드, 콘텐츠 분석 로그 관리" },
      { t: "인플루언서 / 크리에이터 협업 (UGC)", d: "크리에이터 리서치·선정, 브랜더진 ZVZO 등 채널 연계 캠페인 생성, 협업 제안서 작성" },
      { t: "커머스 / 판매 인프라 운영", d: "입점몰 관리, 광고운영, 할인설정, 상세페이지 제작, 오프라인 팝업 기획 및 진행" },
      { t: "제품 / 생산 운영", d: "제품 기획 및 제작, 파우치·패키징 제작, 콜라보 협업" },
      { t: "운영 툴 / 시스템 구축", d: "노션 운영 관리 페이지 구축" },
    ];

    function Header({ onHome }) {
      return (
        <div className="header">
          <button className="pill" onClick={onHome} aria-label="home" />
        </div>
      );
    }

    function Home({ setPage }) {
      return (
        <>
          <div className="strip" onClick={() => setPage("projects")}>DDL PROJECTS</div>
          <div className="hline" />
          <div className="strip" onClick={() => setPage("about")}>ABOUT</div>
          <div className="hline" />
          <div className="strip" onClick={() => setPage("contact")}>CONTACT</div>
          <div className="hline" />
        </>
      );
    }

    function Projects({ onOpen }) {
      return (
        <>
          <div className="page-label label projects-label">/ DDL PROJECTS</div>
          <div className="page projects-page">
            {DATA.projects.map((p) => (
              <div className="proj-card" key={p.id} onClick={() => onOpen(p.id)}>
                <div className="proj-cover">
                  <div className="tex" />
                  <div className="name">{p.name}<br/><span style={{fontSize:27,opacity:0.85}}>{p.nameLine2}</span></div>
                </div>
                <div className="proj-btn">{p.name.toUpperCase()} {p.nameLine2.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </>
      );
    }

    function About() {
      return (
        <>
          <div className="page-label label projects-label">/ ABOUT</div>
          <div className="page container projects-page">
            <div className="about-body">
              <div className="about-sec">
                <div className="about-sec-label">/ MISSION</div>
                <p>스몰 브랜드의 최우선 과제는 ‘생존’입니다.</p>
                <p>생존은 리스크를 관리하는 것에서 시작됩니다. 팀 DDL은 여러 브랜드를 직접 운영하며 축적한 실무 데이터를 바탕으로 파트너사의 시행착오를 최소화하고, 불필요한 비용과 시간을 아낍니다.</p>
                <p>저희는 브랜드가 시장에 깊게 뿌리 내리고, 100명의 브랜드 팬분들과 함께 꽃을 피울 수 있도록 가장 현실적인 성장의 동력을 제공합니다.</p>
              </div>

              <div className="about-sec">
                <div className="about-sec-label">/ SCOPE OF WORK</div>
                {SCOPE_OF_WORK.map((s, i) => (
                  <div className="about-scope-item" key={i}>
                    <div className="t">{s.t}</div>
                    <div className="d">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }

    function Contact() {
      const c = DATA.contact;
      return (
        <>
          <div className="page-label label projects-label">/ CONTACT</div>
          <div className="page container projects-page">
            <div className="contact-body">
              <div className="row"><span>/ EMAIL</span><span><a href="mailto:dentdelion.ddl@gmail.com">dentdelion.ddl@gmail.com</a></span></div>
              <div className="row"><span>/ ADDRESS</span><span style={{textAlign:"right"}}>502, 71 Kimsangok-ro Jongno-gu Seoul Korea</span></div>
              <div className="row"><span>/ THREADS</span><span><a href="https://threads.com/@sh.tribe" target="_blank" rel="noreferrer">threads.com/@sh.tribe</a></span></div>
            </div>
          </div>
        </>
      );
    }

    function Detail({ id, onClose }) {
      const p = DATA.projects.find((x) => x.id === id);
      React.useEffect(() => {
        document.body.style.overflow = "hidden";
        const esc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", esc);
        return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
      }, []);
      if (!p) return null;
      const fullName = (p.name + " " + p.nameLine2).trim();
      const blocks = [
        { num: "01", tag: "Diagnosis", body: p.diagnosis },
        { num: "02", tag: "Solution", body: p.solution },
        { num: "03", tag: "Identity", body: p.identity },
      ];
      return (
        <div className="detail">
          <div className="detail-wrap">
            <button className="detail-close" onClick={onClose} aria-label="close">×</button>
            <div className="detail-inner">
              <div className="detail-title">/ {fullName.toUpperCase()}</div>

              <div className="detail-sec">
                <div className="detail-sec-label" style={{marginBottom:50}}>/ SCOPE OF WORK</div>
                <div className="detail-sec-body">
                  {SCOPE_OF_WORK.map((s, i) => (
                    <div className="about-scope-item" key={i} style={{marginBottom:18}}>
                      <div className="t" style={{color:"var(--blue)",marginBottom:4}}>{s.t}</div>
                      <div className="d" style={{color:"var(--ink)",lineHeight:1.8}}>{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-sec" style={{marginTop:50,marginBottom:0}}>
                <div className="detail-sec-label" style={{marginBottom:50}}>/ ARCHIVE</div>
              </div>

              <div className="ba-block" style={{marginTop:0}}>
                <div className="ba-label">BEFORE</div>
                <div className="ba-img" />
              </div>

              <div className="ba-block">
                <div className="ba-label">AFTER</div>
                <div className="ba-img" style={{background:p.cover}} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    function TweakPanel({ tweaks, setTweak }) {
      const accents = [
        { name: "Blue", value: "#1D1DFF" },
        { name: "Ink", value: "#0A0A0F" },
        { name: "Olive", value: "#5C6B3A" },
        { name: "Terracotta", value: "#C24E2F" },
      ];
      const bgs = [
        { name: "Cool", value: "#F4F4F6" },
        { name: "Warm", value: "#F5F1EA" },
        { name: "White", value: "#FFFFFF" },
      ];
      return (
        <div className="tweak-panel">
          <header><span>/ Tweaks</span><span>min</span></header>
          <div className="body">
            <div>
              <div className="tweak-group-label">/ Accent</div>
              <div className="swatches">
                {accents.map(a => (
                  <button key={a.value} className={`sw ${tweaks.accentColor===a.value?"active":""}`} style={{background:a.value}} onClick={()=>setTweak("accentColor", a.value)} title={a.name}/>
                ))}
              </div>
            </div>
            <div>
              <div className="tweak-group-label">/ Background</div>
              <div className="opt-row">
                {bgs.map(b => (
                  <button key={b.value} className={`opt ${tweaks.bgColor===b.value?"active":""}`} onClick={()=>setTweak("bgColor", b.value)}>{b.name}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="tweak-group-label">/ Density</div>
              <div className="opt-row">
                {["airy","compact"].map(d=>(
                  <button key={d} className={`opt ${tweaks.density===d?"active":""}`} onClick={()=>setTweak("density", d)}>{d}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    function App() {
      const [page, setPage] = React.useState(() => localStorage.getItem("ddl-min-page") || "home");
      const [openId, setOpenId] = React.useState(null);
      const [tweakMode, setTweakMode] = React.useState(false);
      const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

      React.useEffect(()=>{ localStorage.setItem("ddl-min-page", page); window.scrollTo(0,0); document.body.classList.toggle("home-locked", page === "home"); }, [page]);

      React.useEffect(() => {
        const r = document.documentElement;
        r.style.setProperty("--blue", tweaks.accentColor);
        r.style.setProperty("--bg", tweaks.bgColor);
        r.style.setProperty("--line", tweaks.accentColor + "59");
        if (tweaks.density === "compact") document.body.style.fontSize = "14px"; else document.body.style.fontSize = "";
      }, [tweaks]);

      React.useEffect(() => {
        const handler = (e) => {
          if (e.data?.type === "__activate_edit_mode") setTweakMode(true);
          if (e.data?.type === "__deactivate_edit_mode") setTweakMode(false);
        };
        window.addEventListener("message", handler);
        window.parent.postMessage({ type: "__edit_mode_available" }, "*");
        return () => window.removeEventListener("message", handler);
      }, []);

      const setTweak = (k, v) => {
        const next = { ...tweaks, [k]: v };
        setTweaks(next);
        window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
      };

      return (
        <>
          <Header onHome={() => { setOpenId(null); setPage("home"); }} />
          <div className="frame" key={page}>
            <div className="page-enter">
              {page === "home" && <Home setPage={setPage} />}
              {page === "projects" && <Projects onOpen={setOpenId} />}
              {page === "about" && <About />}
              {page === "contact" && <Contact />}
            </div>
          </div>
          {openId && <Detail id={openId} onClose={() => setOpenId(null)} />}
          {tweakMode && <TweakPanel tweaks={tweaks} setTweak={setTweak} />}
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);