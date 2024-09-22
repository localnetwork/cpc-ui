import helper from "@/lib/helpers/helper";

export default function Block({ block }) {
  const { colorExtractor } = helper;
  console.log("block?.Theme", block?.Theme);
  const extractedColor = colorExtractor(block?.Theme);

  return (
    <div className={`min-h-[500px] py-[100px] bg-[${extractedColor?.color}]`}>
      <div className="container">Hello</div>
    </div>
  );
}
