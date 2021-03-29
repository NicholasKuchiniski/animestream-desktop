export interface ConfirmationAlertProps {
  title: string;
  message: string;
  cancel: string;
  confirm: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
