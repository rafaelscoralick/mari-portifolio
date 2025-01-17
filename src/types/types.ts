export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface IProjectsListItem {
  logoProject: string;
  description: string;
  imageMockup: string;
  onClick: () => void;
  side: Side;
}
