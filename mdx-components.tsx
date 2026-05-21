import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Card } from "fumadocs-ui/components/card";
import type { ReactNode } from "react";

// Mintlify-compatible wrappers

function Info({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

function Warning({ children }: { children: ReactNode }) {
  return <Callout type="warn">{children}</Callout>;
}

function Note({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>;
}

function MintlifyStep({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Step>
      {title && <h3>{title}</h3>}
      {children}
    </Step>
  );
}

function CardGroup({
  children,
  cols = 2,
}: {
  children: ReactNode;
  cols?: number;
}) {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
}

function MintlifyCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: ReactNode;
}) {
  return (
    <Card title={title}>
      {children}
    </Card>
  );
}

const mintlifyComponents = {
  Info,
  Warning,
  Note,
  Steps,
  Step: MintlifyStep,
  CardGroup,
  Card: MintlifyCard,
};

export function getMdxComponents(): MDXComponents {
  return mintlifyComponents;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...mintlifyComponents,
    ...components,
  };
}
