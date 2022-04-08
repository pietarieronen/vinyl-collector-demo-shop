export type HelloProps = {
  title: string;
  body: string;
};

export function Hello({ title, body }: HelloProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <p>{body}</p>
    </div>
  );
}
