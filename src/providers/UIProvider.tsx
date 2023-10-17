'use client';

import { NextUIProvider } from '@nextui-org/react';

type Props = {
  children: React.ReactNode;
};

export default function UIProvider({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}