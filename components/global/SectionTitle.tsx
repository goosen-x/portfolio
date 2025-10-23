import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends ComponentPropsWithoutRef<"h2"> {
  title: string;
}

export const SectionTitle = ({
  title,
  className,
  ...rest
}: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-extrabold text-foreground font-(family-name:--font-montserrat-alt)",
        className,
      )}
      {...rest}
    >
      {title}
    </h2>
  );
};
