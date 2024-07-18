interface Props {
  src: string;
  name: string;
}

export const Avatar = ({ name, src }: Props) => {
  return (
    <div
      className={`w-12 h-12 rounded-full border border-primary-500 dark:border-primary-800 overflow-hidden`}
    >
      <img src={src} alt={name} className="w-full object-cover object-center" />
    </div>
  );
};
