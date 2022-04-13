import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { globalStyles } from 'components/css/global/Global'
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from 'components/context/globalContext'
import { NavBar, NavCanvas } from 'components/layout/nav'
// import UseScrollEffects from 'lib/hooks/useScrollEffects'

// IJN Components
import Cursor from 'components/cursor'
import Footer from 'components/layout/footer/index'

export default function IJNlayout({ children, SEO, showNav, showFooter }) {
  const dispatch = useGlobalDispatchContext()
  const router = useRouter()
  let useOnScrollNav = router.pathname === '/about/my-skills' ? false : true
  // Cursor State
  const { cursorStyles, Darkmode } = useGlobalStateContext()
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  // State
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    console.log(`
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    xllllllllllllllllllllllllllllllllllllllllllllllldKWW0olllllllllllllllllllllllllx
    k,..............................................oNWk,.........................,k
    WO;...........................................'xNNx'.........................;OW
    MW0:.......;dkxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkk0WNd'.........................:0WM
    MMMKc......'clllllllllllooooooooooooooooooodOWMWkc;;;;;;;;;;;;;;,..........cKMMM
    MMMMXl.....................................:0WMMWNNNNNNNNNNNNNNKl.........lXMMMM
    MMMMMNd'..................................cKMMMMMMMMMMMMMMMMMMXl........'dNMMMMM
    MMMMMMNx'..'clllllllllllllllllloc'......,lXMMMMMMMMMMMMMMMMMMKc........'xNMMMMMM
    MMMMMMMWk;:0WMMMMMMMMMMMMMMMMMMNx'....'d0NMMMMMMMMMMMMMMMMMW0:........,kWMMMMMMM
    MMMMMMMMWXXMMMMMMMMMMMMMMMMMMMXo.....'xNMMMMMMMMMMMMMMMMMMWO;........;OWMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl.....,kWMMMMMMMMMMMMMMMMMMWk,........:0WMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.....;OWMMMMMMMMMMMMMMMMMMNd'........lKMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMXXMMMMW0:.....:0MMMMMMMMMMMMMMMMMMMXo.........oXMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMW0::0WMWO;.....cKMMMMMMMMMMMMMMMMMMMKl........'dNMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMWO;..;ONk,.....oXWXKKKKXXXXXXXXKKKXKO:........,xNMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMWO,....,:'....'dNNx;'''''''''''''''''.........;OWMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMM0:..........'xNNo...........................:0WMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMWKc........,kWXl...........................cKMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMXl......;OWKc...........................lXMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMXo....:0W0:........,loddddddddddddddddkNMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMNd'.lKWO;........:0WWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMWOxXNx,........cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMNd'........oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMXc........oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMKc.......cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMXl.......:0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMNd'......;OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx'......,xXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk,......';dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;........oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:........cKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc........xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo......oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd'..'dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNxccxNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

    .------------------------------------------------------------------------------.
    |                                                                              |
    |                       Welcome to TheIceJI Website . . .                      |
    |                                                                              |
    '------------------------------------------------------------------------------'
    `)
  }, [])

  return (
    <>
      {globalStyles(Darkmode)}
      {showNav && (
        <>
          <NavBar
            onCursor={onCursor}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            useOnScrollNav={useOnScrollNav}
          />
          <NavCanvas
            // setPage={setPage}
            onCursor={onCursor}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
          />
        </>
      )}
      {/* <DefaultSeo {...SEO} /> */}
      {/* <UseScrollEffects>{children}</UseScrollEffects> */}
      {children}
      {showFooter && <Footer socialOpacity={0.4} />}
      <Cursor />
    </>
  )
}
