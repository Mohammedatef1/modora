const capitalizeFirstLetter = (...names : string[]) => {
  return names.map(name => name.charAt(0).toLocaleUpperCase() + name.slice(1)).join(" ")
}

export {capitalizeFirstLetter}