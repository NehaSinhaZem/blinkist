import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const EntrepreneurBanner = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EntrepreneurBanner.args = {
  description: 'Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.',
  title:'Explore Books on entrepreneurship'
};
