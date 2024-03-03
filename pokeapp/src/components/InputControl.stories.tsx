import { Meta, StoryObj } from "@storybook/react";
import InputControl from "./InputControl";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof InputControl> = {
  title: "InputControl",
  component: InputControl,
  args: {
    label: "Name",
    id: "name",
    name: "name",
    placeholder: "Pikachu",
  },
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText("Name");
    await userEvent.type(input, "Bulbizarre");

    // import { expect } from "@storybook/jest";
    expect(input).toHaveValue("Bulbizarre");
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};
