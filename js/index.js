// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { 
    name: 'pepperoni', 
    price: 1 
  },
  mushrooms: {
     name: 'Mushrooms',
      price: 1 
    },
  greenPeppers: {
     name: 'Green Peppers',
      price: 1 
    },
  whiteSauce: {
     name: 'White sauce',
      price: 3 
    },
  glutenFreeCrust: {
     name: 'Gluten-free crust',
      price: 5 
    }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceAmount = document.querySelector('.panel.price ul');
  priceAmount.innerHTML = '';
  let total = 10;
  Object.entries(state).forEach(([ingredient, isActive]) => {
    if (isActive) {
      const price = ingredients[ingredient].price;
      const newPrice = document.createElement('li');
      newPrice.textContent = `$${price.toFixed(2)} ${ingredient}`;
      priceAmount.appendChild(newPrice);
      total += price;
    }
  })
  const totalEl = document.querySelector('.panel.price strong');
  totalEl.textContent = '$' + total.toFixed(2)
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function (event) {
  console.log(event.target);
  event.target.classList.toggle("active");
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  console.log(event.target);
  event.target.classList.toggle("active");
  state.mushrooms = !state.mushrooms;
  renderEverything();

});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (event) {
  console.log(event.target);
  event.target.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();


});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();

});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !glutenFreeCrust;
  renderEverything();

});