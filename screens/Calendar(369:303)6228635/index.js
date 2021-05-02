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
      <View style={styles.View_369_304}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33e7/897e/2a0aaab0fcaa9139e4c87a645e970aae"
          }}
          style={styles.ImageBackground_369_305}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_306}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_307}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/dd93/af89198632fdf19afde64218821eadbe"
          }}
          style={styles.ImageBackground_369_308}
        />
        <View style={styles.View_369_309}>
          <Text style={styles.Text_369_309}>Calendar</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_310} />
        <View source={{ uri: "null" }} style={styles.View_369_311} />
        <View style={styles.View_369_312}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d292/1cff/93a6fabee3dbe721c2da87b7e6c704bc"
            }}
            style={styles.ImageBackground_369_313}
          />
          <View style={styles.View_369_314}>
            <View style={styles.View_369_315}>
              <Text style={styles.Text_369_315}>Sun</Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_369_316} />
            <View style={styles.View_369_317}>
              <Text style={styles.Text_369_317}>18</Text>
            </View>
          </View>
          <View style={styles.View_369_318}>
            <View style={styles.View_369_319}>
              <Text style={styles.Text_369_319}>Mon</Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_369_320} />
            <View style={styles.View_369_321}>
              <Text style={styles.Text_369_321}>19</Text>
            </View>
          </View>
          <View style={styles.View_369_322}>
            <View style={styles.View_369_323}>
              <Text style={styles.Text_369_323}>Tue</Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_369_324} />
            <View style={styles.View_369_325}>
              <Text style={styles.Text_369_325}>20</Text>
            </View>
          </View>
          <View style={styles.View_369_326}>
            <View style={styles.View_369_327}>
              <Text style={styles.Text_369_327}>Wed</Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_369_328} />
            <View style={styles.View_369_329}>
              <Text style={styles.Text_369_329}>21</Text>
            </View>
          </View>
          <View style={styles.View_369_330}>
            <View style={styles.View_369_331}>
              <Text style={styles.Text_369_331}>Thu</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f7f/3a8d/0052bf20149edcb9239987c96ed3faeb"
              }}
              style={styles.ImageBackground_369_332}
            />
            <View style={styles.View_369_333}>
              <Text style={styles.Text_369_333}>22</Text>
            </View>
          </View>
          <View style={styles.View_369_334}>
            <View style={styles.View_369_335}>
              <Text style={styles.Text_369_335}>Fri</Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_369_336} />
            <View style={styles.View_369_337}>
              <Text style={styles.Text_369_337}>23</Text>
            </View>
          </View>
          <View style={styles.View_369_338}>
            <View style={styles.View_369_339}>
              <Text style={styles.Text_369_339}>Sat</Text>
            </View>
            <View source={{ uri: "null" }} style={styles.View_369_340} />
            <View style={styles.View_369_341}>
              <Text style={styles.Text_369_341}>24</Text>
            </View>
          </View>
          <View style={styles.View_369_342}>
            <Text style={styles.Text_369_342}>April</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbd2/bffd/8b3a43f4c1b4e948e75f57b709ba5c1e"
            }}
            style={styles.ImageBackground_369_343}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef74/6595/55832451a969a77a1a9a846ea8bcefbd"
            }}
            style={styles.ImageBackground_369_346}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3596/382c/e3b458b1b7abbdaaaccbc4aa5d2bcb8f"
            }}
            style={styles.ImageBackground_369_349}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c65/4cca/e98987d3022e67490969faa3058e1b47"
            }}
            style={styles.ImageBackground_369_350}
          />
        </View>
        <View style={styles.View_369_351}>
          <View source={{ uri: "null" }} style={styles.View_369_352} />
          <View style={styles.View_369_353}>
            <Text style={styles.Text_369_353}>3</Text>
          </View>
        </View>
        <View style={styles.View_369_354}>
          <View source={{ uri: "null" }} style={styles.View_369_355} />
          <View style={styles.View_369_356}>
            <Text style={styles.Text_369_356}>10</Text>
          </View>
        </View>
        <View style={styles.View_369_357}>
          <View source={{ uri: "null" }} style={styles.View_369_358} />
          <View style={styles.View_369_359}>
            <Text style={styles.Text_369_359}>17</Text>
          </View>
        </View>
        <View style={styles.View_369_360}>
          <View source={{ uri: "null" }} style={styles.View_369_361} />
          <View style={styles.View_369_362}>
            <Text style={styles.Text_369_362}>4</Text>
          </View>
        </View>
        <View style={styles.View_369_363}>
          <View source={{ uri: "null" }} style={styles.View_369_364} />
          <View style={styles.View_369_365}>
            <Text style={styles.Text_369_365}>11</Text>
          </View>
        </View>
        <View style={styles.View_369_366}>
          <View source={{ uri: "null" }} style={styles.View_369_367} />
          <View style={styles.View_369_368}>
            <Text style={styles.Text_369_368}>18</Text>
          </View>
        </View>
        <View style={styles.View_369_369}>
          <View source={{ uri: "null" }} style={styles.View_369_370} />
          <View style={styles.View_369_371}>
            <Text style={styles.Text_369_371}>5</Text>
          </View>
        </View>
        <View style={styles.View_369_372}>
          <View source={{ uri: "null" }} style={styles.View_369_373} />
          <View style={styles.View_369_374}>
            <Text style={styles.Text_369_374}>12</Text>
          </View>
        </View>
        <View style={styles.View_369_375}>
          <View source={{ uri: "null" }} style={styles.View_369_376} />
          <View style={styles.View_369_377}>
            <Text style={styles.Text_369_377}>19</Text>
          </View>
        </View>
        <View style={styles.View_369_378}>
          <View source={{ uri: "null" }} style={styles.View_369_379} />
          <View style={styles.View_369_380}>
            <Text style={styles.Text_369_380}>6</Text>
          </View>
        </View>
        <View style={styles.View_369_381}>
          <View source={{ uri: "null" }} style={styles.View_369_382} />
          <View style={styles.View_369_383}>
            <Text style={styles.Text_369_383}>13</Text>
          </View>
        </View>
        <View style={styles.View_369_384}>
          <View source={{ uri: "null" }} style={styles.View_369_385} />
          <View style={styles.View_369_386}>
            <Text style={styles.Text_369_386}>20</Text>
          </View>
        </View>
        <View style={styles.View_369_387}>
          <View source={{ uri: "null" }} style={styles.View_369_388} />
          <View style={styles.View_369_389}>
            <Text style={styles.Text_369_389}>7</Text>
          </View>
        </View>
        <View style={styles.View_369_390}>
          <View source={{ uri: "null" }} style={styles.View_369_391} />
          <View style={styles.View_369_392}>
            <Text style={styles.Text_369_392}>14</Text>
          </View>
        </View>
        <View style={styles.View_369_393}>
          <View source={{ uri: "null" }} style={styles.View_369_394} />
          <View style={styles.View_369_395}>
            <Text style={styles.Text_369_395}>21</Text>
          </View>
        </View>
        <View style={styles.View_369_396}>
          <View source={{ uri: "null" }} style={styles.View_369_397} />
          <View style={styles.View_369_398}>
            <Text style={styles.Text_369_398}>8</Text>
          </View>
        </View>
        <View style={styles.View_369_399}>
          <View source={{ uri: "null" }} style={styles.View_369_400} />
          <View style={styles.View_369_401}>
            <Text style={styles.Text_369_401}>15</Text>
          </View>
        </View>
        <View style={styles.View_369_402}>
          <View source={{ uri: "null" }} style={styles.View_369_403} />
          <View style={styles.View_369_404}>
            <Text style={styles.Text_369_404}>22</Text>
          </View>
        </View>
        <View style={styles.View_369_405}>
          <View source={{ uri: "null" }} style={styles.View_369_406} />
          <View style={styles.View_369_407}>
            <Text style={styles.Text_369_407}>2</Text>
          </View>
        </View>
        <View style={styles.View_369_408}>
          <View source={{ uri: "null" }} style={styles.View_369_409} />
          <View style={styles.View_369_410}>
            <Text style={styles.Text_369_410}>9</Text>
          </View>
        </View>
        <View style={styles.View_369_411}>
          <View source={{ uri: "null" }} style={styles.View_369_412} />
          <View style={styles.View_369_413}>
            <Text style={styles.Text_369_413}>16</Text>
          </View>
        </View>
        <View style={styles.View_369_414}>
          <View source={{ uri: "null" }} style={styles.View_369_415} />
          <View style={styles.View_369_416}>
            <Text style={styles.Text_369_416}>30</Text>
          </View>
        </View>
        <View style={styles.View_369_417}>
          <View source={{ uri: "null" }} style={styles.View_369_418} />
          <View style={styles.View_369_419}>
            <Text style={styles.Text_369_419}>25</Text>
          </View>
        </View>
        <View style={styles.View_369_420}>
          <View source={{ uri: "null" }} style={styles.View_369_421} />
          <View style={styles.View_369_422}>
            <Text style={styles.Text_369_422}>26</Text>
          </View>
        </View>
        <View style={styles.View_369_423}>
          <View source={{ uri: "null" }} style={styles.View_369_424} />
          <View style={styles.View_369_425}>
            <Text style={styles.Text_369_425}>27</Text>
          </View>
        </View>
        <View style={styles.View_369_426}>
          <View source={{ uri: "null" }} style={styles.View_369_427} />
          <View style={styles.View_369_428}>
            <Text style={styles.Text_369_428}>28</Text>
          </View>
        </View>
        <View style={styles.View_369_429}>
          <View source={{ uri: "null" }} style={styles.View_369_430} />
          <View style={styles.View_369_431}>
            <Text style={styles.Text_369_431}>29</Text>
          </View>
        </View>
        <View style={styles.View_369_432}>
          <View source={{ uri: "null" }} style={styles.View_369_433} />
          <View style={styles.View_369_434}>
            <Text style={styles.Text_369_434}>1</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_435}
        />
        <View source={{ uri: "null" }} style={styles.View_369_436} />
        <View style={styles.View_369_438}>
          <Text style={styles.Text_369_438}>Kakegurui</Text>
        </View>
        <View style={styles.View_369_439}>
          <Text style={styles.Text_369_439}>S02E03</Text>
        </View>
        <View style={styles.View_369_440}>
          <Text style={styles.Text_369_440}>The Untouchable Girl</Text>
        </View>
        <View style={styles.View_369_441}>
          <Text style={styles.Text_369_441}>
            Wednesday,21 Apr 2021, 05:30 PM
          </Text>
        </View>
        <View style={styles.View_369_442}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e1c/5f3b/33f44d6a4cb7a69e907a46d8e0f3ce74"
            }}
            style={styles.ImageBackground_369_443}
          />
          <View style={styles.View_369_444}>
            <Text style={styles.Text_369_444}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_445}
        />
        <View style={styles.View_369_446}>
          <Text style={styles.Text_369_446}>Castlenvaia</Text>
        </View>
        <View style={styles.View_369_447}>
          <Text style={styles.Text_369_447}>S01E03</Text>
        </View>
        <View style={styles.View_369_448}>
          <Text style={styles.Text_369_448}>Witchbottle</Text>
        </View>
        <View style={styles.View_369_449}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7147/c643/faaa318f98ba1b6fd4dfc012800bab90"
            }}
            style={styles.ImageBackground_369_450}
          />
          <View source={{ uri: "null" }} style={styles.View_369_451} />
        </View>
        <View style={styles.View_369_453}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_454}
          />
          <View style={styles.View_369_455}>
            <Text style={styles.Text_369_455}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_456}
        />
        <View style={styles.View_369_457}>
          <Text style={styles.Text_369_457}>How I Met Your Mother</Text>
        </View>
        <View style={styles.View_369_458}>
          <Text style={styles.Text_369_458}>S01E15</Text>
        </View>
        <View style={styles.View_369_459}>
          <Text style={styles.Text_369_459}>Game Night</Text>
        </View>
        <View style={styles.View_369_460}>
          <View style={styles.View_369_461}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f48/36dc/d28bfd0a16cfadbacc90458ddc37413e"
              }}
              style={styles.ImageBackground_369_462}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_463}
        />
        <View style={styles.View_369_464}>
          <Text style={styles.Text_369_464}>F.R.I.E.N.D.S</Text>
        </View>
        <View style={styles.View_369_465}>
          <Text style={styles.Text_369_465}>S04E09</Text>
        </View>
        <View style={styles.View_369_466}>
          <Text style={styles.Text_369_466}>
            The One Where They&#39;re Going
          </Text>
        </View>
        <View style={styles.View_369_467}>
          <View style={styles.View_369_468}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d9/f33a/a521463b9594ef077a1aa551550cf123"
              }}
              style={styles.ImageBackground_369_469}
            />
          </View>
        </View>
        <View style={styles.View_369_470}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_471}
          />
          <View style={styles.View_369_472}>
            <Text style={styles.Text_369_472}>Episode Info</Text>
          </View>
        </View>
        <View style={styles.View_369_473}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_474}
          />
          <View style={styles.View_369_475}>
            <Text style={styles.Text_369_475}>Episode Info</Text>
          </View>
        </View>
        <View style={styles.View_369_476}>
          <Text style={styles.Text_369_476}>
            Wednesday,21 Apr 2021, 05:30 PM
          </Text>
        </View>
        <View style={styles.View_369_477}>
          <Text style={styles.Text_369_477}>
            Wednesday,21 Apr 2021, 05:30 PM
          </Text>
        </View>
        <View style={styles.View_369_478}>
          <Text style={styles.Text_369_478}>
            Wednesday,21 Apr 2021, 05:30 PM
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_304: {
    width: wp("100%"),
    height: hp("151.50273224043715%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_305: {
    width: wp("100%"),
    height: hp("151.50273224043715%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_306: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_307: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_308: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_309: {
    width: wp("28.055555555555557%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_310: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_311: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  View_369_312: {
    width: wp("100%"),
    height: hp("44.53551912568306%"),
    top: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_313: {
    width: wp("100%"),
    height: hp("44.53551912568306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_314: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_315: {
    width: wp("8.61111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.314697265625%")
  },
  Text_369_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_316: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_317: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_318: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_319: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5677625868055536%")
  },
  Text_369_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_320: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_321: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_322: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_323: {
    width: wp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4772542317708321%")
  },
  Text_369_323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_324: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_325: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_326: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_327: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6411404079861072%")
  },
  Text_369_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_328: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_329: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_330: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_331: {
    width: wp("8.61111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.30859375%")
  },
  Text_369_331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_332: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_333: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_334: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_335: {
    width: wp("5.833333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7527533637152857%")
  },
  Text_369_335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_336: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_337: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_338: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_339: {
    width: wp("7.5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8958197699652857%")
  },
  Text_369_339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_340: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_341: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_342: {
    width: wp("10.555555555555555%"),
    top: hp("1.7759562841530059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_343: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0.13661202185792298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.44444444444444%")
  },
  ImageBackground_369_346: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1367454320355197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%")
  },
  ImageBackground_369_349: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_350: {
    width: wp("13.88888888888889%"),
    height: hp("0.546448087431694%"),
    top: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%")
  },
  View_369_351: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_352: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_353: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_354: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_355: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_356: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_357: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_358: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_359: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_360: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_361: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_362: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506946%")
  },
  Text_369_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_363: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_364: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_365: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_366: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_367: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_368: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_369: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_370: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_371: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_372: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_373: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_374: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_375: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_376: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_377: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_378: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_379: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_380: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_381: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_382: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_383: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_384: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_385: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_386: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_387: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_388: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_389: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_389: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_390: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_391: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_392: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_393: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_394: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_395: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_395: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_396: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_397: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_398: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_399: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_400: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_401: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_401: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_402: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_403: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_404: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_404: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_405: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_406: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_407: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506945%")
  },
  Text_369_407: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_408: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_409: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_410: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506945%")
  },
  Text_369_410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_411: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_412: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_413: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_414: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_415: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_416: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_417: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_418: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_419: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_420: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_421: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_422: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_422: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_423: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_424: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_425: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_425: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_426: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_427: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_428: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_429: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_430: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_431: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_431: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_432: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_433: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_434: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_434: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_435: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("59.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_436: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("60.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  View_369_438: {
    width: wp("20.27777777777778%"),
    top: hp("60.79234972677595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_439: {
    width: wp("11.38888888888889%"),
    top: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_440: {
    width: wp("31.11111111111111%"),
    top: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_441: {
    width: wp("51.388888888888886%"),
    top: hp("69.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_442: {
    width: wp("22.22222222222222%"),
    height: hp("3.278688524590164%"),
    top: hp("74.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.05555555555556%")
  },
  ImageBackground_369_443: {
    width: wp("22.22222222222222%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_444: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_445: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("80.05464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_446: {
    width: wp("23.333333333333332%"),
    top: hp("80.87431693989072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_447: {
    width: wp("11.38888888888889%"),
    top: hp("84.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_448: {
    width: wp("17.22222222222222%"),
    top: hp("86.20218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_449: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  ImageBackground_369_450: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_451: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_453: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("94.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%")
  },
  ImageBackground_369_454: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_455: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_456: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("100.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_457: {
    width: wp("46.111111111111114%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_457: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_458: {
    width: wp("11.38888888888889%"),
    top: hp("104.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_459: {
    width: wp("17.77777777777778%"),
    top: hp("106.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_459: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_460: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("101.69520977416325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3802490234375%")
  },
  View_369_461: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_462: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_463: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_464: {
    width: wp("24.444444444444443%"),
    top: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_465: {
    width: wp("11.38888888888889%"),
    top: hp("125.81967213114753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_465: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_466: {
    width: wp("43.611111111111114%"),
    top: hp("127.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_467: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  View_369_468: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_469: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_470: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("115.02732240437159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%")
  },
  ImageBackground_369_471: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_472: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_472: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_473: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("135.5191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%")
  },
  ImageBackground_369_474: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_475: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_475: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_476: {
    width: wp("51.388888888888886%"),
    top: hp("89.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_476: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_477: {
    width: wp("51.388888888888886%"),
    top: hp("109.97267759562841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_477: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_478: {
    width: wp("51.388888888888886%"),
    top: hp("131.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1109 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
