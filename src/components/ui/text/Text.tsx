import clsx from "clsx";

type Tags =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "em"
  | "pre";

type Model = "h1" | "h2" | "h3" | "h4" | "base" | "sm";

interface Props {
  children: React.ReactNode;
  tag?: Tags;
  model?: Model;
  className?: string;
}

const models: Record<Model, string> = {
  h1: "text-3xl font-bold font-roboto",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-semibold",
  h4: "text-lg font-bold",
  base: "font-medium text-base font-montserrat",
  sm: "text-sm",
};

export const Text = ({ children, tag, className, model, ...rest }: Props) => {
  const Tag = tag || "p";
  const modelClass = model ? models[model] : "base";
  return (
    <Tag
      {...rest}
      className={clsx("text-black dark:text-white", modelClass, className)}
    >
      {children}
    </Tag>
  );
};
