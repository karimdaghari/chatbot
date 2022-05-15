import cn from 'classnames';
import { ComponentPropsWithRef, Ref, forwardRef } from 'react';

type Props = ComponentPropsWithRef<'div'>;

const Card = forwardRef(
  ({ className, children, ...props }: Props, ref: Ref<HTMLDivElement>) => (
    <div
      className={cn('p-4 bg-white rounded-md shadow-md', className)}
      ref={ref}
      {...props}>
      {children}
    </div>
  )
);

Card.displayName = 'Card';

export default Card;
