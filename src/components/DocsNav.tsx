import {
  Box,
  Heading,
  Link,
  ListItem,
  UnorderedList,
} from "quaantum-components";
import React from "react";

interface DocsNavProps {}

interface Component {
  name: string;
  slug: string;
}

interface Section {
  name: string;
  slug: string;
  components: Component[];
}

const sections: Section[] = [
  {
    name: "Layout",
    slug: "layout",
    components: [
      { name: "Box", slug: "box" },
      { name: "Flex", slug: "flex" },
      { name: "Grid", slug: "grid" },
    ],
  },
  {
    name: "Typography",
    slug: "typography",
    components: [
      { name: "Heading", slug: "heading" },
      { name: "Text", slug: "text" },
    ],
  },
  {
    name: "Forms",
    slug: "forms",
    components: [
      { name: "Button", slug: "button" },
      { name: "Input", slug: "input" },
      { name: "TextArea", slug: "textarea" },
    ],
  },

  {
    name: "Navigation",
    slug: "navigation",
    components: [{ name: "Link", slug: "link" }],
  },

  {
    name: "Media",
    slug: "media",
    components: [{ name: "Image", slug: "image" }],
  },
  {
    name: "Lists",
    slug: "lists",
    components: [
      { name: "OrderedList", slug: "ordered-list" },
      { name: "UnorderedList", slug: "unordered-list" },
      { name: "ListItem", slug: "list-item" },
    ],
  },
];

const DocsNav: React.FC<DocsNavProps> = ({}) => {
  return (
    <Box
      as='nav'
      bgColor='black.600'
      w='300px'
      p='30px 50px'
      m='0 50px'
      mt='-20px'
      r='0 0 8px 8px'
      zIndex={-1}
      boxShadow='0px 0px 5px 5px rgba(0,0,0,.1)'
    >
      {sections.map((section) => (
        <Box as='section' key={section.slug} my='20px'>
          <Heading>{section.name}</Heading>
          <UnorderedList>
            {section.components.map((component) => (
              <ListItem key={component.slug} variant='unstyled' my='5px'>
                <Link
                  href={`/docs/${section.slug}/${component.slug}`}
                  variant='docsNav'
                >
                  {component.name}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </Box>
  );
};

export default DocsNav;
