interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Alert({children, className,...props}: Props){
    return(<div
          className={`fixed top-25 left-1/2 px-4 py-2 rounded-lg z-50 ${className}`}
          {...props}
        >
          {children}
        </div>);
}