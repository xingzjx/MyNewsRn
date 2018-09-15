import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import NewsPage from "./news/NewsPage";
import JokerPage from "./joker/JokerPage";
import TodayPage from "./today/TodayPage";
import RobotPage from "./robot/RobotPage";
import NewsDetailPage from "./news/NewsDetailPage";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Navigator/>
        );
    }
}


const Tab = createBottomTabNavigator({
    News: {
        screen: NewsPage,
        navigationOptions: ({navigations}) => {
            return {
                tabBarLabel: '新闻',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/news.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
    },
    Joker: {
        screen: JokerPage,
        navigationOptions: ({navigations}) => {
            return {
                tabBarLabel: '段子',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/joker.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
    },
    Today: {
        screen: TodayPage,
        navigationOptions: ({navigations}) => {
            return {
                tabBarLabel: '历史今天',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/today.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
    },
    Robot: {
        screen: RobotPage,
        navigationOptions: ({navigations}) => {
            return {
                tabBarLabel: '小爱',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./image/girl.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
    },
}, {
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    lazy: true,
    // initialRouteName: 'Today',
    tabBarOptions: {
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        showIcon: true,//是否显示图标，默认关闭
        activeTintColor: '#03a9f4',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 7,
        }
    }
});


let TAB_NAMES = ['新闻', '段子', '历史的今天', '小爱同学'];

const navigationOptions = {
    navigationOptions: ({navigation}) => {
        let title = TAB_NAMES[navigation.state.index];
        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: '#03a9f4'
            },
            gestureResponseDistance: {horizontal: 300},

            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
            }
        }
    },
    headerMode: 'none',
    mode: 'card',
};

const Navigator = createStackNavigator({
    Tab: {
        screen: Tab,
    },
    NewsDetailPage: {
        screen: NewsDetailPage
    },
}, navigationOptions);


