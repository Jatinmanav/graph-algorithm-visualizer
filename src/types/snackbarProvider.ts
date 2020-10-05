export default interface snackbarProvider {
  open: boolean;
  message: String;
  toggleSnackbar(message?: String): void;
}
