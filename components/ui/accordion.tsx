'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('shadow-primary  bg-gradient-to-br from-primary-gradient-from to-primary-gradient-to rounded-md', className)}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'relative flex flex-col lg:flex-row flex-1 lg:items-center justify-between gap-2 pl-4 pr-12 py-3 text-sm font-bold transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:text-primary',
        className
      )}
      {...props}
    >
      {children}
      <ChevronUpIcon className='h-6 w-6 text-primary shrink-0 transition-transform duration-200 absolute top-1/2 right-3 -translate-y-1/2' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down border-t-[1px] border-separator accordion-content'
    {...props}
  >
    <div className={cn('p-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
