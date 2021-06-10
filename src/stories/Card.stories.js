import Card from "../card";

export default {
  title: "Component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  author: "Katsushika Hokusai",
  description:
    "Also known as The Great Wave, from the series “Thirty-Six Views of Mount Fuji (Fugaku sanjurokkei)”, in which a diminutive Mount Fuji can be seen in the distance under the crest of a giant wave.",
  image: {
    alt_text: "Under the Wave off Kanagawa painting",
  },
  title: "Under the Wave off Kanagawa (Kanagawa oki nami ura)",
  url: "https://www.artic.edu/iiif/2/b3974542-b9b4-7568-fc4b-966738f61d78/full/843,/0/default.jpg",
};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
