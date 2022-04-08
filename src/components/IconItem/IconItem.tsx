export type IconItemProps = {
  name: string;
  img: string;
};

export function IconItem({ name, img }: IconItemProps) {
  return (
    <div>
      <h1>{name}</h1>
      <img src="../../assets/icons/circle.svg" />
    </div>
  );
}
