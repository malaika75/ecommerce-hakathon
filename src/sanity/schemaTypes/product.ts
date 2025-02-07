import { defineType } from "sanity";

const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Sofa", value: "sofa" },
          { title: "Chair", value: "chair" },
          { title: "Lamp", value: "lamp" },
          { title: "Table", value: "table" },
          { title: "Bed", value: "bed" },
          { title: "vase", value: "vase" },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
    },
    {
      name: "isNew",
      title: "New Badge",
      type: "boolean",
    },
    {
      name: "sku",
      title: "SKU (Stock Keeping Unit)",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (rule) => rule.min(0).required(),
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "reviewer",
              title: "Reviewer Name",
              type: "string",
            },
            {
              name: "comment",
              title: "Comment",
              type: "text",
            },
            {
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (rule) => rule.min(1).max(5),
            },
          ],
        },
      ],
    },
    {
      name: "color",
      title: "Color",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});

export default product