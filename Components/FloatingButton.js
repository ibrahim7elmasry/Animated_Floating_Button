import React, { Component } from 'react'
import { Text, View, Dimensions,StyleSheet ,Animated, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Entypo'
const {height ,width} = Dimensions.get('window');

export default class FloatingButton extends Component {
    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation,{
            toValue,
            friction: 5
        }).start()
        this.open = !this.open;
    };

    render() {
        const pinStyle={
                transform:[
                    {scale: this.animation},
                    {
                        translateY:this.animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0, -80]
                        })
                    }
            ]
        }

        const thumbStyle={
            transform:[
                {scale: this.animation},
                {
                    translateY:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0, -140]
                    })
                }
        ]
    }

    const heartStyle={
        transform:[
            {scale: this.animation},
            {
                translateY:this.animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0, -200]
                })
            }
    ]
}


        const rotation = {
            transform :[{
                rotate: this.animation.interpolate({
                    inputRange:[0,1],
                    outputRange:['0deg', '45deg']
                })
            }
            ]
        }

        const opacity = this.animation.interpolate({
            inputRange:[0, 0.5, 1],
            outputRange:[0, 0, 1]
        })
        return (
            <View style={[styles.container, this.props.style]}>
                
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, heartStyle, opacity]}>
                        <Icon name="hearto" size={20} color='#F02A4B' />
                    </Animated.View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, thumbStyle, opacity]}>
                        <Icon2 name="thumbs-up" size={20} color='#F02A4B' />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, pinStyle, opacity]}>
                        <Icon2 name="location-pin" size={20} color='#F02A4B' />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                onPress={this.toggleMenu}
                >
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <Icon name="plus" size={24} color='white' />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        position:'absolute',
    },
    button:{
         position:'absolute',
         width:60,
        height:60,
        borderRadius: 60/2,
        alignItems:'center',
        justifyContent:'center',
        shadowRadius:10,
        shadowColor:'#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset:{
            height:10
        }
        },
        menu:{
            backgroundColor:'#F02A4B',
        },
        secondary:{
            width: 50,
            height: 50,
            borderRadius: 50/2,
            backgroundColor:'#FFF',
             
        },
    }
)
