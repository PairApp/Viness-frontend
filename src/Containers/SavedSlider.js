import React, { Component } from "react";
import Slider from "react-slick";
import CustomSlide from '../Components/SavedSlide'

export default class SimpleSlider extends Component {
    render() {
        const renderSavedWines = () => {
            return this.props.saved.map(wine => <CustomSlide key={wine.id} wine={wine} postComment={this.props.postComment} deleteWine={this.props.deleteWine} setWineInfo={this.props.setWineInfo}/>)
        }
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "240px",
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        if (this.props.saved !== null && this.props.saved.length >= 1){
            return (
                <div>
                    <Slider {...settings}>
                        {renderSavedWines()}
                    </Slider>
                </div>
            );
        } else{
            return (
                <div>
                {/* <p style={{fontSize: '3rem'}}>You don't have any saved wines.</p> */}
                <p style={{fontSize: '3rem'}}>Get started by getting a recommendation or wine pairing!</p>
                </div>
            )
        }
        // return (
        //     <div>
        //         <Slider {...settings}>
        //             {this.props.saved !== null && this.props.saved.length >= 1 ? renderSavedWines() : <p>You don't have any saved wines yet.</p>}
        //         </Slider>
        //     </div>
        // );
    }
}