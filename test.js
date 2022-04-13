const Hello = (option, config, z) => {
    if (config == 'save') {
        z = option.x + option.y
    }
  }
  
  
  Hello({
    x: 6,
    y: 8
  }, 'save', z)

  