const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fileInput = document.getElementById('file');
const controls = ['zoom','offsetX','offsetY'].map(id => document.getElementById(id));
let image = null;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 4;
  ctx.strokeRect(70, 40, 360, 420);
  ctx.fillStyle = '#dbeafe';
  ctx.fillRect(80, 50, 340, 400);
  if (!image) {
    ctx.fillStyle = '#4b5563';
    ctx.font = '20px sans-serif';
    ctx.fillText('Upload a portrait photo to begin', 92, 250);
    return;
  }
  const zoom = Number(document.getElementById('zoom').value);
  const offsetX = Number(document.getElementById('offsetX').value);
  const offsetY = Number(document.getElementById('offsetY').value);
  const targetW = image.width * zoom;
  const targetH = image.height * zoom;
  ctx.drawImage(image, 250 - targetW / 2 + offsetX, 240 - targetH / 2 + offsetY, targetW, targetH);
  ctx.strokeStyle = '#377dff';
  ctx.lineWidth = 2;
  ctx.strokeRect(120, 105, 260, 300);
  ctx.fillStyle = 'rgba(55,125,255,.12)';
  ctx.fillRect(120, 105, 260, 300);
}

fileInput.addEventListener('change', () => {
  const file = fileInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    image = new Image();
    image.onload = draw;
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});
controls.forEach(control => control.addEventListener('input', draw));
document.getElementById('download').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'passport-photo.png';
  link.click();
});
draw();
