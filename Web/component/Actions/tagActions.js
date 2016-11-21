
export const addTag = (text) => ({
  type: 'ADD_TAG',
  text
})


export const deleteTag = (text) => ({
  type: 'DELETE_TAG',
  text: text
})



export const saveTags = (tags) => ({
  type: 'SAVE_TAGS',
  payload: tags
})

export const resetTags = () => ({
  type: 'RESET_TAGS',
  payload: []
})


