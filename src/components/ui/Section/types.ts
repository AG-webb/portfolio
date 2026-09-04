import type { Sections } from '@/types';

export type SectionProps = React.ComponentProps<"section"> & {
  id: Sections;
  subtitle?: string;
  title?: string;
};
