export default function GradientBlob({ color = "#b9101c", className = "" }) {
  return (
    <div
      className={`absolute rounded-full blur-[100px] opacity-100 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle, ${color}cc 80%, ${color}88 40%, transparent 70%)`,
      }}
    />
  );
}