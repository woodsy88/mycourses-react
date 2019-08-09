import React, { Component } from 'react';
import Title from "../components/Title";

class Services extends Component {
  state= {
    services: [
      {
        icon: "fas fa-code",
        title: "html",
        info: "Tempor consequat exercitation excepteur id et ea ex ",
      },
      {
        icon: "fas fa-code",
        title: "html",
        info: "Tempor consequat exercitation excepteur id et ea ex olor exercit",
      },
      {
        icon: "fas fa-code",
        title: "htmlminim sunt ut duis labore ullamco sit ",
        info: "asjkdhksdadsajdsajadhsadjadjkdajdasjkkjads",
      }    
    ]
  }

  render() {
    const {services} = this.state;
    return (
      <section className="services">
          <Title title="Services" />
      <div className="services-center">
          {services.map((item, index) => {
            return (
              <article key={index} className="service">
                <i className={item.icon}></i>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
      </div>
      </section>
    );
  }
}

export default Services;