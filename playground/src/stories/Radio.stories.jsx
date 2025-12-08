import React from "react";
import { Radio } from "@corella/react";

export default {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "info", "success", "warning", "error", "neutral"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Option A",
  name: "example-radio",
};

export const Colors = () => (
  <div className="flex flex-col gap-4">
    <Radio defaultChecked name="c1" color="primary" label="Primary" />
    <Radio defaultChecked name="c2" color="secondary" label="Secondary" />
    <Radio defaultChecked name="c3" color="accent" label="Accent" />
    <Radio defaultChecked name="c4" color="success" label="Success" />
    <Radio defaultChecked name="c5" color="warning" label="Warning" />
    <Radio defaultChecked name="c6" color="error" label="Error" />
    <Radio defaultChecked name="c7" color="neutral" label="Neutral" />
  </div>
);

export const Sizes = () => (
  <div className="flex flex-col gap-4">
    <Radio name="s" size="small" label="Small" />
    <Radio name="s" defaultChecked size="medium" label="Medium" />
    <Radio name="s" size="large" label="Large" />
    <Radio name="s" size="xlarge" label="XLarge" />
  </div>
);

export const CardVariant = () => (
  <div className="grid grid-cols-1 gap-4 max-w-lg">
    <Radio
      variant="card"
      label="Standard Shipping"
      name="shipping"
      defaultChecked
    >
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-500">5-7 business days</span>
        <span className="font-bold">Free</span>
      </div>
    </Radio>

    <Radio
      variant="card"
      label="Express Shipping"
      name="shipping"
      color="secondary"
    >
      <div className="flex justify-between items-center w-full">
        <span className="text-sm text-gray-500">1-2 business days</span>
        <span className="font-bold">$12.00</span>
      </div>
    </Radio>
  </div>
);

export const HiddenControlCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
    <Radio
      variant="card"
      hideControl
      label="Frontend"
      name="role"
      defaultChecked
    >
      <div className="mt-2 text-sm text-gray-500">Specializing in React, Astro, and UI/UX.</div>
    </Radio>

    <Radio
      variant="card"
      hideControl
      label="Backend"
      name="role"
      color="secondary"
    >
      <div className="mt-2 text-sm text-gray-500">Expert in Node.js, Python, and Databases.</div>
    </Radio>
  </div>
);

export const ChipVariant = () => (
  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
    <Radio
      variant="chip"
      hideControl
      name="role"
    >
      Frontend
    </Radio>

    <Radio
      variant="chip"
      hideControl
      name="role"
      color="secondary"
    >
      Backend
    </Radio>
  </div>
);
