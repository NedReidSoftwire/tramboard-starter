const throwConfigError = (key: string) => {
  throw new Error(`Missing environment variable: ${key}.`)
}

// Note that including an API key in an app is not very secure, as the app can be
// decompiled to access it. It's fine for this training exercise though.
const apiKey = process.env.EXPO_PUBLIC_API_KEY ?? throwConfigError('API_KEY')

export const config = {
  apiKey,
}
