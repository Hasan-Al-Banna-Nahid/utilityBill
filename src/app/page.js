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

// app/page.js

"use client";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FileUploader() {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [phase, setPhase] = useState("idle"); // idle | uploading | waiting | done
  const [uploading, setUploading] = useState(false);

  // Countdown state for the n8n execution wait
  const WAIT_DURATION_MS = 210000; // 3.5 minutes (adjust to 180000–240000 for 3–4 mins)
  const [remainingMs, setRemainingMs] = useState(WAIT_DURATION_MS);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  const startExecutionWait = () => {
    setPhase("waiting");
    setRemainingMs(WAIT_DURATION_MS);
    setProgress(0);
    const start = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const remain = Math.max(WAIT_DURATION_MS - elapsed, 0);
      setRemainingMs(remain);
      const pct = Math.min(100, Math.round((elapsed / WAIT_DURATION_MS) * 100));
      setProgress(pct);
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      clearTimers();
      setRemainingMs(0);
      setProgress(100);
      setPhase("done");
    }, WAIT_DURATION_MS + 400);
  };

  const clearTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const uploadFile = async (file) => {
    setUploading(true);
    setPhase("uploading");

    toast.dismiss();
    toast.loading("Uploading your file…");

    try {
      const webhookUrl =
        "https://wsi-utopiads.app.n8n.cloud/webhook/dfef9d24-252b-477b-a37b-03c69a4efd28";

      const formData = new FormData();
      formData.append("data", file);

      // We assume upload + n8n always works as per your requirement
      await fetch(webhookUrl, { method: "POST", body: formData });

      toast.dismiss();
      toast.success("Uploaded! n8n execution started…");
      startExecutionWait();
    } finally {
      setUploading(false);
      setIsDragging(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const minutes = Math.floor(remainingMs / 60000);
  const seconds = Math.floor((remainingMs % 60000) / 1000);
  const mmss = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;

  const openExecutions = () => {
    window.open("https://wsi-utopiads.app.n8n.cloud/executions", "_blank");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Toaster position="top-center" />

      {/* Upload Card */}
      <div
        onClick={() =>
          !uploading && phase !== "waiting" && fileInputRef.current?.click()
        }
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`p-10 border-4 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${
          isDragging
            ? "border-purple-500 bg-purple-50"
            : "border-gray-300 bg-white"
        } shadow-xl w-80 h-80 flex flex-col items-center justify-center`}
      >
        {/* Upload Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-20 h-20 mb-4 ${
            uploading ? "opacity-50" : "opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="url(#grad1)"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#7F00FF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#E100FF", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4m-9 8h10a2 2 0 002-2V9a2 2 0 00-2-2h-3.5a1 1 0 01-.707-.293l-1.5-1.5A1 1 0 0010.5 5H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>

        <p className="text-gray-600 text-center">
          {uploading
            ? "Uploading…"
            : isDragging
            ? "Drop your file here"
            : "Click or drag a PDF/TXT to upload"}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Aside Panel (always slides in after uploading) */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white/80 backdrop-blur-xl shadow-2xl border-l border-white/50 transition-transform duration-500 ${
          phase === "idle" ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Glow background */}
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="glow absolute -inset-8 rounded-3xl" />
        </div>

        <div className="p-6 space-y-4">
          <header className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">n8n Execution</h2>
            <StatusBadge phase={phase} />
          </header>

          {(phase === "uploading" || phase === "waiting") && (
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                {phase === "uploading"
                  ? "Sending your file to n8n…"
                  : "n8n is processing your file (~3–4 minutes)."}
              </p>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-[width] duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-gray-500">ETA: {mmss}</div>
              </div>

              <StepList phase={phase} />
            </div>
          )}

          {phase === "done" && (
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-white">
                {/* Success glow */}
                <div className="absolute -inset-8 glow rounded-3xl opacity-60" />
                <div className="relative p-6">
                  <div className="flex items-center gap-3">
                    <CheckIcon />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Execution Succeeded
                      </h3>
                      <p className="text-sm text-gray-600">
                        Data saved into <strong>Electric</strong> and/or{" "}
                        <strong>Gas</strong> tabs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={openExecutions}
                className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 font-medium shadow-lg hover:shadow-xl transition"
              >
                Open n8n Executions
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Local animation styles */}
      <style jsx>{`
        .glow {
          background: linear-gradient(90deg, #7f00ff, #e100ff, #7f00ff);
          background-size: 200% 200%;
          filter: blur(24px);
          animation: gradientMove 6s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

function StatusBadge({ phase }) {
  const map = {
    idle: { text: "Idle", cls: "bg-gray-100 text-gray-600" },
    uploading: { text: "Uploading", cls: "bg-blue-100 text-blue-700" },
    waiting: { text: "Processing", cls: "bg-purple-100 text-purple-700" },
    done: { text: "Success", cls: "bg-green-100 text-green-700" },
  }[phase] || { text: "Idle", cls: "bg-gray-100 text-gray-600" };

  return (
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${map.cls}`}>
      {map.text}
    </span>
  );
}

function StepList({ phase }) {
  const steps = [
    { label: "Upload received", active: phase !== "idle" },
    { label: "Workflow triggered", active: phase !== "idle" },
    {
      label: "AI parsing & mapping",
      active: phase === "waiting" || phase === "done",
    },
    { label: "Saved to Sheets", active: phase === "done" },
  ];
  return (
    <ol className="space-y-2">
      {steps.map((s, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm">
          <span
            className={`inline-flex h-2.5 w-2.5 rounded-full ${
              s.active
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-gray-300"
            }`}
          />
          <span className={s.active ? "text-gray-900" : "text-gray-500"}>
            {s.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7F00FF" />
          <stop offset="100%" stopColor="#E100FF" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#grad2)" opacity="0.15" />
      <path
        d="M6 12l4 4 8-8"
        fill="none"
        stroke="url(#grad2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
