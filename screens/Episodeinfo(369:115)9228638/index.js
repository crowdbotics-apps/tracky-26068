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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b748/7f7f/94063fbd4fcfb6322d62c1287ed4dce6"
        }}
        style={styles.ImageBackground_369_117}
      />
      <View source={{ uri: "null" }} style={styles.View_369_118} />
      <View style={styles.View_369_119}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2a6/63a6/eecdd605e40b36a070bacc3bf420a11c"
          }}
          style={styles.ImageBackground_369_120}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_369_122} />
      <View style={styles.View_369_123}>
        <Text style={styles.Text_369_123}>The Untouchable Queen</Text>
      </View>
      <View style={styles.View_369_124}>
        <Text style={styles.Text_369_124}>
          With election committee chair Runa Yomotsuki presiding , former Vice
          President Ririka pits Momobami clan members Miyo and Miri against an
          eager Yumeko.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d45/09a2/3771610a36b0296d841510514d9af3bf"
        }}
        style={styles.ImageBackground_369_125}
      />
      <View style={styles.View_369_126}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f4/1e3c/03645596f76d030660f76e45c9c250e9"
          }}
          style={styles.ImageBackground_369_127}
        />
        <View style={styles.View_369_128}>
          <Text style={styles.Text_369_128}>1x 17</Text>
        </View>
      </View>
      <View style={styles.View_369_129}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f4/1e3c/03645596f76d030660f76e45c9c250e9"
          }}
          style={styles.ImageBackground_369_130}
        />
        <View style={styles.View_369_131}>
          <Text style={styles.Text_369_131}>1x 18</Text>
        </View>
      </View>
      <View style={styles.View_369_132}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdc/006d/99d84cd7c7eb863af0b1ab23435d01cc"
          }}
          style={styles.ImageBackground_369_133}
        />
        <View style={styles.View_369_134}>
          <Text style={styles.Text_369_134}>1x 19</Text>
        </View>
      </View>
      <View style={styles.View_369_135}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f4/1e3c/03645596f76d030660f76e45c9c250e9"
          }}
          style={styles.ImageBackground_369_136}
        />
        <View style={styles.View_369_137}>
          <Text style={styles.Text_369_137}>1x 20</Text>
        </View>
      </View>
      <View style={styles.View_369_138}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f4/1e3c/03645596f76d030660f76e45c9c250e9"
          }}
          style={styles.ImageBackground_369_139}
        />
        <View style={styles.View_369_140}>
          <Text style={styles.Text_369_140}>1x 21</Text>
        </View>
      </View>
      <View style={styles.View_369_141}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f4/1e3c/03645596f76d030660f76e45c9c250e9"
          }}
          style={styles.ImageBackground_369_142}
        />
        <View style={styles.View_369_143}>
          <Text style={styles.Text_369_143}>1x 22</Text>
        </View>
      </View>
      <View style={styles.View_369_144}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25f4/1e3c/03645596f76d030660f76e45c9c250e9"
          }}
          style={styles.ImageBackground_369_145}
        />
        <View style={styles.View_369_146}>
          <Text style={styles.Text_369_146}>1x 23</Text>
        </View>
      </View>
      <View style={styles.View_369_147}>
        <Text style={styles.Text_369_147}>Aire Date : 09-11-2007</Text>
      </View>
      <View style={styles.View_369_148}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
          }}
          style={styles.ImageBackground_369_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_150}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c65/4cca/e98987d3022e67490969faa3058e1b47"
        }}
        style={styles.ImageBackground_369_153}
      />
      <View source={{ uri: "null" }} style={styles.View_369_154} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_369_117: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_118: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  View_369_119: {
    width: wp("100%"),
    height: hp("67.62295081967213%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_120: {
    width: wp("100%"),
    height: hp("67.62295081967213%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_122: {
    width: wp("100%"),
    height: hp("27.732240437158467%"),
    top: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_123: {
    width: wp("59.72222222222222%"),
    top: hp("80.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  Text_369_123: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_124: {
    width: wp("103.8888888888889%"),
    top: hp("89.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  Text_369_124: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_125: {
    width: wp("100%"),
    height: hp("24.18032786885246%"),
    top: hp("54.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_126: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%")
  },
  ImageBackground_369_127: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_128: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_129: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%")
  },
  ImageBackground_369_130: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_131: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_132: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.888888888888886%")
  },
  ImageBackground_369_133: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_134: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_135: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.22222222222222%")
  },
  ImageBackground_369_136: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_137: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_138: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%")
  },
  ImageBackground_369_139: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_140: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_141: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%")
  },
  ImageBackground_369_142: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_143: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_144: {
    width: wp("11.11111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.22222222222221%")
  },
  ImageBackground_369_145: {
    width: wp("10.555555555555555%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_146: {
    width: wp("11.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_147: {
    width: wp("39.44444444444444%"),
    top: hp("86.20218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  Text_369_147: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_148: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("79.50819672131148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.61111111111111%")
  },
  ImageBackground_369_149: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_150: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  ImageBackground_369_153: {
    width: wp("13.88888888888889%"),
    height: hp("0.546448087431694%"),
    top: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%")
  },
  View_369_154: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
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
