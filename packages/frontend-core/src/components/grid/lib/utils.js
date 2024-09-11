// We can't use "-" as a separator as this can be present in the ID
// or column name, so we use something very unusual to avoid this problem
const JOINING_CHARACTER = "‽‽"

export const parseCellID = cellId => {
  if (!cellId) {
    return { rowId: undefined, field: undefined }
  }
  const parts = cellId.split(JOINING_CHARACTER)
  const field = parts.pop()
  return { rowId: parts.join(JOINING_CHARACTER), field }
}

export const getCellID = (rowId, fieldName) => {
  return `${rowId}${JOINING_CHARACTER}${fieldName}`
}

export const parseEventLocation = e => {
  return {
    x: e.clientX ?? e.touches?.[0]?.clientX,
    y: e.clientY ?? e.touches?.[0]?.clientY,
  }
}
