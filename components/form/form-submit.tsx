"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "destructive"
    | "default"
    | "link";
}

export const FormSubmit = ({
  disabled,
  className,
  children,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn(className)}
      size="sm"
      disabled={pending || disabled}
      variant={variant}
      type="submit"
    >
      {children}
    </Button>
  );
};
