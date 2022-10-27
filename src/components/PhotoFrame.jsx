// import Image from 'next/future/image'
import React from 'react';
import clsx from 'clsx';

export function PhotoFrame({ className, children, priority = false, ...props }) {
  return (
    <div className={clsx('PhotoFrameParent', className)} {...props}>
      <div className="PhotoFrameChildren grid transform grid-cols-1 overflow-hidden bg-gray-900">
        {children}
      </div>
    </div>
  );
}
