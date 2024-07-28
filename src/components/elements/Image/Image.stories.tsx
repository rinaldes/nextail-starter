import { Meta, StoryFn } from "@storybook/react";
import { within, expect } from "@storybook/test";

import { ImageType } from "./type";

import Image from "./index";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    priority: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ImageType> = (args) => <Image {...args} alt={args.alt} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/200",
  alt: "Placeholder Image",
  width: 200,
  height: 200,
  priority: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByAltText("Placeholder Image")).toBeInTheDocument();
};

export const Priority = Template.bind({});
Priority.args = {
  src: "https://picsum.photos/200",
  alt: "Priority Image",
  width: 200,
  height: 200,
  priority: true,
};

Priority.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByAltText("Priority Image")).toBeInTheDocument();
};
