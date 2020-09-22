import React from 'react';
import { Loading } from 'Components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() =>
  import('./Landing'), {
  fallback: <Loading />,
});

// Pages
export const Event = loadable(() =>
  import('./Pages/Event'), {
  fallback: <Loading />,
});

export const Contact = loadable(() =>
  import('./Pages/Contact'), {
  fallback: <Loading />,
});
// export const ForgetPassword = loadable(() =>
//   import('./Pages/ForgetPassword'), {
//   fallback: <Loading />,
// });
// export const ChangePassword = loadable(() =>
//   import('./Pages/ChangePassword'), {
//   fallback: <Loading />,
// });

// export const RegistrationRequestList = loadable(() =>
//   import('./Pages/RegistrationRequestList'), {
//   fallback: <Loading />,
// });