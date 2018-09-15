import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import {Body, Container, Header, ScrollableTab, Tab, Tabs, Title} from "native-base";
import NewsListPage from "./NewsListPage";
import * as Color from "../utils/Color";
import * as Size from "../utils/Size";

export default class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: Color.main_color}}
                        androidStatusBarColor={Color.main_color_primary}>
                    <Body>
                    <Title style={{marginLeft: Size.public_margin}}>新闻</Title>
                    </Body>
                </Header>
                <Tabs tabBarBackgroundColor={Color.white}
                      tabBarUnderlineStyle={{backgroundColor: Color.main_red}}
                      renderTabBar={() => <ScrollableTab/>}
                      style={{height: 12}}>
                    <Tab heading="头条" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='top' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="社会" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='shehui' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="国内" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='guonei' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="国际" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='guoji' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="娱乐" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='yule' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="体育" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='tiyu' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="军事" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='junshi' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="科技" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='keji' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="财经" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='caijing' navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="时尚" tabStyle={{backgroundColor: Color.white}}
                         activeTabStyle={{backgroundColor: Color.white}}
                         activeTextStyle={{color: Color.main_red}}
                         textStyle={{color: 'black'}}>
                        <NewsListPage type='shishang' navigation={this.props.navigation}/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}