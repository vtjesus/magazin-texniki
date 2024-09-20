export const isApple: () => boolean = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod') || ua.includes('mac')
}

export const ScooterAndroidUrl = 'https://github.com/vtjesus'
export const ScooterIosUrl = 'https://github.com/vtjesus'
