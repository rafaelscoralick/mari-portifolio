export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface IProjectsListItem {
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
