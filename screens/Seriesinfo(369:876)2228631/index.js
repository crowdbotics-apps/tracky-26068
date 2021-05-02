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
      <View style={styles.View_369_877}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b0/b089/d9ca9e8110f6bbce1bc9add0bf749335"
          }}
          style={styles.ImageBackground_369_878}
        />
        <View style={styles.View_369_879}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd99/1709/2b5e3f337256d1c8bab443f2579a7b83"
            }}
            style={styles.ImageBackground_369_880}
          />
        </View>
        <View style={styles.View_369_881}>
          <Text style={styles.Text_369_881}>Kakegurui</Text>
        </View>
        <View style={styles.View_369_882}>
          <Text style={styles.Text_369_882}>Ended - 2019</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/620b/0476beeb3ee6a6c427f5c3644ec049d3"
          }}
          style={styles.ImageBackground_369_883}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/620b/0476beeb3ee6a6c427f5c3644ec049d3"
          }}
          style={styles.ImageBackground_369_886}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/620b/0476beeb3ee6a6c427f5c3644ec049d3"
          }}
          style={styles.ImageBackground_369_889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/620b/0476beeb3ee6a6c427f5c3644ec049d3"
          }}
          style={styles.ImageBackground_369_892}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1928/620b/0476beeb3ee6a6c427f5c3644ec049d3"
          }}
          style={styles.ImageBackground_369_895}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/529b/f0c9/6174026220b42179c5cd226870c34262"
          }}
          style={styles.ImageBackground_369_898}
        />
        <View style={styles.View_369_899}>
          <Text style={styles.Text_369_899}>Action &amp; Adventure</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86e/298e/00516e91fb3103f12fb7462fc699efdc"
          }}
          style={styles.ImageBackground_369_900}
        />
        <View style={styles.View_369_901}>
          <Text style={styles.Text_369_901}>Anime</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86e/298e/00516e91fb3103f12fb7462fc699efdc"
          }}
          style={styles.ImageBackground_369_902}
        />
        <View style={styles.View_369_903}>
          <Text style={styles.Text_369_903}>Drama</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/990c/88b7/4ec8bef5db54d60f69cacc9a2ddd6a7a"
          }}
          style={styles.ImageBackground_369_904}
        />
        <View style={styles.View_369_905}>
          <Text style={styles.Text_369_905}>Gambling</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7332/1129/cea7c2584851abe13d56ce7e25f7efce"
          }}
          style={styles.ImageBackground_369_906}
        />
        <View style={styles.View_369_907}>
          <Text style={styles.Text_369_907}>Mystery</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a456/eb69/bcd8e382ab9de9d1b1b45609787af9ba"
          }}
          style={styles.ImageBackground_369_908}
        />
        <View style={styles.View_369_909}>
          <Text style={styles.Text_369_909}>School</Text>
        </View>
        <View style={styles.View_369_910}>
          <Text style={styles.Text_369_910}>
            Hyakkaou Private Academy. An institution for the privileged with a
            very peculiar curriculum . You see, when you&#39;re the sons and
            daughters of the wealthiest of the wealthy, it&#39;s not show more{" "}
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe4/6d83/d115b9afc2663b4ab0ec96d73f1bb6c5"
          }}
          style={styles.ImageBackground_369_911}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76e3/75d3/00d659edaaf74216ea40a16ce21162dc"
          }}
          style={styles.ImageBackground_369_912}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aef/cba6/8e72a9b81504ff53abdb9a07257789cf"
          }}
          style={styles.ImageBackground_369_915}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9b0/2a79/aedd7384662adc0c3e4bbd5cf1fed26d"
          }}
          style={styles.ImageBackground_369_916}
        />
        <View style={styles.View_369_917}>
          <Text style={styles.Text_369_917}>WATCH NOW</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9b0/2a79/aedd7384662adc0c3e4bbd5cf1fed26d"
          }}
          style={styles.ImageBackground_369_918}
        />
        <View style={styles.View_369_919}>
          <Text style={styles.Text_369_919}>ADD TO LIST</Text>
        </View>
        <View style={styles.View_369_920}>
          <Text style={styles.Text_369_920}>Seasons</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed07/4516/51627cc8936f3ef888b2fbeecba04956"
          }}
          style={styles.ImageBackground_369_921}
        />
        <View style={styles.View_369_922}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9ec/269f/c61de49a031850171060443c5dda9e1d"
            }}
            style={styles.ImageBackground_369_923}
          />
          <View style={styles.View_369_924}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa0/2667/d15b8caf3744c2e38febd8a08c876cf5"
              }}
              style={styles.ImageBackground_369_925}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a38/1eae/f4b44de21bc5ef949b480ba9ee735678"
            }}
            style={styles.ImageBackground_369_926}
          />
          <View style={styles.View_369_927}>
            <Text style={styles.Text_369_927}>Season 1</Text>
          </View>
          <View style={styles.View_369_928}>
            <Text style={styles.Text_369_928}>01-07-2017</Text>
          </View>
        </View>
        <View style={styles.View_369_929}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93e3/a9e2/db7f68ea57d37aff4b285eedcfd427de"
            }}
            style={styles.ImageBackground_369_930}
          />
          <View source={{ uri: "null" }} style={styles.View_369_931} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55be/9055/d028be67dc69ce7704fee283c6e71816"
            }}
            style={styles.ImageBackground_369_933}
          />
          <View style={styles.View_369_934}>
            <Text style={styles.Text_369_934}>Season 2</Text>
          </View>
          <View style={styles.View_369_935}>
            <Text style={styles.Text_369_935}>2019-01-08</Text>
          </View>
        </View>
        <View style={styles.View_369_936}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93e3/a9e2/db7f68ea57d37aff4b285eedcfd427de"
            }}
            style={styles.ImageBackground_369_937}
          />
          <View style={styles.View_369_938}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb1c/fa22/4aafcf9e270a4021bd2fae4971e6ace4"
              }}
              style={styles.ImageBackground_369_939}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55be/9055/d028be67dc69ce7704fee283c6e71816"
            }}
            style={styles.ImageBackground_369_940}
          />
          <View style={styles.View_369_941}>
            <Text style={styles.Text_369_941}>Extras</Text>
          </View>
          <View style={styles.View_369_942}>
            <Text style={styles.Text_369_942}>2017-2019</Text>
          </View>
        </View>
        <View style={styles.View_369_943}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de7/23c7/2e8c3d3bf971c32bd84c30c97eada418"
            }}
            style={styles.ImageBackground_369_944}
          />
          <View style={styles.View_369_945}>
            <View source={{ uri: "null" }} style={styles.View_369_946} />
          </View>
        </View>
        <View style={styles.View_369_948}>
          <Text style={styles.Text_369_948}>You may also like</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed07/4516/51627cc8936f3ef888b2fbeecba04956"
          }}
          style={styles.ImageBackground_369_949}
        />
        <View style={styles.View_369_950}>
          <View source={{ uri: "null" }} style={styles.View_369_951} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a38/1eae/f4b44de21bc5ef949b480ba9ee735678"
            }}
            style={styles.ImageBackground_369_953}
          />
          <View style={styles.View_369_954}>
            <Text style={styles.Text_369_954}>The Quintesseti...</Text>
          </View>
        </View>
        <View style={styles.View_369_955}>
          <View source={{ uri: "null" }} style={styles.View_369_956} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a38/1eae/f4b44de21bc5ef949b480ba9ee735678"
            }}
            style={styles.ImageBackground_369_957}
          />
          <View style={styles.View_369_958}>
            <Text style={styles.Text_369_958}>Classroom of t..</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e012/bc7c/83bc896536bd22fdbbb44118d1a0b579"
          }}
          style={styles.ImageBackground_369_959}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_960}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_961}
        />
        <View source={{ uri: "null" }} style={styles.View_369_962} />
        <View source={{ uri: "null" }} style={styles.View_369_963} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aad/75e1/58cb6bbb3569febd72101d321c830bf7"
          }}
          style={styles.ImageBackground_369_964}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_877: {
    width: wp("100%"),
    height: hp("127.32240437158471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_878: {
    width: wp("100%"),
    height: hp("127.32240437158471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_879: {
    width: wp("98.88888888888889%"),
    height: hp("27.459016393442624%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555556%")
  },
  ImageBackground_369_880: {
    width: wp("98.88888888888889%"),
    height: hp("27.459016393442624%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_881: {
    width: wp("25.27777777777778%"),
    top: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.55555555555556%")
  },
  Text_369_881: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_882: {
    width: wp("19.444444444444446%"),
    top: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.55555555555556%")
  },
  Text_369_882: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_883: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_369_886: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  ImageBackground_369_889: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%")
  },
  ImageBackground_369_892: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.16666666666667%")
  },
  ImageBackground_369_895: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.55555555555556%")
  },
  ImageBackground_369_898: {
    width: wp("34.44444444444444%"),
    height: hp("3.551912568306011%"),
    top: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_899: {
    width: wp("29.166666666666668%"),
    top: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_899: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_900: {
    width: wp("15.277777777777779%"),
    height: hp("3.551912568306011%"),
    top: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.833333333333336%")
  },
  View_369_901: {
    width: wp("9.722222222222223%"),
    top: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.611111111111114%")
  },
  Text_369_901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_902: {
    width: wp("15.277777777777779%"),
    height: hp("3.551912568306011%"),
    top: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_903: {
    width: wp("10%"),
    top: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.83333333333333%")
  },
  Text_369_903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_904: {
    width: wp("20%"),
    height: hp("3.551912568306011%"),
    top: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.27777777777777%")
  },
  View_369_905: {
    width: wp("14.444444444444443%"),
    top: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.05555555555556%")
  },
  Text_369_905: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_906: {
    width: wp("17.77777777777778%"),
    height: hp("3.551912568306011%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_907: {
    width: wp("12.222222222222221%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_907: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_908: {
    width: wp("15.833333333333332%"),
    height: hp("3.551912568306011%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%")
  },
  View_369_909: {
    width: wp("10.555555555555555%"),
    top: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444443%")
  },
  Text_369_909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_910: {
    width: wp("77.5%"),
    top: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_910: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_911: {
    width: wp("1.768055491977268%"),
    height: hp("0.4346994428686757%"),
    top: hp("55.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%")
  },
  ImageBackground_369_912: {
    width: wp("9.722222222222223%"),
    height: hp("4.781420765027322%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.61111111111111%")
  },
  ImageBackground_369_915: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_916: {
    width: wp("44.44444444444444%"),
    height: hp("5.46448087431694%"),
    top: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_917: {
    width: wp("23.333333333333332%"),
    top: hp("59.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%")
  },
  Text_369_917: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_918: {
    width: wp("44.44444444444444%"),
    height: hp("5.46448087431694%"),
    top: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  View_369_919: {
    width: wp("22.5%"),
    top: hp("59.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.22222222222222%")
  },
  Text_369_919: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_920: {
    width: wp("17.22222222222222%"),
    top: hp("66.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_921: {
    width: wp("95.55555555555556%"),
    height: hp("23.497267759562842%"),
    top: hp("70.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%")
  },
  View_369_922: {
    width: wp("28.610278235541447%"),
    height: hp("21.05532786885246%"),
    top: hp("71.43101092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.723052978515625%")
  },
  ImageBackground_369_923: {
    width: wp("28.333333333333332%"),
    height: hp("20.76502732240437%"),
    top: hp("0.2903005464480941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.276947021484375%")
  },
  View_369_924: {
    width: wp("28.541666666666664%"),
    height: hp("21.05532786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_925: {
    width: wp("28.541666666666664%"),
    height: hp("21.05532786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_926: {
    width: wp("28.333333333333332%"),
    height: hp("9.426229508196721%"),
    top: hp("11.629098360655746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.276947021484375%")
  },
  View_369_927: {
    width: wp("18.61111111111111%"),
    top: hp("16.137295081967224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6658359103732634%")
  },
  Text_369_927: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_928: {
    width: wp("17.5%"),
    top: hp("18.732923497267763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6658359103732634%")
  },
  Text_369_928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_929: {
    width: wp("29.786112043592667%"),
    height: hp("20.810382613718836%"),
    top: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.282491048177086%")
  },
  ImageBackground_369_930: {
    width: wp("28.055555555555557%"),
    height: hp("20.76502732240437%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8286200629340215%")
  },
  View_369_931: {
    width: wp("29.786112043592667%"),
    height: hp("20.810382613718836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_933: {
    width: wp("28.055555555555557%"),
    height: hp("10.655737704918032%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8286200629340215%")
  },
  View_369_934: {
    width: wp("18.61111111111111%"),
    top: hp("15.84699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2175089518229143%")
  },
  Text_369_934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_935: {
    width: wp("17.5%"),
    top: hp("18.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2175089518229143%")
  },
  Text_369_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_936: {
    width: wp("30.13972176445855%"),
    height: hp("21.038384776297814%"),
    top: hp("71.4479540215164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.74805365668402%")
  },
  ImageBackground_369_937: {
    width: wp("28.055555555555557%"),
    height: hp("20.76502732240437%"),
    top: hp("0.27335745389343913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1963907877604214%")
  },
  View_369_938: {
    width: wp("30.13972176445855%"),
    height: hp("20.898087298283812%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_939: {
    width: wp("30.13972176445855%"),
    height: hp("20.898087298283812%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_940: {
    width: wp("28.055555555555557%"),
    height: hp("10.655737704918032%"),
    top: hp("10.382647071379779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1963907877604214%")
  },
  View_369_941: {
    width: wp("12.5%"),
    top: hp("16.12035198941257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.585279676649307%")
  },
  Text_369_941: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_942: {
    width: wp("16.38888888888889%"),
    top: hp("18.715980404713108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.585279676649307%")
  },
  Text_369_942: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_943: {
    width: wp("28.61111111111111%"),
    height: hp("21.03825136612022%"),
    top: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_369_944: {
    width: wp("28.333333333333332%"),
    height: hp("20.76502732240437%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_945: {
    width: wp("28.61111111111111%"),
    height: hp("21.03825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_946: {
    width: wp("28.61111111111111%"),
    height: hp("21.03825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_948: {
    width: wp("35%"),
    top: hp("96.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  Text_369_948: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_949: {
    width: wp("95.55555555555556%"),
    height: hp("23.497267759562842%"),
    top: hp("100.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%")
  },
  View_369_950: {
    width: wp("30.091944800482857%"),
    height: hp("20.76502732240437%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.926106770833336%")
  },
  View_369_951: {
    width: wp("30.091944800482857%"),
    height: hp("20.76502732240437%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_953: {
    width: wp("28.333333333333332%"),
    height: hp("9.426229508196721%"),
    top: hp("11.338797814207652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46278211805555003%")
  },
  View_369_954: {
    width: wp("25.833333333333336%"),
    top: hp("17.806022935877735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8516710069444429%")
  },
  Text_369_954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_955: {
    width: wp("28.333333333333332%"),
    height: hp("20.76502732240437%"),
    top: hp("101.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_369_956: {
    width: wp("28.333333333333332%"),
    height: hp("20.76502732240437%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_957: {
    width: wp("28.333333333333332%"),
    height: hp("9.426229508196721%"),
    top: hp("11.338797814207652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_958: {
    width: wp("23.88888888888889%"),
    top: hp("17.76053006531764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%")
  },
  Text_369_958: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_959: {
    width: wp("95.55555555555556%"),
    height: hp("3.1420765027322406%"),
    top: hp("124.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%")
  },
  ImageBackground_369_960: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_961: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_962: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_963: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  ImageBackground_369_964: {
    width: wp("9.722222222222223%"),
    height: hp("4.781420765027322%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%")
  },
  View_2: { height: 932 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
