import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Header from 'contents/header'
import Serverconfig from 'server/config'
import { GlobalProvider } from 'components/context/globalContext'

import IJNlayout from 'components/IJNlayout'

// *? Tailwind CSS
import 'tailwindcss/tailwind.css'

// NProgress - loading screen
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// export function reportWebVitals(analytics) {
//   console.log(analytics)
// }

const IJNapp = ({ Component, pageProps, SEO }) => {
  const router = useRouter()
  let showNav = router.pathname === '/' ? false : true
  let showFooter =
    router.pathname === '/' ||
    router.pathname === '/home' ||
    router.pathname === '/about/my-skills'
      ? false
      : true

  return (
    <GlobalProvider>
      <Header
        title={pageProps.title}
        description={pageProps.description}
        coverImg={pageProps.coverImg}
      />
      <IJNlayout showNav={showNav} showFooter={showFooter}>
        <Component {...pageProps} />
      </IJNlayout>
    </GlobalProvider>
  )
}

export default IJNapp
