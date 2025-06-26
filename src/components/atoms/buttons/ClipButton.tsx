import Button, { type ButtonProps } from './Button';

const ClipButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Button
      className={`
      ${className}
    bg-[#FF9D29]
    text-white
      font-bold
      py-[0.94rem]
      px-[2rem]
      clip-custom
      flex
      items-center
      gap-[0.75rem]`}
      {...props}
    >
      <div> {children}</div>
      <div className="border-b-2 border-white w-[2rem] h-1" />
    </Button>
  );
};

export default ClipButton;
