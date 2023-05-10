import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "km9nzy1d",
  dataset: "production",
  apiVersion: "2023-02-01",
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:
    "skFTA7xPY2O00bAQGup3UpQ83wF0qmeEg7p6TwToBnmzJBGgszn951JfvnlhccaGnsTKly5TW0Vcq4rOHaNZfphnESSXn3wn9WOri5QoWmBRsKIiXvRg9NMSlePxMSABfedOQtuTHo2PooLunVcOvd3MvQPjSMyl2jSasB6D8BBpnjpudDF2",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
