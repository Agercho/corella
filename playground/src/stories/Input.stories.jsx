import React, { useState } from "react";
import { Input } from "@corella/react";

export default {
  title: "Forms/Input",
  tags: ["autodocs"],
  component: Input,
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
    fullWidth: { control: "boolean" },
    floatingLabel: { control: "boolean" },
    label: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Default Input",
};

export const Sizes = () => (
  <div className="space-y-4 max-w-md">
    <Input size="small" placeholder="Small Input" />
    <Input size="medium" placeholder="Medium Input" />
    <Input size="large" placeholder="Large Input" />
    <Input size="xlarge" placeholder="XLarge Input" />
  </div>
);

export const Colors = () => (
  <div className="space-y-4 max-w-md">
    <Input color="primary" placeholder="Primary Color" />
    <Input color="secondary" placeholder="Secondary Color" />
    <Input color="accent" placeholder="Accent Color" />
    <Input color="success" placeholder="Success Color" />
    <Input color="warning" placeholder="Warning Color" />
    <Input color="error" placeholder="Error Color" />
    <Input color="neutral" placeholder="Neutral Color" />
  </div>
);

export const WithIcons = () => (
  <div className="space-y-4 max-w-md">
    <Input
      placeholder="Search..."
      startIcon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
    />
    <Input
      placeholder="Enter email"
      endIcon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
    />
  </div>
);

export const PasswordReveal = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="max-w-md">
      <Input
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="Enter your password"
        endAction={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.414-1.414A9 9 0 0010 17c-4.478 0-8.268-2.943-9.542-7a9.048 9.048 0 012.8-4.524l-3-3l1.414-1.414L3.707 2.293zm-1.035 1.035L10 10.586 7.172 7.757 2.672 3.328zM10 3c4.478 0 8.268 2.943 9.542 7a9.048 9.048 0 01-1.356 3.19l-1.636-1.636A4 4 0 0010 3z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        }
      />
    </div>
  );
};

export const FloatingLabels = () => (
  <div className="space-y-6 max-w-md pt-4">
    <Input floatingLabel label="Username" placeholder="Enter username" />
    <Input floatingLabel label="Email Address" type="email" color="secondary" />
    <Input floatingLabel label="Error Field" error defaultValue="Invalid Value" helperText="This field has an error" />
  </div>
);

export const StandardLabelsAndHelpers = () => (
  <div className="space-y-4 max-w-md">
    <Input label="Full Name" placeholder="John Doe" helperText="Please write your full name" />
    <Input label="Bio" placeholder="Tell us about yourself" helperText="Max 100 characters" />
    <Input label="Website" placeholder="https://example.com" startIcon={<span>🔗</span>} />
  </div>
);

export const States = () => (
  <div className="space-y-4 max-w-md">
    <Input placeholder="Disabled Input" disabled />
    <Input placeholder="Readonly Input" readOnly defaultValue="I am read-only" />
    <Input placeholder="Error State" error helperText="Something went wrong!" />
  </div>
);
