import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        ENV analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { blogId } = params;

  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `connecting to database with user ${user} and password ${password}`
  );

  return {
    props: {
      title: blogId,
      description: "Article description",
    },
  };
}

export default Blog;
