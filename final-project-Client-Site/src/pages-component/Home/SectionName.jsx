export default function SectionName({ title, name }) {
  return (
    <div className="pt-5 pb-10 flex flex-col justify-center items-center gap-4">
      <p className="text-orange-500">{title}</p>
      <h1 className="text-3xl px-10 py-3 NameBorder">{name}</h1>
    </div>
  );
}
