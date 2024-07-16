import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "leading-8 rounded-[5px] transition-colors font-light block text-[12px] sm:text-[14px] bg-primary/20 text-primary duration-500 ease-in-out hover:bg-primary/90 hover:text-white",
  {
    variants: {
      size: {
        default: " py-1 px-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TitleIntroProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const TitleIntro: FC<TitleIntroProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <span {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </span>
  );
};

export default TitleIntro;
