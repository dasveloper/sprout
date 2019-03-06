import React, { Component } from "react";
import { Carousel } from "./../components/Carousel";
import Faker from "faker";
// Data for carousel
const carouselSlidesData = [
  {
    title: "Diaper fund",
    description:
      "On average, babies will go through $550 in diapers in just the first year",
    fund: "$201"
  },
  {
    title: "College fund",
    description: "One semester in college can cost up to $13,000",
    fund: "$1,015"
  },
  {
    title: "Baby clothes",
    description: "I want my baby looking gooooood",
    fund: "$75"
  }
];

class Listing extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="pattern-overlay" />
        <div className="container-inner">
          <Carousel slides={carouselSlidesData} />
          <div className="details-wrapper">
            <div className="contributors-list-wrapper">
              <div className="contributors-list-heading-wrapper">
                <p className="contributors-list-heading">Contributors</p>
              </div>
              <ul className="contributors-list">
                {Array.apply(0, Array(10)).map(function(x, i) {
                  return (
                    <li key={i} className="contributor">
                      <div className="contributor-left-wrapper">
                        <span className="contribution-amount">{`$${Faker.random.number(
                          { min: 10, max: 200 }
                        )}`}</span>
                      </div>
                      <div className="contributor-right-wrapper">
                        <div className="contributor-top-wrapper">
                          <span className="contributor-name">{`${Faker.name.firstName()} ${Faker.name.lastName()}`}</span>
                          <span className="contribution-date">5 days ago</span>
                        </div>
                        <div className="contributor-bottom-wrapper">
                          <div className="contribution-fund-badge">
                            <p className="contribution-fund">college fund</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="message-list-wrapper">
              <div className="message-list-heading-wrapper">
                <p className="message-list-heading">Messages</p>
              </div>
              <ul className="message-list">
                {Array.apply(0, Array(10)).map(function(x, i) {
                  return (
                    <li key={i} className="message">
                      <div className="message-right-wrapper">
                        <div className="message-top-wrapper">
                          <span className="message-name">{`${Faker.name.firstName()} ${Faker.name.lastName()}`}</span>
                          <span className="message-date">5 days ago</span>
                        </div>
                        <div className="message-bottom-wrapper">
                          <p className="message-text">{`${Faker.hacker.phrase()}`}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
