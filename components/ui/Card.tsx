import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-md p-6 shadow-xl",
                    hoverEffect && "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] hover:border-primary/40",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
