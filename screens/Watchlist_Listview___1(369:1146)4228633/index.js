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
      <View style={styles.View_369_1147}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b748/7f7f/94063fbd4fcfb6322d62c1287ed4dce6"
          }}
          style={styles.ImageBackground_369_1148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_1149}
        />
        <View source={{ uri: "null" }} style={styles.View_369_1150} />
        <View source={{ uri: "null" }} style={styles.View_369_1151} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d56/69d8/8f8a128f77afa90472e4f44ce10e444c"
          }}
          style={styles.ImageBackground_369_1152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abda/ef6d/78b229665022ae8b9fc6aca55925e3b5"
          }}
          style={styles.ImageBackground_369_1153}
        />
        <View style={styles.View_369_1154}>
          <Text style={styles.Text_369_1154}>Watching</Text>
        </View>
        <View style={styles.View_369_1155}>
          <Text style={styles.Text_369_1155}>My List</Text>
        </View>
        <View style={styles.View_369_1156}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d78e/ac77/cbf88ae2e427fe82ab3ecaedcca76d33"
            }}
            style={styles.ImageBackground_369_1157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/8a2d/fb94ed990535941bfa6c11501f9568bc"
            }}
            style={styles.ImageBackground_369_1158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a637/d344/944e6c101e16e89555f8b867dfdd5850"
            }}
            style={styles.ImageBackground_369_1159}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0d7/be44/7c47dbb1b83085c213ddcbdcce8f47b2"
          }}
          style={styles.ImageBackground_369_1161}
        />
        <View style={styles.View_369_1162}>
          <View source={{ uri: "null" }} style={styles.View_369_1163} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bea/9d4d/bb927fa14ef06fce0660904e375b83ad"
            }}
            style={styles.ImageBackground_369_1164}
          />
          <View style={styles.View_369_1165}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8be3/c54f/c8a8a43c00caa0eda6099eb193cdcf86"
              }}
              style={styles.ImageBackground_369_1166}
            />
            <View source={{ uri: "null" }} style={styles.View_369_1167} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b7/2b71/de642db222f4695dfc6ecd2560e1201f"
              }}
              style={styles.ImageBackground_369_1170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1788/9d6e/5ff88276674c1617818adee19a40edbc"
              }}
              style={styles.ImageBackground_369_1171}
            />
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1172} />
        <View style={styles.View_369_1174}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d9/f33a/a521463b9594ef077a1aa551550cf123"
            }}
            style={styles.ImageBackground_369_1175}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/57c6/4633f6d5c0ea9e292cc2d26372563c4a"
          }}
          style={styles.ImageBackground_369_1176}
        />
        <View style={styles.View_369_1177}>
          <Text style={styles.Text_369_1177}>Sitcom</Text>
        </View>
        <View style={styles.View_369_1178}>
          <Text style={styles.Text_369_1178}>Anime</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1179} />
        <View style={styles.View_369_1181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d860/97b0/caa633eacaa69852858a93114e74db73"
            }}
            style={styles.ImageBackground_369_1182}
          />
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1183} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93da/8aed/859da380973ae28972394581f607ec86"
          }}
          style={styles.ImageBackground_369_1185}
        />
        <View style={styles.View_369_1186}>
          <Text style={styles.Text_369_1186}>Science-Fiction</Text>
        </View>
        <View style={styles.View_369_1187}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc0/6c39/8c04dfb36d60be4af02779238a415a74"
            }}
            style={styles.ImageBackground_369_1188}
          />
        </View>
        <View style={styles.View_369_1189}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee07/aa20/dbb675bfa191d95fbe2190891efaba46"
            }}
            style={styles.ImageBackground_369_1190}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9dbb/57c6/4633f6d5c0ea9e292cc2d26372563c4a"
          }}
          style={styles.ImageBackground_369_1191}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_1147: {
    width: wp("105.83333333333333%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.833333333333333%")
  },
  ImageBackground_369_1148: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  ImageBackground_369_1149: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_369_1150: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_369_1151: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101.38888888888889%")
  },
  ImageBackground_369_1152: {
    width: wp("100%"),
    height: hp("6.557377049180328%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  ImageBackground_369_1153: {
    width: wp("14.444444444444443%"),
    height: hp("0.4098360655737705%"),
    top: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444445%")
  },
  View_369_1154: {
    width: wp("21.11111111111111%"),
    top: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  Text_369_1154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1155: {
    width: wp("14.722222222222223%"),
    top: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444445%")
  },
  Text_369_1155: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1156: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.72222222222221%")
  },
  ImageBackground_369_1157: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1158: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  ImageBackground_369_1159: {
    width: wp("5%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  ImageBackground_369_1161: {
    width: wp("94.44444444444444%"),
    height: hp("7.650273224043716%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%")
  },
  View_369_1162: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.27777777777777%")
  },
  View_369_1163: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1164: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  View_369_1165: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  ImageBackground_369_1166: {
    width: wp("5.555555555555555%"),
    height: hp("2.732278479904425%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%")
  },
  View_369_1167: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1170: {
    width: wp("3.6111111111111107%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8196721311475406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  ImageBackground_369_1171: {
    width: wp("2.5%"),
    height: hp("0.273224043715847%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_1172: {
    width: wp("23.055555555555557%"),
    height: hp("16.939890710382514%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_369_1174: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5%")
  },
  ImageBackground_369_1175: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1176: {
    width: wp("44.44444444444444%"),
    height: hp("9.01639344262295%"),
    top: hp("49.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_369_1177: {
    width: wp("15.833333333333332%"),
    top: hp("58.606557377049185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  Text_369_1177: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1178: {
    width: wp("14.444444444444443%"),
    top: hp("37.15846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  Text_369_1178: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1179: {
    width: wp("22.77777777777778%"),
    height: hp("16.80327868852459%"),
    top: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.833333333333336%")
  },
  View_369_1181: {
    width: wp("22.77777777777778%"),
    height: hp("16.80327868852459%"),
    top: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.6111111111111%")
  },
  ImageBackground_369_1182: {
    width: wp("22.77777777777778%"),
    height: hp("16.80327868852459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1183: {
    width: wp("59.166666666666664%"),
    height: hp("16.39344262295082%"),
    top: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1185: {
    width: wp("91.11111111111111%"),
    height: hp("11.33879781420765%"),
    top: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777779%")
  },
  View_369_1186: {
    width: wp("34.72222222222222%"),
    top: hp("58.606557377049185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%")
  },
  Text_369_1186: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1187: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%")
  },
  ImageBackground_369_1188: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1189: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.16666666666666%")
  },
  ImageBackground_369_1190: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1191: {
    width: wp("44.44444444444444%"),
    height: hp("9.01639344262295%"),
    top: hp("49.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%")
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
