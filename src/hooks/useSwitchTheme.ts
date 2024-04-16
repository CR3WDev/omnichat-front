export const useSwitchTheme = (newTheme: string) => {
  const themeLink = document.getElementById('theme-link') as HTMLLinkElement

  if (!themeLink) {
    console.error('Theme link not found!')
    return
  }

  let themeHref = '/themes/lara-light-purple/theme.css'
  if (newTheme === 'dark') {
    themeHref = '/themes/lara-dark-purple/theme.css'
  }

  themeLink.href = themeHref

  localStorage.setItem('theme', newTheme)
}
