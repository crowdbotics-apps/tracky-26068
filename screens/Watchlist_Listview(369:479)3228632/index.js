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
      <View style={styles.View_369_480}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/909b/4d2b/005e597eb8e1c55a71c41e30317d190d"
          }}
          style={styles.ImageBackground_369_481}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_482}
        />
        <View source={{ uri: "null" }} style={styles.View_369_483} />
        <View source={{ uri: "null" }} style={styles.View_369_484} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d56/69d8/8f8a128f77afa90472e4f44ce10e444c"
          }}
          style={styles.ImageBackground_369_485}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/221d/0bd3/859b03d5ca0aac7689f208fed2bf6a9d"
          }}
          style={styles.ImageBackground_369_486}
        />
        <View style={styles.View_369_487}>
          <Text style={styles.Text_369_487}>Watching</Text>
        </View>
        <View style={styles.View_369_488}>
          <Text style={styles.Text_369_488}>My List</Text>
        </View>
        <View style={styles.View_369_489}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d78e/ac77/cbf88ae2e427fe82ab3ecaedcca76d33"
            }}
            style={styles.ImageBackground_369_490}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/8a2d/fb94ed990535941bfa6c11501f9568bc"
            }}
            style={styles.ImageBackground_369_491}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a637/d344/944e6c101e16e89555f8b867dfdd5850"
            }}
            style={styles.ImageBackground_369_492}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_494}
        />
        <View source={{ uri: "null" }} style={styles.View_369_495} />
        <View style={styles.View_369_497}>
          <Text style={styles.Text_369_497}>Kakegurui</Text>
        </View>
        <View style={styles.View_369_498}>
          <Text style={styles.Text_369_498}>S02E03</Text>
        </View>
        <View style={styles.View_369_499}>
          <Text style={styles.Text_369_499}>The Untouchable Girl</Text>
        </View>
        <View style={styles.View_369_500}>
          <Text style={styles.Text_369_500}>19/24 Completed</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d08d/bb4d/32fcd3101f58571e897cda82373509f2"
          }}
          style={styles.ImageBackground_369_501}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c62/e928/b9c99b9b5d8cc22bfe3f17087870a137"
          }}
          style={styles.ImageBackground_369_504}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_507}
        />
        <View style={styles.View_369_510}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_511}
          />
          <View style={styles.View_369_512}>
            <Text style={styles.Text_369_512}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_513}
        />
        <View style={styles.View_369_514}>
          <Text style={styles.Text_369_514}>Castlenvaia</Text>
        </View>
        <View style={styles.View_369_515}>
          <Text style={styles.Text_369_515}>S01E03</Text>
        </View>
        <View style={styles.View_369_516}>
          <Text style={styles.Text_369_516}>Witchbottle</Text>
        </View>
        <View style={styles.View_369_517}>
          <Text style={styles.Text_369_517}>3/22 Completed</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae05/f44e/df71e6a63e1215840368e81fdfba239b"
          }}
          style={styles.ImageBackground_369_518}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/367c/6093/49b863ba4a55083519177a506209d9b6"
          }}
          style={styles.ImageBackground_369_521}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d19a/0a0a/bf14c929c1c559b17f57452f4495b6ee"
          }}
          style={styles.ImageBackground_369_524}
        />
        <View style={styles.View_369_527}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7147/c643/faaa318f98ba1b6fd4dfc012800bab90"
            }}
            style={styles.ImageBackground_369_528}
          />
          <View source={{ uri: "null" }} style={styles.View_369_529} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_531}
        />
        <View style={styles.View_369_534}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_535}
          />
          <View style={styles.View_369_536}>
            <Text style={styles.Text_369_536}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_537}
        />
        <View style={styles.View_369_538}>
          <Text style={styles.Text_369_538}>How I Met Your Mother</Text>
        </View>
        <View style={styles.View_369_539}>
          <Text style={styles.Text_369_539}>S01E15</Text>
        </View>
        <View style={styles.View_369_540}>
          <Text style={styles.Text_369_540}>Game Night</Text>
        </View>
        <View style={styles.View_369_541}>
          <Text style={styles.Text_369_541}>15/212 Completed</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7789/f46e/81c0cd5d33bba1010f00c74145346ef7"
          }}
          style={styles.ImageBackground_369_542}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_545}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_548}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_551}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_554}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_557}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_560}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_563}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_566}
        />
        <View style={styles.View_369_569}>
          <View style={styles.View_369_570}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f48/36dc/d28bfd0a16cfadbacc90458ddc37413e"
              }}
              style={styles.ImageBackground_369_571}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_572}
        />
        <View style={styles.View_369_575}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_576}
          />
          <View style={styles.View_369_577}>
            <Text style={styles.Text_369_577}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_578}
        />
        <View style={styles.View_369_579}>
          <Text style={styles.Text_369_579}>57/270 Completed</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de65/df41/7e6e871dd473273f626f9381aba4e967"
          }}
          style={styles.ImageBackground_369_580}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de65/df41/7e6e871dd473273f626f9381aba4e967"
          }}
          style={styles.ImageBackground_369_583}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_586}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_589}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de65/df41/7e6e871dd473273f626f9381aba4e967"
          }}
          style={styles.ImageBackground_369_592}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_595}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00bc/8b63/0a3218aa58d3e4158b07739c7a3f5065"
          }}
          style={styles.ImageBackground_369_598}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_601}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_604}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef27/1a4f/7ac17e2ff7c4e638da077746202293bd"
          }}
          style={styles.ImageBackground_369_607}
        />
        <View style={styles.View_369_610}>
          <Text style={styles.Text_369_610}>F.R.I.E.N.D.S</Text>
        </View>
        <View style={styles.View_369_611}>
          <Text style={styles.Text_369_611}>S04E09</Text>
        </View>
        <View style={styles.View_369_612}>
          <Text style={styles.Text_369_612}>
            The One Where They&#39;re Going
          </Text>
        </View>
        <View style={styles.View_369_613}>
          <View style={styles.View_369_614}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d9/f33a/a521463b9594ef077a1aa551550cf123"
              }}
              style={styles.ImageBackground_369_615}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_616}
        />
        <View style={styles.View_369_619}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_620}
          />
          <View style={styles.View_369_621}>
            <Text style={styles.Text_369_621}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
          }}
          style={styles.ImageBackground_369_622}
        />
        <View style={styles.View_369_623}>
          <Text style={styles.Text_369_623}>23/24 Completed</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b6/95b1/9896c3b34c1ce0d2babfe1f0e34a7c3d"
          }}
          style={styles.ImageBackground_369_624}
        />
        <View source={{ uri: "null" }} style={styles.View_369_627} />
        <View style={styles.View_369_629}>
          <Text style={styles.Text_369_629}>Death note</Text>
        </View>
        <View style={styles.View_369_630}>
          <Text style={styles.Text_369_630}>S01E23</Text>
        </View>
        <View style={styles.View_369_631}>
          <Text style={styles.Text_369_631}>Overcast</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d52f/7684/c402a776b4e993b83b47a217902af48f"
          }}
          style={styles.ImageBackground_369_632}
        />
        <View style={styles.View_369_635}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
            }}
            style={styles.ImageBackground_369_636}
          />
          <View style={styles.View_369_637}>
            <Text style={styles.Text_369_637}>Episode Info</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aef/cba6/8e72a9b81504ff53abdb9a07257789cf"
          }}
          style={styles.ImageBackground_369_638}
        />
        <View style={styles.View_369_639}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
            }}
            style={styles.ImageBackground_369_640}
          />
          <View style={styles.View_369_641}>
            <Text style={styles.Text_369_641}>Discover</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af5e/5edf/27f48c53e2b6309dda80e0fb5187c083"
            }}
            style={styles.ImageBackground_369_642}
          />
        </View>
        <View style={styles.View_369_643}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
            }}
            style={styles.ImageBackground_369_644}
          />
          <View style={styles.View_369_645}>
            <Text style={styles.Text_369_645}>Updates</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fb/c318/544a952627d642b25f8a75da5cc51eee"
            }}
            style={styles.ImageBackground_369_646}
          />
          <View source={{ uri: "null" }} style={styles.View_369_647} />
        </View>
        <View style={styles.View_369_648}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
            }}
            style={styles.ImageBackground_369_649}
          />
          <View style={styles.View_369_650}>
            <Text style={styles.Text_369_650}>My Shows</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879a/e2fa/8950a53590bdd6be682c5a55420dcac8"
            }}
            style={styles.ImageBackground_369_651}
          />
        </View>
        <View style={styles.View_369_653}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
            }}
            style={styles.ImageBackground_369_654}
          />
          <View style={styles.View_369_655}>
            <Text style={styles.Text_369_655}>Dashboard</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046b/272a/24304de146d3cbf82db3e1d9e63452b3"
            }}
            style={styles.ImageBackground_369_656}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0d7/be44/7c47dbb1b83085c213ddcbdcce8f47b2"
          }}
          style={styles.ImageBackground_369_657}
        />
        <View style={styles.View_369_658}>
          <View source={{ uri: "null" }} style={styles.View_369_659} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bea/9d4d/bb927fa14ef06fce0660904e375b83ad"
            }}
            style={styles.ImageBackground_369_660}
          />
          <View style={styles.View_369_661}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8be3/c54f/c8a8a43c00caa0eda6099eb193cdcf86"
              }}
              style={styles.ImageBackground_369_662}
            />
            <View source={{ uri: "null" }} style={styles.View_369_663} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14b7/2b71/de642db222f4695dfc6ecd2560e1201f"
              }}
              style={styles.ImageBackground_369_666}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1788/9d6e/5ff88276674c1617818adee19a40edbc"
              }}
              style={styles.ImageBackground_369_667}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_480: {
    width: wp("100%"),
    height: hp("133.87978142076503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_481: {
    width: wp("100%"),
    height: hp("133.87978142076503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_482: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_483: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_484: {
    width: wp("4.444444444444445%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  ImageBackground_369_485: {
    width: wp("100%"),
    height: hp("6.557377049180328%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_486: {
    width: wp("20.833333333333336%"),
    height: hp("0.4098360655737705%"),
    top: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_487: {
    width: wp("21.11111111111111%"),
    top: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_488: {
    width: wp("14.722222222222223%"),
    top: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%")
  },
  Text_369_488: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_489: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.88888888888889%")
  },
  ImageBackground_369_490: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_491: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  ImageBackground_369_492: {
    width: wp("5%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  ImageBackground_369_494: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_495: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  View_369_497: {
    width: wp("20.27777777777778%"),
    top: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_498: {
    width: wp("11.38888888888889%"),
    top: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_499: {
    width: wp("31.11111111111111%"),
    top: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_499: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_500: {
    width: wp("26.111111111111114%"),
    top: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_501: {
    width: wp("63.05555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  ImageBackground_369_504: {
    width: wp("63.05555555555556%"),
    height: hp("1.092896174863388%"),
    top: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  ImageBackground_369_507: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("33.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.22222222222223%")
  },
  View_369_510: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.33333333333333%")
  },
  ImageBackground_369_511: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_512: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  Text_369_512: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_513: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_514: {
    width: wp("23.333333333333332%"),
    top: hp("40.16393442622951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_515: {
    width: wp("11.38888888888889%"),
    top: hp("43.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_516: {
    width: wp("17.22222222222222%"),
    top: hp("45.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_517: {
    width: wp("24.166666666666668%"),
    top: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_518: {
    width: wp("30.833333333333336%"),
    height: hp("1.092896174863388%"),
    top: hp("49.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  ImageBackground_369_521: {
    width: wp("30.555555555555557%"),
    height: hp("1.092896174863388%"),
    top: hp("51.502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  ImageBackground_369_524: {
    width: wp("30.833333333333336%"),
    height: hp("1.092896174863388%"),
    top: hp("49.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.61111111111111%")
  },
  View_369_527: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("40.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%")
  },
  ImageBackground_369_528: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_529: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_531: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("54.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.22222222222223%")
  },
  View_369_534: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.33333333333333%")
  },
  ImageBackground_369_535: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_536: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  Text_369_536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_537: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("59.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_538: {
    width: wp("46.111111111111114%"),
    top: hp("60.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_538: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_539: {
    width: wp("11.38888888888889%"),
    top: hp("64.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_540: {
    width: wp("17.77777777777778%"),
    top: hp("65.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_541: {
    width: wp("27.77777777777778%"),
    top: hp("75.13661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_542: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  ImageBackground_369_545: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%")
  },
  ImageBackground_369_548: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("71.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%")
  },
  ImageBackground_369_551: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("71.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  ImageBackground_369_554: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%")
  },
  ImageBackground_369_557: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("71.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%")
  },
  ImageBackground_369_560: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777777%")
  },
  ImageBackground_369_563: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("71.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777777%")
  },
  ImageBackground_369_566: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%")
  },
  View_369_569: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("60.98482726050205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.380282931857639%")
  },
  View_369_570: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_571: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_572: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.22222222222223%")
  },
  View_369_575: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("74.72677595628416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.33333333333333%")
  },
  ImageBackground_369_576: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_577: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  Text_369_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_578: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("80.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_579: {
    width: wp("27.77777777777778%"),
    top: hp("95.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_580: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  ImageBackground_369_583: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%")
  },
  ImageBackground_369_586: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("93.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%")
  },
  ImageBackground_369_589: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("93.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  ImageBackground_369_592: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%")
  },
  ImageBackground_369_595: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("93.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%")
  },
  ImageBackground_369_598: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777777%")
  },
  ImageBackground_369_601: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("93.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777777%")
  },
  ImageBackground_369_604: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("93.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%")
  },
  ImageBackground_369_607: {
    width: wp("11.11111111111111%"),
    height: hp("1.092896174863388%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%")
  },
  View_369_610: {
    width: wp("24.444444444444443%"),
    top: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_610: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_611: {
    width: wp("11.38888888888889%"),
    top: hp("85.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_611: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_612: {
    width: wp("43.611111111111114%"),
    top: hp("87.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_612: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_613: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  View_369_614: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_615: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_616: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("95.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.22222222222223%")
  },
  View_369_619: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("95.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.33333333333333%")
  },
  ImageBackground_369_620: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_621: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  Text_369_621: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_622: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("100.81967213114753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_623: {
    width: wp("26.111111111111114%"),
    top: hp("116.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_623: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_624: {
    width: wp("7.222223811679417%"),
    height: hp("3.55191335000627%"),
    top: hp("115.57377049180329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.22222222222223%")
  },
  View_369_627: {
    width: wp("22.26222144232856%"),
    height: hp("16.422951286607752%"),
    top: hp("102.14958816278177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.515543619791666%")
  },
  View_369_629: {
    width: wp("21.666666666666668%"),
    top: hp("102.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_629: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_630: {
    width: wp("11.38888888888889%"),
    top: hp("105.46448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_631: {
    width: wp("13.333333333333334%"),
    top: hp("107.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_369_631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_632: {
    width: wp("61.111111111111114%"),
    height: hp("1.092896174863388%"),
    top: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  View_369_635: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("115.71038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.33333333333333%")
  },
  ImageBackground_369_636: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_637: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  Text_369_637: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_638: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("123.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_639: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("123.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.72222222222223%")
  },
  ImageBackground_369_640: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_641: {
    width: wp("11.11111111111111%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.499999999999993%")
  },
  Text_369_641: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_642: {
    width: wp("6.66584915584988%"),
    height: hp("3.2782864700901055%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444715711805543%")
  },
  View_369_643: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("123.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.72222222222222%")
  },
  ImageBackground_369_644: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_645: {
    width: wp("10.555555555555555%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  Text_369_645: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_646: {
    width: wp("6.111111111111111%"),
    height: hp("3.2787023346280795%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%")
  },
  View_369_647: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%")
  },
  View_369_648: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("123.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_369_649: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_650: {
    width: wp("12.777777777777777%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%")
  },
  Text_369_650: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_651: {
    width: wp("6.111111111111111%"),
    height: hp("3.2792391021394987%"),
    top: hp("1.3655865778688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%")
  },
  View_369_653: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("123.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.05555555555556%")
  },
  ImageBackground_369_654: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_655: {
    width: wp("13.61111111111111%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%")
  },
  Text_369_655: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_656: {
    width: wp("6.666667196485731%"),
    height: hp("3.2842899280819084%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444443%")
  },
  ImageBackground_369_657: {
    width: wp("94.44444444444444%"),
    height: hp("7.650273224043716%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_658: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.44444444444444%")
  },
  View_369_659: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_660: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  View_369_661: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  ImageBackground_369_662: {
    width: wp("5.555555555555555%"),
    height: hp("2.732278479904425%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%")
  },
  View_369_663: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_666: {
    width: wp("3.6111111111111107%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8196721311475406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  ImageBackground_369_667: {
    width: wp("2.5%"),
    height: hp("0.273224043715847%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888889%")
  },
  View_2: { height: 980 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
