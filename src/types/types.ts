export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface IProjectsListItem {
  logoProject: string;
  description: string;
  imageMockup: string;
  backgroundImage: string;
  icons: Array<{
    icon: string;
    legend?: string;
    hover?: () => string;
  }>;
  onClick: () => void;
  side: Side;
}
