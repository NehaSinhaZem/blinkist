import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input  from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const LargeInput = Template.bind({});
LargeInput.args = {
  size:'large',
  label: 'Input',
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  size:'small',
  label: 'Input',
};
export const mediumInput = Template.bind({});
SmallInput.args = {
  size:'medium',
  label: 'Input',
};
