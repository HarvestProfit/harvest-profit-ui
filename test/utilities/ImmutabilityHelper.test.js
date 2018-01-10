import ImmutabilityHelper from '../../src/utilities/ImmutabilityHelper';

describe('ImmutabilityHelper', () => {
  describe('updateObjectPropertyInArray', () => {
    it('should update object property in the array', () => {
      const array = [
        { name: 'Bob', seeds: 'barely' },
        { name: 'Jimmy', seeds: 'wheat' },
        { name: 'Dude', seeds: 'corn' },
      ];
      const action = { index: 1, payload: { name: 'Jim' } };
      const newArray = ImmutabilityHelper.updateObjectPropertyInArray(array, action);
      expect(array).not.toBe(newArray);
      expect(array).not.toEqual(newArray);
      expect(newArray[1].name).toEqual('Jim');
      expect(newArray[1].seeds).toEqual('wheat');
    });
    it('should update object property in the array', () => {
      const array = [
        { name: 'Bob', seeds: 'barley' },
        { name: 'Jimmy', seeds: 'wheat' },
        { name: 'Dude', seeds: 'corn' },
      ];
      const action = { index: 1, payload: { name: 'Jimmy' } };
      const newArray = ImmutabilityHelper.updateObjectPropertyInArray(array, action);
      expect(array).not.toBe(newArray);
      expect(array).toEqual(newArray);
    });
  });
  describe('updateObjectPropertyInArrayById', () => {
    it('should update object property in the array through Id', () => {
      const array = [
        { name: 'Bob', seeds: 'barley', id: 1 },
        { name: 'Jimmy', seeds: 'wheat', id: 2 },
        { name: 'Dude', seeds: 'corn', id: 3 },
      ];
      const action = { id: 1, payload: { name: 'Robert' } };
      const newArray = ImmutabilityHelper.updateObjectPropertyInArrayById(array, action);
      expect(array).not.toBe(newArray);
      expect(array).not.toEqual(newArray);
      expect(newArray[0].name).toEqual('Robert');
      expect(newArray[0].seeds).toEqual('barley');
      expect(newArray[0].id).toEqual(1);
    });
  });
  describe('diffTwoObjects', () => {
    it('should return an object that displays the difference of object1 and object 2', () => {
      const obj1 = { name: 'Joe', seeds: 'corn' };
      const obj2 = { name: 'Bob', seeds: 'corn' };
      const diff = ImmutabilityHelper.diffTwoObjects(obj1, obj2);
      expect(diff.name).toEqual('Bob');
    });
    it('should return an object that displays the difference of object1 and object 2', () => {
      const obj1 = { name: 'Joe', seeds: 'corn' };
      const obj2 = { name: 'Joe', seeds: 'corn' };
      const diff = ImmutabilityHelper.diffTwoObjects(obj1, obj2);
      expect(diff).toEqual({});
    });
  });
  describe('insertItemIntoArray', () => {
    it('Should return an array that displays all items including new item', () => {
      const array = ['Bob', 'Dan'];
      const item = 'Dave';
      const newArray = ImmutabilityHelper.insertItemIntoArray(array, item);
      expect(newArray[2]).toEqual('Dave');
    });
  });
  describe('removeItemFromArrayByIndex', () => {
    it('Should return an array that displays all items not including removed', () => {
      const array = ['Bob', 'Dan', 'Barb', 'Dillion'];
      const idx = 1;
      const newArray = ImmutabilityHelper.removeItemFromArrayByIndex(array, idx);
      expect(newArray.length).toEqual(3);
      expect(newArray[1]).toEqual('Barb');
      expect(newArray[newArray.length - 1]).toEqual('Dillion');
      expect(newArray[0]).toEqual('Bob');
    });
    it('Should return a copy the array passed if invalid index', () => {
      const array = ['Bob', 'Dan', 'Barb', 'Dillion'];
      const idx = -1;
      const newArray = ImmutabilityHelper.removeItemFromArrayByIndex(array, idx);
      expect(array).not.toBe(newArray);
      expect(array).toEqual(newArray);
    });
  });
});
