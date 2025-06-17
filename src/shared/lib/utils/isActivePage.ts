export const isActivePage = (currentPath: string, pageUrl: string): boolean =>
  pageUrl !== '#' && currentPath.startsWith(pageUrl);
