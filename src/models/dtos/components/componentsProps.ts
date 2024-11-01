


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