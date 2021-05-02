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
      <View style={styles.View_369_239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b748/7f7f/94063fbd4fcfb6322d62c1287ed4dce6"
          }}
          style={styles.ImageBackground_369_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_241}
        />
        <View source={{ uri: "null" }} style={styles.View_369_242} />
        <View source={{ uri: "null" }} style={styles.View_369_243} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6822/83cd/b906986003c635262241bb7ab46ad6a8"
          }}
          style={styles.ImageBackground_369_244}
        />
        <View style={styles.View_369_245}>
          <View style={styles.View_369_246}>
            <Text style={styles.Text_369_246}>View All</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10c4/0885/504daf1b8565e89b31418a76c49aba47"
            }}
            style={styles.ImageBackground_369_247}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_250}
        />
        <View style={styles.View_369_251}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/998b/2799/5f81e6913d2591fb48ed03b7d32071b6"
            }}
            style={styles.ImageBackground_369_252}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_253}
        />
        <View style={styles.View_369_254}>
          <Text style={styles.Text_369_254}>Death Note</Text>
        </View>
        <View style={styles.View_369_255}>
          <View style={styles.View_369_256}>
            <Text style={styles.Text_369_256}>37</Text>
          </View>
          <View style={styles.View_369_257}>
            <Text style={styles.Text_369_257}>Episodes</Text>
          </View>
        </View>
        <View style={styles.View_369_258}>
          <View style={styles.View_369_259}>
            <Text style={styles.Text_369_259}>1</Text>
          </View>
          <View style={styles.View_369_260}>
            <Text style={styles.Text_369_260}>Seasons</Text>
          </View>
        </View>
        <View style={styles.View_369_261}>
          <View style={styles.View_369_262}>
            <Text style={styles.Text_369_262}>13</Text>
          </View>
          <View style={styles.View_369_263}>
            <Text style={styles.Text_369_263}>Hours</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_264}
        />
        <View style={styles.View_369_265}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303c/03ba/4cb1899204ed7ff5aa3d548ac5af4886"
            }}
            style={styles.ImageBackground_369_266}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_267}
        />
        <View style={styles.View_369_268}>
          <Text style={styles.Text_369_268}>Fire Force</Text>
        </View>
        <View style={styles.View_369_269}>
          <View style={styles.View_369_270}>
            <Text style={styles.Text_369_270}>48</Text>
          </View>
          <View style={styles.View_369_271}>
            <Text style={styles.Text_369_271}>Episodes</Text>
          </View>
        </View>
        <View style={styles.View_369_272}>
          <View style={styles.View_369_273}>
            <Text style={styles.Text_369_273}>2</Text>
          </View>
          <View style={styles.View_369_274}>
            <Text style={styles.Text_369_274}>Seasons</Text>
          </View>
        </View>
        <View style={styles.View_369_275}>
          <View style={styles.View_369_276}>
            <Text style={styles.Text_369_276}>19</Text>
          </View>
          <View style={styles.View_369_277}>
            <Text style={styles.Text_369_277}>Hours</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_278}
        />
        <View style={styles.View_369_279}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3242/1100/d49988e9bc15560d43cefde88cabc515"
            }}
            style={styles.ImageBackground_369_280}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_281}
        />
        <View style={styles.View_369_282}>
          <Text style={styles.Text_369_282}>How I Met Your Mother</Text>
        </View>
        <View style={styles.View_369_283}>
          <View style={styles.View_369_284}>
            <Text style={styles.Text_369_284}>22</Text>
          </View>
          <View style={styles.View_369_285}>
            <Text style={styles.Text_369_285}>Episodes</Text>
          </View>
        </View>
        <View style={styles.View_369_286}>
          <View style={styles.View_369_287}>
            <Text style={styles.Text_369_287}>3</Text>
          </View>
          <View style={styles.View_369_288}>
            <Text style={styles.Text_369_288}>Seasons</Text>
          </View>
        </View>
        <View style={styles.View_369_289}>
          <View style={styles.View_369_290}>
            <Text style={styles.Text_369_290}>22</Text>
          </View>
          <View style={styles.View_369_291}>
            <Text style={styles.Text_369_291}>Hours</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_292}
        />
        <View style={styles.View_369_293}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64dc/22e4/64cd4afe464a18c460c126e18747234b"
            }}
            style={styles.ImageBackground_369_294}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_295}
        />
        <View style={styles.View_369_296}>
          <Text style={styles.Text_369_296}>That Time I Got Reinc...</Text>
        </View>
        <View style={styles.View_369_297}>
          <Text style={styles.Text_369_297}>S2E02</Text>
        </View>
        <View style={styles.View_369_298}>
          <Text style={styles.Text_369_298}>Trade with the …</Text>
        </View>
        <View style={styles.View_369_299}>
          <Text style={styles.Text_369_299}>(69%)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d4/eb7b/6a69679ef3e2f46363a983c0e49ca3aa"
          }}
          style={styles.ImageBackground_369_300}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_239: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_240: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_241: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_242: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_243: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  ImageBackground_369_244: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.111111111111114%")
  },
  View_369_245: {
    width: wp("26.38888888888889%"),
    height: hp("3.0054652625745764%"),
    top: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.77777777777778%")
  },
  View_369_246: {
    width: wp("18.055555555555554%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_247: {
    width: wp("5.555556615193685%"),
    height: hp("2.732241218858729%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333336%")
  },
  ImageBackground_369_250: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
  },
  View_369_251: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  ImageBackground_369_252: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_253: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
  },
  View_369_254: {
    width: wp("16.944444444444446%"),
    top: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  Text_369_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_255: {
    width: wp("11.11111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("33.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  View_369_256: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%")
  },
  Text_369_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_257: {
    width: wp("11.11111111111111%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_258: {
    width: wp("10.555555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("33.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%")
  },
  View_369_259: {
    width: wp("2.7777777777777777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%")
  },
  Text_369_259: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_260: {
    width: wp("10.555555555555555%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_260: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_261: {
    width: wp("7.5%"),
    height: hp("4.644808743169399%"),
    top: hp("33.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_369_262: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  Text_369_262: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_263: {
    width: wp("7.5%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_264: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("41.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
  },
  View_369_265: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  ImageBackground_369_266: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_267: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("48.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
  },
  View_369_268: {
    width: wp("15%"),
    top: hp("64.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  Text_369_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_269: {
    width: wp("11.11111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  View_369_270: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444464%")
  },
  Text_369_270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_271: {
    width: wp("11.11111111111111%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_271: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_272: {
    width: wp("10.555555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%")
  },
  View_369_273: {
    width: wp("2.7777777777777777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%")
  },
  Text_369_273: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_274: {
    width: wp("10.555555555555555%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_275: {
    width: wp("7.5%"),
    height: hp("4.644808743169399%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_369_276: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  Text_369_276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_277: {
    width: wp("7.5%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_278: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("40.84699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.111111111111114%")
  },
  View_369_279: {
    width: wp("35.201666090223526%"),
    height: hp("25.968443239972892%"),
    top: hp("40.94645182291667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.14805772569444%")
  },
  ImageBackground_369_280: {
    width: wp("35.201666090223526%"),
    height: hp("25.968443239972892%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_281: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("48.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.111111111111114%")
  },
  View_369_282: {
    width: wp("34.44444444444444%"),
    top: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.333333333333336%")
  },
  Text_369_282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_283: {
    width: wp("11.11111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.333333333333336%")
  },
  View_369_284: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%")
  },
  Text_369_284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_285: {
    width: wp("11.11111111111111%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_286: {
    width: wp("10.555555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%")
  },
  View_369_287: {
    width: wp("2.7777777777777777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  Text_369_287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_288: {
    width: wp("10.555555555555555%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_289: {
    width: wp("7.5%"),
    height: hp("4.644808743169399%"),
    top: hp("67.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%")
  },
  View_369_290: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  Text_369_290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_291: {
    width: wp("7.5%"),
    top: hp("3.0054644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_291: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_292: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
  },
  View_369_293: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("74.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  ImageBackground_369_294: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_295: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("82.65027322404372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
  },
  View_369_296: {
    width: wp("35%"),
    top: hp("98.49726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  Text_369_296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_297: {
    width: wp("9.722222222222223%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  Text_369_297: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_298: {
    width: wp("24.166666666666668%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  Text_369_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_299: {
    width: wp("8.61111111111111%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.166666666666664%")
  },
  Text_369_299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_300: {
    width: wp("39.44444444444444%"),
    height: hp("1.092896174863388%"),
    top: hp("106.83060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%")
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
