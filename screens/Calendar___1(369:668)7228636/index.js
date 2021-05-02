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
      <View style={styles.View_369_669}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b748/7f7f/94063fbd4fcfb6322d62c1287ed4dce6"
          }}
          style={styles.ImageBackground_369_670}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_671}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_672}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/dd93/af89198632fdf19afde64218821eadbe"
          }}
          style={styles.ImageBackground_369_673}
        />
        <View style={styles.View_369_674}>
          <Text style={styles.Text_369_674}>Calendar</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_675} />
        <View source={{ uri: "null" }} style={styles.View_369_676} />
        <View style={styles.View_369_677}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aef/cba6/8e72a9b81504ff53abdb9a07257789cf"
            }}
            style={styles.ImageBackground_369_678}
          />
          <View style={styles.View_369_679}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_680}
            />
            <View style={styles.View_369_681}>
              <Text style={styles.Text_369_681}>Discover</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af5e/5edf/27f48c53e2b6309dda80e0fb5187c083"
              }}
              style={styles.ImageBackground_369_682}
            />
          </View>
          <View style={styles.View_369_683}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_684}
            />
            <View style={styles.View_369_685}>
              <Text style={styles.Text_369_685}>Updates</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fb/c318/544a952627d642b25f8a75da5cc51eee"
              }}
              style={styles.ImageBackground_369_686}
            />
            <View source={{ uri: "null" }} style={styles.View_369_687} />
          </View>
          <View style={styles.View_369_688}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_689}
            />
            <View style={styles.View_369_690}>
              <Text style={styles.Text_369_690}>My Shows</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879a/e2fa/8950a53590bdd6be682c5a55420dcac8"
              }}
              style={styles.ImageBackground_369_691}
            />
          </View>
          <View style={styles.View_369_693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_694}
            />
            <View style={styles.View_369_695}>
              <Text style={styles.Text_369_695}>Dashboard</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046b/272a/24304de146d3cbf82db3e1d9e63452b3"
              }}
              style={styles.ImageBackground_369_696}
            />
          </View>
        </View>
        <View style={styles.View_369_697}>
          <View style={styles.View_369_698}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d292/1cff/93a6fabee3dbe721c2da87b7e6c704bc"
              }}
              style={styles.ImageBackground_369_699}
            />
            <View style={styles.View_369_700}>
              <View style={styles.View_369_701}>
                <Text style={styles.Text_369_701}>Sun</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_702} />
              <View style={styles.View_369_703}>
                <Text style={styles.Text_369_703}>18</Text>
              </View>
            </View>
            <View style={styles.View_369_704}>
              <View style={styles.View_369_705}>
                <Text style={styles.Text_369_705}>Mon</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_706} />
              <View style={styles.View_369_707}>
                <Text style={styles.Text_369_707}>19</Text>
              </View>
            </View>
            <View style={styles.View_369_708}>
              <View style={styles.View_369_709}>
                <Text style={styles.Text_369_709}>Tue</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_710} />
              <View style={styles.View_369_711}>
                <Text style={styles.Text_369_711}>20</Text>
              </View>
            </View>
            <View style={styles.View_369_712}>
              <View style={styles.View_369_713}>
                <Text style={styles.Text_369_713}>Wed</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_714} />
              <View style={styles.View_369_715}>
                <Text style={styles.Text_369_715}>21</Text>
              </View>
            </View>
            <View style={styles.View_369_716}>
              <View style={styles.View_369_717}>
                <Text style={styles.Text_369_717}>Thu</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f7f/3a8d/0052bf20149edcb9239987c96ed3faeb"
                }}
                style={styles.ImageBackground_369_718}
              />
              <View style={styles.View_369_719}>
                <Text style={styles.Text_369_719}>22</Text>
              </View>
            </View>
            <View style={styles.View_369_720}>
              <View style={styles.View_369_721}>
                <Text style={styles.Text_369_721}>Fri</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_722} />
              <View style={styles.View_369_723}>
                <Text style={styles.Text_369_723}>23</Text>
              </View>
            </View>
            <View style={styles.View_369_724}>
              <View style={styles.View_369_725}>
                <Text style={styles.Text_369_725}>Sat</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_726} />
              <View style={styles.View_369_727}>
                <Text style={styles.Text_369_727}>24</Text>
              </View>
            </View>
            <View style={styles.View_369_728}>
              <Text style={styles.Text_369_728}>April</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbd2/bffd/8b3a43f4c1b4e948e75f57b709ba5c1e"
              }}
              style={styles.ImageBackground_369_729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef74/6595/55832451a969a77a1a9a846ea8bcefbd"
              }}
              style={styles.ImageBackground_369_732}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3596/382c/e3b458b1b7abbdaaaccbc4aa5d2bcb8f"
              }}
              style={styles.ImageBackground_369_735}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c65/4cca/e98987d3022e67490969faa3058e1b47"
              }}
              style={styles.ImageBackground_369_736}
            />
            <View style={styles.View_369_737}>
              <View source={{ uri: "null" }} style={styles.View_369_738} />
              <View style={styles.View_369_739}>
                <Text style={styles.Text_369_739}>3</Text>
              </View>
            </View>
            <View style={styles.View_369_740}>
              <View source={{ uri: "null" }} style={styles.View_369_741} />
              <View style={styles.View_369_742}>
                <Text style={styles.Text_369_742}>10</Text>
              </View>
            </View>
            <View style={styles.View_369_743}>
              <View source={{ uri: "null" }} style={styles.View_369_744} />
              <View style={styles.View_369_745}>
                <Text style={styles.Text_369_745}>17</Text>
              </View>
            </View>
            <View style={styles.View_369_746}>
              <View source={{ uri: "null" }} style={styles.View_369_747} />
              <View style={styles.View_369_748}>
                <Text style={styles.Text_369_748}>4</Text>
              </View>
            </View>
            <View style={styles.View_369_749}>
              <View source={{ uri: "null" }} style={styles.View_369_750} />
              <View style={styles.View_369_751}>
                <Text style={styles.Text_369_751}>11</Text>
              </View>
            </View>
            <View style={styles.View_369_752}>
              <View source={{ uri: "null" }} style={styles.View_369_753} />
              <View style={styles.View_369_754}>
                <Text style={styles.Text_369_754}>18</Text>
              </View>
            </View>
            <View style={styles.View_369_755}>
              <View source={{ uri: "null" }} style={styles.View_369_756} />
              <View style={styles.View_369_757}>
                <Text style={styles.Text_369_757}>5</Text>
              </View>
            </View>
            <View style={styles.View_369_758}>
              <View source={{ uri: "null" }} style={styles.View_369_759} />
              <View style={styles.View_369_760}>
                <Text style={styles.Text_369_760}>12</Text>
              </View>
            </View>
            <View style={styles.View_369_761}>
              <View source={{ uri: "null" }} style={styles.View_369_762} />
              <View style={styles.View_369_763}>
                <Text style={styles.Text_369_763}>19</Text>
              </View>
            </View>
            <View style={styles.View_369_764}>
              <View source={{ uri: "null" }} style={styles.View_369_765} />
              <View style={styles.View_369_766}>
                <Text style={styles.Text_369_766}>6</Text>
              </View>
            </View>
            <View style={styles.View_369_767}>
              <View source={{ uri: "null" }} style={styles.View_369_768} />
              <View style={styles.View_369_769}>
                <Text style={styles.Text_369_769}>13</Text>
              </View>
            </View>
            <View style={styles.View_369_770}>
              <View source={{ uri: "null" }} style={styles.View_369_771} />
              <View style={styles.View_369_772}>
                <Text style={styles.Text_369_772}>20</Text>
              </View>
            </View>
            <View style={styles.View_369_773}>
              <View source={{ uri: "null" }} style={styles.View_369_774} />
              <View style={styles.View_369_775}>
                <Text style={styles.Text_369_775}>7</Text>
              </View>
            </View>
            <View style={styles.View_369_776}>
              <View source={{ uri: "null" }} style={styles.View_369_777} />
              <View style={styles.View_369_778}>
                <Text style={styles.Text_369_778}>14</Text>
              </View>
            </View>
            <View style={styles.View_369_779}>
              <View source={{ uri: "null" }} style={styles.View_369_780} />
              <View style={styles.View_369_781}>
                <Text style={styles.Text_369_781}>21</Text>
              </View>
            </View>
            <View style={styles.View_369_782}>
              <View source={{ uri: "null" }} style={styles.View_369_783} />
              <View style={styles.View_369_784}>
                <Text style={styles.Text_369_784}>8</Text>
              </View>
            </View>
            <View style={styles.View_369_785}>
              <View source={{ uri: "null" }} style={styles.View_369_786} />
              <View style={styles.View_369_787}>
                <Text style={styles.Text_369_787}>15</Text>
              </View>
            </View>
            <View style={styles.View_369_788}>
              <View source={{ uri: "null" }} style={styles.View_369_789} />
              <View style={styles.View_369_790}>
                <Text style={styles.Text_369_790}>22</Text>
              </View>
            </View>
            <View style={styles.View_369_791}>
              <View source={{ uri: "null" }} style={styles.View_369_792} />
              <View style={styles.View_369_793}>
                <Text style={styles.Text_369_793}>2</Text>
              </View>
            </View>
            <View style={styles.View_369_794}>
              <View source={{ uri: "null" }} style={styles.View_369_795} />
              <View style={styles.View_369_796}>
                <Text style={styles.Text_369_796}>9</Text>
              </View>
            </View>
            <View style={styles.View_369_797}>
              <View source={{ uri: "null" }} style={styles.View_369_798} />
              <View style={styles.View_369_799}>
                <Text style={styles.Text_369_799}>16</Text>
              </View>
            </View>
            <View style={styles.View_369_800}>
              <View source={{ uri: "null" }} style={styles.View_369_801} />
              <View style={styles.View_369_802}>
                <Text style={styles.Text_369_802}>30</Text>
              </View>
            </View>
            <View style={styles.View_369_803}>
              <View source={{ uri: "null" }} style={styles.View_369_804} />
              <View style={styles.View_369_805}>
                <Text style={styles.Text_369_805}>25</Text>
              </View>
            </View>
            <View style={styles.View_369_806}>
              <View source={{ uri: "null" }} style={styles.View_369_807} />
              <View style={styles.View_369_808}>
                <Text style={styles.Text_369_808}>26</Text>
              </View>
            </View>
            <View style={styles.View_369_809}>
              <View source={{ uri: "null" }} style={styles.View_369_810} />
              <View style={styles.View_369_811}>
                <Text style={styles.Text_369_811}>27</Text>
              </View>
            </View>
            <View style={styles.View_369_812}>
              <View source={{ uri: "null" }} style={styles.View_369_813} />
              <View style={styles.View_369_814}>
                <Text style={styles.Text_369_814}>28</Text>
              </View>
            </View>
            <View style={styles.View_369_815}>
              <View source={{ uri: "null" }} style={styles.View_369_816} />
              <View style={styles.View_369_817}>
                <Text style={styles.Text_369_817}>29</Text>
              </View>
            </View>
            <View style={styles.View_369_818}>
              <View source={{ uri: "null" }} style={styles.View_369_819} />
              <View style={styles.View_369_820}>
                <Text style={styles.Text_369_820}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_369_821}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
              }}
              style={styles.ImageBackground_369_822}
            />
            <View source={{ uri: "null" }} style={styles.View_369_823} />
            <View style={styles.View_369_825}>
              <Text style={styles.Text_369_825}>Kakegurui</Text>
            </View>
            <View style={styles.View_369_826}>
              <Text style={styles.Text_369_826}>S02E03</Text>
            </View>
            <View style={styles.View_369_827}>
              <Text style={styles.Text_369_827}>The Untouchable Girl</Text>
            </View>
            <View style={styles.View_369_828}>
              <Text style={styles.Text_369_828}>
                Wednesday,21 Apr 2021, 05:30 PM
              </Text>
            </View>
            <View style={styles.View_369_829}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e1c/5f3b/33f44d6a4cb7a69e907a46d8e0f3ce74"
                }}
                style={styles.ImageBackground_369_830}
              />
              <View style={styles.View_369_831}>
                <Text style={styles.Text_369_831}>Episode Info</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
              }}
              style={styles.ImageBackground_369_832}
            />
            <View style={styles.View_369_833}>
              <Text style={styles.Text_369_833}>Castlenvaia</Text>
            </View>
            <View style={styles.View_369_834}>
              <Text style={styles.Text_369_834}>S01E03</Text>
            </View>
            <View style={styles.View_369_835}>
              <Text style={styles.Text_369_835}>Witchbottle</Text>
            </View>
            <View style={styles.View_369_836}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7147/c643/faaa318f98ba1b6fd4dfc012800bab90"
                }}
                style={styles.ImageBackground_369_837}
              />
              <View source={{ uri: "null" }} style={styles.View_369_838} />
            </View>
            <View style={styles.View_369_840}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
                }}
                style={styles.ImageBackground_369_841}
              />
              <View style={styles.View_369_842}>
                <Text style={styles.Text_369_842}>Episode Info</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
              }}
              style={styles.ImageBackground_369_843}
            />
            <View style={styles.View_369_844}>
              <Text style={styles.Text_369_844}>How I Met Your Mother</Text>
            </View>
            <View style={styles.View_369_845}>
              <Text style={styles.Text_369_845}>S01E15</Text>
            </View>
            <View style={styles.View_369_846}>
              <Text style={styles.Text_369_846}>Game Night</Text>
            </View>
            <View style={styles.View_369_847}>
              <View style={styles.View_369_848}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f48/36dc/d28bfd0a16cfadbacc90458ddc37413e"
                  }}
                  style={styles.ImageBackground_369_849}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
              }}
              style={styles.ImageBackground_369_850}
            />
            <View style={styles.View_369_851}>
              <Text style={styles.Text_369_851}>F.R.I.E.N.D.S</Text>
            </View>
            <View style={styles.View_369_852}>
              <Text style={styles.Text_369_852}>S04E09</Text>
            </View>
            <View style={styles.View_369_853}>
              <Text style={styles.Text_369_853}>
                The One Where They&#39;re Going
              </Text>
            </View>
            <View style={styles.View_369_854}>
              <View style={styles.View_369_855}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d9/f33a/a521463b9594ef077a1aa551550cf123"
                  }}
                  style={styles.ImageBackground_369_856}
                />
              </View>
            </View>
            <View style={styles.View_369_857}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
                }}
                style={styles.ImageBackground_369_858}
              />
              <View style={styles.View_369_859}>
                <Text style={styles.Text_369_859}>Episode Info</Text>
              </View>
            </View>
            <View style={styles.View_369_860}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
                }}
                style={styles.ImageBackground_369_861}
              />
              <View style={styles.View_369_862}>
                <Text style={styles.Text_369_862}>Episode Info</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db0/44da/550a5f54c930f85e8a34ece03ed3c636"
              }}
              style={styles.ImageBackground_369_863}
            />
            <View source={{ uri: "null" }} style={styles.View_369_864} />
            <View style={styles.View_369_866}>
              <Text style={styles.Text_369_866}>Death note</Text>
            </View>
            <View style={styles.View_369_867}>
              <Text style={styles.Text_369_867}>S01E23</Text>
            </View>
            <View style={styles.View_369_868}>
              <Text style={styles.Text_369_868}>Overcast</Text>
            </View>
            <View style={styles.View_369_869}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3c6/86b2/9b620c7dce4a38c457a54435e17c2419"
                }}
                style={styles.ImageBackground_369_870}
              />
              <View style={styles.View_369_871}>
                <Text style={styles.Text_369_871}>Episode Info</Text>
              </View>
            </View>
            <View style={styles.View_369_872}>
              <Text style={styles.Text_369_872}>
                Wednesday,21 Apr 2021, 05:30 PM
              </Text>
            </View>
            <View style={styles.View_369_873}>
              <Text style={styles.Text_369_873}>
                Wednesday,21 Apr 2021, 05:30 PM
              </Text>
            </View>
            <View style={styles.View_369_874}>
              <Text style={styles.Text_369_874}>
                Wednesday,21 Apr 2021, 05:30 PM
              </Text>
            </View>
            <View style={styles.View_369_875}>
              <Text style={styles.Text_369_875}>
                Wednesday,21 Apr 2021, 05:30 PM
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_669: {
    width: wp("100%"),
    height: hp("132.37704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_670: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_671: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_672: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_673: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_674: {
    width: wp("28.055555555555557%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_675: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_676: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  View_369_677: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("101.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_678: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_679: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.72222222222223%")
  },
  ImageBackground_369_680: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_681: {
    width: wp("11.11111111111111%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.499999999999993%")
  },
  Text_369_681: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_682: {
    width: wp("6.66584915584988%"),
    height: hp("3.2782864700901055%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444715711805543%")
  },
  View_369_683: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.72222222222222%")
  },
  ImageBackground_369_684: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_685: {
    width: wp("10.555555555555555%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  Text_369_685: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_686: {
    width: wp("6.111111111111111%"),
    height: hp("3.2787023346280795%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%")
  },
  View_369_687: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%")
  },
  View_369_688: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_369_689: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_690: {
    width: wp("12.777777777777777%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%")
  },
  Text_369_690: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_691: {
    width: wp("6.111111111111111%"),
    height: hp("3.2792391021394987%"),
    top: hp("1.3655865778688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%")
  },
  View_369_693: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.05555555555556%")
  },
  ImageBackground_369_694: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_695: {
    width: wp("13.61111111111111%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%")
  },
  Text_369_695: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_696: {
    width: wp("6.666667196485731%"),
    height: hp("3.2842899280819084%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444443%")
  },
  View_369_697: {
    width: wp("100%"),
    height: hp("121.44808743169399%"),
    top: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_698: {
    width: wp("100%"),
    height: hp("44.53551912568306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_699: {
    width: wp("100%"),
    height: hp("44.53551912568306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_700: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_701: {
    width: wp("8.61111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.314697265625%")
  },
  Text_369_701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_702: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_703: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_703: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_704: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_705: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5677625868055536%")
  },
  Text_369_705: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_706: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_707: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_707: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_708: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_709: {
    width: wp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4772542317708321%")
  },
  Text_369_709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_710: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_711: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_711: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_712: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_713: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6411404079861072%")
  },
  Text_369_713: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_714: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_715: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_715: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_716: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_717: {
    width: wp("8.61111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.30859375%")
  },
  Text_369_717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_718: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_719: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_720: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_721: {
    width: wp("5.833333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7527533637152857%")
  },
  Text_369_721: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_722: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_723: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_723: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_724: {
    width: wp("10.833333333333334%"),
    height: hp("8.879781420765028%"),
    top: hp("6.9672131147541005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_725: {
    width: wp("7.5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8958197699652857%")
  },
  Text_369_725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_726: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_727: {
    width: wp("5%"),
    top: hp("4.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_728: {
    width: wp("10.555555555555555%"),
    top: hp("1.7759562841530059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_729: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0.13661202185792298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.44444444444444%")
  },
  ImageBackground_369_732: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1367454320355197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%")
  },
  ImageBackground_369_735: {
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    top: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_736: {
    width: wp("13.88888888888889%"),
    height: hp("0.546448087431694%"),
    top: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%")
  },
  View_369_737: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_738: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_739: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_740: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_741: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_742: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_743: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_744: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_745: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_746: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_747: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_748: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506946%")
  },
  Text_369_748: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_749: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_750: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_751: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_752: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_753: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_754: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_755: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_756: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_757: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_758: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_759: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_760: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_760: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_761: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_762: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_763: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_763: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_764: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_765: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_766: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_767: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_768: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_769: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_769: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_770: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_771: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_772: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_772: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_773: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_774: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_775: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_776: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_777: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_778: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_778: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_779: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_780: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_781: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_781: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_782: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_783: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_784: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_785: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_786: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_787: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_787: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_788: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_789: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_790: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_791: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_792: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_793: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506945%")
  },
  Text_369_793: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_794: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("30.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_795: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_796: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506945%")
  },
  Text_369_796: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_797: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("37.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_798: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_799: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_799: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_800: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.38888888888889%")
  },
  View_369_801: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_802: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_802: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_803: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_804: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_805: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_805: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_806: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.77777777777778%")
  },
  View_369_807: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_808: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_809: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.11111111111111%")
  },
  View_369_810: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_811: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361107%")
  },
  Text_369_811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_812: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.72222222222222%")
  },
  View_369_813: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_814: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7822536892361143%")
  },
  Text_369_814: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_815: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%")
  },
  View_369_816: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_817: {
    width: wp("5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.782253689236107%")
  },
  Text_369_817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_818: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("17.213114754098356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_369_819: {
    width: wp("10.833333333333334%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_820: {
    width: wp("2.5%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.030015733506943%")
  },
  Text_369_820: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_821: {
    width: wp("94.44444444444444%"),
    height: hp("101.09289617486338%"),
    top: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  ImageBackground_369_822: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_823: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_369_825: {
    width: wp("20.27777777777778%"),
    top: hp("1.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_825: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_826: {
    width: wp("11.38888888888889%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_826: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_827: {
    width: wp("31.11111111111111%"),
    top: hp("6.5573770491803245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_828: {
    width: wp("51.388888888888886%"),
    top: hp("9.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_828: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_829: {
    width: wp("22.22222222222222%"),
    height: hp("3.278688524590164%"),
    top: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777779%")
  },
  ImageBackground_369_830: {
    width: wp("22.22222222222222%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_831: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_831: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_832: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("20.491803278688522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_833: {
    width: wp("23.333333333333332%"),
    top: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_833: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_834: {
    width: wp("11.38888888888889%"),
    top: hp("24.72677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_835: {
    width: wp("17.22222222222222%"),
    top: hp("26.639344262295076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_836: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("21.857923497267755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  ImageBackground_369_837: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_838: {
    width: wp("22.22222222222222%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_840: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.3888888888889%")
  },
  ImageBackground_369_841: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_842: {
    width: wp("18.61111111111111%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_843: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_844: {
    width: wp("46.111111111111114%"),
    top: hp("41.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_845: {
    width: wp("11.38888888888889%"),
    top: hp("45.21857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_846: {
    width: wp("17.77777777777778%"),
    top: hp("47.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_846: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_847: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("42.1323682441086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6024712456597223%")
  },
  View_369_848: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_849: {
    width: wp("22.516665988498264%"),
    height: hp("16.610792816662396%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_850: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_851: {
    width: wp("24.444444444444443%"),
    top: hp("62.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_851: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_852: {
    width: wp("11.38888888888889%"),
    top: hp("66.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_853: {
    width: wp("43.611111111111114%"),
    top: hp("68.16939890710381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_853: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_854: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("62.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%")
  },
  View_369_855: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_856: {
    width: wp("22.5%"),
    height: hp("16.598360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_857: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("55.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.3888888888889%")
  },
  ImageBackground_369_858: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_859: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_859: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_860: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("75.95628415300544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.3888888888889%")
  },
  ImageBackground_369_861: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_862: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_863: {
    width: wp("94.44444444444444%"),
    height: hp("19.12568306010929%"),
    top: hp("81.96721311475409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_864: {
    width: wp("22.26222144232856%"),
    height: hp("16.422951286607752%"),
    top: hp("83.2971291463883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7377658420138884%")
  },
  View_369_866: {
    width: wp("21.666666666666668%"),
    top: hp("83.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_867: {
    width: wp("11.38888888888889%"),
    top: hp("86.61202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_867: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_868: {
    width: wp("13.333333333333334%"),
    top: hp("88.52459016393442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_868: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_869: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("96.44808743169398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.3888888888889%")
  },
  ImageBackground_369_870: {
    width: wp("21.11111111111111%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_871: {
    width: wp("18.61111111111111%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_871: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_872: {
    width: wp("51.388888888888886%"),
    top: hp("29.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_872: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_873: {
    width: wp("51.388888888888886%"),
    top: hp("50.40983606557378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_873: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_874: {
    width: wp("51.388888888888886%"),
    top: hp("71.44808743169398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_874: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_875: {
    width: wp("51.388888888888886%"),
    top: hp("91.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_875: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
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
