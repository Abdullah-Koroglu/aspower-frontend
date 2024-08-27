'use client';
import React, { useContext } from 'react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme='light' enableSystem>{children}</ThemeProvider>
  );
}


export const useBreadcrumb = () => useContext(BreadcrumbContext);
