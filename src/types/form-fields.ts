export interface InputTextProps {
    register?: any;
    fieldName: string;
    errors?: any;
    message?: string;
    className?: string;
    label: string;
    placeholder?: string;
    value?: string | number;
    maxLength?: number;
    setValue?: (field: string, value: string) => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    isRequired?: boolean;
    rightInfo?: string;
    autoFocus?: boolean;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    type?: string
  }