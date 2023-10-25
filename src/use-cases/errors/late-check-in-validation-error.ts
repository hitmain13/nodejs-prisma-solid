export class LateCheckInValidationError extends Error {
  constructor() {
    super('The check-in can only be validated until certain time of its creation.')
  }
}
