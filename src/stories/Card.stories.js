import Card from "../card";

export default {
  title: "Component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
