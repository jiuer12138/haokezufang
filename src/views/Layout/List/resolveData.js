export const addChildren = (arr) => {
  return arr.forEach(
    (item) => (item.children = item.children ? item.children : [{ label: '' }])
  )
}
