import helper from "@/lib/helpers/helper";

export default function Text({ block }) {
  const { Theme, Description } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Theme);
  return (
    <div className="py-[100px] text-center">
      <div
        className="container leading-[50px] text-[20px] font-[600]"
        dangerouslySetInnerHTML={{ __html: Description }}
      ></div>
    </div>
  );
}
