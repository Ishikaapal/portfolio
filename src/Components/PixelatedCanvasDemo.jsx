"use client";
import { PixelatedCanvas } from "../Components/ui/pixelated-canvas";

export function PixelatedCanvasDemo() {
  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
        src="/ishh.png"
        width={400}
        height={500}
        cellSize={4}
        dotScale={0.8}
        shape="circle"
        backgroundColor="#000000"
        dropoutStrength={0}
        interactive
        distortionStrength={3}
        distortionRadius={40}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={2}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
        className="rounded-xl border border-accent shadow-lg" />
    </div>
  );
}
