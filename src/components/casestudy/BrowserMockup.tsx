interface BrowserMockupProps {
  url: string;
  accentColor: string;
  frameVariant?: "dark-rounded" | "dark-sharp" | "light-rounded";
  dotColors?: [string, string, string];
  chromeBg?: string;
  children: React.ReactNode;
}

const frameStyles = {
  "dark-rounded": {
    wrapper: "rounded-xl",
    chrome: "bg-white/5 border-b border-white/10",
    dots: ["bg-white/20", "bg-white/20", "bg-white/20"],
    urlBar: "bg-white/5 text-white/40",
    border: "border border-white/10",
  },
  "dark-sharp": {
    wrapper: "rounded-none",
    chrome: "bg-black border-b border-white/10",
    dots: ["bg-white/20", "bg-white/20", "bg-white/20"],
    urlBar: "bg-white/5 text-white/40",
    border: "border border-white/10",
  },
  "light-rounded": {
    wrapper: "rounded-xl",
    chrome: "bg-[#f0f4f8] border-b border-black/5",
    dots: ["bg-[#00A3E0]", "bg-[#E6007E]", "bg-gray-300"],
    urlBar: "bg-white text-gray-500",
    border: "border border-black/5",
  },
};

const BrowserMockup = ({
  url,
  accentColor,
  frameVariant = "dark-rounded",
  dotColors,
  chromeBg,
  children,
}: BrowserMockupProps) => {
  const frame = frameStyles[frameVariant];

  return (
    <div
      className={`${frame.wrapper} overflow-hidden ${frame.border} shadow-2xl`}
      style={
        frameVariant === "light-rounded"
          ? { boxShadow: `0 20px 60px ${accentColor}26` }
          : undefined
      }
    >
      {/* Browser chrome */}
      <div
        className={`${frame.chrome} px-4 py-3 flex items-center gap-3`}
        style={chromeBg ? { backgroundColor: chromeBg } : undefined}
      >
        <div className="flex gap-2">
          {dotColors
            ? dotColors.map((color, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))
            : frame.dots.map((dot, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${dot}`} />
              ))}
        </div>
        <div className="flex-1 flex justify-center">
          <div className={`${frame.urlBar} rounded-md px-4 py-1 text-xs font-mono max-w-xs truncate`}>
            {url}
          </div>
        </div>
      </div>
      {/* Content area */}
      <div
        className="aspect-video relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;
