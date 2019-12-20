// import React from 'react'
// import { LineChart, Path, Grid } from 'react-native-svg-charts'

// class LineChartExample extends React.PureComponent {

//     render() {

//         const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

//         const Shadow = ({ line }) => (
//             <Path
//                 key={'shadow'}
//                 y={2}
//                 d={line}
//                 fill={'none'}
//                 strokeWidth={4}
//                 stroke={'rgba(134, 65, 244, 0.2)'}
//             />
//         )

//         return (
//             <LineChart
//                 style={ { height: 200 } }
//                 data={ data }
//                 svg={{ stroke: 'rgb(134, 65, 244)' }}
//                 contentInset={ { top: 20, bottom: 20 } }
//             >
//                 <Grid/>
//                 <Shadow/>
//             </LineChart>
//         )
        
        
//     }
    
    

// }

// export default LineChartExample
import React from 'react'
import { LineChart, Grid} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import Graph2 from "./Graphs2"

class ExtrasExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, 24, 85, 91, 35, 53, -53, 24, 50, 220, 680 ]

        /**
         * Both below functions should preferably be their own React Components
         */

        const HorizontalLine = (({ y }) => (
            <Line
                key={ 'zero-axis' }
                x1={ '0%' }
                x2={ '100%' }
                y1={ y(50) }
                y2={ y(50) }
                stroke={ 'grey' }
                strokeDasharray={ [ 4, 8 ] }
                strokeWidth={ 2 }
            />
        ))

        const Tooltip = ({ x, y }) => (
            <G
                x={ x(5) - (75 / 2) }
                key={ 'tooltip' }
                onPress={ () => console.log('tooltip clicked') }
            >
                <G y={ 50 }>
                    <Rect
                        height={ 40 }
                        width={ 75 }
                        stroke={ 'grey' }
                        fill={ 'white' }
                        ry={ 10 }
                        rx={ 10 }
                    />
                    <Text
                        x={ 75 / 2 }
                        dy={ 20 }
                        alignmentBaseline={ 'middle' }
                        textAnchor={ 'middle' }
                        stroke={ 'rgb(134, 65, 244)' }
                    >
                        { `${data[5]}Barrels` }
                    </Text>
                </G>
                <G x={ 75 / 2 }>
                    <Line
                        y1={ 50 + 40 }
                        y2={ y(data[ 5 ]) }
                        stroke={ 'grey' }
                        strokeWidth={ 2 }
                    />
                    <Circle
                        cy={ y(data[ 5 ]) }
                        r={ 6 }
                        stroke={ 'rgb(134, 65, 244)' }
                        strokeWidth={ 2 }
                        fill={ 'white' }
                    />
                </G>
            </G>
        )

        return (
            
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{
                    stroke: 'rgb(134, 65, 244)',
                    strokeWidth: 2,
                }}
                contentInset={{ top: 20, bottom: 20 }}
                curve={ shape.curveLinear }
            >
                <Grid/>
                <HorizontalLine/>
                <Tooltip/>
            </LineChart>
            
        )
    }

}

export default ExtrasExample