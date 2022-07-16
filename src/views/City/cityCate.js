export const cityCate = (arr1, arr2) => {
  const newArr = []
  arr1.forEach((item) => {
    newArr.push(
      arr2.filter((ele) => {
        return ele.short.substr(0, 1).toUpperCase() === item
      })
    )
  })
  // console.log(newArr)
  return newArr
}
