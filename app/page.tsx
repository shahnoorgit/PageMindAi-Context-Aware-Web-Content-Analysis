"use client";
import {
  useState,
  useEffect,
  useRef,
  ReactEventHandler,
  ReactHTMLElement,
  FormEvent,
} from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import SubscriptionPlans from "../components/SubscriptionPlans";
import Link from "next/link";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#4285F4"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

export default function Home() {
  const [url, setUrl] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <Head>
          <title>PageMindAI - Web Page Analysis Tool</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header
          className={`fixed w-full transition-all duration-300 z-50 ${
            isScrolled ? "bg-gray-800/80 backdrop-blur-md shadow-lg" : ""
          }`}
        >
          <nav className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-bold text-blue-500">
                  PageMindAI
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <button
                  onClick={() => setShowSubscriptions(true)}
                  className="px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Subscriptions
                </button>

                <a
                  href="#"
                  className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  Login
                </a>
              </motion.div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 pt-32 relative">
          <motion.div
            style={{ opacity, scale }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedSphere />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Canvas>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative z-10"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Unlock the Power of Web Page Analysis
            </h1>
            <p className="text-xl mb-8">
              PageMindAI scans and understands web pages, providing intelligent
              insights and answers to your questions.
            </p>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter a web URL"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-blue-500 focus:outline-none focus:border-blue-600 shadow-lg transition-all duration-300"
              />
              <Link href={`/${encodeURIComponent(url)}`}>
                <button
                  type="button"
                  className="mt-4 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  Analyze Page
                </button>
              </Link>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                title: "Instant Scanning",
                description: "Quickly analyze any web page with a single URL.",
              },
              {
                title: "AI-Powered Insights",
                description: "Get intelligent answers about the page content.",
              },
              {
                title: "Contextual Understanding",
                description:
                  "PageMindAI comprehends the full context of the web page.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="p-6 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl mt-10 font-bold mb-6">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              {[
                { step: "1", text: "Enter URL" },
                { step: "2", text: "AI Scans Page" },
                { step: "3", text: "Ask Questions" },
                { step: "4", text: "Get Insights" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-2 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110">
                    {item.step}
                  </div>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        <footer className="bg-gray-800/80 backdrop-blur-md py-6">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2023 PageMindAI. All rights reserved.</p>
          </div>
        </footer>

        {showSubscriptions && (
          <SubscriptionPlans onClose={() => setShowSubscriptions(false)} />
        )}
      </div>
    </>
  );
}
