export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface IProjectsListItem {
  title?: string;
  name?: string;
  logoProject: string;
  description: string;
  imageMockup: string;
  backgroundImage: string;
  icons: Array<{
    icon: string;
    legend?: string;
    hover?: () => string;
  }>;
  side: Side;
}
