import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-rir-red text-white hover:bg-[#c93d3c] border border-rir-red",
  outline:
    "bg-transparent text-white border border-white hover:bg-white hover:text-rir-dark",
  ghost:
    "bg-transparent text-rir-black border border-rir-black hover:bg-rir-black hover:text-white",
  inverse:
    "bg-white text-rir-red hover:bg-rir-gray border border-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
