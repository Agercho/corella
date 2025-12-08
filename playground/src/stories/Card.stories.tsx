import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@corella/react";
import { Button } from "@corella/react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    bordered: { control: "boolean" },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <h3 className="text-lg font-semibold">Card Title</h3>
        </Card.Header>
        <Card.Body>
          <p className="text-gray-600">
            This is the main content of the card. It fits nicely inside the body.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button size="small">Action</Button>
        </Card.Footer>
      </>
    ),
  },
};

export const ProfileCard: Story = {
  render: (args) => (
    <Card className="max-w-sm w-full mx-auto" {...args}>
      <Card.Body className="flex flex-col items-center text-center pt-8">
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-base-200">
          <img
            src="https://wallpapers.com/images/hd/english-cocker-spaniel-puppy-desktop-t0wzsno050jo6jqz.jpg"
            alt="Profile View"
            className="w-full h-full object-cover"
          />
        </div>
        <h5 className="text-xl font-bold text-gray-900">Bonnie Green</h5>
        <span className="text-sm text-gray-500 mb-6">Visual Designer</span>

        <div className="flex gap-4">
          <Button color="primary">Follow me</Button>
          <Button variant="outline" color="neutral">Message</Button>
        </div>
      </Card.Body>
    </Card>
  ),
};

export const BlogCard: Story = {
  render: (args) => (
    <Card className="max-w-sm w-full" {...args}>
       {/* Image as Header with no padding to flush it */}
       <Card.Header noPadding>
          <img
            src="https://media.smart.dhgate.com/wp-content/uploads/2025/08/cocker-spaniel-685bff3474de0.jpg"
            alt="Blog Cover"
            className="w-full h-48 object-cover"
          />
       </Card.Header>
       <Card.Body>
          <h4 className="text-xl font-bold mb-2">Streamlining your design</h4>
          <p className="text-gray-600 mb-4">
            In today's fast-paced digital landscape, fostering seamless collaboration among developers...
          </p>
          <a href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
            Read more <span>→</span>
          </a>
       </Card.Body>
    </Card>
  )
};

export const Borderless: Story = {
  args: {
    bordered: false,
    shadow: "none",
    children: (
      <Card.Body>
        <h3 className="text-lg font-bold">Borderless Card</h3>
        <p>This card has no border and no shadow, useful for simple layouts.</p>
      </Card.Body>
    ),
  },
};
