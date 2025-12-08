import React, { useState } from "react";
import { Checkbox } from "@corella/react";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
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
    indeterminate: { control: "boolean" },
  },
};

const Template = (args: any) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Accept terms and conditions",
};

export const Colors = () => (
  <div className="flex flex-col gap-4">
    <Checkbox defaultChecked color="primary" label="Primary" />
    <Checkbox defaultChecked color="secondary" label="Secondary" />
    <Checkbox defaultChecked color="accent" label="Accent" />
    <Checkbox defaultChecked color="success" label="Success" />
    <Checkbox defaultChecked color="warning" label="Warning" />
    <Checkbox defaultChecked color="error" label="Error" />
    <Checkbox defaultChecked color="neutral" label="Neutral" />
  </div>
);

export const Sizes = () => (
  <div className="flex flex-col gap-4">
    <Checkbox size="small" label="Small" />
    <Checkbox size="medium" label="Medium" />
    <Checkbox size="large" label="Large" />
    <Checkbox size="xlarge" label="XLarge" />
  </div>
);

export const Indeterminate = () => {
  const [checked, setChecked] = useState([true, false]);

  const allChecked = checked.every(Boolean);
  const isIndeterminate = checked.some(Boolean) && !allChecked;

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([e.target.checked, e.target.checked]);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([e.target.checked, checked[1]]);
  };

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], e.target.checked]);
  };

  return (
    <div className="flex flex-col gap-2 p-4 border rounded">
      <Checkbox
        label="Select All"
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={handleChange1}
      />
      <div className="flex flex-col gap-2 ml-6">
        <Checkbox label="Option 1" checked={checked[0]} onChange={handleChange2} />
        <Checkbox label="Option 2" checked={checked[1]} onChange={handleChange3} />
      </div>
    </div>
  );
};

export const CardVariant = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
    <Checkbox
      variant="card"
      label="Basic Plan"
      name="plan"
      defaultChecked
    >
      <span className="text-sm text-gray-500">Includes basic features for startup check.</span>
    </Checkbox>

    <Checkbox
      variant="card"
      label="Premium Plan"
      name="plan"
    >
      <span className="text-sm text-gray-500">Full access to everything.</span>
    </Checkbox>

     <Checkbox
      variant="card"
      label="With Icon"
      color="secondary"
    >
      <div className="flex items-center gap-2 mt-1">
         <span className="text-2xl">🚀</span>
         <span className="text-sm">Blazing fast speed included</span>
      </div>
    </Checkbox>
  </div>
);

export const HiddenControlCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
    <Checkbox
      variant="card"
      hideControl
      label="React"
      name="tech"
      defaultChecked
    >
      <div className="flex flex-col gap-2">
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        <span className="text-sm text-gray-500">A JavaScript library for building user interfaces.</span>
      </div>
    </Checkbox>

    <Checkbox
      variant="card"
      hideControl
      label="Vue"
      name="tech"
      color="success"
    >
      <div className="flex flex-col gap-2">
        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 3h20v18H2V3zm18 16V5H4v14h16zM6 7h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
        </svg>
        <span className="text-sm text-gray-500">The Progressive JavaScript Framework.</span>
      </div>
    </Checkbox>
  </div>
);

export const ChipVariant = () => (
  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
    <Checkbox
      variant="chip"
      hideControl
      name="role"
    >
      Frontend
    </Checkbox>

    <Checkbox
      variant="chip"
      hideControl
      name="role"
      color="secondary"
    >
      Backend
    </Checkbox>
  </div>
);
