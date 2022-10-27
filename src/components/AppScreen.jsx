import React, { forwardRef } from 'react';
import clsx from 'clsx';

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('AppScreen flex flex-col', className)} {...props}>
      {children}
    </div>
  );
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div
      ref={ref}
      className="AppScreenHeader absolute inset-x-0 z-20 mt-12 grid grid-cols-12 gap-x-8 lg:gap-x-16 xl:gap-x-24"
    >
      {children}
    </div>
  );
});

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="AppScreenTitle col-span-7 col-start-6 text-2xl text-white">
      {children}
    </div>
  );
});

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="AppScreenSubtitle col-span-7 col-start-6 text-sm text-gray-500">
      {children}
    </div>
  );
});

AppScreen.Body = forwardRef(function AppScreenBody({ children, className }, ref) {
  return (
    <div ref={ref} className={clsx('AppScreenBody flex-auto', className)}>
      {children}
    </div>
  );
});
