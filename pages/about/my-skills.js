import Image from 'next/image'
import { css } from '@emotion/css'
import { InView } from 'react-intersection-observer'
import * as CSS from 'components/css/about/mySkills'
import Color from 'components/css/global/Color'
import AvatarImg from 'public/page/about/Profile_Avatar@2x.png'
import { SocialItems } from 'contents/socialLink'
import * as mySkills from 'contents/about.skills'

import UseScrollEffects from 'lib/hooks/useScrollEffects'

const MySkill = () => {
  const Page = React.useRef(null)
  let MenuItems = [
    { number: '01', name: 'Projects' },
    { number: '02', name: 'Dev Skills' },
    { number: '03', name: 'Expertises' },
    { number: '04', name: 'Certificates' },
    { number: '05', name: 'Team & Members' },
    { number: '06', name: 'Works' },
  ]

  const [MenuSection, setMenuSection] = React.useState(1)

  const menuContainer = css`
    & a:nth-child(${MenuSection}) {
      color: ${Color.Primary};
      opacity: 1;
      transition-duration: 250ms;
      & > div {
        width: 48px;
        background-color: ${Color.Primary};
        transition-duration: 250ms;
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  `

  return (
    <div className={CSS.container} ref={Page}>
      <div>
        <div className={CSS.main}>
          <div className={CSS.header}>
            <h1>
              Hello, I'm <br />
              Jirayu Ninlapun
            </h1>
            <p>
              I'm a Interactive Web Developer and Interactive Design.
              <br />
              I mostly use ReactJS, NextJS to create the web. I am
              <br />
              specialize in GSAP, WebGL to make website's real.
            </p>
          </div>
          <div className={menuContainer}>
            {MenuItems.map((v, i) => (
              <Menu
                number={v.number}
                name={v.name}
                key={i}
                target={i + 1}
                setMenuSection={setMenuSection}
              />
            ))}
          </div>
          <div className={CSS.footer}>
            <Image
              //   placeholder='blur'
              src={AvatarImg}
              alt='IceJI Avatar image'
              height={48}
              width={48}
            />
            <a href={SocialItems[0].link}>
              <i className='fa fa-facebook-square'></i>
              <p>Facebook</p>
            </a>
            <a href={SocialItems[5].link}>
              <i className='fa fa-github'></i>
              <p>Github</p>
            </a>
          </div>
        </div>
        <div className={CSS.content}>
          {/* <UseScrollEffects> */}
          <div className={CSS.contentInner}>
            <InView threshold={0}>
              {({ ref, inView }) => {
                if (inView) {
                  setMenuSection(1)
                }
                return (
                  <div className={CSS.sectionRow} ref={ref} id='Menu_1'>
                    {mySkills.Projects.map((v, i) => (
                      <Section_Projects
                        name={v.name}
                        type={v.type}
                        des={v.description}
                        star={v.star}
                        key={i}
                      />
                    ))}
                  </div>
                )
              }}
            </InView>
            <InView threshold={0.4}>
              {({ ref, inView }) => {
                if (inView) {
                  setMenuSection(2)
                }
                return (
                  <div className={CSS.sectionGrid} ref={ref} id='Menu_2'>
                    {mySkills.DevSkills.map((v, i) => (
                      <Section_Skills
                        title={v.name}
                        sub={v.type}
                        details={v.level}
                        key={i}
                      />
                    ))}
                  </div>
                )
              }}
            </InView>
            <InView threshold={0.4}>
              {({ ref, inView }) => {
                if (inView) {
                  setMenuSection(3)
                }
                return (
                  <div className={CSS.sectionGrid} ref={ref} id='Menu_3'>
                    {mySkills.Expertises.map((v, i) => (
                      <Section_Skills
                        title={v.name}
                        sub={v.category}
                        details={v.level}
                        key={i}
                      />
                    ))}
                  </div>
                )
              }}
            </InView>
            <InView threshold={0.4}>
              {({ ref, inView }) => {
                if (inView) {
                  setMenuSection(4)
                }
                return (
                  <div className={CSS.sectionGrid} ref={ref} id='Menu_4'>
                    {mySkills.Certificates.map((v, i) => (
                      <Section_Skills
                        title={v.name}
                        sub={v.academy}
                        details={v.date}
                        key={i}
                      />
                    ))}
                  </div>
                )
              }}
            </InView>
            <InView threshold={0.4}>
              {({ ref, inView }) => {
                if (inView) {
                  setMenuSection(5)
                }
                return (
                  <div className={CSS.sectionRow} ref={ref} id='Menu_5'>
                    {mySkills.Teams.map((v, i) => (
                      <Section_Team
                        name={v.name}
                        des={v.description}
                        location={v.location}
                        key={i}
                      />
                    ))}
                  </div>
                )
              }}
            </InView>
            <InView threshold={0.4}>
              {({ ref, inView }) => {
                if (inView) {
                  setMenuSection(6)
                }
                return (
                  <div className={CSS.sectionRow} ref={ref} id='Menu_6'>
                    {mySkills.Works.map((v, i) => (
                      <Section_Works
                        name={v.company}
                        des={v.description}
                        pos={v.position}
                        date={v.date}
                        key={i}
                      />
                    ))}
                  </div>
                )
              }}
            </InView>
            {/* <div style={{ height: 250 }}></div> */}
          </div>
          {/* </UseScrollEffects> */}
        </div>
      </div>
    </div>
  )
}

const Menu = ({ number, name, target, setMenuSection }) => (
  <a
    className={CSS.menu}
    href={'#Menu_' + target}
    onClick={() => setMenuSection(target)}
  >
    <p>{number}</p>
    <div></div>
    <p>{name}</p>
  </a>
)

const Section_Projects = ({ type, name, des, star }) => (
  <div className={CSS.sectionRowContent}>
    <div>
      <h5>{type}</h5>
      <h4>{name}</h4>
      <p>{des}</p>
    </div>
    <div>
      <i className='fa fa-star'></i>
      <p>{star}</p>
    </div>
  </div>
)

const Section_Skills = ({ title, sub, details }) => (
  <div className={CSS.sectionGridContent}>
    <div>
      {sub.map((v, i) => (
        <h5 key={i}>{v}</h5>
      ))}
      <h6>{details}</h6>
    </div>
    <div>
      {title.map((v, i) => (
        <h4 key={i}>{v}</h4>
      ))}
    </div>
  </div>
)

const Section_Team = ({ name, des, location }) => (
  <div className={CSS.sectionRowContent}>
    <div>
      <h5>{location}</h5>
      <h4>{name}</h4>
      <p>{des}</p>
    </div>
  </div>
)

const Section_Works = ({ name, des, pos, date }) => (
  <div className={CSS.sectionRowContent}>
    <div>
      <h5>{pos}</h5>
      <h4>{name}</h4>
      <p>{des}</p>
    </div>
    <p>{date}</p>
  </div>
)

export default MySkill
