import React from 'react';
import Slider from 'react-slick';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        vertical: false,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <Slider {...settings}>

            {props.list.map((item, i) => {
                return (
                    <div key={i} className="col s12">
                        <div className="item"><img src={item} alt="" /></div>
                    </div>
                );

            })}

        </Slider>
    );
}