const element = document.getElementsByTagName('body')[0];

const h1 = document.createElement('h1');
h1.setAttribute('id','#myH1');
document.getElementById('myH1');
h1.textContent = 'Spicy Jalapeno-Bacon Mac and Cheese';
document.body.append(h1);

const img = document.createElement('img');
img.setAttribute('id','#myImage');
img.src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6905310.jpg";
document.body.append(img);
img.style.width="300px";
img.style.height ="300px";

const prepInfo= document.createElement('p');
prepInfo.setAttribute('id','#prepInfo');
document.body.append(prepInfo);
prepInfo.textContent = "Prep: 10 minutes \r\n Cook:35 minutes"+"\r\n"+"Yield: 8 servings";

const h2 = document.createElement('h2');
h2.setAttribute('id','ingredients');
h2.textContent = "Ingredients";
document.body.append(h2);

const ingredient2 = document.createElement('p');
ingredient2.textContent = "1 (16 ounce) package elbow macaroni";
document.body.append(ingredient2);

const ingredient3 = document.createElement('p');
ingredient3.textContent = "1 (16 ounce) package bacon, cut into bite-size pieces";
document.body.append(ingredient3);

const ingredient4 = document.createElement('p');
ingredient4.textContent = "10 jalapeno peppers, seeded and diced";
document.body.append(ingredient4);

const ingredient5 = document.createElement('p');
ingredient5.textContent = "2 tablespoons chili powder, or to taste";
document.body.append(ingredient5);

const ingredient6= document.createElement('p');
ingredient6.innerText = "salt and ground black pepper to taste";
document.body.append(ingredient6);

const ingredient7 = document.createElement('p');
ingredient7.innerText = "4 tablespoons all purpose flour";
document.body.append(ingredient7);

const ingredient8 = document.createElement('p');
ingredient8.innerText = "1 tablespoon minced garlic";
document.body.append(ingredient8);

const ingredient9 = document.createElement('p');
ingredient9.innerText = "4 cups whole milk";
document.body.append(ingredient9);

const ingredient10 = document.createElement('p');
ingredient10.innerText = "16 ounces shredded extra-sharp Cheddar cheese";
document.body.append(ingredient10);

//forgot ingredient 1 lol

const ingredient1= document.createElement('p');
ingredient1.textContent = "8 ounces shredded Parmesan Cheese";
document.body.append(ingredient1);

const ol = document.createElement('ol');
ol.setAttribute('id','myOL');
document.body.append(ol);

const step1 = document.createElement('li');
step1.innerText = 'Step 1: Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally, until tender yet firm to the bite, about 8 minutes. Drain.';
document.body.append(step1); 

const step2 = document.createElement('li');
step2.innerText = 'Step 2: Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until nearly crispy, about 5 minutes. Add jalapenos and fry with bacon until soft and bacon is crispy, about 5 minutes. Drain some of the bacon fat, leaving 4 tablespoons of fat in the pan.';
document.body.append(step2); 

const step3 = document.createElement('li');
step3.innerText = 'Step 3: Stir chile paste into the pan and fry for 1 minute. Add salt and pepper to taste. Add flour and cook for 1 minute. Cook and stir garlic in the pan for 1 minute. Pour in milk and cook over medium heat, whisking constantly, for 5 minutes. Remove from heat and let sit for 10 minutes to cool slightly and prevent cheese from separating.';
document.body.append(step3); 

const step4 = document.createElement('li');
step4.innerText = 'Step 4: Stir Cheddar cheese and Parmesan cheese into the mixture until melted. Add drained pasta and mix together. Serve.';
document.body.append(step4); 