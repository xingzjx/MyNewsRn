import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';
import * as Color from "../utils/Color";
import * as Size from "../utils/Size";

const {width, height} = Dimensions.get('window');

export default class NewsListPage extends Component {

    static defaultProps = {
        url: 'http://v.juhe.cn/toutiao/index?key=d78b502268f7456b79fbe7228cecdd46&type='
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [
            //     {
            //     thumbnail_pic_s: "http://06.imgmini.eastday.com/mobile/20180621/20180621185141_f561ba39d77a3362e95ae7c816dce18e_1_mwpm_03200403.jpg",
            //     title: 'tittitletitletitletitletitletitletitltittitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitleleetitletitletitletitletitletitletitletitletitlele',
            //     date: "2018-06-21 18:51",
            //     author_name: '金十数据',
            //     uniquekey: 'da',
            //     url: 'http://xiaweizi.cn'
            // }, {
            //     thumbnail_pic_s: "http://06.imgmini.eastday.com/mobile/20180621/20180621185141_f561ba39d77a3362e95ae7c816dce18e_1_mwpm_03200403.jpg",
            //     title: 'tittitletitletitletitletitletitletitltittitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitleleetitletitletitletitletitletitletitletitletitlele',
            //     date: "2018-06-21 18:51",
            //     author_name: '金十数据2',
            //     uniquekey: 'da',
            //     url: 'http://xiaweizi.cn'
            // }
            ]
        };


    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => this.getItemView(item)}
                />
            </View>
        );
    }

    componentDidMount() {
        this.getData();

    }


    getData() {
        let url = 'http://v.juhe.cn/toutiao/index?key=d78b502268f7456b79fbe7228cecdd46&type=';
        fetch(url + this.props.type)
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
                if(response.error_code== 0) {
                    this.setState({
                        data:response.result.data,

                    });
                }

            })
            .catch((error) => {
                console.log('error', error);
            })
    }


    getItemView(item) {
        return (<TouchableOpacity activeOpacity={0.8} onPress={() => {
            // ToastAndroid.show('aaa',1);
            this.getData();
        }}>
            <View style={styles.item}>
                <View style={styles.news_content}>
                    <Text style={styles.new_title} numberOfLines={3}>
                        {item.title}
                    </Text>
                    <Text style={styles.new_bottom} numberOfLines={1}>
                        {item.author_name} {item.date}
                    </Text>
                </View>

                <View>
                    <Image source={{uri: item.thumbnail_pic_s}} style={styles.image}/>
                </View>

            </View>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: width - 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 120,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: 120,
        height: 100,

        borderRadius: 5,
        marginRight: 5,
    },
    news_content: {
        width: width - 120,
        height: 110,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    new_title: {
        marginRight: 5,
        overflow: 'hidden',
        color: Color.main_text_color,
        fontSize: Size.main_text_size,
    },
    new_bottom: {
        color: Color.sub_text_color,
        fontSize: Size.sub_text_size,
    }
})