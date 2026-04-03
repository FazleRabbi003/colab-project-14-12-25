interface OrbProps {
  size?: number;
  color?: "gold" | "purple" | "blue";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  className?: string;
}

const colorMap = {
  gold: "rgba(201,168,76,0.3)",
  purple: "rgba(140,80,220,0.2)",
  blue: "rgba(60,120,240,0.15)",
};

export default function GradientOrb({
  size = 400,
  color = "gold",
  top,
  left,
  right,
  bottom,
  opacity = 1,
  className = "",
}: OrbProps) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
        filter: "blur(60px)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
