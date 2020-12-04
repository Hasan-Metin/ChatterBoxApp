export function resolveAuthError(code) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Invalid Password';

    case 'auth/user-not-found':
      return 'User Not Found';

    case 'auth/invalid-email':
      return 'Invalid email';

    case 'auth/user-disabled':
      return 'This User Disabled by Admin';

    case 'auth/user-not-found':
      return 'User Not Found';

    case 'auth/user-not-found':
      return 'User Not Found';

    default:
      return 'An Unknown Error Occurred';
  }
}
