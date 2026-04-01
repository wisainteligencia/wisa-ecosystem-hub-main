const ConnectionLines = () => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <svg className="h-full w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
        {/* Left to center */}
        <line
          x1="200" y1="100" x2="600" y2="100"
          stroke="url(#grad-wine)" strokeWidth="1" opacity="0.3"
          strokeDasharray="8 4"
        >
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </line>
        {/* Center to right */}
        <line
          x1="600" y1="100" x2="1000" y2="100"
          stroke="url(#grad-blue)" strokeWidth="1" opacity="0.3"
          strokeDasharray="8 4"
        >
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </line>
        <defs>
          <linearGradient id="grad-wine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(345, 60%, 32%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(40, 55%, 50%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(40, 55%, 50%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(210, 70%, 45%)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ConnectionLines;
