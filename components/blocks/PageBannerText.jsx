export default function Block({ block }) {
  const { Title, Color } = block;
  return (
    <section className="min-h-[500px] flex items-center justify-center bg-[#F5F4F1] text-[#0e0e0e]">
      <div className="container">
        <h2 className="text-[80px] font-secondary text-center mb-[20px]">
          Hello World
        </h2>
      </div>
    </section>
  );
}
