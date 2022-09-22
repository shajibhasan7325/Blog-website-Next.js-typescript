import Author from "../../components/Author";
import Format from "../../Layout/Format";
import Image from "next/image";
import Related from "../../components/Related";
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../components/Spinner";
import ErrorComponent from "../../components/ErrorComponent";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function Page({ fallback }: any) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;
  return (
    <SWRConfig value={{ fallback }}>
      {" "}
      <Article {...data} />
    </SWRConfig>
  );
}

const Article = ({
  title,
  subtitle,
  category,
  img,
  description,
  author,
}: any) => {
  return (
    <Format>
      <section className="container w-1/2 py-16 mx-auto md:px-2">
        <div className="flex justify-center ">
          {author ? <Author /> : <></>}
        </div>
        <div className="py-10 post">
          <h1 className="pb-5 text-3xl font-bold text-center">
            {title || "title"}
          </h1>
          <p className="text-xl text-center text-gray-500 ">
            {subtitle || "subtitle"}
          </p>
        </div>
        <div className="py-10 ">
          <Image
            src={img || "/images/img1.jpg"}
            width={900}
            height={600}
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-4 text-lg text-gray-600 content">
          {description || "description"}
        </div>
        <Related />
      </section>
    </Format>
  );
};

export async function getStaticProps({ params }: any) {
  const posts = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "api/posts": posts,
      },
    },
  };
}
export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value: any) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
