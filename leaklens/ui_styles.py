"""Offline visual system for the LeakLens forensic workbench."""
# ruff: noqa: E501

FORENSIC_STYLES = """
<style>
:root {
  --canvas:#0b0e14; --recessed:#0d1117; --panel:#10141a; --rail:#151c18;
  --surface:#171d19; --surface-high:#202721; --line:#29322c; --line-strong:#3d4a41;
  --ink:#dde4dd; --muted:#9caaa0; --quiet:#68756c; --green:#64dca0;
  --green-strong:#30af77; --green-soft:#122a20; --critical:#fb7185; --warning:#f59e0b;
  --mono:ui-monospace,"SFMono-Regular",Consolas,"Liberation Mono",monospace;
  --sans:Inter,Geist,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}
html,body,[class*="css"] { font-family:var(--sans); }
html { scrollbar-gutter:stable; }
.stApp {
  color:var(--ink);
  background-color:var(--canvas);
  background-image:linear-gradient(rgba(100,220,160,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(100,220,160,.025) 1px,transparent 1px);
  background-size:32px 32px;
}
[data-testid="stHeader"] {
  height:3.25rem; background:rgba(11,14,20,.94); border-bottom:1px solid var(--line);
  backdrop-filter:blur(14px);
}
[data-testid="stToolbar"] { right:.75rem; }
.block-container { max-width:1440px; padding:4.4rem 2rem 5rem; }
.product-nav {
  display:flex; align-items:center; justify-content:space-between; gap:18px;
  min-height:48px; padding:0 0 14px; margin:0 0 28px; border-bottom:1px solid var(--line);
}
.brand { display:flex; align-items:center; gap:12px; }
.brand-mark,.sidebar-mark {
  width:38px; height:38px; border:1px solid rgba(100,220,160,.55); border-radius:12px;
  display:grid; place-items:center; background:var(--green-soft); box-shadow:none;
}
.brand-lens { width:17px; height:17px; border:2px solid var(--green); border-radius:50%; position:relative; }
.brand-lens:after {
  content:""; width:8px; height:2px; border-radius:3px; position:absolute; right:-6px;
  bottom:-3px; transform:rotate(45deg); background:var(--green);
}
.brand-name { color:var(--green); font-size:1.08rem; font-weight:780; letter-spacing:-.025em; }
.brand-sub { color:var(--muted); font:500 .68rem var(--mono); letter-spacing:.08em; text-transform:uppercase; margin-top:2px; }
.local-pill {
  display:flex; align-items:center; gap:8px; color:var(--muted); border:0; border-left:1px solid var(--line);
  background:transparent; padding:5px 0 5px 18px; border-radius:0;
  font:600 .69rem var(--mono); letter-spacing:.05em; text-transform:uppercase;
}
.local-dot { width:7px; height:7px; border-radius:50%; background:var(--green); box-shadow:0 0 0 4px rgba(100,220,160,.08); }
.workspace-intro { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:end; gap:28px; margin-bottom:26px; }
.eyebrow { color:var(--green); font:700 .68rem var(--mono); letter-spacing:.13em; text-transform:uppercase; }
.workspace-intro h1 { margin:7px 0 8px; color:var(--ink); font-size:clamp(1.8rem,3vw,2.65rem); line-height:1.05; letter-spacing:-.045em; }
.workspace-intro p { max-width:730px; margin:0; color:var(--muted); font-size:.9rem; line-height:1.65; }
.protocol-strip { display:flex; align-items:center; border:1px solid var(--line); border-radius:16px; background:var(--recessed); overflow:hidden; }
.protocol-step { min-width:122px; padding:13px 15px; border-left:1px solid var(--line); }
.protocol-step:first-child { border-left:0; }
.protocol-step b { display:block; color:var(--ink); font-size:.76rem; margin-top:3px; }
.protocol-step span { color:var(--quiet); font:700 .62rem var(--mono); letter-spacing:.09em; }
.protocol-step:last-child span { color:var(--green); }
.launchpad {
  display:grid; place-items:center; min-height:430px; margin-top:0; padding:46px 20px;
  border:1px solid var(--line); border-radius:24px; background:rgba(13,17,23,.9);
}
.ready-card { width:min(100%,720px); text-align:center; }
.ready-icon { width:68px; height:68px; display:grid; place-items:center; margin:0 auto 20px; border:1px solid var(--line-strong); border-radius:20px; background:var(--surface); }
.ready-icon .brand-lens { width:25px; height:25px; }
.ready-card h2 { margin:0 0 10px; color:var(--ink); font-size:1.75rem; letter-spacing:-.035em; }
.ready-card > p { max-width:560px; margin:0 auto; color:var(--muted); line-height:1.65; font-size:.88rem; }
.launch-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:28px; text-align:left; }
.launch-item { min-height:110px; border:1px solid var(--line); border-radius:16px; padding:15px; background:var(--panel); }
.launch-item span { color:var(--green); font:700 .62rem var(--mono); letter-spacing:.08em; }
.launch-item strong { display:block; margin:8px 0 5px; color:var(--ink); font-size:.84rem; }
.launch-item p { color:var(--quiet); font-size:.72rem; line-height:1.5; margin:0; }
.result-meta {
  display:flex; flex-wrap:wrap; gap:0; align-items:center; min-height:46px; margin:0 0 16px;
  border:1px solid var(--line); border-radius:14px; background:var(--recessed); overflow:hidden;
}
.result-meta span {
  color:var(--muted); padding:9px 14px; border:0; border-left:1px solid var(--line);
  border-radius:0; background:transparent; font:600 .68rem var(--mono);
}
.result-meta span:first-child { color:var(--ink); border-left:0; }
.verdict-panel { min-height:100%; border:1px solid var(--line); border-radius:16px; padding:20px; background:var(--panel); }
.verdict-panel .label { color:var(--green); font:700 .65rem var(--mono); letter-spacing:.1em; text-transform:uppercase; }
.verdict-panel h3 { margin:.5rem 0 .75rem; color:var(--ink); font-size:1.05rem; }
.verdict-panel p { color:var(--muted); line-height:1.6; margin:.35rem 0; font-size:.82rem; }
.deduction-row { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:12px 0; border-bottom:1px solid var(--line); }
.deduction-row:last-child { border:0; }.deduction-row span { color:var(--muted); font-size:.8rem; }
.deduction-row b { color:var(--critical); font:700 .76rem var(--mono); font-variant-numeric:tabular-nums; }
.finding-card { background:var(--panel); border:1px solid var(--line); border-left:3px solid; border-radius:14px; padding:1rem 1.15rem; margin:.65rem 0; }
.finding-card h3 { color:var(--ink); margin:.35rem 0 .55rem; font-size:1rem; }
.finding-card p { color:var(--muted); margin:.25rem 0; line-height:1.55; font-size:.82rem; }
.finding-meta { display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; font:700 .64rem var(--mono); letter-spacing:.08em; text-transform:uppercase; }
.detector { color:var(--quiet); }.affected { font-size:.78rem; }.severity { font-weight:800; }
[data-testid="stSidebar"] { background:var(--rail); border-right:1px solid var(--line-strong); }
[data-testid="stSidebarContent"] { padding-top:3.8rem; }
.sidebar-brand { display:flex; gap:12px; align-items:center; padding:0 2px 19px; border-bottom:1px solid var(--line); margin-bottom:18px; }
.sidebar-title { color:var(--green); font-size:1.15rem; font-weight:800; letter-spacing:-.035em; }
.sidebar-brand .mini { color:var(--muted); font:500 .63rem var(--mono); letter-spacing:.08em; text-transform:uppercase; margin-top:2px; }
.sidebar-step { color:var(--green); font:700 .63rem var(--mono); letter-spacing:.1em; text-transform:uppercase; margin:12px 0 2px; }
[data-testid="stSidebar"] label,[data-testid="stSidebar"] p { color:var(--muted); }
[data-testid="stSidebar"] [data-baseweb="select"] > div,
[data-testid="stSidebar"] [data-baseweb="input"] > div { background:var(--recessed); border-color:var(--line-strong); }
[data-testid="stFileUploader"] { border-radius:14px; background:var(--recessed); border-color:var(--line-strong); }
[data-testid="stTabs"] { border:1px solid var(--line); border-radius:18px; background:rgba(13,17,23,.72); overflow:hidden; }
[data-testid="stTabs"] [role="tablist"] { gap:0; padding:0 10px; border-bottom:1px solid var(--line); overflow-x:auto; }
[data-testid="stTabs"] button[role="tab"] { min-width:max-content; padding:13px 15px; color:var(--muted); font:650 .75rem var(--mono); }
[data-testid="stTabs"] button[aria-selected="true"] { color:var(--green); background:rgba(100,220,160,.06); }
[data-testid="stTabs"] [role="tabpanel"] { padding:18px; }
[data-testid="stExpander"] { border-color:var(--line); border-radius:13px; background:var(--recessed); }
.stButton > button,.stDownloadButton > button { border-radius:13px; font-weight:750; min-height:44px; border-color:var(--line-strong); }
.stButton > button[kind="primary"] { color:#07120d; background:var(--green); border-color:var(--green); box-shadow:none; }
.stButton > button[kind="primary"]:hover { background:#78e5af; border-color:#78e5af; }
[data-testid="stDataFrame"] { border:1px solid var(--line); border-radius:12px; overflow:hidden; }
@media(max-width:980px) {
  .workspace-intro { grid-template-columns:1fr; align-items:start; }
  .protocol-strip { width:100%; }
  .protocol-step { flex:1; min-width:0; }
}
@media(max-width:720px) {
  .block-container { padding:4rem 1rem 4rem; }
  .product-nav { margin-bottom:22px; }.brand-sub,.local-pill { display:none; }
  .workspace-intro h1 { font-size:1.8rem; }.protocol-strip { display:none; }
  .launchpad { min-height:380px; padding:32px 15px; border-radius:18px; }
  .launch-grid { grid-template-columns:1fr; }.launch-item { min-height:auto; }
  .result-meta { border-radius:12px; }.result-meta span { flex:1 1 50%; border-bottom:1px solid var(--line); }
  [data-testid="stTabs"] [role="tabpanel"] { padding:12px; }
}
@media(prefers-reduced-motion:reduce) {
  *,*::before,*::after { scroll-behavior:auto!important; transition:none!important; animation:none!important; }
}
</style>
"""
