// src/features/dtos/components/InputProps.ts
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
