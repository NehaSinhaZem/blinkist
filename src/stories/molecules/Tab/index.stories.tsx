import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tab } from ".";

export default {
    title: 'Molecules/Tab',
    component: Tab,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Tab>;
  
  const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;
  
  export const RestingTab = Template.bind({});
  RestingTab.args = {
    textColor:'gray',
    lineColor:'white',
    text:'Currently Reading'
  };
  export const SelectedTab = Template.bind({});
  SelectedTab.args = {
    textColor:'#22C870',
    lineColor:'#22C870',
    text:'Currently Reading'
  };
  export const LargeTab = Template.bind({});
  LargeTab.args = {
    width:'304px',
    height:'39px',
    text:'Currently Reading'
  };
  export const SmallTab = Template.bind({});
  SmallTab.args = {
    width:'200px',
    height:'35px',
    text:'Currently Reading'
  };