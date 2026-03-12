interface LogoProps {
  variant?: "modern" | "baobab" | "monogram" | "circular";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  src?: string; // optional image source for custom logo
}

export default function Logo(
  { variant = "modern", size = "md", showText = true, src }: LogoProps,
) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-28 h-28 text-3xl",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-4xl",
  };

  const renderLogo = () => {
    if (src) {
      const sizeMap = {
        sm: "h-12 w-auto object-contain",
        md: "h-20 md:h-24 w-auto object-contain",
        lg: "h-24 md:h-28 w-auto object-contain",
      } as const;
      // When using a custom image the text is already embedded in the logo — skip the text
      return (
        <img
          src={src}
          alt="Airisa Green Consulting logo"
          class={`${sizeMap[size]} rounded ${
            variant === "circular" ? "rounded-full" : ""
          }`}
        />
      );
    }
    switch (variant) {
      case "modern":
        return (
          <div
            class={`${
              sizeClasses[size]
            } bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center`}
          >
            <svg
              width={size === "sm" ? "16" : "24"}
              height={size === "sm" ? "16" : "24"}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L4 9L12 15L20 9L12 3Z"
                stroke="white"
                stroke-width="2"
              />
              <path d="M4 9L12 15L20 9" stroke="white" stroke-width="2" />
              <path d="M12 15V21" stroke="white" stroke-width="2" />
            </svg>
          </div>
        );

      case "baobab":
        return (
          <div
            class={`${
              sizeClasses[size]
            } bg-gradient-to-br from-green-700 to-green-900 rounded-full flex items-center justify-center`}
          >
            <svg
              width={size === "sm" ? "14" : "20"}
              height={size === "sm" ? "14" : "20"}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3L6 7L10 11L14 7L10 3Z" fill="white" />
              <circle cx="10" cy="13" r="2" fill="white" />
              <path
                d="M7 10L5 12M13 10L15 12"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
        );

      case "monogram":
        return (
          <div class={`${sizeClasses[size]} relative`}>
            <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg transform rotate-3">
            </div>
            <div class="absolute inset-0 bg-white rounded-lg m-1 flex items-center justify-center">
              <div class={`font-bold text-green-700 ${textSizes[size]}`}>
                AG
              </div>
            </div>
          </div>
        );

      case "circular":
        return (
          <div
            class={`${
              sizeClasses[size]
            } border-2 border-green-600 rounded-full flex items-center justify-center relative`}
          >
            <div
              class={`${
                size === "sm"
                  ? "w-6 h-6"
                  : size === "md"
                  ? "w-8 h-8"
                  : "w-12 h-12"
              } bg-green-600 rounded-full flex items-center justify-center`}
            >
              <svg
                width={size === "sm" ? "12" : "16"}
                height={size === "sm" ? "12" : "16"}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 2L5 6L8 10L11 6L8 2Z" fill="white" />
                <circle cx="8" cy="12" r="1" fill="white" />
              </svg>
            </div>
          </div>
        );
    }
  };

  // When a custom image is used, the name is embedded in the image — skip the text label
  if (src) {
    return renderLogo();
  }

  if (!showText) {
    return renderLogo();
  }

  return (
    <div class="flex items-center gap-3">
      {renderLogo()}
      <div class="flex flex-col leading-tight">
        <span
          class={`font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-tight ${textSizes[size]}`}
        >
          AIRISA
        </span>
        <span
          class={`font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-widest ${
            size === "lg" ? "text-sm" : "text-[9px]"
          }`}
        >
          GREEN CONSULTING
        </span>
      </div>
    </div>
  );
}
