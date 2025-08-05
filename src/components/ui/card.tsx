import * as React from "react";

import { cn } from "@/lib/utils";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-col gap-6 border bg-card py-6 text-card-foreground shadow-sm",
      className,
    )}
    data-slot="card"
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col gap-1.5 px-6", className)}
    data-slot="card-header"
    {...props}
  />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("leading-none font-semibold", className)}
    data-slot="card-title"
    {...props}
  />
);

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cn("text-sm text-muted-foreground", className)}
    data-slot="card-description"
    {...props}
  />
);

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("px-6", className)} data-slot="card-content" {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cn("flex items-center px-6", className)}
    data-slot="card-footer"
    {...props}
  />
);

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
