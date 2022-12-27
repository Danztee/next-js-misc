import React from "react";

const News = ({ data }) => {
  return <h1 className="content">{data}</h1>;
};

export async function getStaticProps(context) {
  console.log(context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft article"
        : "List of published articles",
    },
  };
}
export default News;
