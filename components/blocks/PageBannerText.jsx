import BannerTextBreadcrumbs from "../partials/Breadcrumbs/BannerTextBreadcrumbs";

export default function Block({ page, block }) {
  const { Title, Color, ShowBreadcrumbs, Description } = block;

  return (
    <>
      <section
        className="min-h-[500px] flex flex-col text-[#0e0e0e]"
        style={{ background: Color }}
      >
        <div className="container grow flex items-center justify-center">
          <h2 className="text-[80px] font-secondary text-center mb-[20px]">
            {Title}
          </h2>
        </div>
        {ShowBreadcrumbs && <BannerTextBreadcrumbs page={page} />}
      </section>
    </>
  );
}
