# HELICORP | Landing Page – PETKIT YumShare Dual-Hopper (Gemini)

Landing Page giới thiệu sản phẩm **Máy cho thú cưng ăn tự động có Camera – PETKIT YumShare Dual-Hopper (Gemini)**, thực hiện cho bài test Vòng 2 – Thực tập sinh IT Phát triển Website của HELICORP.

🔗 **Demo trực tiếp:** https://helicorp-petkityumshare.vercel.app/

---

## 📌 Giới thiệu

Trang landing page giới thiệu đầy đủ về sản phẩm PETKIT YumShare Dual-Hopper: tính năng nổi bật, thông số kỹ thuật, hướng dẫn sử dụng và form đăng ký nhận tư vấn. Giao diện được thiết kế hiện đại, tối ưu trải nghiệm trên cả Desktop và Mobile.

## 🛠️ Công nghệ sử dụng

- **Framework:** Next.js 15 (React 19)
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes
- **Cơ sở dữ liệu:** MongoDB
- **AI Chatbot:** Google Gemini API, Groq API (Fallback)
- **Validation:** Zod
- **Webhook:** Make.com Webhook
- **Animation:** Framer Motion
- **Deploy:** Vercel
- **Quản lý mã nguồn:** Git & GitHub

## ✨ Tính năng chính

- **Hero Section:** Giới thiệu tổng quan sản phẩm với hình ảnh nổi bật và call-to-action kết hợp hiệu ứng **Parallax**.
- **Tính năng nổi bật:** Trình bày 4 tính năng chính của sản phẩm (Camera giám sát 1080P, 2 ngăn chứa độc lập, đàm thoại 2 chiều, khóa 3 lớp giữ tươi) theo dạng section hiện đại.
- **Thông số kỹ thuật:** Bảng thông số chi tiết (camera, dung tích, kết nối, nguồn điện, kích thước, trọng lượng, chất liệu).
- **Hướng dẫn sử dụng:** Video hướng dẫn sử dụng và hướng dẫn vệ sinh sản phẩm.
- **Form đăng ký nhận tư vấn:** Thu thập thông tin khách hàng (họ tên, email, số điện thoại) để tư vấn sản phẩm.
- **Xác thực dữ liệu & Webhook:** Kiểm tra tính hợp lệ dữ liệu người dùng trước khi gửi về Webhook thực tế và lưu trữ dữ liệu hợp lệ.
- **Theo dõi hành vi người dùng:** Ghi nhận sự kiện click và scroll, đồng thời hiển thị thông báo theo dõi hành vi người dùng.
- **Dark Mode:** Hỗ trợ chuyển đổi giữa giao diện sáng và tối, lưu trạng thái giao diện của người dùng.
- **Scroll Animation:** Áp dụng hiệu ứng chuyển động khi cuộn trang nhằm tăng trải nghiệm người dùng.
- **Backend & MongoDB:** Tích hợp backend bằng Next.js API Routes kết hợp MongoDB để lưu trữ thông tin khách hàng đăng ký tư vấn.
- **Chatbot AI:** Tích hợp chatbot trực tuyến sử dụng API **Gemini** và tự động chuyển sang **Groq** khi Gemini không khả dụng.
- **Responsive Design:** Hiển thị mượt mà, không lỗi vỡ khung trên cả Desktop và Mobile.

## ⚡ Hiệu năng & SEO

- Tối ưu hình ảnh và mã nguồn, đạt điểm **Google PageSpeed Insights (Mobile): 93 điểm Hiệu suất (Performance), 91 điểm Hỗ trợ tiếp cận (Accessibility), 100 điểm Phương án hay nhất (Best Practices) và 100 điểm SEO**.
- Cấu hình đầy đủ thẻ Meta cơ bản: Title, Description, Open Graph, Twitter Card.

📸 Ảnh chụp điểm PageSpeed Insights: https://drive.google.com/file/d/1Bth2lNiD4rqTMp5yS180UxmiTKKyAL0M/view?usp=sharing

## 🚀 Cài đặt & chạy dự án local

```bash
# Clone repository
git clone https://github.com/NCiDy/HeliCorp-Landing.git

# Cài đặt dependencies
npm install

# Chạy môi trường development
npm run dev
```

Truy cập `http://localhost:3000` để xem kết quả.

## 📂 Cấu trúc dự án

```
├── public/
│   ├── images/                 # Hình ảnh sản phẩm
│   └── videos/                 # Video hướng dẫn sử dụng, vệ sinh
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/           # API chatbot (Gemini/Groq)
│   │   │   ├── track/          # API theo dõi hành vi người dùng
│   │   │   └── webhook/        # API xử lý webhook
│   │   ├── page.tsx            # Trang landing page chính
│   │   └── layout.tsx          # Layout gốc, chứa metadata
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Chatbot.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Specifications.tsx
│   │   │   └── NewsletterForm.tsx
│   │   └── ...
│   │
│   └── lib/
│       ├── api.ts              # Hàm gọi API
│       ├── gemini.ts           # Tích hợp Gemini API
│       ├── groq.ts             # Tích hợp Groq API
│       ├── mongodb.ts          # Kết nối MongoDB
│       └── validators.ts       # Kiểm tra dữ liệu đầu vào
├── package.json
└── README.md
```

## 🌐 Triển khai (Deployment)

Dự án được deploy trên **Vercel**: https://helicorp-petkityumshare.vercel.app/

## 👤 Tác giả

- **Họ và tên:** Nguyễn Công Dũng
- **Vị trí ứng tuyển:** Thực tập sinh IT Phát triển Website – HELICORP
- **Email:** congdung1409@gmail.com

---

*Sản phẩm được thực hiện trong khuôn khổ bài test tuyển dụng của Healthy Living Corporation (HELICORP).*
