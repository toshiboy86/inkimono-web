import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default:
          "bg-accent-500 text-white rounded-2xl shadow-sm hover:bg-accent-600 hover:shadow-md active:bg-accent-700",
        destructive:
          "bg-red-500 text-white rounded-2xl shadow-sm hover:bg-red-600 hover:shadow-md active:bg-red-700",
        outline:
          "border border-neutral-300 bg-white text-neutral-700 rounded-2xl shadow-sm hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-md active:bg-neutral-100",
        secondary:
          "bg-neutral-100 text-neutral-700 rounded-2xl shadow-sm hover:bg-neutral-200 hover:shadow-md active:bg-neutral-300",
        ghost: "text-neutral-700 rounded-2xl hover:bg-neutral-100 active:bg-neutral-200",
        link: "text-accent-600 underline-offset-4 hover:underline hover:text-accent-700 active:text-accent-800",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
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