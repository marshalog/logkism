# LOGKISM // MISSION CONTROL (PORTFOLIO)
> **Aerospace × Offensive Cybersecurity Research Portfolio**

Trang web portfolio cá nhân mang ngôn ngữ thiết kế **Aerospace × Cyber Warfare**:
- **Bảng màu chủ đạo**: Deep Crimson (`#c1121f`), Void Black (`#07070a`), Bone White (`#ede9e3`) và Signal Green (`#1f7a4d`).
- **Nghệ thuật & Background**: WebGL Fragment Shader FBM Nebula + bản vẽ kỹ thuật quỹ đạo vệ tinh LEO/MEO.
- **Tương tác**: Reticle HUD Cursor với toạ độ thực, hiệu ứng Click Shockwave, nút cắt vát đa giác cơ học (Chamfered Blade), chuyển cảnh 6-thanh phân mảng (Curtain Transition).
- **Chế độ Tu Tiên (修仙 Realm Shift)**: Bấm nút ấn chú `修` (hoặc phím tắt `Alt+X`) để kích hoạt hiệu ứng loang mực thủy mặc, phong ấn ấn chú đỏ, đổi sang tông màu Chu Sa & Hoàng Kim, hoán đổi thần thông và cảnh giới phi thăng.
- **Cổng kết nối liên không gian (Warp Jump)**: Nhảy siêu không gian sang trang Blog riêng biệt **BLACKBOX**.

---

## Cấu trúc thư mục
- `src/layouts/BaseLayout.astro`: Khung HUD, canvas WebGL shader, hiệu ứng hạt, curtain & warp stage.
- `src/components/HudNavbar.astro`: Thanh điều hướng HUD, đồng hồ UTC thực, Realm Switch, Warp Portal.
- `src/components/HudFooter.astro`: Bảng điều khiển tín hiệu, thông tin truyền thông mã hoá.
- `src/pages/index.astro`: Hero HUD, Dossier hồ sơ mật, Arsenal kho vũ khí kỹ thuật, Deployed Missions, Flight Log.
- `site.config.mjs`: Cấu hình deploy GitHub Pages & địa chỉ liên kết chéo.

---

## Hướng dẫn chạy và Deploy
```bash
# Cài đặt thư viện
npm install

# Chạy bản thử nghiệm local (Port 4321)
npm run dev

# Build sản phẩm hoàn chỉnh
npm run build
```

Để đưa lên GitHub:
```bash
git remote add origin https://github.com/<your-username>/logkism-portfolio.git
git push -u origin main
```
Workflow GitHub Actions (`.github/workflows/deploy.yml`) sẽ tự động triển khai lên GitHub Pages.
