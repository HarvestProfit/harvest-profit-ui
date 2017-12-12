export default class ImmutabilityHelper {
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

  static diffTwoObjects = (obj1, obj2) => {
    const diff = {};
    Object.keys(obj1).forEach((key) => {
      if (obj1[key] !== obj2[key]) {
        diff[key] = obj2[key];
      }
    });
    return diff;
  }

  static insertItemIntoArray(array, item) {
    return [
      ...array.slice(),
      item,
    ];
  }

  static removeItemFromArrayByIndex(array, idx) {
    if (idx >= 0) {
      return [
        ...array.slice(0, idx),
        ...array.slice(idx + 1),
      ];
    }
    return [...array.slice()];
  }
}
