import helper from "@/lib/utils/helper";

export default function Text({ block }) {
  const { Title, Theme, Description, Alignment } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Theme);

  return (
    <div
      className={`py-[100px] border-y  bg-[${extractedColor.color}] text-${
        Alignment.toString().toLowerCase() || "center"
      }`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        {Title && (
          <h2 className="text-[50px] font-secondary mb-[50px] leading-normal">
            {Title}
          </h2>
        )}
        <div
          className="leading-[35px] text-[20px]"
          dangerouslySetInnerHTML={{ __html: Description }}
        ></div>
      </div>
    </div>
  );
}
