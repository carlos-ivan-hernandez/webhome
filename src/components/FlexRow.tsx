import {clsx} from 'clsx';

export const FlexRow = ({
  className,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={clsx('flex flex-row', className)} {...rest} />;
};
