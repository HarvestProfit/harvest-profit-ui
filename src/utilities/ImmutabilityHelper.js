export default class ImmutabilityHelper {
  /**
   * Updates an object property, using an action's index
   * @param {Object[]} array The original array of objects
   * @param {Object} action The action that updates the object
   * @param {number} action.index The index of the object in the array
   * @param {Object} action.payload The properties to update
   * @return {Object[]} The new array
   */
  static updateObjectPropertyInArray = (array, action) =>
    array.map((item, itemIndex) => {
      if (itemIndex !== action.index) {
        return item;
      }
      return {
        ...item,
        ...action.payload,
      };
    });
    /**
    *@param {Object[]} array The original array of objects
    *@param {Object} action The action that updates the object
    *@param {number} action.id The Id to determine the object
    *@param {Object} action.payload The properties to update
    @return {Object[]} The new array
    */
  static updateObjectPropertyInArrayById = (array, action) =>
    array.map((item) => {
      if (item.id !== action.id) {
        return item;
      }
      return {
        ...item,
        ...action.payload,
      };
    });
    /**
    *@param {Object} obj1 The object that being compared
    *@param {Object} obj1 The object being compared to obj1
    *@return {Object} The difference of obj1 and obj2
    */
  static diffTwoObjects = (obj1, obj2) => {
    const diff = {};
    Object.keys(obj1).forEach((key) => {
      if (obj1[key] !== obj2[key]) {
        diff[key] = obj2[key];
      }
    });
    return diff;
  }
  /**
  *@param {Object[]} array The array where the item will be inserted into
  *@param {Object} item The item being inserted into the array
  *@return {Object[]} returns the array with the new item in it
  */
  static insertItemIntoArray(array, item) {
    return [
      ...array,
      item,
    ];
  }
  /**
  *@param {Object[]} array The array where the item will be removed from
  *@param {number} idx The index location on the item being removed
  *@return the array with the removed item
  */
  static removeItemFromArrayByIndex(array, idx) {
    if (idx >= 0) {
      return [
        ...array.slice(0, idx),
        ...array.slice(idx + 1),
      ];
    }
    return [...array];
  }
}
