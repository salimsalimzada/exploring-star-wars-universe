export class AppError<T> extends Error {
  constructor(
    public message: string,
    public status: number,
    public data?: T,
  ) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
