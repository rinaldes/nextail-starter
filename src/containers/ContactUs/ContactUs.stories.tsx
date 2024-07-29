import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import ContactUs from "./index";

export default {
  title: "Containers/ContactUs",
  component: ContactUs,
} as Meta;

const Template: StoryFn = (args) => <ContactUs {...args} />;

export const Default = Template.bind({});
