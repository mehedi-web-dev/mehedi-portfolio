const particles = Array.from({ length: 18 });

export default function BackgroundAnimation() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-base-100" />

      {/* Grid */}
      <div className="absolute inset-0 animated-grid opacity-[0.035]" />

      {/* Main glow */}
      <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-[bgFloat1_12s_ease-in-out_infinite]" />

      <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-secondary/10 blur-[110px] animate-[bgFloat2_15s_ease-in-out_infinite]" />

      <div className="absolute bottom-[5%] left-[40%] h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-[bgFloat3_14s_ease-in-out_infinite]" />

      {/* Floating particles */}
      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-primary/30 animate-[particleFloat_8s_ease-in-out_infinite]"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 29) % 100}%`,
            animationDelay: `${index * -0.8}s`,
            animationDuration: `${6 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
