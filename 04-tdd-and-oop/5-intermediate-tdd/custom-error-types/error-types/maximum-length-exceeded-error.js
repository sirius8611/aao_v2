const ValidationError = require("./validation-error");

class MaximumLengthExceededError extends ValidationError {
  constructor(length = false) {
    let message = length
      ? `Maximum length exceeded by ${length}`
      : `Maximum length exceeded`;

    super(message);

    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, MaximumLengthExceededError);
    // }

    this.name = "MaximumLengthExceededError";
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
