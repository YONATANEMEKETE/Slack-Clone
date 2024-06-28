type ButtonProp = {
  variant?: 'primary' | 'secondary';
  className?: string;
  text?: string;
};

const button = ({ variant, className, text }: ButtonProp = {}) => {
  if (variant === 'primary') {
    return (
      <div
        className={`${className}  py-2 px-2 text-white text-lg font-logo font-semibold 
      bg-myaccent rounded-sm cursor-pointer text-center`}
      >
        {text}
      </div>
    );
  }

  if (variant == 'secondary') {
    return (
      <div
        className={`${className}  py-2 px-2 text-myaccent text-lg font-logo font-semibold 
      bg-secondary border  hover:ring-myaccent  border-myaccent rounded-sm cursor-pointer text-center`}
      >
        {text}
      </div>
    );
  }
};

export default button;
