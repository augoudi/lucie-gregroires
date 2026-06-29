(function () {
  const SIZE = 800;
  const canvas = document.getElementById("frame-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = SIZE;
  canvas.height = SIZE;

  const coupleImg = new Image();
  coupleImg.src = "couple.jpg";
  coupleImg.onload = () => {
    coupleImg.ready = true;
  };

  function coverDraw(img, dx, dy, dw, dh) {
    const r = Math.max(dw / img.width, dh / img.height);
    const sw = dw / r;
    const sh = dh / r;
    const sx = (img.width - sw) / 2;
    const sy = (img.height - sh) / 2;
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  function drawLeaf(cx, cy, rx, ry, a, al) {
    ctx.save();
    ctx.globalAlpha = al;
    ctx.translate(cx, cy);
    ctx.rotate(a);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#c9a254";
    ctx.fill();
    ctx.restore();
  }

  function drawPeony(cx, cy, r, al) {
    ctx.save();
    ctx.globalAlpha = al;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * r * 0.6, cy + Math.sin(a) * r * 0.6, r * 0.55, r * 0.35, a, 0, Math.PI * 2);
      ctx.fillStyle = "#d4937a";
      ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
    ctx.fillStyle = "#e8b0a0";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = "#d4937a";
    ctx.fill();
    ctx.restore();
  }

  function drawBranch(x1, y1, x2, y2, al) {
    ctx.save();
    ctx.globalAlpha = al;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo((x1 + x2) / 2 - 10, (y1 + y2) / 2 - 30, x2, y2);
    ctx.strokeStyle = "#b89060";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  function drawFloral() {
    drawBranch(38, 310, 38, 80, 0.7);
    drawBranch(38, 80, 210, 38, 0.7);
    drawLeaf(48, 255, 38, 14, -0.7, 0.55);
    drawLeaf(40, 200, 42, 15, -0.85, 0.5);
    drawLeaf(44, 150, 36, 13, -0.95, 0.5);
    drawLeaf(56, 100, 30, 12, -1, 0.45);
    drawLeaf(28, 265, 28, 10, 0.5, 0.38);
    drawLeaf(30, 205, 30, 11, 0.4, 0.36);
    drawLeaf(105, 50, 34, 12, -0.2, 0.45);
    drawLeaf(158, 40, 32, 11, -0.1, 0.42);
    drawPeony(58, 310, 44, 0.52);
    drawPeony(36, 68, 26, 0.43);
    ctx.save();
    ctx.translate(SIZE, SIZE);
    ctx.rotate(Math.PI);
    drawBranch(38, 310, 38, 80, 0.7);
    drawBranch(38, 80, 210, 38, 0.7);
    drawLeaf(48, 255, 38, 14, -0.7, 0.55);
    drawLeaf(40, 200, 42, 15, -0.85, 0.5);
    drawLeaf(44, 150, 36, 13, -0.95, 0.5);
    drawLeaf(28, 265, 28, 10, 0.5, 0.38);
    drawLeaf(105, 50, 34, 12, -0.2, 0.45);
    drawLeaf(158, 40, 32, 11, -0.1, 0.42);
    drawPeony(58, 310, 44, 0.52);
    drawPeony(36, 68, 26, 0.43);
    ctx.restore();
  }

  function drawVignette() {
    if (!coupleImg.ready) return;
    const VR = 100;
    const CX = SIZE - VR - 40;
    const CY = VR + 40;
    ctx.save();
    ctx.beginPath();
    ctx.arc(CX, CY, VR + 7, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(74,46,26,0.6)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(CX, CY, VR + 4, 0, Math.PI * 2);
    ctx.strokeStyle = "#c9a254";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(CX, CY, VR, 0, Math.PI * 2);
    ctx.clip();
    const r = Math.max((VR * 2) / coupleImg.width, (VR * 2) / coupleImg.height);
    const iw = coupleImg.width * r;
    const ih = coupleImg.height * r;
    ctx.drawImage(coupleImg, CX - iw / 2 + iw * 0.06, CY - ih / 2 - ih * 0.05, iw, ih);
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.arc(CX, CY, VR + 4, 0, Math.PI * 2);
    ctx.strokeStyle = "#c9a254";
    ctx.lineWidth = 2;
    ctx.stroke();
    const bY = CY + VR + 16;
    const bW = VR * 2 + 20;
    ctx.fillStyle = "rgba(74,46,26,0.75)";
    ctx.beginPath();
    ctx.roundRect(CX - bW / 2, bY, bW, 28, 4);
    ctx.fill();
    ctx.fillStyle = "#c9a254";
    ctx.textAlign = "center";
    ctx.font = "18px 'Great Vibes', cursive";
    ctx.fillText("Lucie & Grégroires", CX, bY + 18);
    ctx.restore();
  }

  function drawBanner() {
    ctx.save();
    ctx.fillStyle = "rgba(74,46,26,0.80)";
    ctx.fillRect(0, SIZE - 110, SIZE, 110);
    ctx.fillStyle = "#c9a254";
    ctx.textAlign = "center";
    ctx.font = "52px 'Great Vibes', cursive";
    ctx.fillText("Lucie & Grégroires", SIZE / 2, SIZE - 58);
    ctx.fillStyle = "rgba(201,162,84,0.5)";
    ctx.fillRect(SIZE / 2 - 60, SIZE - 46, 120, 1);
    ctx.fillStyle = "#fdf5ec";
    ctx.font = "500 13px 'Cinzel', serif";
    ctx.fillText("01 AOÛT 2026  ·  MAROUA", SIZE / 2, SIZE - 26);
    ctx.restore();
  }

  function drawBorder() {
    ctx.strokeStyle = "#c9a254";
    ctx.lineWidth = 3;
    ctx.strokeRect(18, 18, SIZE - 36, SIZE - 36);
    ctx.strokeStyle = "rgba(201,162,84,0.35)";
    ctx.lineWidth = 1;
    ctx.strokeRect(28, 28, SIZE - 56, SIZE - 56);
  }

  function compose(userImg) {
    ctx.clearRect(0, 0, SIZE, SIZE);
    coverDraw(userImg, 0, 0, SIZE, SIZE);
    drawFloral();
    drawBanner();
    drawVignette();
    drawBorder();
    document.getElementById("canvas-placeholder").style.display = "none";
    canvas.style.display = "block";
    document.getElementById("dl-btn").style.display = "block";
    document.getElementById("reset-btn").style.display = "block";
  }

  document.getElementById("photo-input").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const info = document.getElementById("file-info");
    if (file.size > 10 * 1024 * 1024) {
      info.style.display = "block";
      info.style.color = "var(--terracotta)";
      info.textContent = "Fichier trop volumineux. Maximum 10MB.";
      return;
    }
    const reader = new FileReader();
    reader.onload = function (ev) {
      const img = new Image();
      img.onload = function () {
        info.style.display = "block";
        info.style.color = "var(--brown-mid)";
        info.textContent = file.name + " · " + (file.size / 1024).toFixed(0) + " KB";
        if (coupleImg.ready) {
          compose(img);
        } else {
          coupleImg.onload = () => {
            coupleImg.ready = true;
            compose(img);
          };
        }
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("dl-btn").addEventListener("click", function () {
    const a = document.createElement("a");
    a.download = "souvenir-lucie-gregroires.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });

  document.getElementById("reset-btn").addEventListener("click", function () {
    document.getElementById("photo-input").value = "";
    canvas.style.display = "none";
    document.getElementById("canvas-placeholder").style.display = "flex";
    document.getElementById("dl-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "none";
    document.getElementById("file-info").style.display = "none";
    ctx.clearRect(0, 0, SIZE, SIZE);
  });

  const uz = document.getElementById("upload-zone");
  uz.addEventListener("dragover", (e) => {
    e.preventDefault();
    uz.classList.add("is-dragover");
  });
  uz.addEventListener("dragleave", () => {
    uz.classList.remove("is-dragover");
  });
  uz.addEventListener("drop", (e) => {
    e.preventDefault();
    uz.classList.remove("is-dragover");
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) {
      const dt = new DataTransfer();
      dt.items.add(f);
      const fi = document.getElementById("photo-input");
      fi.files = dt.files;
      fi.dispatchEvent(new Event("change"));
    }
  });
})();
