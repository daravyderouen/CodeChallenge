//write a function that returns an obj
//count of food options in an array

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      this._courses.appetizers
    },
    get mains() {
      this._courses.mains
    },
    get desserts() {
      this._courses.desserts
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },
    set mains(mains) {
      this._courses.mains = mains
    },
    set desserts(desserts) {
      this._courses.desserts = desserts
    },
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName
      };
      return this._courses[courseName].push(dish); 
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]; 
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      return `You picked ${appetizer.name}, ${main.name}, and ${dessert.name}.`;
    }
  }
  
  menu.addDishToCourse('appetizers', 'egg rolls');
  menu.addDishToCourse('mains', 'Ladna');
  menu.addDishToCourse('desserts', 'sticky rice and coconut cream');
  
  menu.addDishToCourse('appetizers', 'samosa');
  menu.addDishToCourse('mains', 'spaghetti');
  menu.addDishToCourse('desserts', 'ice cream');
  
  menu.addDishToCourse('appetizers', 'chips & salsa');
  menu.addDishToCourse('mains', 'gumbo');
  menu.addDishToCourse('desserts', 'red velvet cupcakes');
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal)

  //OR if assigned to someone //

  