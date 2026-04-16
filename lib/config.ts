export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://techvow-dashboard-theta.vercel.app';

export const SIGN_IN_URL = `${APP_URL}/login`;
export const SIGN_UP_URL = `${APP_URL}/login?mode=signup`;
