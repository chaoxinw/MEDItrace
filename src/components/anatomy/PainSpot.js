import React from "react"
import "./painspot.css"
import { Tooltip } from 'antd';

class PainSpot extends React.Component {
    render() {

            const {style} = this.props
        return (
            <Tooltip placement={this.props.x < 0.5 ? 'left' : 'right'} visible title={this.props.title} text style={{ marginTop: 25 }}>
            <svg version="1.1" id="Layer_1" x="0px" y="0px" className={'rotating'}
                 viewBox="0 0 512 512" style={{enableBackground: "new 0 0 512 512", height: 30, width: 30, ...style}}>
                <circle style={{fill: "#fff"}} cx="255.995" cy="255.996" r="76.945"/>
                <g>
                    <path style={{fill: "#fc0e2a"}} d="M255.997,347.463c-50.433,0-91.463-41.031-91.463-91.463s41.031-91.463,91.463-91.463
		S347.46,205.567,347.46,256S306.429,347.463,255.997,347.463z M255.997,193.573c-34.422,0-62.427,28.005-62.427,62.427
		s28.005,62.427,62.427,62.427s62.427-28.005,62.427-62.427S290.419,193.573,255.997,193.573z"/>
                    <path style={{fill: "#fc5c5f"}} d="M255.997,512c-68.381,0-132.668-26.629-181.02-74.98c-5.669-5.669-5.669-14.862,0-20.533
		c5.671-5.669,14.861-5.669,20.533,0c42.867,42.869,99.863,66.476,160.488,66.476s117.62-23.608,160.488-66.476
		c42.867-42.867,66.476-99.863,66.476-160.488s-23.609-117.62-66.476-160.488c-42.869-42.869-99.863-66.476-160.488-66.476
		S138.377,52.644,95.509,95.512c-57.256,57.256-79.73,141.45-58.65,219.728c2.085,7.742-2.503,15.708-10.244,17.793
		c-7.75,2.088-15.708-2.501-17.795-10.244C-2.68,280.078-2.936,234.853,8.085,192.005c11.355-44.152,34.486-84.618,66.892-117.025
		C123.329,26.629,187.616,0,255.997,0s132.668,26.629,181.02,74.98c48.352,48.352,74.98,112.639,74.98,181.02
		s-26.629,132.667-74.98,181.02C388.665,485.371,324.377,512,255.997,512z"/>
                    <path style={{fill: "#fc5d5f"}} d="M255.997,452.028c-108.091,0-196.028-87.938-196.028-196.028S147.906,59.972,255.997,59.972
		c69.932,0,135.071,37.687,169.997,98.355c4.001,6.948,1.61,15.825-5.338,19.826c-6.951,4-15.823,1.609-19.824-5.338
		c-29.76-51.693-85.258-83.807-144.834-83.807c-92.08,0-166.992,74.913-166.992,166.992s74.913,166.992,166.992,166.992
		S422.989,348.079,422.989,256c0-8.018,6.501-14.518,14.518-14.518s14.518,6.5,14.518,14.518
		C452.025,364.091,364.088,452.028,255.997,452.028z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
            </Tooltip>
        )
    }
}

export default PainSpot