/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const isTodo = s => typeof s === "string" && s.startsWith("?");
const plain = s => isTodo(s) ? s.slice(1) : String(s);
const tx = s => isTodo(s) ? `<span class="todo" title="Placeholder. Send the real detail.">${esc(s.slice(1))}</span>` : esc(s);
const ui = n => ICONS.ui[n] || "";
const logo = k => {
  if (k.startsWith("t:")) return `<span class="lg lg-t">${ui(k.slice(2))}</span>`;
  const b = ICONS.brands[k];
  if (!b) return "";
  return b.img ? `<img class="lg" data-k="${k}" src="${b.img}" alt="">` : `<span class="lg">${b.svg}</span>`;
};
function link(href, inner, cls, label) {
  const aria = label ? ` aria-label="${esc(label)}" title="${esc(label)}"` : "";
  if (!href) return `<a class="${cls}" href="#" data-missing="${esc(label || "This")}"${aria}>${inner}</a>`;
  const ext = /^https?:/.test(href) ? ` target="_blank" rel="noopener"` : "";
  return `<a class="${cls}" href="${esc(href)}"${ext}${aria}>${inner}</a>`;
}
const VERIFIED = (() => {
  const d = (ICONS.ui.verified.match(/<path d="([^"]+)"/) || [])[1] || "";
  return `<svg class="verified" viewBox="0 0 24 24" role="img" aria-label="Verified"><circle cx="12" cy="12" r="6.5" fill="#fff"/><path fill="var(--badge)" d="${d}"/></svg>`;
})();

function logoTile(l, alt, extra = "") {
  if (l.img) return `<div class="exp-logo is-img${l.border ? " bordered" : ""}${extra}"><img src="${ASSETS[l.img] || l.img}" alt="${esc(alt)} logo"></div>`;
  if (l.icon) return `<div class="exp-logo${extra}" style="background:${l.bg}">${ui(l.icon)}</div>`;
  return `<div class="exp-logo${extra}" style="background:${l.bg}">${esc(l.text)}</div>`;
}

/* ---------- Banner (swap for a photo later) ---------- */
const BANNER = `<svg viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <linearGradient id="bnG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1424"/><stop offset=".55" stop-color="#132a4d"/><stop offset="1" stop-color="#0a1322"/></linearGradient>
    <radialGradient id="bnL" cx=".5" cy=".58" r=".5"><stop offset="0" stop-color="#3d74d6" stop-opacity=".5"/><stop offset="1" stop-color="#3d74d6" stop-opacity="0"/></radialGradient>
    <pattern id="bnD" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#6f8fc4" opacity=".35"/></pattern>
  </defs>
  <rect width="1200" height="380" fill="url(#bnG)"/>
  <rect width="1200" height="380" fill="url(#bnD)"/>
  <ellipse cx="600" cy="220" rx="560" ry="200" fill="url(#bnL)"/>
  <g stroke="#7fa6e6" stroke-opacity=".35" stroke-width="1.5" fill="#9cbcf0" fill-opacity=".55">
    <path d="M70 300 L150 250 L120 170 M150 250 L240 280 L300 210 M240 280 L210 340" fill="none"/>
    <circle cx="70" cy="300" r="5"/><circle cx="150" cy="250" r="7"/><circle cx="120" cy="170" r="4"/><circle cx="240" cy="280" r="6"/><circle cx="300" cy="210" r="4"/><circle cx="210" cy="340" r="4"/>
  </g>
  <g fill="#4f8fe8" fill-opacity=".28">
    <rect x="930" y="250" width="26" height="90" rx="3"/><rect x="968" y="215" width="26" height="125" rx="3"/><rect x="1006" y="180" width="26" height="160" rx="3"/>
    <rect x="1044" y="140" width="26" height="200" rx="3"/><rect x="1082" y="96" width="26" height="244" rx="3"/>
  </g>
  <text x="36" y="52" font-family="Geist Mono, ui-monospace, monospace" font-size="17" letter-spacing="4" fill="#a9bde0">LONDON / ACCRA</text>
  <text x="600" y="214" text-anchor="middle" font-family="Geist, system-ui, sans-serif" font-weight="800" font-size="70" letter-spacing="-2" fill="#ffffff">RETRIEVE. RANK. EXPLAIN.</text>
</svg>`;

/* ---------- Mock screenshots (replace with real screenshots) ---------- */
const MOCKS = {
  green: () => `<div class="m mc">
      <div class="mc-top">
        <div class="mc-brand"><span class="mc-logo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"/><path d="M5 19l7-7"/></svg></span><b>ClimateClaim</b><em>ESG</em></div>
        <div class="mc-how"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>How are sources weighted?</div>
      </div>
      <div class="mc-body">
        <aside class="mc-side">
          <div class="mc-tabs"><span class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>Claims</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/></svg>Compare</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Tracker</span></div>
          <div class="mc-co"><small>Company</small><div class="mc-sel"><img class="mc-sel-logo" src="${ASSETS.bp}" alt="">BP<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></div></div>
          <div class="mc-claim"><h6><i></i>Biodiversity <span class="mc-pill">Well substantiated</span></h6><p>“We achieved all three targets for 2025, with all new in-scope projects…</p><small>GreenSignal: <b>0.10</b></small></div><div class="mc-claim"><h6><i></i>Emissions Reduction <span class="mc-pill">Well substantiated</span></h6><p>“We made significant progress, reducing freshwater withdrawal by 15% and…</p><small>GreenSignal: <b>0.17</b></small></div><div class="mc-claim"><h6><i></i>Emissions Reduction <span class="mc-pill">Well substantiated</span></h6><p>“In India we are working with an NGO in Silvassa to build infrastructure to…</p><small>GreenSignal: <b>0.30</b></small></div><div class="mc-claim"><h6><i></i>Other <span class="mc-pill">Well substantiated</span></h6><p>“In 2025 the number of reported oil spills increased to 110 compared with…</p><small>GreenSignal: <b>0.26</b></small></div><div class="mc-claim w on"><h6><i></i>Net Zero <span class="mc-pill w">Weakly substantiated</span></h6><p>“Our 2025 engagement with selected NOJV partners focused on the topics o…</p><small>GreenSignal: <b>0.65</b></small></div><div class="mc-claim w"><h6><i></i>Net Zero <span class="mc-pill w">Weakly substantiated</span></h6><p>“Our 2025 analysis used a suite of external scenarios from various…</p></div><div class="mc-count">20 claims</div>
        </aside>
        <section class="mc-main">
          <div class="mc-head"><span class="mc-tile"><img src="${ASSETS.bp}" alt=""></span><div><b>BP</b><small>NET ZERO</small></div><span class="mc-year"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16"/></svg>Report year: <b>2025</b></span></div>
          <div class="mc-wrap">
            <div class="mc-row">
              <div>
                <p class="mc-quote">“Our 2025 engagement with selected NOJV partners focused on the topics of net zero operations, biodiversity and human rights.”</p>
                <div class="mc-src">Source: <b>BP Sustainability Report 2025, p.11</b></div>
                <div class="mc-grid">
                  <div class="mc-crit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/></svg><div><b>Target</b><small>Not stated</small></div><span class="x">✕</span></div>
                  <div class="mc-crit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg><div><b>Deadline</b><small>2025</small></div><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span></div>
                  <div class="mc-crit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/></svg><div><b>Scope</b><small>Not stated</small></div><span class="x">✕</span></div>
                  <div class="mc-crit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/></svg><div><b>Measurable</b><small>Not stated</small></div><span class="x">✕</span></div>
                </div>
              </div>
              <div class="mc-score"><small>GREENSIGNAL</small><div class="n">0.65</div><div class="l">Moderate greenwashing signal</div>
                <div class="mc-dots"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i><i></i><i></i></div>
                <div class="mc-scale"><span>Low</span><span>Moderate</span><span>High</span></div>
                <span class="mc-pill w">Weakly substantiated</span></div>
            </div>
            <div class="mc-hr"></div>
            <div class="mc-h">RATIONALE</div>
            <p class="mc-txt">The claim is classified as weakly substantiated because it mentions a specific engagement timeline of 2025 but lacks detailed quantitative commitments or specific metrics related to net zero operations, biodiversity, and human rights. The absence of concrete figures or defined goals weakens the overall credibility of the claim.</p>
            <div class="mc-chips"><span>specific engagement year: 2025</span><span>no quantified commitments</span><span>no specific metrics provided</span></div>
            <div class="mc-hr"></div>
            <div class="mc-h">DECISION TRACE<span>system reasoning, each step grounded in evidence</span></div>
            <div class="mc-step"><i>1</i><div><p><b>Engagement Year Present</b>: The claim states, ‘Our 2025 engagement with selected NOJV partners…’.</p><small>The presence of a specific year indicates a timeline for engagement.</small></div><span class="mc-tag s">supports</span></div><div class="mc-step"><i>2</i><div><p><b>Lack of Quantified Commitments</b>: The claim does not provide any specific numbers or quantified commitments regarding net zero operations, biodiversity, or human rights.</p><small>Absence of specific metrics or commitments weakens the substantiation of the claim.</small></div><span class="mc-tag">neutral</span></div><div class="mc-step"><i>3</i><div><p><b>No Defined Goals</b>: The claim mentions topics of focus but does not define any specific goals or metrics related to those topics.</p><small>The lack of defined goals contributes to the weak substantiation of the claim.</small></div><span class="mc-tag">neutral</span></div>
          </div>
        </section>
      </div>
    </div>`,
  paper: () => `<div class="m m-paper">
      <div class="mp-top"><span>PREPRINT · ZENODO</span><span>2026</span></div>
      <div class="mp-title">Retrieval or Ranking?</div>
      <div class="mp-sub">Diagnosing the Dominant Bottleneck in a Hybrid Two-Staged Recommender on a Sparse Product Catalogue</div>
      <div class="mp-auth">Emmanuel Boakye · Loughborough University</div>
      <div class="mp-flow"><span>Catalogue</span><i>→</i><span>Retrieval</span><i>→</i><span>Ranking</span><i>→</i><span class="k">Top-K</span></div>
      <div class="mp-abs">ABSTRACT</div><div class="mp-lines"><i></i><i></i><i></i><i></i><i style="width:72%"></i></div>
    </div>`,
  edgar: () => `<div class="m mx">
      <div class="mx-top">
        <div class="mx-brand"><span class="mx-logo"><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="3.5" y="4" width="17" height="19" rx="3" fill="#fff"/><path d="M6.5 15l3-4 3 2.4 4-5.4" fill="none" stroke="#e5484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="19" r="4.6" fill="#2f6fe4" stroke="#0f1b33" stroke-width="1.6"/><circle cx="19" cy="19" r="2.2" fill="#9cc3ff"/><path d="M22.3 22.3l3 3" stroke="#2f6fe4" stroke-width="2.4" stroke-linecap="round"/></svg></span><b>EDGAR Risk</b><span class="t">Explainable SEC filing risk intelligence</span></div>
        <div class="mx-topr"><span class="mx-live"><i></i>Live</span><span class="mx-gh"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>GitHub</span></div>
      </div>
      <div class="mx-body">
        <aside class="mx-side">
          <div class="mx-lab">COMPANY OR TICKER</div>
          <div class="mx-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg>Search by name or ticker</div>
          <div class="mx-co"><img class="mx-cl" src="${ASSETS.msft}" alt=""><div><b>Microsoft Corporation</b><small>MSFT | NASDAQ</small><small><span class="mx-flag"></span><b style="display:inline;font-size:inherit">US</b></small><small class="s">Cloud &amp; Software</small></div></div>
          <div class="mx-lab mt">FILING TYPE</div>
          <div class="mx-seg"><span class="on"><b>8-K</b><small>Current</small></span><span><b>10-Q</b><small>Quarterly</small></span><span><b>10-K</b><small>Annual</small></span></div>
          <div class="mx-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>Analyze latest filing</div>
        </aside>
        <section class="mx-main">
          <div class="mx-head"><img class="mx-cl lg" src="${ASSETS.msft}" alt=""><div>
            <div class="mx-h1">MICROSOFT CORP <em>MSFT</em></div>
            <div class="mx-filed">Filed: 14 May 2026 <span class="mx-flag"></span>US <i>|</i> <span class="lnk">SEC Filing</span></div>
          </div></div>
          <div class="mx-kpis">
            <div class="mx-kpi"><span class="mx-ic g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1.8 2 5.2 2 7 0"/><path d="M9 9.5h.01M15 9.5h.01" stroke-width="2.6"/></svg></span><div><small>Sentiment</small><p><b class="g">Positive</b>+1.00 score</p></div></div>
            <div class="mx-kpi"><span class="mx-ic g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/></svg></span><div><small>Risk Level</small><p><b class="g">Low</b>0.00 per 1k words</p></div></div>
            <div class="mx-kpi"><span class="mx-ic p"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 0 1 4.8 1c0 1.7-2.4 2.2-2.4 3.7"/><path d="M12 17h.01" stroke-width="2.6"/></svg></span><div><small>Uncertainty</small><p><b class="p">11.74</b>per 1k words</p></div></div>
          </div>
          <div class="mx-sum"><h6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.3l2.4 2.4 4.6-4.9"/></svg>Executive Summary</h6>
            <p><b>MICROSOFT CORP</b>’s <b>8-K</b> filing from <b>2026-05-14</b> is scored as <b>positive</b> with <b>low risk</b>.</p>
            <p>The sentiment score is 1.0. The strongest matched terms are: may, <b>growth</b>, <b>subject to</b>.</p>
            <p>The risk score is 0.0 and the uncertainty score is 11.7417. Review the cited excerpts for the source language.</p></div>
          <div class="mx-trend">
            <div class="mx-th"><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>RISK TREND</b><small>6 recent filings</small></div>
            <div class="mx-chart"><svg viewBox="0 0 640 210" aria-hidden="true"><g stroke="#eceff3" stroke-width="1"><line x1="44" y1="36" x2="628" y2="36"/><line x1="44" y1="76" x2="628" y2="76"/><line x1="44" y1="116" x2="628" y2="116"/></g><line x1="44" y1="20" x2="44" y2="160" stroke="#cfd6df" stroke-width="1.4"/><polyline points="44,160 155,160 266,160 377,160 488,160 599,160" fill="none" stroke="#2f6fe4" stroke-width="3.2" stroke-linecap="round"/><circle cx="44" cy="160" r="4.6" fill="#22c55e" stroke="#fff" stroke-width="1.6"/><circle cx="155" cy="160" r="4.6" fill="#22c55e" stroke="#fff" stroke-width="1.6"/><circle cx="266" cy="160" r="4.6" fill="#22c55e" stroke="#fff" stroke-width="1.6"/><circle cx="377" cy="160" r="4.6" fill="#22c55e" stroke="#fff" stroke-width="1.6"/><circle cx="488" cy="160" r="4.6" fill="#22c55e" stroke="#fff" stroke-width="1.6"/><circle cx="599" cy="160" r="6" fill="#22c55e" stroke="#fff" stroke-width="1.6"/><text x="44" y="181" font-size="12.5" text-anchor="middle">8-K</text><text x="44" y="199" font-size="12.5" text-anchor="middle">May 26</text><text x="155" y="181" font-size="12.5" text-anchor="middle">8-K</text><text x="155" y="199" font-size="12.5" text-anchor="middle">Jun 26</text><text x="266" y="181" font-size="12.5" text-anchor="middle">8-K</text><text x="266" y="199" font-size="12.5" text-anchor="middle">Jul 26</text><text x="377" y="181" font-size="12.5" text-anchor="middle">8-K</text><text x="377" y="199" font-size="12.5" text-anchor="middle">Sept 26</text><text x="488" y="181" font-size="12.5" text-anchor="middle">8-K</text><text x="488" y="199" font-size="12.5" text-anchor="middle">Oct 26</text><text x="599" y="181" font-size="12.5" text-anchor="middle">8-K</text><text x="599" y="199" font-size="12.5" text-anchor="middle">Oct 26</text></svg></div>
            <div class="mx-sel"><small>SELECTED FILING</small><b class="t">8-K · 28 Oct 2026</b>
              <div><span>Risk score</span><span>0.00</span></div><div><span>Risk level</span><span class="g">Low</span></div>
              <div><span>Uncertainty</span><span>2.16</span></div><div><span>Top driver</span><span>No dominant driver</span></div></div>
          </div>
          <div class="mx-exc">CITED EXCERPTS<small>5 found</small></div>
        </section>
      </div>
    </div>`,
  vellum: () => `<div class="m m-vellum">
      <div class="mv-bar"><b>Vellum-NLQ</b><span>Claims workspace</span></div>
      <div class="mv-body">
        <div class="mv-q">Average claim value by provider last quarter?</div>
        <div class="mv-sql"><b>SELECT</b> provider, <b>AVG</b>(amount)
<b>FROM</b> claims <b>WHERE</b> quarter = 'Q3'
<b>GROUP BY</b> provider;</div>
        <div class="mv-ans"><i style="height:3cqw"></i><i style="height:5cqw"></i><i style="height:4cqw"></i><i style="height:6.5cqw"></i><span><em>Governed SQL</em><em>Explained</em></span></div>
      </div>
    </div>`,
  lex: () => `<div class="m m-lex">
      <div class="ml-doc"><h5>A BILL</h5>
        <p>An Act to provide for the regulation of <mark>digital platforms operating in Ghana</mark> and for related matters.</p>
        <p>The Minister may, <mark class="r">without prior notice</mark>, direct a platform to remove content deemed <mark>harmful to public order</mark>.</p>
      </div>
      <div class="ml-side"><b>Risk flags</b><span>Rights impact</span><span class="a">Broad discretion</span><span class="a">Vague term</span></div>
    </div>`
};
const shot = p => p.image ? `<div class="shot is-img"><img src="${p.image}" alt="${esc(p.title)} screenshot" loading="lazy" decoding="async"></div>` : `<div class="shot">${MOCKS[p.mock]()}</div>`;

/* ---------- Music player bits ---------- */
const WAVE = Array.from({ length: 40 }, (_, i) => {
  const h = [38, 62, 46, 88, 54, 30, 72, 100, 44, 66, 34, 80][(i * 7) % 12];
  const dur = (0.7 + ((i * 13) % 9) / 10).toFixed(2);
  const thick = i % 5 === 2 ? " class=\"t\"" : "";
  return `<i${thick} style="height:${h}%;--d:${dur}s;--dl:-${((i * 17) % 10) / 10}s"></i>`;
}).join("");

/* ---------- Views ---------- */
function vHero() {
  const s = SITE;
  const avatar = s.avatar ? `<img src="${s.avatar}" alt="${esc(s.name)}">` : `<span>${esc(s.initials)}</span>`;
  return `<section class="hero">
    <div class="banner">${ASSETS.banner ? `<img src="${ASSETS.banner}" alt="Laptop open on a café table beside an iced coffee">` : BANNER}</div>
    <div class="hero-row">
      <div class="avatar">${avatar}</div>
      <div class="clocks"><div>YOUR <b data-clock="local">--:--:--</b></div><div>MY <b data-clock="mine">--:--:--</b></div><div class="clock-loc" id="clockLoc" title="${esc(s.myPlace)}"></div></div>
    </div>
    <h1 class="name">${esc(s.name)} ${VERIFIED}</h1>
    <p class="role">${esc(s.role)}</p>
    <div class="cta">
      ${link(s.bookCall, ui("calendar") + "Book a call", "btn btn-dark", "Booking")}
      ${link("mailto:" + s.email, ui("mail") + "Email me", "btn btn-light")}
    </div>
    <p class="bio">${esc(s.bio)}</p>
    <a class="bio-more" href="#about">More about me ${ui("arrow-right")}</a>
    <div class="socials">${s.socials.filter(x => x.href).map(x => link(x.href, ui(x.icon), "", x.label)).join("")}</div>
    <div class="fav" id="fav" data-state="idle">
      <div class="tt" aria-hidden="true">
        <div class="plate"><div class="disc"></div><div class="spindle"></div></div>
        <div class="arm"><div class="rod"><i class="stub"></i><i class="head"></i></div><i class="pivot"></i></div>
      </div>
      <div class="fav-meta">
        <div class="fav-tag"><i></i><span id="favState">Favorite</span></div>
        <a class="fav-title" href="${esc(s.song.url)}" target="_blank" rel="noopener" title="Open on Spotify">${tx(s.song.title)}</a>
        <div class="fav-artist">${esc(s.song.artist)}</div>
      </div>
      <div class="fav-last" id="favLast">Last listened: ${esc(plain(s.song.title))} · ${esc(s.song.artist)}</div>
      <button class="play" id="favPlay" type="button" aria-label="Play ${esc(plain(s.song.title))}">${ui("play-filled")}</button>
      <button class="fav-ring" id="favRing" type="button" aria-label="Stop" title="Stop">
        <svg viewBox="0 0 44 44" aria-hidden="true"><circle class="rg-track" cx="22" cy="22" r="20.5"/><circle class="rg-fill" id="favArc" cx="22" cy="22" r="20.5" pathLength="100"/></svg>
        <span class="rg-stop" aria-hidden="true"></span>
      </button>
      <div class="fav-bar" id="favBar" hidden>
        <button class="fb-btn" id="favToggle" type="button" aria-label="Pause">${ui("pause-filled")}</button>
        <div class="fb-wave" aria-hidden="true">${WAVE}</div>
        <span class="fb-time" id="favTime" aria-live="off">0s</span>
      </div>
    </div>
  </section>`;
}
function vStack() {
  return `<section class="sec"><h2 class="label">Tech stack</h2>
    <div class="stack">${SITE.stack.map(([k, n]) => `<span class="tile" tabindex="0" data-name="${esc(n)}" aria-label="${esc(n)}">${logo(k)}</span>`).join("")}</div>
  </section>`;
}
function vExp(e) {
  const logos = e.logos
    ? `<div class="exp-logos">${e.logos.map(l => logoTile(l, l.name)).join(`<span class="exp-x" aria-hidden="true">×</span>`)}</div>`
    : logoTile(e.logo, e.company);
  return `<article class="exp">
    ${logos}
    <h3 class="exp-co">${esc(e.company)}</h3>
    <p class="exp-role">${tx(e.role)}</p>
    <p class="exp-dates">${tx(e.dates)}</p>
    <p class="exp-loc">${tx(e.location)}</p>
    <h4 class="h3">Technologies</h4>
    <div class="pills">${e.tech.map(([k, n]) => `<span class="pill">${logo(k)}${esc(n)}</span>`).join("")}</div>
    <ul class="bul">${e.bullets.map(b => `<li>${tx(b)}</li>`).join("")}</ul>
  </article>`;
}
function vRes(r) {
  return `<article class="exp">
    ${r.logos ? `<div class="exp-logos">${r.logos.map(l => logoTile(l, l.name)).join(`<span class="exp-x" aria-hidden="true">×</span>`)}</div>` : logoTile(r.logo, r.where || r.title)}
    <h3 class="exp-co">${esc(r.title)}</h3>
    <p class="res-paper">${esc(r.paper)}</p>
    <p class="exp-dates">${tx(r.dates)}</p>
    <p class="exp-loc">${esc(r.where)}</p>
    ${r.supervisor ? `<p class="exp-loc">Supervised by ${esc(r.supervisor)}</p>` : ""}
    ${r.links.length ? `<div class="d-btns">${r.links.map(l => link(l.href, ui(l.icon) + esc(l.label), "btn-out", l.label)).join("")}</div>` : ""}
    <h4 class="h3">Methods</h4>
    <div class="pills">${r.tech.map(([k, n]) => `<span class="pill">${logo(k)}${esc(n)}</span>`).join("")}</div>
    <ul class="bul">${r.bullets.map(b => `<li>${tx(b)}</li>`).join("")}</ul>
  </article>`;
}
function vPubs() {
  return `<div class="pubs"><h3 class="label">Publications</h3>${PUBLICATIONS.map(x => `<div class="pub">
      <p>${esc(x.cite)} <span class="pub-t">${esc(x.title)}</span> ${esc(x.note)}</p>
      <div class="pub-row"><span class="chip">Preprint · Zenodo</span><a class="btn-details" href="${esc(x.href)}" target="_blank" rel="noopener">Read paper ${ui("arrow-right")}</a></div>
    </div>`).join("")}</div>`;
}
function vAward(a) {
  const size = k => ASSETS[k + "_size"] || [1000, 476];
  const ph = a.photos ? `<figure class="aw-photo"><div class="aw-imgs">${a.photos.map(x => {
      const [w, h] = size(x.src);
      return `<button class="aw-img" type="button" style="flex:${(w / h).toFixed(4)} 1 0" data-zoom="${x.src}" aria-label="View larger photo"><img src="${ASSETS[x.src]}" alt="${esc(x.alt)}" width="${w}" height="${h}" decoding="async"></button>`;
    }).join("")}</div><figcaption>${esc(a.caption)}</figcaption></figure>` : "";
  return `<article class="award">
    ${logoTile(a.logo, a.issuer, " aw-logo")}
    <div class="aw-body">
      <div class="aw-top"><h3 class="aw-title">${esc(a.title)}</h3><span class="aw-year">${esc(a.year)}</span></div>
      <p class="aw-meta">${esc(a.issuer)}</p>
      ${a.desc ? `<p class="aw-desc">${esc(a.desc)}</p>` : ""}
    </div>
    ${ph}
  </article>`;
}
// Each project's own background pattern (falls back to the shared one)
const mediaBg = p => p.bg && ASSETS[p.bg] ? ` style="background-image:url('${ASSETS[p.bg]}')"` : "";
function vCard(p) {
  const uniq = [...new Map(p.tech.map(t => [t[0], t])).values()];
  return `<article class="pcard">
    <a class="media"${mediaBg(p)} href="#project-${p.slug}" aria-label="${esc(p.title)} details">${shot(p)}</a>
    <div class="pbody">
      <div class="ptop"><h3 class="ptitle"><a href="#project-${p.slug}">${esc(p.title)}</a></h3>
        <div class="plinks">${p.links.site ? link(p.links.site, ui("world"), "", p.links.siteLabel) : ""}${p.links.repo ? link(p.links.repo, ui("brand-github"), "", "GitHub repository") : ""}</div></div>
      <p class="pdesc">${esc(p.short)}</p>
      <p class="ptech">Technologies</p>
      <div class="prow">
        <div class="minis">${uniq.map(([k, n]) => `<span class="mini" title="${esc(n)}">${logo(k)}</span>`).join("")}</div>
        <a class="btn-details" href="#project-${p.slug}">View Details ${ui("arrow-right")}</a>
      </div>
    </div>
  </article>`;
}
function vGitHub() {
  const g = GH || null;
  const cells = g ? g.cells.map(d => d ? `<i data-l="${d.level}" title="${d.count} on ${d.date}"></i>` : `<i class="gh-pad"></i>`).join("")
                  : `<i></i>`.repeat(371);
  const months = g ? g.months.map(m => `<span style="left:${m.col * 17}px">${m.name}</span>`).join("") : "";
  const weeks = g ? g.weeks : 53;
  const summary = g ? `<b>${g.total.toLocaleString("en-GB")}</b> contributions · ${g.span}`
                    : (GH === false ? "Activity unavailable right now" : "Loading activity");
  return `<section class="sec" id="ghSec"><h2 class="label">GitHub activity</h2>
    <div class="gh-scroll"><div class="gh-cal"><div class="gh-months" style="width:${weeks * 17 - 4}px">${months}</div><div class="gh-grid">${cells}</div></div></div>
    <div class="gh-foot"><span>${summary}</span>
      <span class="legend">Less <i style="background:var(--gh0)"></i><i style="background:var(--gh1)"></i><i style="background:var(--gh2)"></i><i style="background:var(--gh3)"></i><i style="background:var(--gh4)"></i> More</span></div>
    <div class="gh-handle"><a href="https://github.com/${SITE.github}" target="_blank" rel="noopener">@${SITE.github}</a></div>
  </section>`;
}
function vQuote() {
  return `<section class="sec"><figure class="quote" style="margin:0">
    <div class="q-in"><div class="q-mark" aria-hidden="true">“</div>
      <blockquote class="q-text" style="margin-inline:0">${esc(SITE.quote.text)}</blockquote>
      <figcaption class="q-by">— ${esc(SITE.quote.by)}</figcaption></div>
    ${SITE.visitors ? `<div class="q-visit">You are the <b>${esc(SITE.visitors)}</b><sup>th</sup> visitor</div>` : ""}
  </figure></section>`;
}
function vHome() {
  const fx = EXPERIENCE.filter(e => e.featured), fp = PROJECTS.filter(p => p.featured);
  return vHero() + vStack()
    + `<section class="sec"><p class="eyebrow">Featured</p><h2 class="h2">Experience</h2>${fx.map(vExp).join("")}
       <div class="more"><a class="btn-more" href="#experience">Show all work experiences</a></div></section>`
    + `<section class="sec"><p class="eyebrow">Featured</p><h2 class="h2">Research</h2>${RESEARCH.filter(r => r.featured).map(vRes).join("")}
       <div class="more"><a class="btn-more" href="#research">Show all research experience</a></div>${vPubs()}</section>`
    + `<section class="sec"><p class="eyebrow">Featured</p><h2 class="h2">Projects</h2><div class="plist">${fp.map(vCard).join("")}</div>
       <div class="more"><a class="btn-more" href="#projects">Show all projects</a></div></section>`
    + `<section class="sec" id="achievements"><p class="eyebrow">Recognition</p><h2 class="h2">Awards &amp; Honours</h2><div class="awards">${AWARDS.map(vAward).join("")}</div></section>`
    + vGitHub() + vQuote();
}
const backHome = `<a class="back" href="#home">${ui("arrow-left")}Back home</a>`;
const vAllExp = () => `${backHome}<section class="sec" style="margin-top:26px"><p class="eyebrow">All</p><h2 class="h2">Experience</h2>${EXPERIENCE.map(vExp).join("")}</section>`;
const CV_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/></svg>`;
const vResume = () => `${backHome}<section class="sec" style="margin-top:26px"><p class="eyebrow">Curriculum vitae</p>
  <div class="cv-head"><h2 class="h2">Resume</h2><a class="btn btn-dark cv-dl" href="${esc(ASSETS.cv)}" download="Emmanuel-Boakye-CV.pdf">${CV_ICON}Download PDF</a></div>
  <div class="cv-pages" id="cvPages" aria-busy="true"><div class="cv-page cv-wait" aria-label="Loading the CV"></div></div></section>`;
function vBooks() {
  return `${backHome}<section class="sec" style="margin-top:26px">
    <h1 class="bk-title">Books</h1>
    <p class="bk-intro">${esc(BOOKS.intro)}</p>
    <ul class="bk-grid">${BOOKS.list.map(b => `<li class="bk">
      <img src="${esc(ASSETS[b.img] || "")}" alt="${esc(b.title)} by ${esc(b.author)}" decoding="async">
      <div class="bk-plain"><b>${esc(b.title)}</b><span>${esc(b.author)}</span></div></li>`).join("")}</ul>
  </section>`;
}
// A cover that fails to load, or comes back as a tiny placeholder, becomes a plain card with the title and author
function bookFallbacks() {
  document.querySelectorAll(".bk img").forEach(img => {
    const off = () => img.closest(".bk").classList.add("no-cover");
    const check = () => { if (img.naturalWidth < 40) off(); };
    if (img.complete) check(); else { img.addEventListener("load", check, { once: true }); img.addEventListener("error", off, { once: true }); }
    setTimeout(() => { if (!img.naturalWidth) off(); }, 8000);   // still nothing after 8 seconds
  });
}
const rich = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
function vAbout() {
  const a = ABOUT, soc = l => SITE.socials.find(x => x.label === l) || {};
  const links = [["Email", "mail"], ["X", "brand-x"], ["GitHub", "brand-github"], ["LinkedIn", "brand-linkedin"]]
    .map(([l, icon]) => soc(l).href ? link(soc(l).href, ui(icon), "", l) : "").join("");
  return `${backHome}<article class="ab">
    <h1 class="ab-title">${esc(a.title)}</h1>
    <p class="ab-lead">${rich(a.lead)}</p>
    <blockquote class="ab-quote">${esc(a.quote)}</blockquote>
    <div class="ab-traits"><div class="ab-pills">${a.traits.map((t, i) => `<span class="ab-pill" style="--c:var(--tr${i % 4 + 1})">${esc(t)}</span>`).join("")}</div><i class="ab-rule" aria-hidden="true"></i></div>
    <dl class="ab-facts">${a.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    <h2 class="ab-h">How it started</h2>${a.started.map(p => `<p class="ab-p">${rich(p)}</p>`).join("")}
    <h2 class="ab-h">How I work</h2>
    <div class="ab-cards">${a.work.map(([t, d]) => `<div class="ab-card"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("")}</div>
    <h2 class="ab-h">Where I'm heading</h2><p class="ab-p">${rich(a.heading)}</p>
    <h2 class="ab-h">Beyond the research</h2>${a.beyond.map(p => `<p class="ab-p">${rich(p)}</p>`).join("")}
    <section class="ab-connect"><h2>Let's connect</h2><p>${esc(a.connect)}</p><div class="ab-links">${links}</div></section>
  </article>`;
}
const vAllRes = () => `${backHome}<section class="sec" style="margin-top:26px"><p class="eyebrow">All</p><h2 class="h2">Research</h2>${RESEARCH.map(vRes).join("")}${vPubs()}</section>`;
const vAllProj = () => `${backHome}<section class="sec" style="margin-top:26px"><p class="eyebrow">All</p><h2 class="h2">Projects</h2><div class="plist">${PROJECTS.map(vCard).join("")}</div></section>`;
function vProject(p) {
  const L = p.links;
  const names = [...new Set(p.tech.map(t => t[1]))];
  const linkRow = (href, label) => href
    ? `<li><a href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a></li>`
    : `<li><a href="#" data-missing="${esc(label)}"><span class="todo">${esc(label)}</span></a></li>`;
  return `<a class="back" href="#projects">← Back to projects</a>
    <div class="d-date">${tx(p.date)}</div>
    <h1 class="d-title">${esc(p.title)}</h1>
    <p class="d-desc">${esc(p.short)}</p>
    ${L.site || L.repo ? `<div class="d-btns">${L.site ? link(L.site, ui("world") + "Visit site", "btn-out", L.siteLabel) : ""}${L.repo ? link(L.repo, ui("brand-github") + "GitHub", "btn-out", "GitHub repository") : ""}</div>` : ""}
    <div class="chips">${names.map(n => `<span class="chip">${esc(n)}</span>`).join("")}</div>
    ${p.image
      ? `<div class="d-media zoomable" data-zoom role="button" tabindex="0" aria-label="View the image full size"><div class="media"${mediaBg(p)}>${shot(p)}</div></div><p class="d-hint">Tap the image to view it full size</p>`
      : `<div class="d-media"><div class="media"${mediaBg(p)}>${shot(p)}</div></div>`}
    <h2 class="d-h">Overview</h2>${p.overview.map(t => `<p class="d-p">${esc(t)}</p>`).join("")}
    <h2 class="d-h">Tech Stack</h2><ul class="d-list">${names.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
    ${L.site || L.repo ? `<h2 class="d-h">Links</h2><ul class="d-list">${L.site ? linkRow(L.site, L.siteLabel) : ""}${L.repo ? linkRow(L.repo, "Repository") : ""}</ul>` : ""}`;
}

/* ---------- GitHub calendar: real contributions for the last year ---------- */
let GH = null;   // null while loading, false if it could not load, otherwise the built calendar
function ghBuild(list) {
  const days = list.slice(-371);
  const first = new Date(days[0].date + "T12:00:00");
  const pad = first.getDay();                       // each column starts on a Sunday
  const cells = Array(pad).fill(null).concat(days);
  const months = []; let lastMonth = -1;
  cells.forEach((d, i) => {
    if (!d || i % 7 !== 0 && i !== pad) return;
    const m = new Date(d.date + "T12:00:00").getMonth();
    if (m !== lastMonth) { months.push({ col: Math.floor(i / 7), name: new Date(d.date + "T12:00:00").toLocaleString("en-GB", { month: "short" }).toUpperCase() }); lastMonth = m; }
  });
  if (months.length > 1 && months[1].col - months[0].col < 3) months.shift();
  const total = days.reduce((n, d) => n + (Number(d.count) || 0), 0);
  const end = new Date(days[days.length - 1].date + "T12:00:00");
  return { cells, months, total, weeks: Math.ceil(cells.length / 7), span: `${first.getFullYear()}–${String(end.getFullYear()).slice(2)}` };
}
async function loadGitHub() {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(SITE.github)}?y=last`);
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    const list = (data.contributions || [])
      .filter(d => d && /^\d{4}-\d{2}-\d{2}$/.test(d.date))
      .map(d => ({ date: d.date, count: Number(d.count) || 0, level: Math.max(0, Math.min(4, Number(d.level) || 0)) }))
      .sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);
    if (!list.length) throw new Error("no data");
    GH = ghBuild(list);
  } catch (err) {
    GH = false;
  }
  const sec = document.getElementById("ghSec");
  if (sec) sec.outerHTML = vGitHub();
}

/* ---------- Router ---------- */
const app = $("#app");
function render() {
  favReset();
  const h = decodeURIComponent(location.hash.slice(1));
  let p;
  if (h.startsWith("project-") && (p = PROJECTS.find(x => x.slug === h.slice(8)))) { app.innerHTML = vProject(p); document.title = p.title + " · Emmanuel Boakye"; }
  else if (h === "projects") { app.innerHTML = vAllProj(); document.title = "Projects · Emmanuel Boakye"; }
  else if (h === "books") { app.innerHTML = vBooks(); document.title = "Books · Emmanuel Boakye"; bookFallbacks(); }
  else if (h === "about") { app.innerHTML = vAbout(); document.title = "About · Emmanuel Boakye"; }
  else if (h === "resume") { app.innerHTML = vResume(); document.title = "Resume · Emmanuel Boakye"; loadResume(); }
  else if (h === "research") { app.innerHTML = vAllRes(); document.title = "Research · Emmanuel Boakye"; }
  else if (h === "experience") { app.innerHTML = vAllExp(); document.title = "Experience · Emmanuel Boakye"; }
  else { app.innerHTML = vHome(); document.title = "Emmanuel Boakye"; }
  tick();
}
// #achievements is a spot on the home page; every other page opens at the top
const SPOTS = { achievements: "#achievements" };
function jump(onLoad) {
  const el = (k => SPOTS[k] && document.querySelector(SPOTS[k]))(decodeURIComponent(location.hash.slice(1)));
  if (el) el.scrollIntoView({ block: "start" }); else if (!onLoad) window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => { render(); jump(); });

/* ---------- Music player: idle, playing, paused ---------- */
let favSec = 0, favTimer = null;
const favFmt = n => n < 60 ? n + "s" : `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
function favSet(state) {
  const fav = $("#fav"); if (!fav) return;
  fav.dataset.state = state;
  clearInterval(favTimer); favTimer = null;
  if (state === "idle") favSec = 0;
  if (!SONG.audio && state === "playing") songLookup();
  const a = SONG.audio;
  if (a) {
    if (state === "playing") a.play().catch(() => favSet("paused"));
    else { a.pause(); if (state === "idle") a.currentTime = 0; }
    favSec = Math.floor(a.currentTime);
  } else if (state === "playing") {
    favTimer = setInterval(() => { favSec++; const t = $("#favTime"); if (t) t.textContent = favFmt(favSec); }, 1000);
    // First press before the clip has arrived: start it as soon as it does
    songLookup().then(x => { if (x && $("#fav") && $("#fav").dataset.state === "playing") favSet("playing"); });
  }
  favArc();
  $("#favBar").hidden = state === "idle";
  $("#favTime").textContent = favFmt(favSec);
  $("#favState").textContent = { idle: "Favorite", playing: "Now playing", paused: "Paused" }[state];
  const tg = $("#favToggle");
  tg.innerHTML = state === "playing" ? ui("pause-filled") : ui("play-filled");
  tg.setAttribute("aria-label", state === "playing" ? "Pause" : "Play");
  if (state === "playing" && document.activeElement && document.activeElement.id === "favPlay") tg.focus();
  if (state === "idle" && document.activeElement && document.activeElement.id === "favRing") $("#favPlay").focus();
}
let favRaf = 0;
function favArc() {
  cancelAnimationFrame(favRaf);
  const arc = $("#favArc"), fav = $("#fav"); if (!arc || !fav) return;
  const a = SONG.audio, total = a && isFinite(a.duration) && a.duration > 0 ? a.duration : 30;
  const p = a ? a.currentTime / total : (favSec % total) / total;
  arc.style.strokeDashoffset = String(100 - Math.max(0, Math.min(1, p)) * 100);
  if (fav.dataset.state === "playing") favRaf = requestAnimationFrame(favArc);
}
function favReset() {
  cancelAnimationFrame(favRaf);
  clearInterval(favTimer); favTimer = null; favSec = 0;
  if (SONG.audio) { SONG.audio.pause(); SONG.audio.currentTime = 0; }
}

/* ---------- Music player: real sound from Apple's 30-second preview ----------
   The visitor's browser asks Apple's public search API for the song's preview clip.
   If that fails (offline, blocked), the player still works, just without sound. */
const SONG = { audio: null, store: "", ask: null, fixedFailed: false };
function songAudio(hit, fixed) {
  const a = new Audio();
  a.preload = "metadata";
  a.src = hit.previewUrl;
  a.addEventListener("timeupdate", () => { const t = $("#favTime"); if (t && !a.paused) t.textContent = favFmt(Math.floor(a.currentTime)); });
  a.addEventListener("ended", () => favSet("idle"));
  a.addEventListener("error", () => {
    if (SONG.audio !== a) return;
    SONG.audio = null; SONG.ask = null;
    if (fixed) SONG.fixedFailed = true;
    // If it failed mid-press, quietly try Apple's lookup and carry on
    const fav = $("#fav");
    if (fixed && fav && fav.dataset.state === "playing") songLookup().then(x => { if (x && $("#fav") && $("#fav").dataset.state === "playing") favSet("playing"); });
  });
  SONG.audio = a; SONG.store = hit.trackViewUrl || "";
  return a;
}
function songLookup() {
  if (SONG.ask) return SONG.ask;
  if (SITE.song.preview && !SONG.fixedFailed) {
    return (SONG.ask = Promise.resolve(songAudio({ previewUrl: SITE.song.preview, trackViewUrl: SITE.song.store }, true)));
  }
  const low = v => String(v || "").toLowerCase();
  const pick = data => ((data && data.results) || []).find(r => r.previewUrl && (r.trackId === SITE.song.appleId
    || (low(r.trackName).includes(low(SITE.song.title)) && low(r.artistName).includes(low(SITE.song.artist))))) || null;
  // Ask for the exact track by its Apple ID first, then fall back to a search
  const urls = [
    "https://itunes.apple.com/lookup?" + new URLSearchParams({ id: SITE.song.appleId, entity: "song" }),
    "https://itunes.apple.com/search?" + new URLSearchParams({ term: SITE.song.artist + " " + SITE.song.title, media: "music", entity: "song", limit: "25" })
  ];
  // Way 1: JSONP, the method Apple documents for calling the search API from a web page
  const viaScript = url => new Promise(resolve => {
    const cb = "ebSong" + Date.now();
    const tag = document.createElement("script");
    let t;
    const done = hit => { clearTimeout(t); try { delete window[cb]; } catch (e) {} tag.remove(); resolve(hit); };
    t = setTimeout(() => done(null), 7000);
    window[cb] = data => done(pick(data));
    tag.onerror = () => done(null);
    tag.src = url + "&callback=" + cb;
    document.head.appendChild(tag);
  });
  // Way 2: a plain request, in case the browser refuses the first
  const viaFetch = url => fetch(url, { mode: "cors" }).then(r => r.ok ? r.json() : null).then(pick).catch(() => null);
  const tries = [() => viaScript(urls[0]), () => viaFetch(urls[0]), () => viaScript(urls[1]), () => viaFetch(urls[1])];
  SONG.ask = tries.reduce((chain, next) => chain.then(hit => hit || next()), Promise.resolve(null)).then(hit => {
    if (!hit) { SONG.ask = null; return null; }   // let a later press try again
    return songAudio(hit, false);
  });
  return SONG.ask;
}

/* ---------- Clocks ---------- */
const fmt = tz => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true, ...(tz ? { timeZone: tz } : {}) });
// Minutes a time zone is ahead of UTC right now (handles BST and GMT on its own)
function tzOffsetMin(tz, d) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).formatToParts(d);
  const g = t => +parts.find(x => x.type === t).value;
  return Math.round((Date.UTC(g("year"), g("month") - 1, g("day"), g("hour") % 24, g("minute")) - Math.floor(d.getTime() / 60000) * 60000) / 60000);
}
// Map pin: solid pin with a white centre
const PIN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728z"/><circle cx="12" cy="11" r="3.1" fill="#fff"/></svg>`;
// "London, United Kingdom" or "London · 8h behind you"
function locLine() {
  const d = new Date();
  let diff = 0;
  try { diff = tzOffsetMin(SITE.myTimeZone, d) + d.getTimezoneOffset(); } catch (err) {}
  const m = Math.abs(diff), h = Math.floor(m / 60), mm = m % 60;
  const gap = [h ? h + "h" : "", mm ? mm + "m" : ""].filter(Boolean).join(" ");
  const label = diff === 0 ? SITE.myPlace : `${SITE.myCity} · ${gap} ${diff > 0 ? "ahead of" : "behind"} you`;
  return { key: label, html: `${PIN}<span>${esc(label)}</span>` };
}
function tick() {
  document.querySelectorAll("[data-clock]").forEach(el => { el.textContent = fmt(el.dataset.clock === "mine" ? SITE.myTimeZone : null); });
  const loc = document.getElementById("clockLoc");
  if (loc) { const l = locLine(); if (loc.dataset.key !== l.key) { loc.innerHTML = l.html; loc.dataset.key = l.key; } }
}
setInterval(tick, 1000);

/* ---------- Theme ---------- */
const root = document.documentElement;
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : mq.matches;
const paintThemeBtn = () => { $("#themeBtn").innerHTML = isDark() ? ui("sun") : ui("moon"); };
try { const saved = localStorage.getItem("eb-theme"); if (saved === "dark" || saved === "light") root.dataset.theme = saved; } catch (e) {}
$("#themeBtn").addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("eb-theme", next); } catch (e) {}
  paintThemeBtn();
});
mq.addEventListener && mq.addEventListener("change", paintThemeBtn);
new MutationObserver(paintThemeBtn).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

/* ---------- Toast + clicks ---------- */
function copyText(text) {
  const fallback = () => {
    try {
      const t = document.createElement("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(t); t.select(); const ok = document.execCommand("copy"); t.remove(); return ok;
    } catch (err) { return false; }
  };
  try { return navigator.clipboard.writeText(text).then(() => true, () => fallback()); }
  catch (err) { return Promise.resolve(fallback()); }
}
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2200); }
document.addEventListener("click", e => {
  const miss = e.target.closest("[data-missing]");
  if (miss) { e.preventDefault(); toast(`${miss.dataset.missing} link not added yet`); return; }
  const mail = e.target.closest('a[href^="mailto:"]');
  if (mail) {
    // Opens the visitor's mail app and also copies the address, for devices with no mail app set up
    const addr = mail.getAttribute("href").slice(7);
    copyText(addr).then(ok => toast(ok ? `Email copied: ${addr}` : addr));
  }
  if (e.target.closest("#favPlay")) { favSet("playing"); return; }
  if (e.target.closest("#favRing")) { favSet("idle"); return; }
  if (e.target.closest("#favToggle")) { favSet($("#fav").dataset.state === "playing" ? "paused" : "playing"); return; }
  const zoom = e.target.closest("[data-zoom]");
  if (zoom) { const im = zoom.querySelector("img"); $("#lbImg").src = im.src; $("#lbImg").alt = im.alt; $("#lb").hidden = false; root.style.overflow = "hidden"; return; }
  if (e.target.closest("#lb")) { $("#lb").hidden = true; root.style.overflow = ""; return; }
  const sxItem = e.target.closest(".sx-item");
  if (sxItem) {
    closeSearch();
    const h = sxItem.getAttribute("href");
    if (h.startsWith("#") && h === (location.hash || "#home")) { e.preventDefault(); jump(); }
  }
});

/* ---------- Resume: the CV PDF drawn right inside the page with PDF.js ---------- */
const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
let pdfLib = null, cvDoc = null, cvWidth = 0, cvTimer = 0;
function loadPdfJs() {
  if (!pdfLib) pdfLib = new Promise((resolve, reject) => {
    const t = document.createElement("script");
    t.src = PDFJS + "pdf.min.js";
    t.onload = () => { const lib = window.pdfjsLib; if (!lib) return reject(new Error("pdf.js")); lib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js"; resolve(lib); };
    t.onerror = () => reject(new Error("pdf.js"));
    document.head.appendChild(t);
  }).catch(err => { pdfLib = null; throw err; });
  return pdfLib;
}
async function loadResume() {
  try {
    const lib = await loadPdfJs();
    if (!cvDoc) {
      const src = ASSETS.cv;
      const opts = src.startsWith("data:") ? { data: Uint8Array.from(atob(src.slice(src.indexOf(",") + 1)), c => c.charCodeAt(0)) } : { url: src };
      cvDoc = await lib.getDocument(opts).promise;
    }
    await drawResume();
  } catch (err) {
    const box = $("#cvPages"); if (!box) return;
    box.innerHTML = `<div class="cv-page cv-fail"><p>The CV couldn't be shown here right now.</p><a class="btn btn-dark cv-dl" href="${esc(ASSETS.cv)}" download="Emmanuel-Boakye-CV.pdf">${CV_ICON}Download PDF</a></div>`;
    box.setAttribute("aria-busy", "false");
  }
}
async function drawResume() {
  const box = $("#cvPages"); if (!box || !cvDoc) return;
  const w = box.clientWidth, dpr = Math.min(3, window.devicePixelRatio || 1);
  cvWidth = w;
  const sheets = [];
  for (let n = 1; n <= cvDoc.numPages; n++) {
    const page = await cvDoc.getPage(n);
    const base = page.getViewport({ scale: 1 });
    const vp = page.getViewport({ scale: (w / base.width) * dpr * 1.25 });   // a little extra so pinch-zoom stays sharp
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(vp.width); canvas.height = Math.floor(vp.height);
    canvas.setAttribute("aria-hidden", "true");
    await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
    const sheet = document.createElement("div");
    sheet.className = "cv-page";
    sheet.style.aspectRatio = `${base.width} / ${base.height}`;
    sheet.appendChild(canvas);
    // The page's text for screen readers
    const text = await page.getTextContent();
    const said = document.createElement("div"); said.className = "vh";
    said.textContent = text.items.map(t => t.str).join(" ");
    sheet.appendChild(said);
    // Links in the PDF stay clickable
    (await page.getAnnotations()).filter(a => a.subtype === "Link" && (a.url || a.unsafeUrl)).forEach(a => {
      const url = String(a.url || a.unsafeUrl).trim().replace(/^h+(ttps?:\/\/)/i, "h$1");   // repairs a typed "hhttps://"
      if (!/^(https?:\/\/|mailto:)/i.test(url)) return;
      const [x1, y1, x2, y2] = base.convertToViewportRectangle(a.rect);
      const el = document.createElement("a");
      el.className = "cv-link"; el.href = url;
      if (!url.startsWith("mailto:")) { el.target = "_blank"; el.rel = "noopener"; }
      el.setAttribute("aria-label", url.replace(/^mailto:/, ""));
      Object.assign(el.style, {
        left: Math.min(x1, x2) / base.width * 100 + "%", top: Math.min(y1, y2) / base.height * 100 + "%",
        width: Math.abs(x2 - x1) / base.width * 100 + "%", height: Math.abs(y2 - y1) / base.height * 100 + "%" });
      sheet.appendChild(el);
    });
    sheets.push(sheet);
  }
  const now = $("#cvPages"); if (!now) return;   // the visitor left the page meanwhile
  now.replaceChildren(...sheets);
  now.setAttribute("aria-busy", "false");
}
window.addEventListener("resize", () => {
  clearTimeout(cvTimer);
  cvTimer = setTimeout(() => { const box = $("#cvPages"); if (box && cvDoc && Math.abs(box.clientWidth - cvWidth) > 30) drawResume(); }, 200);
});

/* ---------- Search ---------- */
const sx = $("#sx"), sxInput = $("#sxInput"), sxList = $("#sxList");
// What the search shows the moment it opens: the site's pages, then its links
function navItems() {
  const soc = l => SITE.socials.find(x => x.label === l) || {};
  return [
    { l: "Home", h: "#home" },
    { l: "About", h: "#about", k: "bio intro me profile" },
    { l: "Projects", h: "#projects" },
    { l: "Work", h: "#experience", k: "experience jobs internships career" },
    { l: "Research", h: "#research", k: "papers publications preprint" },
    { l: "Resume", h: soc("Resume").href, k: "cv" },
    { l: "Achievements", h: "#achievements", k: "awards honours recognition scholarship" },
    { l: "Books", h: "#books", k: "reading library " + BOOKS.list.map(b => b.title + " " + b.author).join(" ") },
    ...["X", "Medium", "GitHub", "LinkedIn", "Email"].map(l => ({ l, h: soc(l).href, k: l === "Email" ? SITE.email : "" })),
    { l: "Book a call", h: SITE.bookCall, k: "calendar meeting chat" }
  ].filter(i => i.h);
}
// What typing also finds: everything on the site
const CONTENT = [
  ...PROJECTS.map(p => ({ g: "Projects", l: p.title, h: "#project-" + p.slug, k: p.short + " " + p.tech.map(t => t[1]).join(" ") })),
  ...RESEARCH.map(r => ({ g: "Research", l: r.title, s: r.dates, h: "#research", k: r.paper + " " + r.bullets.join(" ") })),
  ...EXPERIENCE.map(e => ({ g: "Work", l: e.company, s: plain(e.role), h: "#experience", k: e.bullets.join(" ") })),
  ...AWARDS.map(a => ({ g: "Achievements", l: a.title, s: a.year, h: "#achievements", k: a.issuer }))
];
let sxActive = -1;
function sxMark(i) {
  const items = [...sxList.querySelectorAll(".sx-item")];
  if (!items.length) { sxActive = -1; return; }
  sxActive = Math.max(-1, Math.min(items.length - 1, i));
  items.forEach((a, n) => a.classList.toggle("on", n === sxActive));
  if (sxActive >= 0) items[sxActive].scrollIntoView({ block: "nearest" });
}
function drawSearch() {
  const q = sxInput.value.trim().toLowerCase();
  const has = i => (i.l + " " + (i.s || "") + " " + (i.k || "")).toLowerCase().includes(q);
  const groups = [["Navigate", navItems().filter(i => !q || has(i))]];
  if (q) ["Projects", "Research", "Work", "Achievements"].forEach(g => groups.push([g, CONTENT.filter(i => i.g === g && has(i))]));
  const html = groups.filter(([, list]) => list.length).map(([g, list]) => `<div class="sx-group">${g}</div>` + list.map(i => {
    const ext = /^https?:/.test(i.h) ? ` target="_blank" rel="noopener"` : "";
    return `<a class="sx-item" href="${esc(i.h)}"${ext}><span>${esc(i.l)}</span>${i.s ? `<small>${esc(i.s)}</small>` : ""}</a>`;
  }).join("")).join("");
  sxList.innerHTML = html || `<div class="sx-empty">No matches for “${esc(sxInput.value)}”.</div>`;
  sxList.scrollTop = 0;
  sxMark(q ? 0 : -1);
}
function openSearch() { sx.hidden = false; sxInput.value = ""; drawSearch(); root.style.overflow = "hidden"; setTimeout(() => sxInput.focus(), 20); }
function closeSearch() { sx.hidden = true; root.style.overflow = ""; }
$("#dockSearch").addEventListener("click", openSearch);
sx.addEventListener("click", e => { if (e.target === sx) closeSearch(); });
sxInput.addEventListener("input", drawSearch);
sxInput.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); sxMark(sxActive + 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); sxMark(sxActive - 1); }
  else if (e.key === "Enter") { const a = sxList.querySelectorAll(".sx-item")[Math.max(0, sxActive)]; if (a) a.click(); }
});
sxList.addEventListener("pointermove", e => {
  const a = e.target.closest(".sx-item"); if (!a || e.pointerType !== "mouse") return;
  const i = [...sxList.querySelectorAll(".sx-item")].indexOf(a); if (i !== sxActive) sxMark(i);
});
$("#sxClose").addEventListener("click", closeSearch);
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target && e.target.matches && e.target.matches("[data-zoom]")) { e.target.click(); return; }
  if (e.key === "Escape" && !$("#lb").hidden) { $("#lb").hidden = true; root.style.overflow = ""; }
  else if (e.key === "Escape" && !sx.hidden) closeSearch();
  else if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && sx.hidden && !/input|textarea/i.test(document.activeElement.tagName))) { e.preventDefault(); openSearch(); }
});

/* ---------- Boot ---------- */
$("#dockHome").innerHTML = ui("home");
$("#dockSearch").innerHTML = ui("search") + "Search";
$("#sxIcon").innerHTML = ui("search");
$("#holo").innerHTML = `<span class="holo-fx" aria-hidden="true"><i class="hs1"></i><i class="hs3"></i><i class="hs2"></i><span class="hs-water"></span><span class="hs-gloss"></span></span>${ui("github-filled")}<span class="holo-label">GitHub</span>`;
$("#yr").textContent = new Date().getFullYear();
paintThemeBtn();
render();
loadGitHub();
jump(true);
// Look up the song's preview clip once the page has settled, so the first press plays straight away
songLookup();

/* ---------- Footer: the GitHub plate drops in on a crooked thread that slowly straightens, and can be swung ---------- */
(function hangingPlate() {
  const stage = $("#hang"), svg = $("#hangSvg"), path = $("#hangPath"), body = $("#hangBody"), link = $("#holo");
  if (!stage || !body || !path) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // px and seconds. The anchor sits above the visible area, so the thread has no visible start.
  const AY = -46, LT = 172, L0 = 8, G = 642, K = 620, D = 27, DRAG = 0.32, SLACK0 = 0.15, MAXA = 0.9;
  let W = 0, BW = 0;
  let L = L0, vL = 0, th = -0.2, w = 0, t = 0, last = 0;
  let released = false, visible = false, raf = 0, relT = 0, catchT = -1;
  let slack = SLACK0, ph1 = 0, ph2 = 1.7, drag = null, moved = false, wEma = 0;
  const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const leff = () => LT * (1 - slack);    // a crooked thread reaches less far than a straight one
  function measure() { W = stage.clientWidth; BW = body.offsetWidth; svg.setAttribute("viewBox", `0 0 ${W} ${stage.clientHeight}`); }
  function draw(amp) {
    const cx = W / 2, ex = cx + L * Math.sin(th), ey = AY + L * Math.cos(th);
    const a = -th * 0.6;                    // the plate tilts with the thread, a little behind it
    body.style.transform = `translate(${(ex - BW / 2).toFixed(2)}px, ${ey.toFixed(2)}px) rotate(${a.toFixed(4)}rad)`;
    const tx = ex + 8 * Math.sin(a), ty = ey - 8 * Math.cos(a);   // top of the eyelet
    const dx = tx - cx, dy = ty - AY, len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len;
    let d = "";
    for (let i = 0, N = 34; i <= N; i++) {
      const s = i / N, env = Math.pow(Math.sin(Math.PI * s), 1.1);
      const off = amp * env * (0.65 * Math.sin(2 * Math.PI * 2.3 * s + ph1) + 0.35 * Math.sin(2 * Math.PI * 4.2 * s + ph2));
      d += (i ? " L" : "M") + (cx + dx * s + nx * off).toFixed(1) + " " + (AY + dy * s + ny * off).toFixed(1);
    }
    path.setAttribute("d", d);
  }
  function step(now) {
    raf = 0;
    if (!visible && !drag) { last = 0; return; }
    const dt = last ? Math.min(0.033, (now - last) / 1000) : 1 / 60;
    last = now; t += dt;
    if (released && !drag) {
      relT += dt;
      // a moment after it first catches, the kinks work out over a few seconds and the plate lowers a little
      if (catchT >= 0) slack = SLACK0 * (1 - ease(Math.min(1, Math.max(0, (relT - catchT - 0.7) / 2.9))));
      for (let i = 0; i < 2; i++) {
        const h = dt / 2, Le = leff();
        const aL = G * Math.cos(th) - (L > Le ? K * (L - Le) + D * vL : 0);   // free fall while slack, springy once taut
        vL += aL * h; L += vL * h;
        if (catchT < 0 && L >= Le) catchT = relT;
        const breeze = reduce ? 0 : 0.12 * Math.sin(t * 2 * Math.PI / 6.5);
        let aTh = -(G / Math.max(L, 70)) * Math.sin(th) - (reduce ? 1.2 : DRAG) * w + breeze;
        if (Math.abs(th) > MAXA) aTh -= (th - Math.sign(th) * MAXA) * 140 + w * 3;   // a soft limit keeps a hard throw on screen
        w += aTh * h; th += w * h;
      }
    }
    const fall = Math.min(1, Math.abs(vL) / 300);
    ph1 += dt * (0.45 + 5 * fall); ph2 -= dt * (0.35 + 4 * fall);
    draw(24 * (slack / SLACK0) + Math.max(0, leff() - L) * 0.4);
    raf = requestAnimationFrame(step);
  }
  const run = () => { if (!raf && (released || drag) && (visible || drag)) raf = requestAnimationFrame(step); };
  measure();
  if (reduce) { L = LT; slack = 0; th = 0; released = true; catchT = 0; }
  draw(reduce ? 0 : 24);
  window.addEventListener("resize", () => { measure(); draw(24 * (slack / SLACK0)); });
  window.addEventListener("load", measure);
  new IntersectionObserver(entries => {
    const e = entries[0];
    visible = e.isIntersecting;
    if (!released && e.intersectionRatio >= 0.6) setTimeout(() => { released = true; run(); }, 260);
    run();
  }, { threshold: [0, 0.6, 1] }).observe(stage);

  // Grab and swing: the plate follows the pointer on its thread, then carries on with the speed you let go at
  body.addEventListener("pointerdown", e => {
    if (!released || (e.button !== undefined && e.button !== 0)) return;
    const r = stage.getBoundingClientRect(), cx = W / 2;
    const ex = cx + L * Math.sin(th), ey = AY + L * Math.cos(th);
    drag = { id: e.pointerId, ox: e.clientX - r.left - ex, oy: e.clientY - r.top - ey, sx: e.clientX, sy: e.clientY, lt: performance.now() };
    moved = false; wEma = 0;
    try { body.setPointerCapture(e.pointerId); } catch (err) {}
    body.classList.add("is-grabbed");
    run();
  });
  body.addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 4) moved = true;
    const r = stage.getBoundingClientRect();
    const dx = e.clientX - r.left - drag.ox - W / 2, dy = Math.max(1, e.clientY - r.top - drag.oy - AY);
    const nth = Math.max(-MAXA, Math.min(MAXA, Math.atan2(dx, dy)));
    const now = performance.now(), sec = Math.max(1, now - drag.lt) / 1000;
    wEma = wEma * 0.55 + ((nth - th) / sec) * 0.45;
    th = nth; L = Math.min(Math.hypot(dx, dy), leff()); vL = 0; w = 0; drag.lt = now;
  });
  const endDrag = e => {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null; body.classList.remove("is-grabbed");
    w = Math.max(-4.5, Math.min(4.5, wEma));
    run();
  };
  body.addEventListener("pointerup", endDrag);
  body.addEventListener("pointercancel", endDrag);
  // a drag is a swing, not a click
  link.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } });
  // a mouse brushing past gives it a small push
  stage.addEventListener("pointerenter", e => {
    if (e.pointerType !== "mouse" || !released || drag) return;
    const r = body.getBoundingClientRect();
    w += (e.clientX < r.left + r.width / 2 ? 1 : -1) * 0.45;
    run();
  });
})();
