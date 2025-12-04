import React from "react";
import { Button } from "@corella/react";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large", "xlarge"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
        "neutral",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost", "link", "soft", "dash"],
    },
    shape: {
      control: { type: "select" },
      options: ["square", "circle", "wide", "block"],
    },
    disabled: { control: "boolean" },
    responsive: { control: "boolean" },
  },
};

export const Default = {
  args: {
    children: "Default",
    color: "neutral",
  },
};

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <Button size="xsmall">Xsmall</Button>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
    <Button size="xlarge">Xlarge</Button>
  </div>
);

export const Responsive = () => (
  <div className="flex flex-col gap-4">
    <p className="text-sm text-gray-500">
      This button will have different sizes on different browser viewpoints
    </p>
    <Button responsive size="medium">
      Responsive
    </Button>
  </div>
);

export const Colors = () => (
  <div className="flex flex-wrap gap-4">
    <Button color="neutral">Neutral</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="accent">Accent</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
  </div>
);

export const Soft = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="soft" color="neutral">
      Default
    </Button>
    <Button variant="soft" color="primary">
      Primary
    </Button>
    <Button variant="soft" color="secondary">
      Secondary
    </Button>
    <Button variant="soft" color="accent">
      Accent
    </Button>
    <Button variant="soft" color="info">
      Info
    </Button>
    <Button variant="soft" color="success">
      Success
    </Button>
    <Button variant="soft" color="warning">
      Warning
    </Button>
    <Button variant="soft" color="error">
      Error
    </Button>
  </div>
);

export const Outline = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="outline" color="neutral">
      Default
    </Button>
    <Button variant="outline" color="primary">
      Primary
    </Button>
    <Button variant="outline" color="secondary">
      Secondary
    </Button>
    <Button variant="outline" color="accent">
      Accent
    </Button>
    <Button variant="outline" color="info">
      Info
    </Button>
    <Button variant="outline" color="success">
      Success
    </Button>
    <Button variant="outline" color="warning">
      Warning
    </Button>
    <Button variant="outline" color="error">
      Error
    </Button>
  </div>
);

export const Dash = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="dash" color="neutral">
      Default
    </Button>
    <Button variant="dash" color="primary">
      Primary
    </Button>
    <Button variant="dash" color="secondary">
      Secondary
    </Button>
    <Button variant="dash" color="accent">
      Accent
    </Button>
    <Button variant="dash" color="info">
      Info
    </Button>
    <Button variant="dash" color="success">
      Success
    </Button>
    <Button variant="dash" color="warning">
      Warning
    </Button>
    <Button variant="dash" color="error">
      Error
    </Button>
  </div>
);

export const GhostAndLink = () => (
  <div className="flex items-center gap-4">
    <Button variant="ghost">Ghost</Button>
    <Button variant="link" color="primary">
      Link
    </Button>
  </div>
);

export const Wide = () => (
  <div>
    <Button shape="wide">Wide</Button>
  </div>
);

export const SquareAndCircle = () => (
  <div className="flex items-center gap-4">
    <Button shape="square" aria-label="Like">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
    <Button shape="circle" aria-label="Like">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  </div>
);

export const WithIcon = () => (
  <div className="flex items-center gap-4">
    <Button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      Like
    </Button>
    <Button>
      Like
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </Button>
  </div>
);

export const Block = () => (
  <div className="w-full">
    <Button shape="block">Block Button</Button>
  </div>
);

export const Disabled = () => (
  <div className="flex items-center gap-4">
    <Button disabled>Disabled</Button>
    <Button disabled variant="outline">
      Disabled Outline
    </Button>
  </div>
);
