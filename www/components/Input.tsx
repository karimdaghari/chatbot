import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import cn from 'classnames';

type Props = ComponentPropsWithRef<'input'>;

const Input = forwardRef(
  ({ className, ...props }: Props, ref: Ref<HTMLInputElement>) => (
    <input
      className={cn(
        'border border-gray-200 p-2 rounded-md w-full placeholder:text-gray-300',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
