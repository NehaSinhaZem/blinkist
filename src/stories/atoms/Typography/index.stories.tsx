import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from '.';

export default {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Typography>;
  
  const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
  
  export const Subtitle1Type = Template.bind({});
  Subtitle1Type.args = {
    color:"red",
    text:"Dummy"
  };
