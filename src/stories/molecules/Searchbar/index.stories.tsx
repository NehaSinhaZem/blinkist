import { ComponentMeta, ComponentStory } from '@storybook/react';
import {baseTheme} from '../../../theme';
import { SearchBar } from '.';

export default {
    title: 'Molecules',
    component: SearchBar,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof SearchBar>;
  
  const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;
  
  export const RestingSearchBar = Template.bind({});
  RestingSearchBar.args = {
    border:'1px solid '+baseTheme.palette.greyscale.light
  };
  export const ActiveSearchBar = Template.bind({});
  ActiveSearchBar.args = {
    border:'2px solid '+baseTheme.palette.primary.main,
  };
  