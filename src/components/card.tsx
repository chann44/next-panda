import * as React from "react";
import { css } from "../../styled-system/css";
import { stack } from "../../styled-system/patterns";

const cardStyles = css.raw({
  rounded: "xl",
  borderWidth: "1px",
  bg: "card",
  color: "cardForeground",
  shadow: "sm",
});

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  cssProps?: any;
};

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  cssProps?: any;
};

type CardDescripitonProps = React.HTMLAttributes<HTMLParagraphElement> & {
  cssProps?: any;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ cssProps, ...props }, ref) => (
    <div ref={ref} className={css(cardStyles, cssProps)} {...props} />
  )
);
Card.displayName = "card";

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ cssProps, ...props }, ref) => (
    <div
      ref={ref}
      className={css(stack.raw({ gap: "1.5", p: "6" }), cssProps)}
      {...props}
    />
  )
);
Card.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
  ({ cssProps, ...props }, ref) => (
    <h2
      ref={ref}
      className={css(
        stack.raw({
          fontWeight: "semibold",
          lineHeight: "none",
          letterSpacing: "tight",
        }),
        cssProps
      )}
      {...props}
    />
  )
);
Card.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, CardDescripitonProps>(
  ({ cssProps, ...props }, ref) => (
    <p
      ref={ref}
      className={css(
        stack.raw({ fontSize: "sm", color: "mutedForeground" }),
        cssProps
      )}
      {...props}
    />
  )
);
Card.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ cssProps, ...props }, ref) => (
    <div
      ref={ref}
      className={css(
        css.raw({
          pt: "0",
          px: "6",
          pb: "6",
        }),
        cssProps
      )}
      {...props}
    />
  )
);

Card.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(
  ({ cssProps, ...props }, ref) => (
    <div
      ref={ref}
      className={css(
        stack.raw({
          direction: "row",
          p: "6",
          pt: "0",
        }),
        cssProps
      )}
      {...props}
    />
  )
);

Card.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
};
