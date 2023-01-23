export class HttpError extends Error {
  statusCode: number;
  statusText?: string;
  constructor(status: number, message: string, statusText?: string) {
    super(message);
    this.statusCode = status;
    this.statusText = statusText;
  }
}
