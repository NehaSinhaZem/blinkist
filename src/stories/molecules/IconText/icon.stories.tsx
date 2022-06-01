import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconText } from ".";
import TimeIcon from "../../atoms/icons/timeIcon";
import UserIcon from "../../atoms/icons/userIcon";
import { baseTheme } from "../../../theme";
export default {
    title: 'Molecules/IconText',
    component: IconText,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof IconText>;
  
  const Template: ComponentStory<typeof IconText> = (args) => <IconText {...args} />;
  
  export const TimeIconText = Template.bind({});
  TimeIconText.args = {
      icon:<TimeIcon stroke="baseTheme.palette.grayscale.main"/>,
      text:'13-minute read',
      align:'left',
      color:'baseTheme.palette.grayscale.dark'
  };
  export const UserIconText = Template.bind({});
  UserIconText.args = {
    icon:<UserIcon stroke="baseTheme.palette.grayscale.main"/>,
    text:'1.9k reads',
    align:'right',
    color:'baseTheme.palette.grayscale.dark'
  };