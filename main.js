import './style.css';

const frictionStates = [
  {
    id: 'scrolling',
    number: '01',
    name: 'Mindless scrolling',
    detail: '45 minutes gone. Thumb still moving.',
    color: '#f3c547',
    rgb: '243, 197, 71',
    message: 'Your attention is being tugged outward.'
  },
  {
    id: 'paralysis',
    number: '02',
    name: 'Task paralysis',
    detail: 'Blank screen. Deadline close. Body won’t move.',
    color: '#ff5d5d',
    rgb: '255, 93, 93',
    message: 'The first move feels heavier than it is.'
  },
  {
    id: 'lethargy',
    number: '03',
    name: 'Brain fog & lethargy',
    detail: 'Low signal. High context-switch cost.',
    color: '#f28b4b',
    rgb: '242, 139, 75',
    message: 'Your mental signal is asking for a softer pace.'
  }
];

const initialAll = new URLSearchParams(window.location.search).get('select') === 'all';

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="app-shell" data-state="scrolling">
    <header class="app-nav">
      <a class="brand" href="/" aria-label="120reset home"><span class="brand-mark">120</span><span>120reset</span></a>
      <div class="nav-meta"><span>somatic circuit breaker</span><a class="nav-cta js-reset-cta" href="#reset-demo">break the loop <span>↗</span></a></div>
    </header>

    <main>
      <section class="hero-section" aria-labelledby="page-title">
        <div class="hero-copy">
          <span class="eyebrow">for the moment your brain won't start</span>
          <h1 id="page-title">You don't need more discipline. <em>You need a hard reset.</em></h1>
          <p class="hero-lede">120reset is a 120-second somatic circuit breaker for doom-scrolling, task paralysis, ADHD-style executive freeze, and the afternoon brain fog that makes a simple next step feel impossible.</p>
          <div class="hero-actions"><a class="button button-primary js-reset-cta" href="#reset-demo">Start a 120-second reset <span>→</span></a><span class="action-note">No account. No setup. Lives on the open web.</span></div>
          <div class="proof-row"><span><b>120</b> seconds</span><span><b>1</b> next move</span><span><b>0</b> dashboards</span></div>
        </div>
        <div class="hero-aside"><span class="aside-index">01 / THE PROBLEM</span><p>Willpower is a terrible emergency tool. When your nervous system is locked, a better planner just gives you one more thing to avoid.</p><div class="aside-rule"></div><span class="aside-caption">Interrupt the loop physically.</span></div>
      </section>

      <section class="demo-section" id="reset-demo" aria-labelledby="demo-title">
        <div class="demo-intro"><div><span class="eyebrow">the reset is live</span><h2 id="demo-title">Name the friction.<br><em>Then move.</em></h2></div><p>Pick one. Stack all three. The visual fog shows exactly what friction is taking from your brain right now.</p></div>
        <div class="demo-grid">
          <section class="brain-column" aria-label="Animated 120reset brain visual">
            <div class="brain-stage" id="brainStage" style="--brain-accent: #f3c547; --brain-accent-rgb: 243, 197, 71;">
              <div class="orbit"></div><div class="orbit orbit-b"></div><div class="brain-aura"></div>
              <div class="brain-art"><canvas id="brainCanvas" role="img" aria-label="Animated 3D brain with glowing neural fibres"></canvas></div>
              <canvas id="fiberCanvas" aria-hidden="true"></canvas><canvas id="fogCanvas" aria-hidden="true"></canvas>
              <div class="brain-label">current signal / <strong id="brainLabel">mindless scrolling</strong></div>
            </div>
            <div class="brain-caption"><i></i><span id="brainCaption">translucent fog · 33% coverage · 66% visible</span><i></i></div>
          </section>
          <aside class="control-panel" aria-labelledby="friction-title">
            <div class="panel-kicker"><span>choose your stuck state</span><span class="state-reading" id="stateReading">live reset</span></div>
            <h2 id="friction-title">What has you stuck?</h2>
            <div class="choice-list" role="group" aria-label="Choose one or more friction states">
              ${frictionStates.map((state) => `
                <button class="choice" type="button" data-state="${state.id}" aria-pressed="${initialAll || state.id === 'scrolling'}" style="--choice: ${state.color}; --choice-rgb: ${state.rgb};">
                  <span class="choice-index">${state.number}</span><span class="choice-copy"><span class="choice-name">${state.name}</span><span class="choice-detail">${state.detail}</span></span><span class="choice-arrow" aria-hidden="true">↗</span>
                </button>
              `).join('')}
            </div>
            <div class="panel-footer"><span class="footer-pulse"></span><span id="stateMessage">Your attention is being tugged outward.</span></div>
            <p class="demo-footnote">Select more than one if the whole system is jammed. 120reset does not ask you to explain why.</p>
          </aside>
        </div>
      </section>

      <section class="audience-section section-wrap" aria-labelledby="audience-title">
        <div class="section-heading"><span class="eyebrow">you are not broken</span><h2 id="audience-title">The stuck feeling has four familiar faces.</h2><p>120reset is for the exact moment a normal productivity tool becomes another tab you cannot open.</p></div>
        <div class="audience-grid">
          <article class="audience-card"><span class="card-no">01</span><h3>The mindless scroller</h3><p>45 minutes disappeared into X, Instagram, or Reddit. Your thumb keeps moving after your brain has started begging it to stop.</p><strong>Break the trance without guilt.</strong></article>
          <article class="audience-card"><span class="card-no">02</span><h3>The frozen initiator</h3><p>The blank document, unanswered email, or deadline feels physically heavy. You are sitting still while the clock does not.</p><strong>Make the first move smaller than fear.</strong></article>
          <article class="audience-card"><span class="card-no">03</span><h3>The overloaded staller</h3><p>Fifteen open loops become zero actions. More planning creates more choice fatigue, so the brain chooses shutdown.</p><strong>One button. One next move.</strong></article>
          <article class="audience-card"><span class="card-no">04</span><h3>The depleted operator</h3><p>You are not lazy. Your nervous system is cooked from context switching, and another coffee will not create a starting signal.</p><strong>Decompress physically. Re-enter the day.</strong></article>
        </div>
      </section>

      <section class="mechanism-section section-wrap" aria-labelledby="mechanism-title">
        <div class="mechanism-copy"><span class="eyebrow">not a habit tracker</span><h2 id="mechanism-title">120 seconds.<br><em>That is the whole ask.</em></h2><p>When executive function is offline, 120reset bypasses the debate. It gives you a somatic grounding sequence and one physical micro-task designed to force task initiation before the old loop can negotiate.</p><a class="text-link js-reset-cta" href="#reset-demo">Use the circuit breaker <span>→</span></a></div>
        <div class="steps-list"><div class="step"><span>01</span><div><h3>Press one button</h3><p>No account, no setup, no project configuration.</p></div></div><div class="step"><span>02</span><div><h3>Follow the body</h3><p>A quick grounding cue turns attention from abstract panic to physical action.</p></div></div><div class="step"><span>03</span><div><h3>Start before you feel ready</h3><p>The win is not finishing. The win is breaking the freeze.</p></div></div></div>
      </section>

      <section class="final-cta section-wrap" aria-labelledby="final-title"><span class="eyebrow">the next two minutes are still yours</span><h2 id="final-title">Stop negotiating with the loop.</h2><p>Open 120reset the next time your brain locks up. Let the screen tell your body what to do next.</p><a class="button button-primary js-reset-cta" href="#reset-demo">Break the loop now <span>→</span></a><small>120reset is a focused self-help tool, not a medical diagnosis or treatment.</small></section>
    </main>
    <footer class="site-footer"><span>120reset / somatic circuit breaker for executive freeze</span><span>open web · installable PWA</span></footer>
  </div>
`;

const shell = document.querySelector('.app-shell');
const stage = document.querySelector('#brainStage');
const brainCanvas = document.querySelector('#brainCanvas');
const brainCtx = brainCanvas.getContext('2d');
const canvas = document.querySelector('#fiberCanvas');
const ctx = canvas.getContext('2d');
const fogCanvas = document.querySelector('#fogCanvas');
const fogCtx = fogCanvas.getContext('2d');
const label = document.querySelector('#brainLabel');
const caption = document.querySelector('#brainCaption');
const message = document.querySelector('#stateMessage');
const buttons = [...document.querySelectorAll('.choice')];

let selectedStates = initialAll ? [...frictionStates] : [frictionStates[0]];
let activeState = frictionStates[0];
let transition = 1;
let targetTransition = 1;
let previousTime = 0;
let width = 0;
let height = 0;
let strands = [];

function getFogStats() {
  if (selectedStates.length === 0) return { fog: 0, visible: 100 };
  if (selectedStates.length === frictionStates.length) return { fog: 99, visible: 1 };
  const fog = selectedStates.length * 33;
  return { fog, visible: 100 - fog - 1 };
}

if (initialAll) {
  label.textContent = '3 friction fields active';
  message.textContent = 'All three friction fields are fogging the brain.';
  const initialFogStats = getFogStats();
  caption.textContent = `translucent fog · ${initialFogStats.fog}% coverage · ${initialFogStats.visible}% visible`;
}

function roundedLobePath(context, cx, cy, rx, ry, phase, wobble = 0) {
  const points = 34;
  const outline = [];
  for (let i = 0; i <= points; i += 1) {
    const theta = (i / points) * Math.PI * 2;
    const wave = 1 + Math.sin(theta * 5 + phase) * .045 + Math.sin(theta * 9 - phase) * .026 + Math.sin(theta * 13 + phase) * .014 + wobble;
    outline.push({ x: cx + Math.cos(theta) * rx * wave, y: cy + Math.sin(theta) * ry * wave });
  }
  context.beginPath();
  const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  const firstMid = midpoint(outline[0], outline[1]);
  context.moveTo(firstMid.x, firstMid.y);
  for (let i = 1; i < outline.length - 1; i += 1) {
    const nextMid = midpoint(outline[i], outline[i + 1]);
    context.quadraticCurveTo(outline[i].x, outline[i].y, nextMid.x, nextMid.y);
  }
  context.quadraticCurveTo(outline[outline.length - 1].x, outline[outline.length - 1].y, firstMid.x, firstMid.y);
  context.closePath();
}

function drawBrain(time) {
  const rect = brainCanvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = rect.width;
  const h = rect.height;
  if (brainCanvas.width !== Math.round(w * dpr) || brainCanvas.height !== Math.round(h * dpr)) {
    brainCanvas.width = Math.round(w * dpr);
    brainCanvas.height = Math.round(h * dpr);
  }
  brainCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  brainCtx.clearRect(0, 0, w, h);

  const breath = Math.sin(time * .00135) * 2.2;
  const cx = w * .5;
  const cy = h * .47 + breath;
  const rx = w * .42;
  const ry = h * .33;
  const leftCx = cx - rx * .27;
  const rightCx = cx + rx * .27;

  const aura = brainCtx.createRadialGradient(cx, cy, ry * .08, cx, cy, ry * 1.45);
  aura.addColorStop(0, 'rgba(86, 205, 255, .25)');
  aura.addColorStop(.45, 'rgba(48, 117, 210, .13)');
  aura.addColorStop(1, 'rgba(4, 15, 27, 0)');
  brainCtx.fillStyle = aura;
  brainCtx.beginPath();
  brainCtx.ellipse(cx, cy, rx * 1.35, ry * 1.25, -.04, 0, Math.PI * 2);
  brainCtx.fill();

  // Transparent tissue base: blue on the left, warm gold on the right, like a healthy perfused cross-section.
  roundedLobePath(brainCtx, leftCx, cy, rx * .66, ry, time * .0007, breath / 100);
  const leftFill = brainCtx.createRadialGradient(leftCx - rx * .18, cy - ry * .4, 0, leftCx, cy, rx * .95);
  leftFill.addColorStop(0, 'rgba(255, 220, 177, .94)');
  leftFill.addColorStop(.22, 'rgba(151, 214, 255, .9)');
  leftFill.addColorStop(.58, 'rgba(64, 106, 210, .82)');
  leftFill.addColorStop(1, 'rgba(11, 33, 83, .7)');
  brainCtx.fillStyle = leftFill;
  brainCtx.fill();
  roundedLobePath(brainCtx, rightCx, cy, rx * .66, ry, time * .0007 + .4, breath / 100);
  const rightFill = brainCtx.createRadialGradient(rightCx + rx * .12, cy - ry * .38, 0, rightCx, cy, rx * .98);
  rightFill.addColorStop(0, 'rgba(255, 235, 154, .98)');
  rightFill.addColorStop(.25, 'rgba(255, 179, 97, .92)');
  rightFill.addColorStop(.6, 'rgba(129, 78, 193, .8)');
  rightFill.addColorStop(1, 'rgba(19, 34, 104, .72)');
  brainCtx.globalAlpha = .9;
  brainCtx.fillStyle = rightFill;
  brainCtx.fill();
  brainCtx.globalAlpha = 1;

  // Draw living cords and vessels inside the transparent tissue cross-section.
  brainCtx.save();
  brainCtx.beginPath();
  brainCtx.ellipse(leftCx, cy, rx * .66, ry, 0, 0, Math.PI * 2);
  brainCtx.ellipse(rightCx, cy, rx * .66, ry, 0, 0, Math.PI * 2);
  brainCtx.clip();
  const cordColors = ['#ffd37d', '#ff9f75', '#79ddff', '#b699ff', '#fff2c4'];
  for (let i = 0; i < 42; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const row = Math.floor(i / 2);
    const startX = cx + side * (rx * (.58 - (row % 5) * .05));
    const startY = cy - ry * .82 + (row / 20) * ry * 1.65;
    const endX = cx - side * (rx * (.2 + (row % 4) * .08));
    const bend = side * rx * (.12 + (row % 3) * .05);
    brainCtx.beginPath();
    brainCtx.moveTo(startX, startY);
    brainCtx.bezierCurveTo(startX - bend, startY - ry * .22, endX + bend, startY + ry * .18, endX, startY + ry * .38);
    brainCtx.bezierCurveTo(endX - bend * .4, startY + ry * .64, endX + bend * .35, startY + ry * .88, cx + side * rx * .06, startY + ry * 1.1);
    brainCtx.strokeStyle = cordColors[i % cordColors.length];
    brainCtx.globalAlpha = .3 + (i % 4) * .1;
    brainCtx.lineWidth = 1.3 + (i % 5 === 0 ? 2.4 : .2);
    brainCtx.lineCap = 'round';
    brainCtx.shadowBlur = i % 5 === 0 ? 12 : 4;
    brainCtx.shadowColor = cordColors[i % cordColors.length];
    brainCtx.stroke();
  }
  for (let i = 0; i < 12; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const x = cx + side * rx * (.05 + (i % 6) * .06);
    brainCtx.beginPath();
    brainCtx.moveTo(x, cy - ry * .9);
    brainCtx.bezierCurveTo(x + side * rx * .18, cy - ry * .45, x - side * rx * .16, cy - ry * .05, x + side * rx * .12, cy + ry * .42);
    brainCtx.bezierCurveTo(x - side * rx * .08, cy + ry * .62, x + side * rx * .1, cy + ry * .76, x, cy + ry * .95);
    brainCtx.strokeStyle = i % 3 === 0 ? '#fff4be' : '#69d9ff';
    brainCtx.globalAlpha = .46;
    brainCtx.lineWidth = 1.8;
    brainCtx.shadowBlur = 10;
    brainCtx.stroke();
  }
  brainCtx.restore();

  // A luminous callosal bridge and the deep cut between the hemispheres.
  brainCtx.beginPath();
  brainCtx.moveTo(cx - rx * .03, cy - ry * .82);
  brainCtx.bezierCurveTo(cx + rx * .12, cy - ry * .45, cx - rx * .12, cy - ry * .1, cx + rx * .02, cy + ry * .2);
  brainCtx.bezierCurveTo(cx + rx * .12, cy + ry * .48, cx - rx * .08, cy + ry * .72, cx - rx * .02, cy + ry * .92);
  brainCtx.strokeStyle = 'rgba(14, 28, 74, .62)';
  brainCtx.lineWidth = 5;
  brainCtx.stroke();
  brainCtx.strokeStyle = 'rgba(255, 221, 129, .7)';
  brainCtx.lineWidth = 1.2;
  brainCtx.shadowBlur = 14;
  brainCtx.shadowColor = '#ffca6e';
  brainCtx.stroke();
  brainCtx.shadowBlur = 0;

  // Fine shell lines make the cross-section feel curved and translucent instead of flat.
  for (let i = 0; i < 14; i += 1) {
    brainCtx.beginPath();
    brainCtx.ellipse(cx, cy + (i - 7) * 3, rx * (.66 - Math.abs(i - 7) * .025), ry * (.96 - Math.abs(i - 7) * .018), -.05, Math.PI * .08, Math.PI * .92);
    brainCtx.strokeStyle = i % 2 ? 'rgba(164, 234, 255, .2)' : 'rgba(255, 198, 120, .23)';
    brainCtx.lineWidth = 1;
    brainCtx.stroke();
  }

  // Healthy brainstem and cerebellum.
  const stem = brainCtx.createLinearGradient(cx, cy + ry * .6, cx, h);
  stem.addColorStop(0, '#ffd08a'); stem.addColorStop(.35, '#db8fb2'); stem.addColorStop(.75, '#6758bd'); stem.addColorStop(1, '#162f83');
  brainCtx.fillStyle = stem;
  brainCtx.beginPath();
  brainCtx.moveTo(cx - rx * .1, cy + ry * .58);
  brainCtx.bezierCurveTo(cx - rx * .15, cy + ry * .88, cx - rx * .05, cy + ry * 1.1, cx - rx * .025, h * .98);
  brainCtx.lineTo(cx + rx * .045, h * .98);
  brainCtx.bezierCurveTo(cx + rx * .1, cy + ry * .95, cx + rx * .18, cy + ry * .74, cx + rx * .12, cy + ry * .58);
  brainCtx.closePath();
  brainCtx.fill();
  roundedLobePath(brainCtx, cx + rx * .29, cy + ry * .65, rx * .27, ry * .2, time * .0008);
  const cerebellum = brainCtx.createRadialGradient(cx + rx * .2, cy + ry * .56, 0, cx + rx * .29, cy + ry * .65, rx * .3);
  cerebellum.addColorStop(0, '#ffe2a4'); cerebellum.addColorStop(.45, '#f39a95'); cerebellum.addColorStop(1, '#8057bd');
  brainCtx.fillStyle = cerebellum;
  brainCtx.fill();
  for (let i = 0; i < 8; i += 1) {
    brainCtx.beginPath();
    brainCtx.moveTo(cx + rx * .08, cy + ry * .55 + i * 6);
    brainCtx.quadraticCurveTo(cx + rx * .28, cy + ry * .57 + (i % 2) * 5, cx + rx * .47, cy + ry * .58 + i * 6);
    brainCtx.strokeStyle = 'rgba(255, 226, 157, .45)';
    brainCtx.lineWidth = 1.3;
    brainCtx.stroke();
  }

  // Friction fog is composited directly onto the brain tissue so it hides healthy detail, not just the surrounding glow.
  if (selectedStates.length > 0) {
    brainCtx.save();
    brainCtx.beginPath();
    brainCtx.ellipse(leftCx, cy, rx * .66, ry, 0, 0, Math.PI * 2);
    brainCtx.ellipse(rightCx, cy, rx * .66, ry, 0, 0, Math.PI * 2);
    brainCtx.rect(cx - rx * .22, cy + ry * .3, rx * .44, h - cy);
    brainCtx.ellipse(cx + rx * .29, cy + ry * .65, rx * .34, ry * .25, 0, 0, Math.PI * 2);
    brainCtx.clip();
    if (selectedStates.length === frictionStates.length) {
      brainCtx.fillStyle = 'rgba(7, 18, 38, .99)';
      brainCtx.fillRect(cx - rx * 1.2, cy - ry * 1.2, rx * 2.4, ry * 2.4);
      brainCtx.globalCompositeOperation = 'destination-out';
      brainCtx.beginPath();
      brainCtx.ellipse(cx + rx * .08, cy - ry * .08, rx * .055, ry * .045, -.2, 0, Math.PI * 2);
      brainCtx.fill();
    } else {
      const fogBandWidth = rx * .68;
      selectedStates.forEach((state, index) => {
        const startX = cx - rx + index * fogBandWidth;
        brainCtx.beginPath();
        brainCtx.moveTo(startX, cy - ry * 1.2);
        brainCtx.bezierCurveTo(startX + fogBandWidth * .32, cy - ry * .55, startX - fogBandWidth * .15, cy + ry * .35, startX + fogBandWidth * .2, cy + ry * 1.2);
        brainCtx.lineTo(startX + fogBandWidth * 1.04, cy + ry * 1.2);
        brainCtx.bezierCurveTo(startX + fogBandWidth * .72, cy + ry * .28, startX + fogBandWidth * 1.1, cy - ry * .5, startX + fogBandWidth * .82, cy - ry * 1.2);
        brainCtx.closePath();
        const fogGradient = brainCtx.createLinearGradient(startX, 0, startX + fogBandWidth * 1.04, 0);
        fogGradient.addColorStop(0, 'rgba(8, 20, 42, 0)');
        fogGradient.addColorStop(.18, `rgba(8, 20, 42, ${.48 + index * .05})`);
        fogGradient.addColorStop(.52, `rgba(8, 20, 42, ${.76 + index * .04})`);
        fogGradient.addColorStop(.86, `rgba(8, 20, 42, ${.48 + index * .05})`);
        fogGradient.addColorStop(1, 'rgba(8, 20, 42, 0)');
        brainCtx.fillStyle = fogGradient;
        brainCtx.filter = 'blur(7px)';
        brainCtx.fill();
        brainCtx.filter = 'none';
      });
    }
    brainCtx.restore();
    if (selectedStates.length === frictionStates.length) {
      brainCtx.fillStyle = 'rgba(7, 18, 38, .99)';
      brainCtx.fillRect(cx - rx * .18, cy + ry * .42, rx * .36, h - cy);
    }
  }
}

function seeded(index, salt = 1) {
  const x = Math.sin(index * 9283.37 + salt * 17.11) * 43758.5453;
  return x - Math.floor(x);
}

function createStrands() {
  strands = Array.from({ length: 42 }, (_, index) => {
    const lane = index / 41;
    return {
      lane,
      x: .11 + seeded(index, 1) * .78,
      y: .1 + seeded(index, 2) * .8,
      width: .48 + seeded(index, 3) * .42,
      height: .16 + seeded(index, 4) * .24,
      tilt: (seeded(index, 5) - .5) * .95,
      speed: .00045 + seeded(index, 6) * .00065,
      phase: seeded(index, 7) * Math.PI * 2,
      index,
      alpha: .13 + seeded(index, 8) * .28
    };
  });
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = rect.width;
  height = rect.height;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  fogCanvas.width = Math.round(width * dpr);
  fogCanvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  fogCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawStrand(strand, time) {
  const centerX = width * strand.x;
  const centerY = height * strand.y;
  const radiusX = width * strand.width * .54;
  const radiusY = height * strand.height * .8;
  const wave = Math.sin(time * strand.speed + strand.phase);
  const coverage = selectedStates.length / frictionStates.length;
  const isActive = selectedStates.length > 0 && strand.index < Math.ceil(strands.length * coverage);
  const strandState = isActive ? selectedStates[strand.index % selectedStates.length] : null;
  const tension = isActive ? .74 + transition * .26 : .25 + transition * .1;
  const constriction = isActive ? 1 - tension * .075 + wave * .013 : 1 + wave * .025;
  const lineWidth = isActive ? 1.15 + transition * .9 : .65;
  const alpha = isActive ? (.16 + transition * .53) : strand.alpha * .5;
  const color = isActive ? strandState.color : '#9eeaff';
  const rgb = isActive ? strandState.rgb : '158, 234, 255';

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(strand.tilt + wave * .03);
  ctx.scale(constriction, 1 - (constriction - 1) * .32);
  ctx.beginPath();
  for (let i = 0; i <= 72; i += 1) {
    const t = i / 72;
    const theta = Math.PI * 2 * t;
    const wobble = Math.sin(theta * 3 + strand.phase + time * strand.speed * 1.3) * (isActive ? 2.5 : 1.3);
    const x = Math.cos(theta) * (radiusX + wobble) + Math.sin(theta * 2 + strand.phase) * 6;
    const y = Math.sin(theta) * (radiusY + wobble * .55) + Math.cos(theta * 3 + strand.phase) * 4;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
  ctx.lineWidth = lineWidth;
  ctx.shadowBlur = isActive ? 12 : 5;
  ctx.shadowColor = color;
  ctx.stroke();

  if (isActive && (strand.lane * 41) % 2 < 1) {
    const nodeTheta = (time * strand.speed * 2 + strand.phase) % (Math.PI * 2);
    const nodeX = Math.cos(nodeTheta) * radiusX;
    const nodeY = Math.sin(nodeTheta) * radiusY;
    ctx.beginPath();
    ctx.arc(nodeX, nodeY, 1.2 + transition * 1.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 250, 215, ${.65 + transition * .3})`;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;
    ctx.fill();
  }
  ctx.restore();
}

function drawConstrictionLayer(time) {
  if (selectedStates.length === 0) return;
  const centerX = width * .5;
  const centerY = height * .47;
  const radiusX = width * .43;
  const radiusY = height * .32;
  const coverage = selectedStates.length / frictionStates.length;

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(centerX - radiusX * .27, centerY, radiusX * .63, radiusY, 0, 0, Math.PI * 2);
  ctx.ellipse(centerX + radiusX * .27, centerY, radiusX * .63, radiusY, 0, 0, Math.PI * 2);
  ctx.clip();

  const bandsPerState = Math.ceil(12 * coverage);
  selectedStates.forEach((state, stateIndex) => {
    for (let i = 0; i < bandsPerState; i += 1) {
      const lane = (i + stateIndex * .43) / Math.max(bandsPerState, 1);
      const y = centerY - radiusY * .78 + lane * radiusY * 1.58;
      const squeeze = 1 - Math.sin(time * .001 + i + stateIndex) * .035 - coverage * .035;
      const span = radiusX * (.62 + Math.sin(i * 1.7) * .035) * squeeze;
      const wave = Math.sin(time * .0012 + i * .7 + stateIndex) * radiusY * .055;
      ctx.beginPath();
      ctx.moveTo(centerX - span, y);
      ctx.bezierCurveTo(centerX - span * .42, y + wave, centerX - span * .05, y - wave, centerX + span * .08, y + wave * .3);
      ctx.bezierCurveTo(centerX + span * .3, y + wave, centerX + span * .63, y - wave, centerX + span, y + wave * .15);
      ctx.strokeStyle = `rgba(${state.rgb}, ${.24 + coverage * .2})`;
      ctx.lineWidth = 1.05 + coverage * 1.7;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 10 + coverage * 7;
      ctx.shadowColor = state.color;
      ctx.stroke();
    }
  });
  ctx.restore();

  // A narrow, selected-colour squeeze ring closes around the whole brain silhouette.
  selectedStates.forEach((state, index) => {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX * (1.02 - index * .025), radiusY * (1.05 - index * .025), -.03, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${state.rgb}, ${.27 + coverage * .12})`;
    ctx.lineWidth = 1.2 + coverage * 1.1;
    ctx.shadowBlur = 14;
    ctx.shadowColor = state.color;
    ctx.stroke();
    ctx.restore();
  });
}

function drawFogLayer(time) {
  fogCtx.clearRect(0, 0, width, height);
  const fogAmount = selectedStates.length * .33;
  if (fogAmount <= 0) return;
  const centerX = width * .5;
  const centerY = height * .47;
  const radiusX = width * .42;
  const radiusY = height * .33;

  fogCtx.save();
  fogCtx.beginPath();
  fogCtx.ellipse(centerX - radiusX * .27, centerY, radiusX * .66, radiusY, 0, 0, Math.PI * 2);
  fogCtx.ellipse(centerX + radiusX * .27, centerY, radiusX * .66, radiusY, 0, 0, Math.PI * 2);
  fogCtx.clip();

  if (selectedStates.length === frictionStates.length) {
    // The full state leaves only a tiny healthy pinhole of the tissue visible.
    fogCtx.fillStyle = 'rgba(7, 18, 38, .99)';
    fogCtx.fillRect(centerX - radiusX * 1.2, centerY - radiusY * 1.2, radiusX * 2.4, radiusY * 2.4);
    for (let i = 0; i < 18; i += 1) {
      const state = selectedStates[i % selectedStates.length];
      fogCtx.beginPath();
      fogCtx.ellipse(centerX + Math.sin(time * .0005 + i) * radiusX * .55, centerY + Math.cos(time * .0007 + i) * radiusY * .65, radiusX * (.08 + (i % 3) * .03), radiusY * (.04 + (i % 2) * .035), i, 0, Math.PI * 2);
      fogCtx.fillStyle = `rgba(${state.rgb}, .08)`;
      fogCtx.filter = 'blur(10px)';
      fogCtx.fill();
    }
    fogCtx.filter = 'none';
    fogCtx.globalCompositeOperation = 'destination-out';
    fogCtx.beginPath();
    fogCtx.ellipse(centerX + radiusX * .08, centerY - radiusY * .08, radiusX * .055, radiusY * .045, -.2, 0, Math.PI * 2);
    fogCtx.fill();
  } else {
    const bandWidth = radiusX * .68;
    selectedStates.forEach((state, index) => {
      const startX = centerX - radiusX + index * bandWidth;
      fogCtx.beginPath();
      fogCtx.moveTo(startX, centerY - radiusY * 1.2);
      fogCtx.bezierCurveTo(startX + bandWidth * .32, centerY - radiusY * .55, startX - bandWidth * .15, centerY + radiusY * .35, startX + bandWidth * .2, centerY + radiusY * 1.2);
      fogCtx.lineTo(startX + bandWidth * 1.04, centerY + radiusY * 1.2);
      fogCtx.bezierCurveTo(startX + bandWidth * .72, centerY + radiusY * .28, startX + bandWidth * 1.1, centerY - radiusY * .5, startX + bandWidth * .82, centerY - radiusY * 1.2);
      fogCtx.closePath();
      fogCtx.fillStyle = `rgba(8, 20, 42, ${.76 + index * .04})`;
      fogCtx.fill();
      fogCtx.strokeStyle = `rgba(${state.rgb}, .13)`;
      fogCtx.lineWidth = 8;
      fogCtx.filter = 'blur(8px)';
      fogCtx.stroke();
      fogCtx.filter = 'none';
    });
  }
  fogCtx.restore();
}

function draw(time) {
  if (!previousTime) previousTime = time;
  const delta = Math.min(time - previousTime, 48);
  previousTime = time;
  transition += (targetTransition - transition) * Math.min(delta * .008, .12);
  drawBrain(time);
  ctx.clearRect(0, 0, width, height);
  strands.forEach((strand) => drawStrand(strand, time));
  drawConstrictionLayer(time);
  drawFogLayer(time);

  // A fine perimeter glow makes the distributed constriction read as wrapping the whole brain.
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.beginPath();
  ctx.ellipse(0, 0, width * .405, height * .365, -.06, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${activeState.rgb}, ${.12 + transition * .23})`;
  ctx.lineWidth = 1.1 + transition * .8;
  ctx.shadowBlur = 17;
  ctx.shadowColor = activeState.color;
  ctx.stroke();
  ctx.restore();
  requestAnimationFrame(draw);
}

function setState(nextId) {
  const next = frictionStates.find((state) => state.id === nextId);
  if (!next) return;
  const isSelected = selectedStates.some((state) => state.id === next.id);
  selectedStates = isSelected
    ? selectedStates.filter((state) => state.id !== next.id)
    : [...selectedStates, next];
  activeState = selectedStates[0] || frictionStates[0];
  targetTransition = 0;
  window.setTimeout(() => { targetTransition = 1; }, 40);
  shell.dataset.state = next.id;
  stage.style.setProperty('--brain-accent', activeState.color);
  stage.style.setProperty('--brain-accent-rgb', activeState.rgb);
  label.textContent = selectedStates.length === 0
    ? 'no active friction'
    : selectedStates.length > 1
      ? `${selectedStates.length} friction fields active`
      : selectedStates[0].name.toLowerCase();
  message.textContent = selectedStates.length === 0
    ? 'The field is clear. Choose a friction to observe it.'
    : selectedStates.length === frictionStates.length
      ? 'All three friction fields are fogging the brain.'
      : selectedStates.map((state) => state.message).join(' ');
  const fogStats = getFogStats();
  caption.textContent = `translucent fog · ${fogStats.fog}% coverage · ${fogStats.visible}% visible`;
  buttons.forEach((button) => button.setAttribute('aria-pressed', String(selectedStates.some((state) => state.id === button.dataset.state))));
}

buttons.forEach((button) => button.addEventListener('click', () => setState(button.dataset.state)));
document.querySelectorAll('.js-reset-cta').forEach((cta) => cta.addEventListener('click', () => {
  if (selectedStates.length === 0) setState('scrolling');
  window.setTimeout(() => document.querySelector('#reset-demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
}));
window.addEventListener('resize', resizeCanvas, { passive: true });

createStrands();
resizeCanvas();
requestAnimationFrame(draw);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js?sales=1').catch(() => {}));
}
