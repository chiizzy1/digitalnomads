import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("leading-loose font-medium", {
  variants: {
    size: {
      default: "text-xl sm:text-2xl md:text-3xl",
      lg: "text-2xl sm:text-3xl md:text-4xl",
      sm: "text-xl sm:text-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SmallHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const SmallHeading: FC<SmallHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h3 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h3>
  );
};

export default SmallHeading;
