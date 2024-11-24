export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface IconProps {
  fill?: string;
  style?: any;
  className?:string;
  onClick?: () => void;
}