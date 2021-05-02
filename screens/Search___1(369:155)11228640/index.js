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
      <View style={styles.View_369_156}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ce/4871/c1e7aa93ccb6e9cad2e42443fb16962d"
          }}
          style={styles.ImageBackground_369_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/dd93/af89198632fdf19afde64218821eadbe"
          }}
          style={styles.ImageBackground_369_160}
        />
        <View style={styles.View_369_161}>
          <Text style={styles.Text_369_161}>Search</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_162} />
        <View source={{ uri: "null" }} style={styles.View_369_163} />
        <View style={styles.View_369_164}>
          <View style={styles.View_369_165}>
            <Text style={styles.Text_369_165}>Filter by genres</Text>
          </View>
          <View style={styles.View_369_166}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/5024/f5e5310b326740a576cb08dfc3cb884d"
              }}
              style={styles.ImageBackground_369_167}
            />
            <View style={styles.View_369_168}>
              <Text style={styles.Text_369_168}>Action</Text>
            </View>
          </View>
          <View style={styles.View_369_169}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f0d/f16b/4f5602b1020c03578f851c9f5bc5bbc8"
              }}
              style={styles.ImageBackground_369_170}
            />
            <View style={styles.View_369_171}>
              <Text style={styles.Text_369_171}>Adventure </Text>
            </View>
          </View>
          <View style={styles.View_369_172}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56a0/3f6a/23c1286eff263f5149629cb295b6b12d"
              }}
              style={styles.ImageBackground_369_173}
            />
            <View style={styles.View_369_174}>
              <Text style={styles.Text_369_174}>Anime</Text>
            </View>
          </View>
          <View style={styles.View_369_175}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a7/1c61/ad0ddf28a6b5a30d9b593095570782fb"
              }}
              style={styles.ImageBackground_369_176}
            />
            <View style={styles.View_369_177}>
              <Text style={styles.Text_369_177}>Comedy</Text>
            </View>
          </View>
          <View style={styles.View_369_178}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/5024/f5e5310b326740a576cb08dfc3cb884d"
              }}
              style={styles.ImageBackground_369_179}
            />
            <View style={styles.View_369_180}>
              <Text style={styles.Text_369_180}>Drama</Text>
            </View>
          </View>
          <View style={styles.View_369_181}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3a1/17a0/eeeee599a70b575536f6e80a41ae289b"
              }}
              style={styles.ImageBackground_369_182}
            />
            <View style={styles.View_369_183}>
              <Text style={styles.Text_369_183}>Sports</Text>
            </View>
          </View>
          <View style={styles.View_369_184}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a7/1c61/ad0ddf28a6b5a30d9b593095570782fb"
              }}
              style={styles.ImageBackground_369_185}
            />
            <View style={styles.View_369_186}>
              <Text style={styles.Text_369_186}>Mystery</Text>
            </View>
          </View>
          <View style={styles.View_369_187}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d3/b0b1/67c0b73ae8336ee9519a6b4f4fde3bf0"
              }}
              style={styles.ImageBackground_369_188}
            />
            <View style={styles.View_369_189}>
              <Text style={styles.Text_369_189}>Thriller</Text>
            </View>
          </View>
          <View style={styles.View_369_190}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df8/b16e/c1714dc131b6c34cfd70aaa03d180956"
              }}
              style={styles.ImageBackground_369_191}
            />
            <View style={styles.View_369_192}>
              <Text style={styles.Text_369_192}>Romance</Text>
            </View>
          </View>
          <View style={styles.View_369_193}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d648/58ea/ff06d753d38b88a1787801b14f336066"
              }}
              style={styles.ImageBackground_369_194}
            />
            <View style={styles.View_369_195}>
              <Text style={styles.Text_369_195}>Racing</Text>
            </View>
          </View>
          <View style={styles.View_369_196}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc6/10da/5bc42bfbe6ea3c41930c8c0417f6e167"
              }}
              style={styles.ImageBackground_369_197}
            />
            <View style={styles.View_369_198}>
              <Text style={styles.Text_369_198}>Sci-Fi</Text>
            </View>
          </View>
          <View style={styles.View_369_199}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a1/bef2/ef6072bcb437518294dc4db3e19a9c08"
              }}
              style={styles.ImageBackground_369_200}
            />
            <View style={styles.View_369_201}>
              <Text style={styles.Text_369_201}>Crime</Text>
            </View>
          </View>
          <View style={styles.View_369_202}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/5024/f5e5310b326740a576cb08dfc3cb884d"
              }}
              style={styles.ImageBackground_369_203}
            />
            <View style={styles.View_369_204}>
              <Text style={styles.Text_369_204}>Family</Text>
            </View>
          </View>
          <View style={styles.View_369_205}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b9/267c/bd0470e82116288f55aca2794bf61be3"
              }}
              style={styles.ImageBackground_369_206}
            />
            <View style={styles.View_369_207}>
              <Text style={styles.Text_369_207}>Documentary</Text>
            </View>
          </View>
          <View style={styles.View_369_208}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae12/4f34/c04c8f7128381113b65c3895ba3427c2"
              }}
              style={styles.ImageBackground_369_209}
            />
            <View style={styles.View_369_210}>
              <Text style={styles.Text_369_210}>Underrated</Text>
            </View>
          </View>
          <View style={styles.View_369_211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a8/7c45/c5eff55cf66225ed32ae2668f0386244"
              }}
              style={styles.ImageBackground_369_212}
            />
            <View style={styles.View_369_213}>
              <Text style={styles.Text_369_213}>Fantasy</Text>
            </View>
          </View>
          <View style={styles.View_369_214}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3a1/17a0/eeeee599a70b575536f6e80a41ae289b"
              }}
              style={styles.ImageBackground_369_215}
            />
            <View style={styles.View_369_216}>
              <Text style={styles.Text_369_216}>Harem</Text>
            </View>
          </View>
          <View style={styles.View_369_217}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8802/cf7b/342be57d1a8f5eeb21ea0676547e0069"
              }}
              style={styles.ImageBackground_369_218}
            />
            <View style={styles.View_369_219}>
              <Text style={styles.Text_369_219}>Love</Text>
            </View>
          </View>
          <View style={styles.View_369_220}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be5a/567f/c5d9b533747d7a86141a55b59c1d72df"
              }}
              style={styles.ImageBackground_369_221}
            />
            <View style={styles.View_369_222}>
              <Text style={styles.Text_369_222}>Politics</Text>
            </View>
          </View>
          <View style={styles.View_369_223}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcdd/363e/9c18a699c6ae735fc31153995010d97e"
              }}
              style={styles.ImageBackground_369_224}
            />
            <View style={styles.View_369_225}>
              <Text style={styles.Text_369_225}>Apply</Text>
            </View>
          </View>
          <View style={styles.View_369_226}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d78e/ac77/cbf88ae2e427fe82ab3ecaedcca76d33"
              }}
              style={styles.ImageBackground_369_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/8a2d/fb94ed990535941bfa6c11501f9568bc"
              }}
              style={styles.ImageBackground_369_228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a637/d344/944e6c101e16e89555f8b867dfdd5850"
              }}
              style={styles.ImageBackground_369_229}
            />
          </View>
        </View>
        <View style={styles.View_369_231}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d3/0b80/47ca1bfee26b3f9cdfef3f0281f41cac"
            }}
            style={styles.ImageBackground_369_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd3/cc0b/ad2a226dbb620eb73f8eca25a949e439"
            }}
            style={styles.ImageBackground_369_233}
          />
          <View style={styles.View_369_236}>
            <Text style={styles.Text_369_236}>Search by tittle</Text>
          </View>
          <View source={{ uri: "null" }} style={styles.View_369_237} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_156: {
    width: wp("100%"),
    height: hp("108.87978142076503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_157: {
    width: wp("100%"),
    height: hp("108.87978142076503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_158: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_159: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_160: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_161: {
    width: wp("21.666666666666668%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_162: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_163: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  View_369_164: {
    width: wp("93.33333333333333%"),
    height: hp("47.404371584699454%"),
    top: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_165: {
    width: wp("34.44444444444444%"),
    top: hp("8.743169398907101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_166: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_167: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_168: {
    width: wp("11.38888888888889%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_169: {
    width: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555557%")
  },
  ImageBackground_369_170: {
    width: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_171: {
    width: wp("18.055555555555554%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_172: {
    width: wp("17.5%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%")
  },
  ImageBackground_369_173: {
    width: wp("17.5%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_174: {
    width: wp("11.38888888888889%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  Text_369_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_175: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_369_176: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_177: {
    width: wp("14.444444444444443%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  Text_369_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_178: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%")
  },
  ImageBackground_369_179: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_180: {
    width: wp("11.666666666666666%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_181: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("35.10928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_182: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_183: {
    width: wp("11.666666666666666%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_184: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.88888888888889%")
  },
  ImageBackground_369_185: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_186: {
    width: wp("14.166666666666666%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  Text_369_186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_187: {
    width: wp("19.166666666666668%"),
    height: hp("4.098360655737705%"),
    top: hp("35.10928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333336%")
  },
  ImageBackground_369_188: {
    width: wp("19.166666666666668%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_189: {
    width: wp("12.5%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_190: {
    width: wp("23.055555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.111111111111107%")
  },
  ImageBackground_369_191: {
    width: wp("23.055555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_192: {
    width: wp("16.666666666666664%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_193: {
    width: wp("18.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_194: {
    width: wp("18.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_195: {
    width: wp("11.944444444444445%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_196: {
    width: wp("16.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777779%")
  },
  ImageBackground_369_197: {
    width: wp("16.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_198: {
    width: wp("10%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_199: {
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_200: {
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_201: {
    width: wp("10.555555555555555%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_202: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333334%")
  },
  ImageBackground_369_203: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_204: {
    width: wp("11.666666666666666%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_205: {
    width: wp("30.555555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%")
  },
  ImageBackground_369_206: {
    width: wp("30.555555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_207: {
    width: wp("23.333333333333332%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_208: {
    width: wp("26.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("35.10928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.77777777777778%")
  },
  ImageBackground_369_209: {
    width: wp("26.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_210: {
    width: wp("19.444444444444446%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  Text_369_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_211: {
    width: wp("20.27777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_212: {
    width: wp("20.27777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_213: {
    width: wp("13.88888888888889%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_214: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  ImageBackground_369_215: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_216: {
    width: wp("11.944444444444445%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_216: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_217: {
    width: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%")
  },
  ImageBackground_369_218: {
    width: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_219: {
    width: wp("8.333333333333332%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_219: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_220: {
    width: wp("19.72222222222222%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.777777777777786%")
  },
  ImageBackground_369_221: {
    width: wp("19.72222222222222%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_222: {
    width: wp("13.055555555555557%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_223: {
    width: wp("20%"),
    height: hp("4.098360655737705%"),
    top: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%")
  },
  ImageBackground_369_224: {
    width: wp("20%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_225: {
    width: wp("10.555555555555555%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7222222222222285%")
  },
  Text_369_225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_226: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_369_227: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_228: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  ImageBackground_369_229: {
    width: wp("5%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.5956284153005473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_369_231: {
    width: wp("80%"),
    height: hp("5.8743169398907105%"),
    top: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_369_232: {
    width: wp("80%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_233: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%")
  },
  View_369_236: {
    width: wp("26.111111111111114%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.22222222222222%")
  },
  Text_369_236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_237: {
    width: wp("3.3341704474555125%"),
    height: hp("1.6397559577650058%"),
    top: hp("2.1855922344603815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22262912326389%")
  },
  View_2: { height: 797 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
