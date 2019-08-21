import React from 'react';

import './MusicRow.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withRouter} from 'react-router-dom';

import singer1 from './img/artist1.png';
import singer2 from './img/artist2.png';
import singer3 from './img/artist3.png';
import singer4 from './img/artist4.png';
import singer5 from './img/artist5.png';
import singer6 from './img/artist6.png';
import myImg from './img/IMG_3138.jpg';


class MusicRow extends React.Component {

    constructor(props){
        super(props);

        this.state={
            artists : [
                {name:"singer1 singer2 singer3gjklsdgnlsfdsgsfdh",id:1,
                    song:"song title",
                    image:myImg,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer2",id:2,
                    song:"song title",
                    image:singer2,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer3",id:3,
                    song:"song title",
                    image:singer3,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer4",id:4,
                    song:"song title",
                    image:singer4,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer5",id:5,
                    song:"song title",
                    image:singer5,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer6",id:6,
                    song:"song title",
                    image:singer6,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer7",id:7,
                    song:"song title",
                    image:singer1,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer7",id:8,
                    song:"song title",
                    image:singer2,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer7",id:9,
                    song:"song title",
                    image:singer3,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer7",id:10,
                    song:"song title",
                    image:singer6,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer7",id:11,
                    song:"song title",
                    image:singer6,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"},
                {name:"singer7",id:12,
                    song:"song title",
                    image:singer6,
                    url:"http://streaming.tdiradio.com:8000/house.mp3"}],
            play:false,
            pause:true,

    };
        this.url="http://streaming.tdiradio.com:8000/house.mp3";
        this.audio=new Audio(this.url);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.playMusic = this.playMusic.bind(this);
    }

        next() {
    this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    handleDoubleClick(){
        console.log("double click");
        this.props.history.push('/artist');

    };
    playMusic(){
        console.log("one click:play music!");
        // this.audio=new Audio(artist.url);
        if(this.state.play === false){
            this.setState({play:true,pause:false});
            this.audio.play();
        }else{
            this.setState({play:false,pause:true});
            this.audio.pause();
        }
    }
    render() {
        var settings = {
            dots: false,
            arrows:true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,

        };
        return this.props.genres.map(genre => (
            <div className='WholeRow'>

            {/*<div className='ui divider my_divider'></div>*/}

            <div className='flex_wraper'>
                <div><button
                    onClick={this.previous}
                    style={{border:"none", backgroundColor:"transparent"}}
                ><i className="angle left icon huge" /></button></div>

                <div  style={{width: '90%'}}>
                    <div>
                    <h2 className="row_header">{genre}</h2>
                    </div>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                                {this.state.artists.map((artist,i) =>
                                    <div key={i} onDoubleClick={this.handleDoubleClick} onClick={this.playMusic}>
                                        <img className="my_img" src={artist.image} alt="No pict shown" />
                                        <div className="center_item">{artist.name}</div>
                                    </div>
                                    )}
                        </Slider>

                </div>

                <div><button
                    className="button"
                    onClick={this.next}
                    style={{border:"none", backgroundColor:"transparent"}}
                ><i className="angle right icon huge" /></button></div>

            </div>

        </div>

        ));
    };
}

export default withRouter(MusicRow);
