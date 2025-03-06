import {clsx} from 'clsx';

type FlexColProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FlexCol = ({className, children, ...htmlDivProps}: FlexColProps) => {
  return (
    <div {...htmlDivProps} className={clsx('flex flex-col', className)}>
      {children}
    </div>
  );
};
