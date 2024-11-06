

interface Classname{
  className?: string;
}
export interface ChildrenProps {
  children: React.ReactNode;
}


export interface ButtonProps extends ChildrenProps {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}


export interface InputProps {
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Para estilos personalizados si se desea
  disabled?: boolean;
}

export interface LanguageToggleButtonProps {
  language: string;
}


export interface WhiteCardProps extends ChildrenProps, Classname {
  title: string;
  subtitle?: string;
  isDarkMode: boolean;
  spanCols?: number; 
  additionalClasses?: string;
};


export type StatCardProps = {
  value: string;
  label: string;
  percentage: string;
  percentageColor: 'text-green-500' | 'text-red-500';
  iconDirection: 'up' | 'down';
};
