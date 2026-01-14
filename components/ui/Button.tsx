import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
                    {
                        "bg-gradient-to-r from-primary to-sky-600 text-white hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:scale-[1.02]": variant === "primary",
                        "bg-secondary text-white hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(30,64,175,0.3)]": variant === "secondary",
                        "border border-slate-600 bg-slate-900/50 text-slate-200 hover:bg-slate-800/70 hover:border-primary/50 backdrop-blur-sm": variant === "outline",
                        "text-slate-300 hover:bg-slate-800/50 hover:text-white": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                <span className="relative z-10">{props.children}</span>
                {variant === "primary" && (
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-sky-400 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                )}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
