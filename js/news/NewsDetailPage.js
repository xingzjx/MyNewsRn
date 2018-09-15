import React, {Component} from "react";
import {View, Text, StyleSheet, Image,WebView,ToastAndroid,Dimensions} from 'react-native';
import {
    Header,
    Container,
    Title,
    Body,
    Icon,
    Left,
    Button,
    Right,


} from 'native-base';

const {width, height} = Dimensions.get('window');

export default class NewsDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:props.navigation.getParam('url'),

        };
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent={true}
                            onPress={()=>{
                                this.props.navigation.goBack()
                            }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>
                        新闻详情
                    </Title>
                    </Body>
                </Header>
                <View style={styles.container}>
                    <WebView
                        source={{uri: this.state.url}}
                        startInLoadingState={true}
                        domStorageEnabled={true}//开启dom存贮
                        javaScriptEnabled={true}//开启js
                        style={styles.webview_style}
                        onLoad={(e) => console.log('onLoad')}
                        onLoadEnd={(e) => console.log('onLoadEnd')}
                        onLoadStart={(e) => console.log('onLoadStart')}>
                    </WebView>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    webview_style: {
        width: width,
        height: height,
    }
});