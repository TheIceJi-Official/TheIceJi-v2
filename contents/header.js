import Head from 'next/head'
import serverConfig from 'server/config'

const titleDefault = 'TheIceJI - Jirayu Ninlapun Official Website'
const url = 'https://TheIceJI.com'
const descriptionDefault =
  "I'm Jirayu Ninlapun, studying Cinematic Art at Bangkok University. Experience: 7 years in Graphics Design, 5 years in VFX & Editor, and 2 years in Web Developer. "
const author = 'Jirayu Ninlapun'
const coverImgDefault = '/cover.jpg'

const Header = ({ title = titleDefault, description = descriptionDefault, coverImg = coverImgDefault }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='TheIceJI, Jirayu Ninlapun, Web Developer'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        {/* 
      Facebook Open Graph meta tags */}
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={coverImg} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />
        <link rel='apple-touch-icon' href='/logo_white.svg' />
        <link rel='apple-touch-icon' sizes='16x16' href='/logo_white.svg' />
        <link rel='apple-touch-icon' sizes='32x32' href='/logo_white.svg' />
        <link rel='apple-touch-icon' sizes='180x180' href='/logo_white.svg' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' color='#000000' href='/logo_white.svg' />
        <link rel='apple-touch-startup-image' href='/logo_white.svg' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/logo_white.svg' />

        {/* Twitter Summary card */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@ice14798' />
        {/* CDN and API link */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Athiti:300,400,500,700&display=swap'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap'
          rel='stylesheet'
        />
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${serverConfig.GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${serverConfig.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${serverConfig.GOOGLE_TAG_MANAGER}');`,
          }}
        ></script>
      </Head>
    </>
  )
}

export default Header
