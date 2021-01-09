import React, { Component } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./style.css";

class Glider extends Component {
    constructor(props) {
        super(props);
        this.glideRef = React.createRef();
    }

    componentDidMount() {
        this.slide = new Glide(this.glideRef.current).mount()
    }

    componentDidUpdate(prevProps) {
        if (this.props.options !== prevProps.options) {
            this.slide = this.slide.update(this.props.options)
        }
    }

    componentWillUnmount() {
        this.slide.destroy()
    }

    render() {
        return (
            <div ref={this.glideRef} className="glide">
                <div class="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                        Prev
          </button>
                </div>
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        <img className="glide__slide" src='https://static.kinoafisha.info/k/news/1200/upload/news/326878850485.jpg' />
                        <img className="glide__slide" src='https://i.ytimg.com/vi/wLLidhr09tI/maxresdefault.jpg' />
                        <img className="glide__slide" src='https://memepedia.ru/wp-content/uploads/2017/09/%D1%82%D0%BE%D0%BC-%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%D1%82-%D0%BF%D0%BE-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D1%83-7.jpg' />
                    </div>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        Next
          </button>
                </div>
            </div>
        )
    }
}

export default Glider;
