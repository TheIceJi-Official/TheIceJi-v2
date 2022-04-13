const IceJIlogo = ({ Darkmode }) => {
  return (
    <>
      <svg style={{ stroke: Darkmode ? '#FFF' : '#000' }}>
        <path fill='none'
          d='M83.9,78.6L73.4,96.8l18.1,31.3l-8.9,15.5L54.2,94.3L62.4,80l0.8-1.4l0.4-0.6l10.3-17.8h35.8l24.1-41.8H98
	l4.2-7.3L108.6,0h56.6L120,78.6H83.9z M94.8,12.1L25,12.2l0.2,4.2l66.9,0.4L50.9,88.6L36.8,63.9l7.7-13.4l6.9,12.7l19.2-33.5 L25.7,30l-4.2,7.4L0,0h101.7L94.8,12.1z'
        ></path>
      </svg>
    </>
  )
}

export default IceJIlogo
