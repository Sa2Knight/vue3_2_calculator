import { Story, Meta } from "@storybook/vue3";
import CalcScreen from "./CalcScreen.vue";
export default { title: "CalcScreen" } as Meta;

const Template: Story = (args, { argTypes }) => ({
  components: { CalcScreen },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 340px">
      <CalcScreen v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = { value: "0" };

export const ShortNumber = Template.bind({});
ShortNumber.args = { value: "1024" };

export const MiddleNumber = Template.bind({});
MiddleNumber.args = { value: "314573841619" };

export const LongNumber = Template.bind({});
LongNumber.args = { value: "141592653589793238462643383279502884" };

export const FloatingNumber = Template.bind({});
FloatingNumber.args = { value: "3.1415926535" };
