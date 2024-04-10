import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ColorDisplay } from "./ColorDisplay";

const meta = {
  title: "Design System/Fundations/Colors",
  component: ColorDisplay,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ColorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
