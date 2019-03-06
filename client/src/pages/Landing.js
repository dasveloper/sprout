import React, { Component } from "react";
import CreateForm from "./../components/CreateForm";
import { Carousel } from "./../components/Carousel";
import Newsletter from "./../components/Newsletter";
import { subscribe } from "../actions/email";
import { connect } from "react-redux";
import Faker from "faker";
import Contributions from "./../assets/contributions.png"; // Tell Webpack this JS file uses this image
import HeroImage from "./../assets/laptop-light.png"; // Tell Webpack this JS file uses this image
import Logo from "./../assets/logo-text.png"; // Tell Webpack this JS file uses this image
import Modal from "react-responsive-modal";

const styles = {
  paperContainer: {
    backgroundImage: `url(${HeroImage})`
  }
};
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
class Landing extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { subscribe } = this.props;
    return (
      <div className="landing-container">
        <Modal
          classNames={{
            modal: "subscribe-modal"
          }}
          open={open}
          onClose={this.onCloseModal}
          center
        >
          <Newsletter onSubmit={subscribe} />
        </Modal>
        <div className="hero-wrapper">
          <div className="hero-left">
            <div class="cta-wrapper">
              <img className="logo" src={Logo} alt="hero image" />
              <p className="cta-text">
                Rasing funds so you
                <br />
                can raise your future
              </p>
              <button className="cta-button" onClick={() => this.onOpenModal()}>
                Create a Sprout campaign
              </button>
            </div>
          </div>

          <svg
            className="wave-border"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-300 0 950 200"
          >
            <path
              d="M-314,167 C105,304 400,100 812,279"
              fill="none"
              stroke="white"
              stroke-width="120"
              stroke-linecap="round"
            />
          </svg>
          <div className="half-circle" />
        </div>
        <div class="mission-wrapper">
          <h3 class="mission-header">
            The average cost of raising a child is&nbsp;
            <span className="mission-header-cost">$233,610</span>
          </h3>
          <p class="mission-statement">
            Raising funds from friends and family can help take the stress out
            of having a baby. Sprout is a crowdfunding site for expecting
            parents to quickly and easily set up a fundraising campaign for the
            things they need.
          </p>
        </div>
        <div className="features-wrapper">
          <div className="feature cost">
            <i className="feature-icon fa fa-dollar-sign" />
            <span className="feature-header">Free to get started</span>
            <span className="feature-subheader">
              Creating a Sprout campaign is free so you can start raising money
              without spending a dime.
            </span>
          </div>
          <div className="feature setup">
            <i className="feature-icon fa fa-cogs" />
            <span className="feature-header">Customizable setup</span>
            <span className="feature-subheader">
              Choose your own theme, setup your own objectives, and make your
              campaign page exactly how you want it.
            </span>
          </div>
          <div className="feature secure">
            <i className="feature-icon fa fa-shield-alt" />

            <span className="feature-header">Safe and secure transactions</span>
            <span className="feature-subheader">
              Built on top of Stripe's world class payment processing platform
              your donors can contribute confidently.
            </span>
          </div>
        </div>
        <div className="landing-container-body">
          <div className="landing-container-inner">
            <div className="section-wrapper demo-carousel">
              <div className="section-left top center">
                <i className="section-icon fa fa-piggy-bank" />

                <h2 className="section-header">Set your own goals</h2>
                <p className="section-description">
                  Sprout allows you to set up as many funding objectives as you
                  want. Whether it's short term needs like diapers or long time
                  goals like college tuition, allow your guests to donate to
                  funds as they see fit.
                </p>
              </div>
              <div className="section-right bottom">
                <Carousel slides={carouselSlidesData} />
              </div>
            </div>
            <div className="section-wrapper ">
              <div className="section-left bottom">
                <div className="contributions-image-wrapper">
                  <img
                    className="contributions-image"
                    src={Contributions}
                    alt="contributions image"
                  />
                </div>
              </div>
              <div className="section-right center top">
                <i className="section-icon fa fa-hand-holding-usd" />

                <h2 className="section-header">Fund your future</h2>
                <p className="section-description">
                  Collecting donations has never been easier. Allow anonymous
                  donations, let donors choose which fund they want to support,
                  and have all of your money is available immediately.
                </p>
              </div>
            </div>

            <div className="section-wrapper">
              <div className="section-left center top">
                <i className="section-icon fa fa-paint-brush" />
                <h2 className="section-header">Customize your campaign</h2>
                <p className="section-description">
                  Baby Blue or Precious Pink? Choose from our pallete of
                  beautiful baby colors to create a more inviting theme for you
                  and your baby.
                </p>
              </div>
              <div className="section-right bottom">
                <CreateForm />
              </div>
            </div>
          </div>
        </div>
        <Newsletter onSubmit={subscribe} />

        <div class="footer" />
      </div>
    );
  }
}

function mapStateToProps({ form }) {
  return {
    form
  };
}
const mapDispatchToProps = {
  subscribe
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
