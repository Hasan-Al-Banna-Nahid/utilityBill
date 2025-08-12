"use client";
// import React from "react";
// import Image from "next/image";
// import {
//   FaStar,
//   FaRegStar,
//   FaCheckCircle,
//   FaClock,
//   FaSyncAlt,
// } from "react-icons/fa";

// import { FaAws, FaDocker, FaGithub, FaGitlab } from "react-icons/fa6";

// import nahid from "@/../public/n.png";
// const Home = () => {
//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//       <div className="md:flex">
//         {/* Left Side - Your Photo */}
//         <div className="md:w-1/3 relative">
//           <Image
//             src={nahid} // Replace with your photo path
//             alt="DevOps Engineer"
//             width={400}
//             height={600}
//             className="w-full h-full object-cover"
//             priority
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//             <h3 className="text-white text-xl font-bold">
//               Hasan Al Banna Nahid
//             </h3>
//             <p className="text-gray-300 text-sm"> DevOps Engineer</p>
//           </div>
//         </div>

//         {/* Right Side - Service Details */}
//         <div className="md:w-2/3 p-6">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 I will architect and implement your DevOps infrastructure
//               </h2>
//             </div>
//             <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
//               New To Fiverr
//             </div>
//           </div>

//           <p className="mt-4 text-gray-600">
//             As a professional DevOps engineer, I'll design, implement, and
//             optimize your cloud infrastructure with:
//           </p>

//           {/* Tech Icons Grid */}
//           <div className="mt-4 grid grid-cols-5 gap-3">
//             <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
//               <FaAws className="text-orange-500 text-2xl" />
//               <span className="text-xs mt-1 text-gray-600">AWS</span>
//             </div>

//             <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
//               <FaDocker className="text-blue-400 text-2xl" />
//               <span className="text-xs mt-1 text-gray-600">Docker</span>
//             </div>
//             <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
//               <FaGithub className="text-blue-500 text-2xl" />
//               <span className="text-xs mt-1 text-gray-600">Github</span>
//             </div>
//             <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
//               <FaGitlab className="text-purple-500 text-2xl" />
//               <span className="text-xs mt-1 text-gray-600">GitLab</span>
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-4">
//             <div className="flex items-center">
//               <FaCheckCircle className="text-green-500 mr-2" />
//               <span className="text-gray-700">Infrastructure as Code</span>
//             </div>
//             <div className="flex items-center">
//               <FaCheckCircle className="text-green-500 mr-2" />
//               <span className="text-gray-700">CI/CD Pipelines</span>
//             </div>
//             <div className="flex items-center">
//               <FaCheckCircle className="text-green-500 mr-2" />
//               <span className="text-gray-700">Cloud Migration</span>
//             </div>
//             <div className="flex items-center">
//               <FaCheckCircle className="text-green-500 mr-2" />
//               <span className="text-gray-700">Monitoring & Logging</span>
//             </div>
//           </div>

//           <div className="mt-6 flex items-center justify-between">
//             <div className="flex items-center">
//               <FaClock className="text-gray-500 mr-2" />
//               <span className="text-gray-700">3 days Delivery</span>
//             </div>
//             <div className="flex items-center">
//               <FaSyncAlt className="text-gray-500 mr-2" />
//               <span className="text-gray-700">Unlimited Revisions</span>
//             </div>
//           </div>

//           <div className="mt-8 flex items-center justify-between">
//             <div>
//               <span className="text-gray-500 text-sm">STARTING AT</span>
//               <p className="text-2xl font-bold text-gray-800">$50</p>
//             </div>
//             <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
//               Continue ($50)
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import Image from "next/image";
// import {
//   FaStar,
//   FaRegStar,
//   FaCheckCircle,
//   FaClock,
//   FaSyncAlt,
// } from "react-icons/fa";
// import {
//   FaAws,
//   FaDocker,
//   FaGithub,
//   FaGitlab,
//   FaNode,
//   FaReact,
// } from "react-icons/fa6";
// import {
//   SiMongodb,
//   SiExpress,
//   SiRedux,
//   SiTypescript,
//   SiJavascript,
//   SiTailwindcss,
//   SiNextdotjs,
// } from "react-icons/si";
// import nahid from "@/../public/n.png";

// const Home = () => {
//   const techStack = [
//     { icon: <FaReact className="text-blue-500 text-2xl" />, name: "React" },
//     { icon: <FaNode className="text-green-500 text-2xl" />, name: "Node.js" },
//     { icon: <SiExpress className="text-gray-800 text-2xl" />, name: "Express" },
//     {
//       icon: <SiMongodb className="text-green-600 text-2xl" />,
//       name: "MongoDB",
//     },
//     { icon: <SiNextdotjs className="text-black text-2xl" />, name: "Next.js" },
//     { icon: <SiRedux className="text-purple-500 text-2xl" />, name: "Redux" },
//     {
//       icon: <SiTypescript className="text-blue-600 text-2xl" />,
//       name: "TypeScript",
//     },
//     {
//       icon: <SiJavascript className="text-yellow-400 text-2xl" />,
//       name: "JavaScript",
//     },
//     {
//       icon: <SiTailwindcss className="text-cyan-400 text-2xl" />,
//       name: "Tailwind",
//     },
//     { icon: <FaGithub className="text-gray-800 text-2xl" />, name: "GitHub" },
//   ];

//   const features = [
//     "Full-stack MERN applications",
//     "RESTful API development",
//     "JWT Authentication",
//     "Real-time functionality",
//     "Responsive UI/UX design",
//     "Database architecture",
//     "Performance optimization",
//     "SEO-friendly solutions",
//   ];

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//       <div className="md:flex">
//         {/* Left Side - Your Photo */}
//         <div className="md:w-1/3 relative">
//           <Image
//             src={nahid}
//             alt="MERN Stack Developer"
//             width={400}
//             height={600}
//             className="w-full h-full object-cover"
//             priority
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//             <h3 className="text-white text-xl font-bold">
//               Hasan Al Banna Nahid
//             </h3>
//             <p className="text-gray-300 text-sm">Senior MERN Stack Engineer</p>
//           </div>
//         </div>

//         {/* Right Side - Service Details */}
//         <div className="md:w-2/3 p-6">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 I will build a full-stack MERN application with modern features
//               </h2>
//             </div>
//             <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
//               New To Fiverr
//             </div>
//           </div>

//           <p className="mt-4 text-gray-600">
//             As a professional MERN stack developer, I'll create performant,
//             scalable web applications with:
//           </p>

//           {/* Tech Icons Grid */}
//           <div className="mt-4 grid grid-cols-5 gap-3">
//             {techStack.map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-help"
//                 title={tech.name}
//               >
//                 {tech.icon}
//                 <span className="text-xs mt-1 text-gray-600">{tech.name}</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-4">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center">
//                 <FaCheckCircle className="text-green-500 mr-2 min-w-[16px]" />
//                 <span className="text-gray-700">{feature}</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 flex items-center justify-between">
//             <div className="flex items-center">
//               <FaClock className="text-gray-500 mr-2" />
//               <span className="text-gray-700">7 days Delivery</span>
//             </div>
//             <div className="flex items-center">
//               <FaSyncAlt className="text-gray-500 mr-2" />
//               <span className="text-gray-700">
//                 Unlimited Revisions Included
//               </span>
//             </div>
//           </div>

//           <div className="mt-8 flex items-center justify-between">
//             <div>
//               <span className="text-gray-500 text-sm">STARTING AT</span>
//               <p className="text-2xl font-bold text-gray-800">$150</p>
//             </div>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
//               Order Now ($150)
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// pages/index.js
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const messages = [
//   "I'm deeply sorry 💔",
//   "I know I hurt you, and I regret it 😔",
//   "You're the best thing that ever happened to me 💫",
//   "Please forgive me 🙏",
//   "I miss your smile and laugh 🥺",
//   "I promise to be better, for us 💖",
// ];

// export default function Home() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % messages.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>I’m Sorry — With All My Heart 💔</title>
//         <link rel="icon" href="/heart.ico" />
//         <meta name="theme-color" content="#ff758c" />
//       </Head>

//       <main className="bg">
//         <div className="glass">
//           <AnimatePresence mode="wait">
//             <motion.h1
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.8 }}
//               className="msg"
//             >
//               {messages[index]}
//             </motion.h1>
//           </AnimatePresence>
//           <p className="footer">— Always yours, with love 🌹</p>
//         </div>
//       </main>

//       <style jsx>{`
//         .bg {
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
//           padding: 1rem;
//         }
//         .glass {
//           background: rgba(255, 255, 255, 0.15);
//           border-radius: 20px;
//           backdrop-filter: blur(15px);
//           -webkit-backdrop-filter: blur(15px);
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//           padding: 2rem;
//           max-width: 600px;
//           width: 100%;
//           text-align: center;
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
//         .msg {
//           font-size: 2rem;
//           font-weight: 700;
//           color: #fff;
//           text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
//         }
//         .footer {
//           margin-top: 1.5rem;
//           font-size: 1.2rem;
//           color: #fff8;
//           font-style: italic;
//         }
//         @media (max-width: 600px) {
//           .msg {
//             font-size: 1.5rem;
//           }
//           .footer {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState(null);
  const [activeTab, setActiveTab] = useState("url");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileRef = useRef(null);

  const N8N_WEBHOOK =
    "https://wsi-utopiads.app.n8n.cloud/webhook/70d88c37-80fe-4d33-b8ac-1849b3ef46a1";

  function normalizeDrive(link) {
    try {
      const u = new URL(link);
      if (!u.hostname.includes("drive.google.com")) return link;

      if (u.pathname.startsWith("/uc") && u.searchParams.get("id")) return link;

      const m = u.pathname.match(/\/file\/d\/([^/]+)\//);
      if (m && m[1])
        return `https://drive.google.com/uc?export=download&id=${m[1]}`;

      const id = u.searchParams.get("id");
      if (id) return `https://drive.google.com/uc?export=download&id=${id}`;
    } catch {}
    return link;
  }

  async function textToPdfFile(text, filename = "document.pdf") {
    const pdf = await PDFDocument.create();
    const page = pdf.addPage();
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;
    const margin = 50;
    const { width, height } = page.getSize();
    const maxWidth = width - margin * 2;

    const words = text.replace(/\r\n/g, "\n").split(/\s+/);
    let line = "",
      y = height - margin;

    const widthOf = (s) => font.widthOfTextAtSize(s, fontSize);

    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (widthOf(test) > maxWidth) {
        page.drawText(line, {
          x: margin,
          y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
        y -= fontSize * 1.4;
        line = w;
      } else {
        line = test;
      }
    }
    if (line)
      page.drawText(line, {
        x: margin,
        y,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      });

    const bytes = await pdf.save();
    return new File([bytes], filename, { type: "application/pdf" });
  }

  async function sendToWebhook(formData) {
    const r = await fetch(N8N_WEBHOOK, { method: "POST", body: formData });
    const text = await r.text();
    try {
      return { ok: r.ok, data: JSON.parse(text) };
    } catch {
      return { ok: r.ok, data: { raw: text } };
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  async function handleSubmit(kind) {
    setLoading(true);
    setResp(null);
    try {
      const form = new FormData();

      if (kind === "url") {
        if (!url) throw new Error("No URL provided");
        const normalized = normalizeDrive(url); // keep your normalizer
        const form = new FormData();
        form.append("url", normalized); // <-- send only the URL
        const result = await sendToWebhook(form);
        setResp(result);
        return;
      } else {
        const file = fileRef.current?.files?.[0];
        if (!file) throw new Error("No file selected");

        let finalFile = file;
        if (file.type !== "application/pdf" && file.name.endsWith(".txt")) {
          const text = await file.text();
          finalFile = await textToPdfFile(
            text,
            file.name.replace(/\.txt$/i, "") + ".pdf"
          );
        }
        form.append("file", finalFile, finalFile.name);
      }

      const result = await sendToWebhook(form);
      setResp(result);
    } catch (e) {
      setResp({ ok: false, data: { error: e.message } });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Utility Bill Uploader
            </h1>
            <p className="mt-2 text-gray-600">
              Upload your PDF/TXT file or paste a link (Google Drive supported)
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                activeTab === "url"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("url")}
            >
              Submit Link
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                activeTab === "file"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("file")}
            >
              Upload File
            </button>
          </div>

          {/* URL Tab Content */}
          {activeTab === "url" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Document URL
                </label>
                <input
                  id="url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste PDF/TXT/Drive link"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <button
                onClick={() => handleSubmit("url")}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Link"
                )}
              </button>
            </div>
          )}

          {/* File Tab Content */}
          {activeTab === "file" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload File
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          ref={fileRef}
                          type="file"
                          accept=".pdf,.txt"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF or TXT up to 10MB
                    </p>
                    {selectedFile && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700">
                          Selected file: {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSubmit("file")}
                disabled={loading || !selectedFile}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Uploading...
                  </span>
                ) : (
                  "Upload File"
                )}
              </button>
            </div>
          )}

          {resp && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Response
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
                  {JSON.stringify(resp, null, 2)}
                </pre>
              </div>
              {resp.ok ? (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Success! Your file has been processed.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        Error: {resp.data?.error || "Something went wrong"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
