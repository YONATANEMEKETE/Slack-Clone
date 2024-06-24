type ButtonProp = {
  variant?: 'primary' | 'secondary';
  className?: string;
  text?: string;
};

const button = ({ variant, className, text }: ButtonProp = {}) => {
  if (variant === 'primary') {
    return (
      <div
        className={`${className} w-max py-2 text-white text-lg font-logo font-semibold 
      bg-myaccent rounded-lg cursor-pointer text-center`}
      >
        {text}
      </div>
    );
  }

  if (variant == 'secondary') {
    return (
      <div
        className={`${className} w-max py-2 text-myaccent text-lg font-logo font-semibold 
      bg-secondary border-2 border-myaccent rounded-lg cursor-pointer text-center`}
      >
        {text}
      </div>
    );
  }
};

export default button;