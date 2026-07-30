import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-sans tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),_0px_4px_10px_rgba(101,28,40,0.2)] hover:bg-primary/90 hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),_0px_6px_15px_rgba(101,28,40,0.3)] hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary/20 bg-transparent text-primary shadow-sm hover:bg-primary/5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),_0px_4px_10px_rgba(200,164,106,0.2)] hover:bg-secondary/90 hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),_0px_6px_15px_rgba(200,164,106,0.3)] hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-full px-6 text-xs",
        lg: "h-14 rounded-full px-10",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
