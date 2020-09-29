//import image
import heroimg from "../images/hero-image.png";
import catimg from "../images/pets/cat.png";
import dogimg from "../images/pets/dog.png";
import howItWorks1 from "../images/howItWorks/1.png";
import howItWorks2 from "../images/howItWorks/2.png";
import howItWorks3 from "../images/howItWorks/3.png";

import data2 from "./data2.js";
const stories = data2;

const Home = function render() {
  return ` <main>
    <section class="hero">
        <div class="container">
            <div class="hero__desc">
                <h1>Find and Adopt a pet Near You</h1>
                <p>There are so many loving adoptable pets right in your community waiting for a family to call
                    their own. </p>
                <a href="#meetYourMatch" class="button is-primary">Find a pet</a>
            </div>
            <div class="hero__image">
                <img src="${heroimg}" />
            </div>
        </div>
    </section>
    <section id="meetYourMatch" name="meetYourMatch">
        <div class="container">
            <div class="meetYourMatch__background"></div>
            <!--ربما ستحتاج هذا العنصر الخالي لعمل نمط الخلفية-->
            <div class="meetYourMatchــcontent">
                <h2>Meet Your Match</h2>
                <form action="#" class="meetYourMatchــform">
                    <div class="switcher">
                        <label for="dog">
                            <input id="dog" name="animal_type" type="checkbox" />
                            <img src="${dogimg}" alt="dog image">
                        </label>
                        <span>or</span>
                        <label for="cat">
                            <input id="cat" name="animal_type" type="checkbox" />
                            <img src="${catimg}" alt="cat image">
                        </label>
                    </div>
                    <div class="form-group">
                        <input id="search" type="text" placeholder="Entre  your city" />
                        <button id="searchButton" class="button is-primary" type="submit">search</button>
                    </div >
                </form>
                <div class="animalsGroups">
                 </div>
                </div>
            </div>
        </div>
    </section>
    <section class="howItWorks">
        <div class="container">
            <h2>How it works?</h2>
            <div class="widgets is-howItWorks">
                <div class="widget">
                    <div class="widget__image">
                        <img src="${howItWorks1}" alt="graphic-image">
                    </div>
                    <div class="widget__desc">
                        <h3>find Your Match</h3>
                        <p>We work with local rescues & shelters to help you find adoptable pets in your
                            area.</p>
                    </div>
                </div>
                <div class="widget">
                    <div class="widget__image">
                        <img src="${howItWorks2}" alt="graphic-image">
                    </div>
                    <div class="widget__desc">
                        <h3>Adopt a pet</h3>
                        <p>We partner with local adoption organizations to help connect pets in need with
                            pets lovers just like you.</p>
                    </div>
                </div>
                <div class="widget">
                    <div class="widget__image">
                        <img src="${howItWorks3}" alt="graphic-image">
                    </div>
                    <div class="widget__desc">
                        <h3>Change your Life</h3>
                        <p>From the story we hear, adopting pets change life of many people from our
                            community</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="stories">
        <div class="container">
            <h2>Featured Stories</h2>
            <p class="heading-paragraph">Together, we've helped save over 80K pets through adoption. Read
                amazing stories to see how adoption change the life of those people</p>
            <div class="widgetsStory">
            ${stories
              .map(
                (story) => `
            <div class="widget">
            <div class="widget__image">
                <img src=${story.url}>
            </div>
            <div class="widget__desc">
                <h3 id="titel">${story.title}</h3>
                <p class="storyParagh" id="${story.id}">${story.story}</p>
                <div class="link" id="${story.id}">Read More</div>
            </div>
        </div> `
              )
              .join("")}    
        </div>
    </section>
    <section class="actions">
        <div class="container">
            <h2>Change a Life, Adopt a Pet</h2>
            <a href="#" class="button is-secondary">Find a pet</a>
            <a href="#" class="button is-outline">Donate</a>
        </div>
    </section>
    </main>`;
};

export default Home;
