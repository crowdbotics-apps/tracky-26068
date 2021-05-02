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
      <View style={styles.View_369_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253f/f36f/8cba2b6bc9b557929b9f6fd1fa65092f"
          }}
          style={styles.ImageBackground_369_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd82/56dd/b3d48b86665d95152cd56c47bfc0d40f"
          }}
          style={styles.ImageBackground_369_5}
        />
        <View style={styles.View_369_7}>
          <Text style={styles.Text_369_7}>A Girl named Yumeko Jabami</Text>
        </View>
        <View style={styles.View_369_8}>
          <Text style={styles.Text_369_8}>Episode 1</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
          }}
          style={styles.ImageBackground_369_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_10}
        />
        <View style={styles.View_369_13}>
          <Text style={styles.Text_369_13}>A Boring Girl</Text>
        </View>
        <View style={styles.View_369_14}>
          <Text style={styles.Text_369_14}>Episode 2</Text>
        </View>
        <View style={styles.View_369_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_17}
          />
        </View>
        <View style={styles.View_369_20}>
          <Text style={styles.Text_369_20}>The Slit-Eyed Girl</Text>
        </View>
        <View style={styles.View_369_21}>
          <Text style={styles.Text_369_21}>Episode 3</Text>
        </View>
        <View style={styles.View_369_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_23}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_24}
          />
        </View>
        <View style={styles.View_369_27}>
          <Text style={styles.Text_369_27}>The Girl Who Became a Pet</Text>
        </View>
        <View style={styles.View_369_28}>
          <Text style={styles.Text_369_28}>Episode 4</Text>
        </View>
        <View style={styles.View_369_29}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_31}
          />
        </View>
        <View style={styles.View_369_34}>
          <Text style={styles.Text_369_34}>The Girl Who Became Human</Text>
        </View>
        <View style={styles.View_369_35}>
          <Text style={styles.Text_369_35}>Episode 5</Text>
        </View>
        <View style={styles.View_369_36}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_38}
          />
        </View>
        <View style={styles.View_369_41}>
          <Text style={styles.Text_369_41}>Tempting Girl</Text>
        </View>
        <View style={styles.View_369_42}>
          <Text style={styles.Text_369_42}>Episode 6</Text>
        </View>
        <View style={styles.View_369_43}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_45}
          />
        </View>
        <View style={styles.View_369_48}>
          <Text style={styles.Text_369_48}>Refusing Girl</Text>
        </View>
        <View style={styles.View_369_49}>
          <Text style={styles.Text_369_49}>Episode 7</Text>
        </View>
        <View style={styles.View_369_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_52}
          />
        </View>
        <View style={styles.View_369_55}>
          <Text style={styles.Text_369_55}>Love-Dancing Girl</Text>
        </View>
        <View style={styles.View_369_56}>
          <Text style={styles.Text_369_56}>Episode 8</Text>
        </View>
        <View style={styles.View_369_57}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_58}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_59}
          />
        </View>
        <View style={styles.View_369_62}>
          <Text style={styles.Text_369_62}>Dreaming Girl</Text>
        </View>
        <View style={styles.View_369_63}>
          <Text style={styles.Text_369_63}>Episode 9</Text>
        </View>
        <View style={styles.View_369_64}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_65}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_66}
          />
        </View>
        <View style={styles.View_369_69}>
          <Text style={styles.Text_369_69}>Selecting Girl</Text>
        </View>
        <View style={styles.View_369_70}>
          <Text style={styles.Text_369_70}>Episode 10</Text>
        </View>
        <View style={styles.View_369_71}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_72}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_73}
          />
        </View>
        <View style={styles.View_369_76}>
          <Text style={styles.Text_369_76}>The Girl Who Bets Her Life</Text>
        </View>
        <View style={styles.View_369_77}>
          <Text style={styles.Text_369_77}>Episode 11</Text>
        </View>
        <View style={styles.View_369_78}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_79}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_80}
          />
        </View>
        <View style={styles.View_369_83}>
          <Text style={styles.Text_369_83}>
            The Girl Who Gambles Compulsively
          </Text>
        </View>
        <View style={styles.View_369_84}>
          <Text style={styles.Text_369_84}>Episode 12</Text>
        </View>
        <View style={styles.View_369_85}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e1b/d368/07e221394ff969d8fe0918a61de26295"
            }}
            style={styles.ImageBackground_369_86}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_87}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1027/c229/55be0a4c30af356f86463794d8855ec9"
          }}
          style={styles.ImageBackground_369_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_92}
        />
        <View source={{ uri: "null" }} style={styles.View_369_93} />
        <View source={{ uri: "null" }} style={styles.View_369_94} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea5e/5d12/2498ee8e2b7fff4d74343a380f38a4e2"
          }}
          style={styles.ImageBackground_369_95}
        />
        <View style={styles.View_369_96}>
          <Text style={styles.Text_369_96}>Seasons</Text>
        </View>
        <View style={styles.View_369_97}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16cd/adc7/cef4f729ecf33063a0a80f029a30b2f3"
            }}
            style={styles.ImageBackground_369_98}
          />
          <View style={styles.View_369_99}>
            <Text style={styles.Text_369_99}>S1</Text>
          </View>
        </View>
        <View style={styles.View_369_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7db7/373e/5bc0907923847e7d5dfab313472f04c2"
            }}
            style={styles.ImageBackground_369_101}
          />
          <View style={styles.View_369_102}>
            <Text style={styles.Text_369_102}>S2</Text>
          </View>
        </View>
        <View style={styles.View_369_103}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f440/2140/806dfa0f6f563970595e9f71c7ddc0a8"
            }}
            style={styles.ImageBackground_369_104}
          />
          <View style={styles.View_369_105}>
            <Text style={styles.Text_369_105}>Extras</Text>
          </View>
        </View>
        <View style={styles.View_369_106}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c00/f38a/ee5deaa5f235c1fa535dd27fac50f219"
            }}
            style={styles.ImageBackground_369_107}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
            }}
            style={styles.ImageBackground_369_108}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aad/75e1/58cb6bbb3569febd72101d321c830bf7"
          }}
          style={styles.ImageBackground_369_111}
        />
        <View source={{ uri: "null" }} style={styles.View_369_114} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_3: {
    width: wp("100%"),
    height: hp("116.53005464480874%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_4: {
    width: wp("100%"),
    height: hp("116.53005464480874%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_5: {
    width: wp("91.11111111111111%"),
    height: hp("91.80327868852459%"),
    top: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_7: {
    width: wp("51.66666666666667%"),
    top: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8: {
    width: wp("14.722222222222223%"),
    top: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_9: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_10: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.16666666666667%")
  },
  View_369_13: {
    width: wp("21.944444444444443%"),
    top: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_14: {
    width: wp("14.722222222222223%"),
    top: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_15: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_16: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_17: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_20: {
    width: wp("30%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_21: {
    width: wp("14.722222222222223%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_22: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_23: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_24: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_27: {
    width: wp("47.5%"),
    top: hp("44.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_28: {
    width: wp("14.722222222222223%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_29: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("42.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_30: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_31: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_34: {
    width: wp("51.11111111111111%"),
    top: hp("52.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_35: {
    width: wp("14.722222222222223%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_36: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("50.13661202185792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_37: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_38: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_41: {
    width: wp("23.61111111111111%"),
    top: hp("60.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_42: {
    width: wp("14.722222222222223%"),
    top: hp("57.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_43: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("57.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_44: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_45: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_48: {
    width: wp("22.5%"),
    top: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_49: {
    width: wp("14.722222222222223%"),
    top: hp("65.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_50: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("65.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_51: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_52: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_55: {
    width: wp("30.833333333333336%"),
    top: hp("75.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_56: {
    width: wp("14.722222222222223%"),
    top: hp("72.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_57: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("73.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_58: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_59: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_62: {
    width: wp("23.88888888888889%"),
    top: hp("83.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_63: {
    width: wp("14.722222222222223%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_64: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("80.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_65: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_66: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_69: {
    width: wp("23.333333333333332%"),
    top: hp("90.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_70: {
    width: wp("16.666666666666664%"),
    top: hp("88.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_71: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("88.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_72: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_73: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_76: {
    width: wp("46.111111111111114%"),
    top: hp("98.49726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_77: {
    width: wp("16.666666666666664%"),
    top: hp("95.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_78: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("96.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_79: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_80: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_369_83: {
    width: wp("63.33333333333333%"),
    top: hp("106.14754098360655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_84: {
    width: wp("16.666666666666664%"),
    top: hp("103.55191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_85: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("103.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_86: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_87: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  ImageBackground_369_90: {
    width: wp("91.11111111111111%"),
    height: hp("1.366120218579235%"),
    top: hp("109.97267759562841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_369_91: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_92: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_93: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_94: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  ImageBackground_369_95: {
    width: wp("91.11111111111111%"),
    height: hp("13.524590163934427%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_96: {
    width: wp("21.38888888888889%"),
    top: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_369_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_97: {
    width: wp("13.88888888888889%"),
    height: hp("4.644808743169399%"),
    top: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_369_98: {
    width: wp("13.88888888888889%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_99: {
    width: wp("5.277777777777778%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%")
  },
  Text_369_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_100: {
    width: wp("13.88888888888889%"),
    height: hp("4.644808743169399%"),
    top: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.72222222222222%")
  },
  ImageBackground_369_101: {
    width: wp("13.88888888888889%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_102: {
    width: wp("5.277777777777778%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555557%")
  },
  Text_369_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_103: {
    width: wp("18.055555555555554%"),
    height: hp("4.644808743169399%"),
    top: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_369_104: {
    width: wp("18.055555555555554%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_105: {
    width: wp("12.5%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  Text_369_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_106: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_369_107: {
    width: wp("10%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_108: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  ImageBackground_369_111: {
    width: wp("9.722222222222223%"),
    height: hp("4.781420765027322%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%")
  },
  View_369_114: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 853 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
