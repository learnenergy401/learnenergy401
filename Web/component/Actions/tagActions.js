/**
 * Add tags.
 * @param {object} text - Text of new tag
 */
export const addTag = (text) => ({
  type: 'ADD_TAG',
  text
})

/**
 * Delete a tag by text.
 * @param {object} text - Text of deleted tag
 */
export const deleteTag = (text) => ({
  type: 'DELETE_TAG',
  text: text
})

/**
 * Save tags from courses
 * @param {object} tags - tags of a course
 */
export const saveTags = (tags) => ({
  type: 'SAVE_TAGS',
  payload: tags
})

/**
 * Clear tags
 */
export const resetTags = () => ({
  type: 'RESET_TAGS',
  payload: []
})


