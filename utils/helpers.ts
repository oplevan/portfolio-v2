export function addClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
