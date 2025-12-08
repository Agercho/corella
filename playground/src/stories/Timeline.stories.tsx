import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "@corella/react";
import { Button } from "@corella/react";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["vertical", "horizontal", "alternate"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const DefaultVertical: Story = {
  args: {
    variant: "vertical",
    children: (
      <>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout...
            </p>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma...
            </p>
          </Timeline.Content>
        </Timeline.Item>
      </>
    )
  }
};

export const WithDateTimeVertical: Story = {
  args: {
    variant: "vertical",
    children: (
      <>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout...
            </p>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma...
            </p>
          </Timeline.Content>
        </Timeline.Item>
      </>
    )
  }
};

export const FlowbiteStyle: Story = {
    render: () => (
      <Timeline variant="vertical" className="ml-4">
        <Timeline.Item>
          {/*
            User provided Calendar Icon:
            <span class="absolute ... ring-8 ring-buffer">...</span>
            We substitute 'ring-buffer' and colors with standard tailwind/corella equivalents for now.
            ring-buffer -> ring-gray-200 (or similar light gray)
            bg-brand-softer -> bg-blue-100
            text-fg-brand-strong -> text-blue-600
          */}
          <Timeline.Point
            icon={
              <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
            }
            className="w-6 h-6 bg-blue-100 ring-8 dark:ring-gray-800 -left-[39px]"
          />
          <Timeline.Content>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-200">Latest</span>
              <Timeline.Time className="mb-0">March 13th, 2025</Timeline.Time>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Flowbite Application UI v2.0.0</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>
            <Button variant="outline" className="gap-2">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-4 1h.01v.01H15V5Zm-2 2h.01v.01H13V7Zm2 2h.01v.01H15V9Zm-2 2h.01v.01H13V11Zm2 2h.01v.01H15V13Zm-2 2h.01v.01H13V15Zm2 2h.01v.01H15V17Zm-2 2h.01v.01H13V19Z"/></svg>
                Download ZIP
            </Button>
          </Timeline.Content>
        </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point
              icon={
                <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
              }
              className="w-6 h-6 bg-blue-100 ring-8 dark:ring-gray-800 -left-[39px]"
            />
            <Timeline.Content>
              <Timeline.Time>January 09th, 2025</Timeline.Time>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma...
              </p>
            </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    )
}

export const FlowbiteHorizontalStyle: Story = {
    render: () => (
      <Timeline variant="horizontal" className="ml-4">
        <Timeline.Item>
          {/*
            User provided Calendar Icon:
            <span class="absolute ... ring-8 ring-buffer">...</span>
            We substitute 'ring-buffer' and colors with standard tailwind/corella equivalents for now.
            ring-buffer -> ring-gray-200 (or similar light gray)
            bg-brand-softer -> bg-blue-100
            text-fg-brand-strong -> text-blue-600
          */}
          <Timeline.Point
            icon={
              <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
            }
            className="w-6 h-6 bg-blue-100 ring-8 dark:ring-gray-800"
          />
          <Timeline.Content>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-200">Latest</span>
              <Timeline.Time className="mb-0">March 13th, 2025</Timeline.Time>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Flowbite Application UI v2.0.0</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>
            <Button variant="outline" className="gap-2">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-4 1h.01v.01H15V5Zm-2 2h.01v.01H13V7Zm2 2h.01v.01H15V9Zm-2 2h.01v.01H13V11Zm2 2h.01v.01H15V13Zm-2 2h.01v.01H13V15Zm2 2h.01v.01H15V17Zm-2 2h.01v.01H13V19Z"/></svg>
                Download ZIP
            </Button>
          </Timeline.Content>
        </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point
              icon={
                <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
              }
              className="w-6 h-6 bg-blue-100 ring-8 dark:ring-gray-800"
            />
            <Timeline.Content>
              <Timeline.Time>January 09th, 2025</Timeline.Time>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma...
              </p>
            </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    )
}

// Replicating the "Crossed" Timeline (Image 2 - Apple History / User SCSS Example)
export const CrossedAlternate: Story = {
  render: () => (
    <Timeline variant="alternate" className="max-w-4xl mx-auto">
        {/* Item 1: Left */}
        <Timeline.Item>
          <Timeline.Point filled className="ring-4 ring-white dark:ring-gray-900" />
          <Timeline.Content className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Enero 2021 - Noviembre 2021</span>
            <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">Software Engineer</h3>
            <h4 className="text-md font-semibold text-gray-500 mb-4">Masseq</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Liderazgo de aplicaciones web con Angular y móviles con Flutter...
            </p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
              <li>Creación de ecommerce con Angular v11...</li>
              <li>Despliegue de infraestructura con Docker...</li>
            </ul>
          </Timeline.Content>
        </Timeline.Item>

        {/* Item 2: Right */}
        <Timeline.Item>
          <Timeline.Point filled className="ring-4 ring-white dark:ring-gray-900" />
          <Timeline.Content className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Noviembre 2021 - Agosto 2022</span>
            <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">Ssr Software Engineer</h3>
            <h4 className="text-md font-semibold text-gray-500 mb-4">Banco AV Villas</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Desarrollo de componentes y módulos en Angular v6 y v11...
            </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                <li>Migración del proyecto de Angular v6 a v11...</li>
                <li>Apoyo al equipo backend con soporte a lambdas...</li>
            </ul>
          </Timeline.Content>
        </Timeline.Item>
    </Timeline>
  )
};
