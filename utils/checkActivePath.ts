export const checkActivePath = (currentPath: string, path: string): boolean => {
  if (path === '/' && currentPath !== path) return false
  return currentPath.startsWith(path)
}
