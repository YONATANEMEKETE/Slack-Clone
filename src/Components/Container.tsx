type ContainerProp = {
  children: React.ReactNode;
  className: string;
};

const Container = ({ children, className }: ContainerProp) => {
  return (
    <div className={`${className} max-w-[1280px] mx-auto`}>{children}</div>
  );
};

export default Container;
