import pocket from "lib/PocketBaseSingleton";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { url: string[] } }) => {
  try {
    const pageRecord = await pocket
      .collection("pages")
      .getFirstListItem(`url='/${params.url.join("/")}'`);
    if (pageRecord) {
      return <p dangerouslySetInnerHTML={{ __html: pageRecord.content }}></p>;
    }
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

export default page;
