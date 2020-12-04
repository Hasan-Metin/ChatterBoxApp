export function resolveAuthError(code) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Invalid Password!';

    case 'auth/user-not-found':
      return 'User Not Found!';

    case 'auth/invalid-email':
      return 'Invalid email!';

    case 'auth/user-disabled':
      return 'This User Disabled by Admin!';

    case 'auth/user-not-found':
      return 'User Not Found!';

    case 'auth/email-already-in-use':
      return 'This mail is already in use!';

    case 'auth/operation-not-allowed':
      return 'Operation Not Allowed!';

    case 'auth/weak-password':
      return 'Weak Password!';

    default:
      return 'An Unknown Error Occurred';
  }
}

export function matchPassword(firstTyped, secondTyped) {
  return firstTyped.startsWith(secondTyped);
}

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
