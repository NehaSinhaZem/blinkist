import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MuiButton from '.';

export default {
    title: 'Atoms/MuiButton',
    component: MuiButton,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof MuiButton>;
  
  const Template: ComponentStory<typeof MuiButton> = (args) => <MuiButton {...args} />;
  
  export const RestingMuiButton = Template.bind({});
  RestingMuiButton.args = {
    backgroundColor:"transparent"
  };
  export const HoverMuiButton = Template.bind({});
  HoverMuiButton.args = {
    backgroundColor:"blue"
  };
  