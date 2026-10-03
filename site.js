const I18N = {
  en: {
    navCase: "A real case",
    navExp: "Experiments",
    navFuture: "What follows",
    lang: "中文",
    kicker: "TI-JEPA · world models",
    h1: "A still frame<br />has no velocity.",
    lede: "A next-frame JEPA predicts the embedding of the next frame from the current embedding and the action. A renderer without motion blur draws configuration only. The embedding of one frame is a function of configuration, so no encoder, however large, can read instantaneous velocity out of it. TI-JEPA makes one small, checkable change: split the latent into a pose code and an explicit motion code, and predict both.",
    s1: "Lower closed-loop distance on Pendulum<br />p = 3.2×10⁻¹⁰",
    s2: "Lower closed-loop distance on CartPole<br />p = 5.1×10⁻¹⁵",
    s3: "Memoryless branch separation<br />exactly zero in six settings, as the theory requires",
    s4: "Branch separation versus a 3-frame history baseline<br />on real Reacher photographs",
    caseKicker: "01 · One real case",
    caseTitle: "The same pixels, two real futures.",
    caseSub: "This is one pair from the trained Pendulum models, the same construction as the paper’s kill experiment. At the first step the two renderings match. The memoryless model then emits one rollout for both. TI-JEPA follows the two directions the physics actually takes.",
    expKicker: "02 · Every environment",
    expTitle: "The same test, three physical systems.",
    expSub: "Choose an environment. Each player is another real pair from that environment’s trained models: ground truth, the memoryless baseline, and TI-JEPA. The last two are real official benchmarks, retrained on real pixels, not built for this paper.",
    pushtTitle: "Real PushT, retrained on real pixels.",
    pushtCap: "Real pymunk physics, real pixels, both arms equally memoryless. The baseline sits flat at exactly zero branch separation, as Corollary 1 guarantees. TI-JEPA reaches 0.65 velocity-sign accuracy against 0.50 — a visible split in a comparison with no memory advantage on either side.",
    reacherTitle: "Real dm_control Reacher, official scale.",
    reacherCap: "Trained from scratch at official ViT-Tiny + AdaLN scale on real Reacher photographs. TI-JEPA’s branch separation grows past ground truth; a baseline given three times the history still never leaves the floor. 2.17 vs 0.057 — 38×, the largest margin in the paper.",
    futKicker: "03 · What this changes",
    futTitle: "A world model can be asked to stop.",
    f1t: "The target is the state",
    f1b: "Whatever the loss predicts is what later planning is allowed to know. A next-frame embedding leaves velocity outside that state. Pose and motion, predicted together, put it back in.",
    f2t: "Readable, not hidden",
    f2b: "The motion code is a bias-free finite difference. Identical frames give exactly zero. A probe can read pose and speed separately, and a planner can ask for arrival with no leftover speed.",
    f3t: "The next world models",
    f3b: "Control that catches, swings, or comes to rest needs the rate of change in the object being predicted. That is a change to the target, and it travels with any encoder large enough to see the scene.",
    foot: "Code: <a href=\"https://github.com/OliverZ-dot/TI-JEPA\">github.com/OliverZ-dot/TI-JEPA</a>. The players replay real model rollouts. The headline numbers are the paper’s aggregate results.",
    play: "Play",
    pause: "Pause",
    back: "Back to start",
    pix: "Pixel difference of the two frames",
    same: "The two renderings match. A single-frame encoder reads the same thing.",
    split: "The scene has diverged. The memoryless rollout never used that split.",
    plus: "v = +v",
    minus: "v = −v",
    legGt: "Ground truth +v / −v",
    legBase: "Memoryless baseline (one curve)",
    legTi: "TI-JEPA",
    note: "Frames are the real renderer. Curves are decoded positions from the trained models on this same pair. Aggregate scores stay in the headline.",
    angle: "position",
    step: "step",
    time: "step",
  },
  zh: {
    navCase: "真实例子",
    navExp: "每个实验",
    navFuture: "往后",
    lang: "English",
    kicker: "TI-JEPA · 世界模型",
    h1: "一帧静止画面里，<br />没有速度。",
    lede: "下一帧 JEPA 用当前帧的嵌入和动作去预测下一帧的嵌入。没有运动模糊的渲染器只画出构型。单帧嵌入是构型的函数，所以无论编码器多大，都读不出瞬时速度。TI-JEPA 做了一处很小、可检查的改动：把潜变量拆成位姿码和显式运动码，两边一起预测。",
    s1: "Pendulum 闭环终点更近<br />p = 3.2×10⁻¹⁰",
    s2: "CartPole 闭环终点更近<br />p = 5.1×10⁻¹⁵",
    s3: "无记忆基线的分支分离<br />理论要求，六组设定都正好为零",
    s4: "真实 Reacher 照片上<br />相对三帧历史基线的分支分离",
    caseKicker: "01 · 一个真实例子",
    caseTitle: "同一组像素，两个真实的未来。",
    caseSub: "这是训练好的 Pendulum 模型上的一对样本，构造和论文里的 kill experiment 相同。第一步两幅渲染完全一样。无记忆模型随后对两边给出同一条 rollout。TI-JEPA 跟着物理真正走的两个方向。",
    expKicker: "02 · 每个环境",
    expTitle: "同一个检验，三套物理系统。",
    expSub: "选一个环境。每个播放器都是该环境已训练模型上的另一对真实样本：真实轨迹、无记忆基线、TI-JEPA。后两个是真实的官方基准测试，在真实像素上重新训练，不是为这篇论文搭的环境。",
    pushtTitle: "真实 PushT，在真实像素上重训。",
    pushtCap: "真实 pymunk 物理，真实像素，两个模型都同样无记忆。基线的分支分离正好恒为零，这是 Corollary 1 的保证。TI-JEPA 的速度符号准确率达到 0.65，对比 0.50——在一个双方都没有记忆优势的公平对比里，分得很开。",
    reacherTitle: "真实 dm_control Reacher，官方规模。",
    reacherCap: "在真实 Reacher 照片上，以官方 ViT-Tiny + AdaLN 规模从零训练。TI-JEPA 的分支分离曲线超过了真实轨迹；给了三倍历史窗口的基线依然没有离开地板。2.17 对 0.057，38 倍，是全文最大的差距。",
    futKicker: "03 · 这件事改变什么",
    futTitle: "世界模型可以被要求停下来。",
    f1t: "预测目标就是状态",
    f1b: "损失预测什么，后面的规划就只能知道什么。下一帧嵌入把速度留在了这个状态外面。位姿和运动一起预测，就把它放回去了。",
    f2t: "读得出来",
    f2b: "运动码是无偏置的有限差分。相同的帧给出正好为零。探针可以分开读位姿和速度，规划也可以要求到达之后不再留有速度。",
    f3t: "后面的世界模型",
    f3b: "要接住、要荡过去、要停稳的控制，需要被预测的对象里带着变化率。这是对目标的一处修改，并且会跟着任何看得见场景的编码器走。",
    foot: "代码：<a href=\"https://github.com/OliverZ-dot/TI-JEPA\">github.com/OliverZ-dot/TI-JEPA</a>。播放器回放的是真实模型 rollout。页首数字是论文里的汇总结果。",
    play: "播放",
    pause: "暂停",
    back: "回到起点",
    pix: "两帧像素差",
    same: "两幅渲染相同。单帧编码器读到的是同一件事。",
    split: "画面已经分开。无记忆的 rollout 没有用到这个差别。",
    plus: "v = +v",
    minus: "v = −v",
    legGt: "真实轨迹 +v / −v",
    legBase: "无记忆基线（两条重合）",
    legTi: "TI-JEPA",
    note: "画面来自真实渲染器。曲线是这同一对样本上，训练好的模型解码出的位置。汇总数字在页首。",
    angle: "位置",
    step: "步",
    time: "步",
  },
};

const ENV_NAME = {
  en: { pendulum: "Pendulum", cartpole: "CartPole", inertia_ball: "InertiaBall", pusht_real: "PushT", reacher_real: "Reacher" },
  zh: { pendulum: "Pendulum", cartpole: "CartPole", inertia_ball: "InertiaBall", pusht_real: "PushT", reacher_real: "Reacher" },
};

const REAL_BENCH = {
  pusht_real: { gif: "assets/pusht_real_kill_demo.gif", chart: "assets/pusht_real_branch_sep_chart.png", titleKey: "pushtTitle", capKey: "pushtCap" },
  reacher_real: { gif: "assets/reacher_real_kill_demo.gif", chart: "assets/reacher_real_branch_sep_chart.png", titleKey: "reacherTitle", capKey: "reacherCap" },
};

let LANG = "en";
let DATA = null;
const players = [];

function t(key) { return I18N[LANG][key]; }

function applyI18n() {
  document.documentElement.lang = LANG === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.getElementById("lang").textContent = t("lang");
  document.querySelectorAll("#env-tabs button").forEach((b) => {
    b.textContent = ENV_NAME[LANG][b.dataset.id];
  });
  players.forEach((p) => p.refreshCopy());
}

function pixelDiff(imgA, imgB) {
  const c = document.createElement("canvas");
  const w = imgA.naturalWidth || 64;
  const h = imgA.naturalHeight || 64;
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  ctx.drawImage(imgA, 0, 0);
  const a = ctx.getImageData(0, 0, w, h).data;
  ctx.drawImage(imgB, 0, 0);
  const b = ctx.getImageData(0, 0, w, h).data;
  let s = 0;
  const n = w * h;
  for (let i = 0; i < a.length; i += 4) {
    s += Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]);
  }
  return s / (n * 3 * 255);
}

function mountPlayer(host, example) {
  host.innerHTML = `
    <div class="panel">
      <div class="demo-grid">
        <div class="controls">
          <div class="row-btns">
            <button class="btn primary play" type="button"></button>
            <button class="btn reset" type="button"></button>
          </div>
          <label class="slider"><span class="time-lab"></span> <strong class="time-val"></strong>
            <input class="time" type="range" min="0" max="${example.gt_plus.length - 1}" value="0" />
          </label>
          <div class="readout">
            <div class="pix-lab"></div>
            <b class="pix zero">0.0000</b>
            <div class="pix-note"></div>
          </div>
        </div>
        <div>
          <div class="frames">
            <div class="frame-card"><img class="shot plus" alt="" /><p class="cap-plus"></p></div>
            <div class="frame-card"><img class="shot minus" alt="" /><p class="cap-minus"></p></div>
          </div>
          <canvas class="chart"></canvas>
          <div class="legend">
            <span><i class="swatch" style="background:#1a1a1a"></i><span class="leg-gt"></span></span>
            <span><i class="swatch" style="background:#a33b32"></i><span class="leg-base"></span></span>
            <span><i class="swatch" style="background:#1c4f8a"></i><span class="leg-ti"></span></span>
          </div>
        </div>
      </div>
      <p class="note foot-note"></p>
    </div>`;
  const state = { frame: 0, playing: false, timer: null, example };
  const q = (sel) => host.querySelector(sel);
  const plusImgs = example.plus.map((src) => Object.assign(new Image(), { src }));
  const minusImgs = example.minus.map((src) => Object.assign(new Image(), { src }));

  function drawChart() {
    const canvas = q("canvas.chart");
    const w = Math.max(2, canvas.clientWidth || 640);
    const h = 240;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#faf7f1";
    ctx.fillRect(0, 0, w, h);
    const series = [example.gt_plus, example.gt_minus, example.base_plus, example.ti_plus, example.ti_minus];
    let ymin = Math.min(...series.flat()) - 0.15;
    let ymax = Math.max(...series.flat()) + 0.15;
    const pad = { l: 36, r: 12, t: 16, b: 28 };
    const n = example.gt_plus.length;
    const X = (k) => pad.l + (k / (n - 1)) * (w - pad.l - pad.r);
    const Y = (v) => pad.t + (1 - (v - ymin) / (ymax - ymin)) * (h - pad.t - pad.b);
    ctx.strokeStyle = "#e4dccb";
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t);
    ctx.lineTo(pad.l, h - pad.b);
    ctx.lineTo(w - pad.r, h - pad.b);
    ctx.stroke();
    ctx.fillStyle = "#8a8376";
    ctx.font = "12px sans-serif";
    ctx.fillText(t("angle"), 4, 14);
    ctx.fillText(t("step"), w - 36, h - 8);
    function stroke(arr, color, dash) {
      ctx.save();
      ctx.beginPath();
      for (let k = 0; k <= state.frame; k++) {
        const x = X(k);
        const y = Y(arr[k]);
        if (k === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.2;
      ctx.setLineDash(dash);
      ctx.stroke();
      ctx.restore();
    }
    stroke(example.gt_plus, "#1a1a1a", []);
    stroke(example.gt_minus, "#1a1a1a", [4, 3]);
    stroke(example.base_plus, "#a33b32", []);
    stroke(example.ti_plus, "#1c4f8a", []);
    stroke(example.ti_minus, "#1c4f8a", [4, 3]);
    ctx.strokeStyle = "#a56b12";
    ctx.setLineDash([2, 3]);
    ctx.beginPath();
    ctx.moveTo(X(state.frame), pad.t);
    ctx.lineTo(X(state.frame), h - pad.b);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function render() {
    const fi = Math.min(state.frame, example.plus.length - 1);
    const a = plusImgs[fi];
    const b = minusImgs[fi];
    q("img.plus").src = a.src;
    q("img.minus").src = b.src;
    q(".time").value = String(state.frame);
    q(".time-val").textContent = state.frame;
    const diff = state.frame === 0 ? 0 : (a.complete && b.complete ? pixelDiff(a, b) : 0);
    const pix = q(".pix");
    pix.textContent = diff.toFixed(4);
    pix.className = "pix " + (diff < 0.004 ? "zero" : "hot");
    q(".pix-note").textContent = diff < 0.004 ? t("same") : t("split");
    drawChart();
  }

  function refreshCopy() {
    q(".play").textContent = state.playing ? t("pause") : t("play");
    q(".reset").textContent = t("back");
    q(".time-lab").textContent = t("time");
    q(".pix-lab").textContent = t("pix");
    q(".cap-plus").textContent = t("plus");
    q(".cap-minus").textContent = t("minus");
    q(".leg-gt").textContent = t("legGt");
    q(".leg-base").textContent = t("legBase");
    q(".leg-ti").textContent = t("legTi");
    q(".foot-note").textContent = t("note");
    render();
  }

  function stop() {
    state.playing = false;
    clearInterval(state.timer);
    q(".play").textContent = t("play");
  }

  q(".play").addEventListener("click", () => {
    if (state.playing) { stop(); return; }
    if (state.frame >= example.gt_plus.length - 1) state.frame = 0;
    state.playing = true;
    q(".play").textContent = t("pause");
    state.timer = setInterval(() => {
      if (state.frame >= example.gt_plus.length - 1) { stop(); return; }
      state.frame += 1;
      render();
    }, 280);
  });
  q(".reset").addEventListener("click", () => { stop(); state.frame = 0; render(); });
  q(".time").addEventListener("input", (e) => { stop(); state.frame = Number(e.target.value); render(); });
  window.addEventListener("resize", drawChart);
  const api = { refreshCopy, stop };
  players.push(api);
  refreshCopy();
  return api;
}

function mountRealBenchmark(host, id) {
  const info = REAL_BENCH[id];
  host.innerHTML = `
    <div class="panel">
      <div class="frames">
        <div class="frame-card"><img class="shot" src="${info.gif}" alt="" /><p class="rb-title"></p></div>
        <div class="frame-card" style="background:#faf7f1"><img class="shot" src="${info.chart}" alt="" /></div>
      </div>
      <p class="note rb-cap"></p>
    </div>`;
  function refreshCopy() {
    host.querySelector(".rb-title").textContent = t(info.titleKey);
    host.querySelector(".rb-cap").textContent = t(info.capKey);
  }
  refreshCopy();
  const api = { refreshCopy, stop() {} };
  players.push(api);
  return api;
}

function setupPicker() {
  const tabs = document.getElementById("env-tabs");
  const order = ["pendulum", "cartpole", "inertia_ball", "pusht_real", "reacher_real"];
  order.forEach((id) => {
    const b = document.createElement("button");
    b.className = "btn";
    b.type = "button";
    b.dataset.id = id;
    b.textContent = ENV_NAME[LANG][id];
    b.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      const host = document.getElementById("picker");
      players.slice(1).forEach((p) => p.stop());
      players.length = 1;
      if (REAL_BENCH[id]) {
        mountRealBenchmark(host, id);
      } else {
        mountPlayer(host, DATA[id]);
      }
    });
    tabs.appendChild(b);
  });
  tabs.querySelector("button").setAttribute("aria-pressed", "true");
  mountPlayer(document.getElementById("picker"), DATA.pendulum);
}

document.getElementById("lang").addEventListener("click", () => {
  LANG = LANG === "en" ? "zh" : "en";
  applyI18n();
});

fetch("data/examples.json")
  .then((r) => r.json())
  .then((data) => {
    DATA = data;
    mountPlayer(document.getElementById("featured"), data.pendulum);
    setupPicker();
    applyI18n();
  });
