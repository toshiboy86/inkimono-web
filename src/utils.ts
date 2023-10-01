export const convertFirstLetterCapital = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const generateRandomImages = async (images: string[], limit: number) => {
  const myfun = function(x: string,y: string){
    return 0.5 - Math.random()
  }
  return images.sort(myfun).slice(0, 3)
}