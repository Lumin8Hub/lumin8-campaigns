interface BrowserMockupProps {
  url: string;
  accentColor: string;
  children: React.ReactNode;
}

const BrowserMockup = ({ url, accentColor, children }: BrowserMockupProps) => (
  <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
    {/* Browser chrome */}
    <div className="bg-white/5 px-4 py-3 flex items-center gap-3 border-b border-white/10">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-white/5 rounded-md px-4 py-1 text-xs text-white/40 font-mono max-w-xs truncate">
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

export default BrowserMockup;
