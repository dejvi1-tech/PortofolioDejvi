import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "Dejvi.Tech";

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(textInterval);
    }, 80);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* DK Monogram */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-pulse">
          <span className="text-2xl font-black text-white" style={{ fontFamily: "JetBrains Mono, monospace" }}>DK</span>
        </div>

        {/* Typing name */}
        <div className="text-3xl font-bold font-mono tracking-widest text-white min-w-[10ch] text-center">
          {text}
          <span className="animate-blink text-blue-400 ml-0.5">|</span>
        </div>

        {/* Subtitle */}
        <div className="text-gray-500 text-sm tracking-widest uppercase">
          Front-End Engineer · IT Professional
        </div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-100 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
