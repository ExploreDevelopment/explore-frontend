import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

import cn from '@/utils/cn';

type AppSelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;

const AppSelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, AppSelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300',
          className,
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );
  },
);

AppSelectTrigger.displayName = 'AppSelectTrigger';

export default AppSelectTrigger;
