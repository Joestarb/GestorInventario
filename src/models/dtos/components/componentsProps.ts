interface Classname{
  className?: string;
}
export interface ChildrenProps {
  children: React.ReactNode;
}


export interface ButtonProps extends ChildrenProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  buttonClassname?: string;
}


export interface InputProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassname?: string;
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
  headerActions?: React.ReactNode;
};


export type StatCardProps = {
  value: string;
  label: string;
  percentage: string;
  percentageColor: 'text-green-500' | 'text-red-500';
  iconDirection: 'up' | 'down';
};


export interface ModalProps extends ChildrenProps  {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onSave: () => void;
};

export interface TableProps<T> {
  data: T[];
  headers: (keyof T)[];
  renderRow?: (row: T) => JSX.Element;
};


export interface Option {
  value: string;
  label: string;
};

export interface SelectProps  {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
};