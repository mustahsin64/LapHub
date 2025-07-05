
# 💻 LapHub

LapHub is a sleek, single-page laptop listing web app built with **Next.js (App Router)** and **Tailwind CSS** via [shadcn/ui](https://ui.shadcn.com/). It fetches and displays the **latest laptop releases from popular brands** using live data hosted via an external API.

---

## ✨ Features

- 🆕 **Latest Laptop Releases** from top-tier brands like HP, Dell, Lenovo, Asus, Acer, and more
- 🕒 **Live Local Date & Time** displayed on the Navbar
- 🎨 **Modern, responsive UI** with gradient themes using shadcn + Tailwind
- 🌑 Fully **dark mode friendly**
- 🌐 Direct **GitHub Repository link** in the Navbar
- ⚡ Optimized for **fast client-side rendering**

---

## 📸 Preview


---

## 🧰 Tech Stack

- **[Next.js](https://nextjs.org/)** – React-based framework with App Router
- **[Spring Boot](https://spring.io/projects/spring-boot/)** – Spring Boot for Backend Data API
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** – Beautiful prebuilt component utilities
- **TypeScript** – Strongly typed, safer code
- **Google Drive API / External API** – Source of dynamic laptop data

---

## 📦 Folder Structure (Simplified)

```
laphub/
├── app/
│   └── page.tsx            # Main Home component
├── components/
│   ├── LaptopCard.tsx      # Individual laptop UI card
│   ├── LaptopList.tsx      # Renders all laptops in a list/grid
│   └── Navbar.tsx          # Top Navbar with brand, date/time, GitHub
|.  ├__ types.ts            # TypeScript interface for Laptop
├
│               
├── public/
├── styles/
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mustahsin64/LapHub.git
cd laphub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

![Screenshot of the app](public/images/page1.png)

## 🔗 Live Data Source

Laptop data is currently being fetched from:

```
https://laphub-backend.onrender.com/api/laptops
```

---

## 🧠 Possible Enhancements

- ✅ Add **search bar** or **filter by brand/specs**
- ✅ Add **price range** or **ratings**
- ✅ Show **compare option** for two or more laptops
- ✅ Add **user login + favorites**
- ✅ Upload laptop data via admin panel

---

## 🌍 Deployment

You can deploy this app easily using:

- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://netlify.com/)
- [Render](https://render.com/) (API already hosted here)

---

## 🤝 Contribution

Contributions are welcome! Open an issue or submit a PR to:

- Improve the UI
- Fix bugs
- Add new features

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

Made with ❤️ by [Mustahsinul Moula](https://github.com/mustahsin64/)

[![GitHub](https://img.shields.io/badge/View%20on-GitHub-black?logo=github)](https://github.com/mustahsin64/LapHub)
