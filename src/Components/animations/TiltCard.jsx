import Tilt from "react-parallax-tilt";

export default function TiltCard({ children, className = "" }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.3}
      className={`rounded-2xl shadow-xl p-4 bg-white dark:bg-neutral-900 ${className}`}
    >
      {children}
    </Tilt>
  );
}
