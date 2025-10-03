import { useMemo } from "react";

const AnimatedBackground = () => {

  const colorPairs = [
    "bg-pink-300 dark:bg-pink-700",
    "bg-yellow-200 dark:bg-yellow-600",
    "bg-teal-200 dark:bg-teal-600",
    "bg-purple-200 dark:bg-purple-600",
    "bg-orange-200 dark:bg-orange-600",
    "bg-blue-200 dark:bg-blue-600",
    "bg-red-200 dark:bg-red-600",
  ];

  const shapes = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => {
        const duration = 6 + Math.random() * 8;
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          size: Math.floor(15 + Math.random() * 90),
          duration: `${duration}s`,
          delay: `${-Math.random() * duration}s`,
          type: ["circle", "square", "triangle"][
            Math.floor(Math.random() * 3)
          ] as "circle" | "square" | "triangle",
          colorClass: colorPairs[Math.floor(Math.random() * colorPairs.length)],
        };
      }),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-sky-100 dark:bg-[linear-gradient(to_bottom,#0f172a,#1e293b)]" />

      {shapes.map((shape) => {
        if (shape.type === "triangle") {
          const borderClass = shape.colorClass.replace(/bg-/g, "border-b-");

          return (
            <div
              key={shape.id}
              className={`absolute border-transparent ${borderClass}`}
              style={{
                left: shape.left,
                bottom: 0,
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottomWidth: `${shape.size}px`,
                animation: `float ${shape.duration} linear infinite`,
                animationDelay: shape.delay,
              }}
            />
          );
        }

        return (
          <div
            key={shape.id}
            className={`absolute ${shape.type === "circle" ? "rounded-full" : ""} ${shape.colorClass}`}
            style={{
              left: shape.left,
              bottom: 0,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              animation: `float ${shape.duration} linear infinite`,
              animationDelay: shape.delay,
            }}
          />
        );
      })}

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(-120vh) translateX(60px); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;