import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ allPostsData }) {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    setColor("red");
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am Chris a junior software engineer
          <br />
          <br />
          I am a self-taught developer who is passionate about learning new
          technologies and building applications.
          <hr />
          <br />
          I am currently working on a project called INKWELLS BLOG which is a
          blogging platform where posts are shared and users are given the
          opinions share and other users can read and comment on them.
          <br />
          <hr />
          I am also working on a project called INKWELLS SHOP which is an
          e-commerce platform where users can buy and sell products.
          <br />
          <hr />
          I am also working on a project called INKWELLS CHAT which is a chat
          application where users can chat with each other.
          <br />
          <hr />
          I am also working on a project called INKWELLS NEWS which is a news
          application where users can read news from different sources.
          <br />
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>MY Personal Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} className={`title ${color}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
