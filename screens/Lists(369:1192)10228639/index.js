import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_369_1193}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b748/7f7f/94063fbd4fcfb6322d62c1287ed4dce6"
          }}
          style={styles.ImageBackground_369_1194}
        />
        <View source={{ uri: "null" }} style={styles.View_369_1195} />
        <View style={styles.View_369_1196}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2a6/63a6/eecdd605e40b36a070bacc3bf420a11c"
            }}
            style={styles.ImageBackground_369_1197}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c65/4cca/e98987d3022e67490969faa3058e1b47"
          }}
          style={styles.ImageBackground_369_1199}
        />
        <View style={styles.View_369_1200}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a48/6982/546775aa8f53254f90c942758166c7db"
            }}
            style={styles.ImageBackground_369_1201}
          />
          <View style={styles.View_369_1202}>
            <Text style={styles.Text_369_1202}>Create new list</Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1203} />
        <View style={styles.View_369_1205}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d9/f33a/a521463b9594ef077a1aa551550cf123"
            }}
            style={styles.ImageBackground_369_1206}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/57c6/4633f6d5c0ea9e292cc2d26372563c4a"
          }}
          style={styles.ImageBackground_369_1207}
        />
        <View style={styles.View_369_1208}>
          <Text style={styles.Text_369_1208}>Sitcom</Text>
        </View>
        <View style={styles.View_369_1209}>
          <Text style={styles.Text_369_1209}>Anime</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1210} />
        <View style={styles.View_369_1212}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d860/97b0/caa633eacaa69852858a93114e74db73"
            }}
            style={styles.ImageBackground_369_1213}
          />
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1214} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93da/8aed/859da380973ae28972394581f607ec86"
          }}
          style={styles.ImageBackground_369_1216}
        />
        <View style={styles.View_369_1217}>
          <Text style={styles.Text_369_1217}>Science-Fiction</Text>
        </View>
        <View style={styles.View_369_1218}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc0/6c39/8c04dfb36d60be4af02779238a415a74"
            }}
            style={styles.ImageBackground_369_1219}
          />
        </View>
        <View style={styles.View_369_1220}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee07/aa20/dbb675bfa191d95fbe2190891efaba46"
            }}
            style={styles.ImageBackground_369_1221}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/57c6/4633f6d5c0ea9e292cc2d26372563c4a"
          }}
          style={styles.ImageBackground_369_1222}
        />
        <View source={{ uri: "null" }} style={styles.View_369_1223} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_1193: {
    width: wp("105.83333333333333%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.833333333333333%")
  },
  ImageBackground_369_1194: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_369_1195: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101.38888888888889%")
  },
  View_369_1196: {
    width: wp("100%"),
    height: hp("67.62295081967213%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  ImageBackground_369_1197: {
    width: wp("100%"),
    height: hp("67.62295081967213%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1199: {
    width: wp("13.88888888888889%"),
    height: hp("0.546448087431694%"),
    top: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.88888888888889%")
  },
  View_369_1200: {
    width: wp("77.77777777777779%"),
    height: hp("5.46448087431694%"),
    top: hp("101.09289617486338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444443%")
  },
  ImageBackground_369_1201: {
    width: wp("77.77777777777779%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1202: {
    width: wp("25.833333333333336%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.11111111111111%")
  },
  Text_369_1202: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1203: {
    width: wp("23.055555555555557%"),
    height: hp("16.939890710382514%"),
    top: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_369_1205: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5%")
  },
  ImageBackground_369_1206: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1207: {
    width: wp("44.44444444444444%"),
    height: hp("9.01639344262295%"),
    top: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_369_1208: {
    width: wp("15.833333333333332%"),
    top: hp("84.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  Text_369_1208: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1209: {
    width: wp("14.444444444444443%"),
    top: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  Text_369_1209: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1210: {
    width: wp("22.77777777777778%"),
    height: hp("16.80327868852459%"),
    top: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.833333333333336%")
  },
  View_369_1212: {
    width: wp("22.77777777777778%"),
    height: hp("16.80327868852459%"),
    top: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.6111111111111%")
  },
  ImageBackground_369_1213: {
    width: wp("22.77777777777778%"),
    height: hp("16.80327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1214: {
    width: wp("59.166666666666664%"),
    height: hp("16.39344262295082%"),
    top: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1216: {
    width: wp("91.11111111111111%"),
    height: hp("11.33879781420765%"),
    top: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_369_1217: {
    width: wp("34.72222222222222%"),
    top: hp("84.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%")
  },
  Text_369_1217: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1218: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%")
  },
  ImageBackground_369_1219: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1220: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.16666666666666%")
  },
  ImageBackground_369_1221: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1222: {
    width: wp("44.44444444444444%"),
    height: hp("9.01639344262295%"),
    top: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%")
  },
  View_369_1223: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_2: { height: 800 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
