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
      <View style={styles.View_369_968}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/754e/bdac/bd4cfc64a305b18fe53e7eba24bdcc66"
          }}
          style={styles.ImageBackground_369_969}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6d2/4629/04114afe2bcf88ea94132c430686bcb3"
          }}
          style={styles.ImageBackground_369_970}
        />
        <View style={styles.View_369_971}>
          <Text style={styles.Text_369_971}>Genres Watched</Text>
        </View>
        <View style={styles.View_369_972}>
          <Text style={styles.Text_369_972}>Anime - Mystery</Text>
        </View>
        <View style={styles.View_369_973}>
          <Text style={styles.Text_369_973}>
            looks like your favourite genres are
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e143/7c84/ce309fcde3cb9e8aa14a0c2f5377d5d4"
          }}
          style={styles.ImageBackground_369_974}
        />
        <View style={styles.View_369_975}>
          <Text style={styles.Text_369_975}>Anime</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b8/7482/b0bb6179364b1eb825ced75c6c394946"
          }}
          style={styles.ImageBackground_369_976}
        />
        <View style={styles.View_369_977}>
          <Text style={styles.Text_369_977}>Mystery</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21e4/9073/52015953c71a9cbb269f00640c63276c"
          }}
          style={styles.ImageBackground_369_978}
        />
        <View style={styles.View_369_979}>
          <Text style={styles.Text_369_979}>Sports</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/746b/0ab8/364c7343a79c444347bcbe2151129bea"
          }}
          style={styles.ImageBackground_369_980}
        />
        <View style={styles.View_369_981}>
          <Text style={styles.Text_369_981}>Romance</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9b1/4a1b/8abfd73c1866442d0b44263430be6564"
          }}
          style={styles.ImageBackground_369_982}
        />
        <View style={styles.View_369_983}>
          <Text style={styles.Text_369_983}>Others</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ad9/1436/632e265d2b536d51d5552576b5054bc4"
          }}
          style={styles.ImageBackground_369_984}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d424/5b18/dce24c92c2779041205dc8adf88de265"
          }}
          style={styles.ImageBackground_369_985}
        />
        <View style={styles.View_369_986}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddbf/43c6/50c503f87e6b063084cbbefe429c7608"
            }}
            style={styles.ImageBackground_369_987}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/6554/bccf553166e2d45f9ed86843e60bc077"
            }}
            style={styles.ImageBackground_369_990}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b1d/03e4/eb558d7639c0b4c2820d522e84b8d717"
            }}
            style={styles.ImageBackground_369_993}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d811/3215/4630dea671ec997027904651333104fd"
            }}
            style={styles.ImageBackground_369_996}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01aa/cc52/d14e807a6c81b1d7c756ae38a00b4642"
            }}
            style={styles.ImageBackground_369_999}
          />
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1002} />
        <View source={{ uri: "null" }} style={styles.View_369_1003} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6524/0a4d/cdec780587282ef3a689d1e749c8713e"
          }}
          style={styles.ImageBackground_369_1004}
        />
        <View style={styles.View_369_1005}>
          <Text style={styles.Text_369_1005}>
            started your hobby since 2019
          </Text>
        </View>
        <View style={styles.View_369_1006}>
          <Text style={styles.Text_369_1006}>is roughly</Text>
        </View>
        <View style={styles.View_369_1007}>
          <Text style={styles.Text_369_1007}>Your stats in numbers</Text>
        </View>
        <View style={styles.View_369_1008}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/ce03/168dd924d94989756ab0f1fcd40641e9"
            }}
            style={styles.ImageBackground_369_1009}
          />
          <View style={styles.View_369_1010}>
            <View style={styles.View_369_1011}>
              <Text style={styles.Text_369_1011}>26</Text>
            </View>
            <View style={styles.View_369_1012}>
              <Text style={styles.Text_369_1012}>shows</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_369_1013}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/ce03/168dd924d94989756ab0f1fcd40641e9"
            }}
            style={styles.ImageBackground_369_1014}
          />
          <View style={styles.View_369_1015}>
            <View style={styles.View_369_1016}>
              <Text style={styles.Text_369_1016}>861</Text>
            </View>
            <View style={styles.View_369_1017}>
              <Text style={styles.Text_369_1017}>episodes</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_369_1018}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb4b/ce03/168dd924d94989756ab0f1fcd40641e9"
            }}
            style={styles.ImageBackground_369_1019}
          />
          <View style={styles.View_369_1020}>
            <View style={styles.View_369_1021}>
              <Text style={styles.Text_369_1021}>47</Text>
            </View>
            <View style={styles.View_369_1022}>
              <Text style={styles.Text_369_1022}>seasons</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_369_1023}>
          <Text style={styles.Text_369_1023}>3d 11h 42m</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd7e/5c41/86c649aa0d8909d595febb8cbfb3a88a"
          }}
          style={styles.ImageBackground_369_1024}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b11/393f/39fbb86f08f940f7b21bbf89ada09f3e"
          }}
          style={styles.ImageBackground_369_1025}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93c/df8a/8693a555848a8b33dad47269d2878c0b"
          }}
          style={styles.ImageBackground_369_1026}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93c/df8a/8693a555848a8b33dad47269d2878c0b"
          }}
          style={styles.ImageBackground_369_1027}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93c/df8a/8693a555848a8b33dad47269d2878c0b"
          }}
          style={styles.ImageBackground_369_1028}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93c/df8a/8693a555848a8b33dad47269d2878c0b"
          }}
          style={styles.ImageBackground_369_1029}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93c/df8a/8693a555848a8b33dad47269d2878c0b"
          }}
          style={styles.ImageBackground_369_1030}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93c/df8a/8693a555848a8b33dad47269d2878c0b"
          }}
          style={styles.ImageBackground_369_1031}
        />
        <View style={styles.View_369_1032}>
          <Text style={styles.Text_369_1032}>Episode watched</Text>
        </View>
        <View style={styles.View_369_1033}>
          <Text style={styles.Text_369_1033}>5E</Text>
        </View>
        <View style={styles.View_369_1034}>
          <Text style={styles.Text_369_1034}>9E</Text>
        </View>
        <View style={styles.View_369_1035}>
          <Text style={styles.Text_369_1035}>12E</Text>
        </View>
        <View style={styles.View_369_1036}>
          <Text style={styles.Text_369_1036}>17E</Text>
        </View>
        <View style={styles.View_369_1037}>
          <Text style={styles.Text_369_1037}>0E</Text>
        </View>
        <View style={styles.View_369_1038}>
          <Text style={styles.Text_369_1038}>7E</Text>
        </View>
        <View style={styles.View_369_1039}>
          <Text style={styles.Text_369_1039}>23E</Text>
        </View>
        <View style={styles.View_369_1040}>
          <Text style={styles.Text_369_1040}>Episodes</Text>
        </View>
        <View style={styles.View_369_1041}>
          <Text style={styles.Text_369_1041}>18/04</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e4c/525f/4133dc5924730d571fce00b84360a3b3"
          }}
          style={styles.ImageBackground_369_1042}
        />
        <View style={styles.View_369_1043}>
          <Text style={styles.Text_369_1043}>19/04</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd85/38b2/0a943d8c56c57aae6aa166af900ec6d1"
          }}
          style={styles.ImageBackground_369_1044}
        />
        <View style={styles.View_369_1045}>
          <Text style={styles.Text_369_1045}>20/04</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/850c/3f88/766159e4113462274361e2ceb69609ac"
          }}
          style={styles.ImageBackground_369_1046}
        />
        <View style={styles.View_369_1047}>
          <Text style={styles.Text_369_1047}>21/04</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5e4/21aa/286bf8319ec355ccbbc630d98746d957"
          }}
          style={styles.ImageBackground_369_1048}
        />
        <View style={styles.View_369_1049}>
          <Text style={styles.Text_369_1049}>24/04</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1050} />
        <View style={styles.View_369_1051}>
          <Text style={styles.Text_369_1051}>23/04</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db8/2c2f/000b2c994ae356655e64a243ade2b850"
          }}
          style={styles.ImageBackground_369_1052}
        />
        <View source={{ uri: "null" }} style={styles.View_369_1053} />
        <View style={styles.View_369_1054}>
          <Text style={styles.Text_369_1054}>Today</Text>
        </View>
        <View style={styles.View_369_1055}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aeb4/2c98/19de2666ac611c3ab8f4af5aa26b193b"
            }}
            style={styles.ImageBackground_369_1056}
          />
          <View style={styles.View_369_1057}>
            <View style={styles.View_369_1058}>
              <Text style={styles.Text_369_1058}>Days</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27e1/7d22/1e581ccae066db0c61f1119767d67111"
              }}
              style={styles.ImageBackground_369_1059}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_1060}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/dd93/af89198632fdf19afde64218821eadbe"
          }}
          style={styles.ImageBackground_369_1061}
        />
        <View style={styles.View_369_1062}>
          <Text style={styles.Text_369_1062}>Dashboard</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876b/b19c/10bd2acd4f9846836a14eafd74d4de31"
          }}
          style={styles.ImageBackground_369_1063}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_1064}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3bd/8253/e18e6008aafe030f7357fbf53e9016df"
          }}
          style={styles.ImageBackground_369_1065}
        />
        <View style={styles.View_369_1066}>
          <Text style={styles.Text_369_1066}>Most Watched Shows</Text>
        </View>
        <View style={styles.View_369_1067}>
          <Text style={styles.Text_369_1067}>Watching now</Text>
        </View>
        <View style={styles.View_369_1068}>
          <Text style={styles.Text_369_1068}>Pending to watch</Text>
        </View>
        <View style={styles.View_369_1069}>
          <Text style={styles.Text_369_1069}>Parthiban MK</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1070} />
        <View source={{ uri: "null" }} style={styles.View_369_1072} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_1074}
        />
        <View source={{ uri: "null" }} style={styles.View_369_1075} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_1077}
        />
        <View style={styles.View_369_1078}>
          <Text style={styles.Text_369_1078}>Naruto Shippūden</Text>
        </View>
        <View style={styles.View_369_1079}>
          <View style={styles.View_369_1080}>
            <Text style={styles.Text_369_1080}>211</Text>
          </View>
          <View style={styles.View_369_1081}>
            <Text style={styles.Text_369_1081}>Episodes</Text>
          </View>
        </View>
        <View style={styles.View_369_1082}>
          <View style={styles.View_369_1083}>
            <Text style={styles.Text_369_1083}>9</Text>
          </View>
          <View style={styles.View_369_1084}>
            <Text style={styles.Text_369_1084}>Seasons</Text>
          </View>
        </View>
        <View style={styles.View_369_1085}>
          <View style={styles.View_369_1086}>
            <Text style={styles.Text_369_1086}>79</Text>
          </View>
          <View style={styles.View_369_1087}>
            <Text style={styles.Text_369_1087}>Hours</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_1088}
        />
        <View style={styles.View_369_1089}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6581/0a12/6d234d868568ba953598bf7cd5f4eeca"
            }}
            style={styles.ImageBackground_369_1090}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_1091}
        />
        <View style={styles.View_369_1092}>
          <Text style={styles.Text_369_1092}>Naruto</Text>
        </View>
        <View style={styles.View_369_1093}>
          <View style={styles.View_369_1094}>
            <Text style={styles.Text_369_1094}>220</Text>
          </View>
          <View style={styles.View_369_1095}>
            <Text style={styles.Text_369_1095}>Episodes</Text>
          </View>
        </View>
        <View style={styles.View_369_1096}>
          <View style={styles.View_369_1097}>
            <Text style={styles.Text_369_1097}>5</Text>
          </View>
          <View style={styles.View_369_1098}>
            <Text style={styles.Text_369_1098}>Seasons</Text>
          </View>
        </View>
        <View style={styles.View_369_1099}>
          <View style={styles.View_369_1100}>
            <Text style={styles.Text_369_1100}>84</Text>
          </View>
          <View style={styles.View_369_1101}>
            <Text style={styles.Text_369_1101}>Hours</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_1102}
        />
        <View source={{ uri: "null" }} style={styles.View_369_1103} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_1105}
        />
        <View style={styles.View_369_1106}>
          <Text style={styles.Text_369_1106}>Naruto Shippūden</Text>
        </View>
        <View style={styles.View_369_1107}>
          <Text style={styles.Text_369_1107}>S10E16</Text>
        </View>
        <View style={styles.View_369_1108}>
          <Text style={styles.Text_369_1108}>Sakura&#39;s Resolve</Text>
        </View>
        <View style={styles.View_369_1109}>
          <Text style={styles.Text_369_1109}>(42%)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fe7/c368/01124798ad81530db9e813f12cce588a"
          }}
          style={styles.ImageBackground_369_1110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_1113}
        />
        <View style={styles.View_369_1114}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3242/1100/d49988e9bc15560d43cefde88cabc515"
            }}
            style={styles.ImageBackground_369_1115}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_1116}
        />
        <View style={styles.View_369_1117}>
          <Text style={styles.Text_369_1117}>How I Met Your Mother</Text>
        </View>
        <View style={styles.View_369_1118}>
          <Text style={styles.Text_369_1118}>S5E08</Text>
        </View>
        <View style={styles.View_369_1119}>
          <Text style={styles.Text_369_1119}>The Playbook</Text>
        </View>
        <View style={styles.View_369_1120}>
          <Text style={styles.Text_369_1120}>(46%)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d4/eb7b/6a69679ef3e2f46363a983c0e49ca3aa"
          }}
          style={styles.ImageBackground_369_1121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_1124}
        />
        <View style={styles.View_369_1125}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc19/abc4/390a554718b1d1840b5bc0c7d833c1ef"
            }}
            style={styles.ImageBackground_369_1126}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_1127}
        />
        <View style={styles.View_369_1128}>
          <Text style={styles.Text_369_1128}>Attack on Titan</Text>
        </View>
        <View style={styles.View_369_1129}>
          <Text style={styles.Text_369_1129}>S01E01</Text>
        </View>
        <View style={styles.View_369_1130}>
          <Text style={styles.Text_369_1130}>To You, 2,000 Ye...</Text>
        </View>
        <View style={styles.View_369_1131}>
          <Text style={styles.Text_369_1131}>(0%)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e04c/f7fa/5561978666daf07bf3c5bf95e82912c8"
          }}
          style={styles.ImageBackground_369_1132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba2/4357/bdd672105d8df0d23dac96de70dc112d"
          }}
          style={styles.ImageBackground_369_1135}
        />
        <View style={styles.View_369_1136}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb3/986b/af3c2971a900fb23773ead710ac3ec9c"
            }}
            style={styles.ImageBackground_369_1137}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e7/c699/fc2f2c433f49d0827976f3451ad85738"
          }}
          style={styles.ImageBackground_369_1138}
        />
        <View style={styles.View_369_1139}>
          <Text style={styles.Text_369_1139}>Demon Slayer</Text>
        </View>
        <View style={styles.View_369_1140}>
          <Text style={styles.Text_369_1140}>S01E01</Text>
        </View>
        <View style={styles.View_369_1141}>
          <Text style={styles.Text_369_1141}>Cruelty</Text>
        </View>
        <View style={styles.View_369_1142}>
          <Text style={styles.Text_369_1142}>(0%)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e04c/f7fa/5561978666daf07bf3c5bf95e82912c8"
          }}
          style={styles.ImageBackground_369_1143}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_369_968: {
    width: wp("100%"),
    height: hp("283.1967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_969: {
    width: wp("100%"),
    height: hp("283.1967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_970: {
    width: wp("91.11111111111111%"),
    height: hp("42.21311475409836%"),
    top: hp("107.10382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_971: {
    width: wp("36.94444444444444%"),
    top: hp("108.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_972: {
    width: wp("40.55555555555556%"),
    top: hp("144.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%")
  },
  Text_369_972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_973: {
    width: wp("68.61111111111111%"),
    top: hp("139.89071038251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%")
  },
  Text_369_973: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_974: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("114.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%")
  },
  View_369_975: {
    width: wp("8.055555555555555%"),
    top: hp("115.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%")
  },
  Text_369_975: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_976: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("118.98907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%")
  },
  View_369_977: {
    width: wp("10%"),
    top: hp("119.53551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%")
  },
  Text_369_977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_978: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("123.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%")
  },
  View_369_979: {
    width: wp("8.333333333333332%"),
    top: hp("123.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%")
  },
  Text_369_979: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_980: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("127.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%")
  },
  View_369_981: {
    width: wp("11.944444444444445%"),
    top: hp("127.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%")
  },
  Text_369_981: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_982: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("131.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555556%")
  },
  View_369_983: {
    width: wp("8.333333333333332%"),
    top: hp("131.69398907103823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%")
  },
  Text_369_983: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_984: {
    width: wp("41.65777842203776%"),
    height: hp("20.486612788966443%"),
    top: hp("115.02992390283471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.671142578125%")
  },
  ImageBackground_369_985: {
    width: wp("22.21666759914822%"),
    height: hp("10.927049188666004%"),
    top: hp("119.74794148095971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.26614040798611%")
  },
  View_369_986: {
    width: wp("50.30278099907769%"),
    height: hp("24.739072622497225%"),
    top: hp("112.83402573215507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.353583441840278%")
  },
  ImageBackground_369_987: {
    width: wp("36.11111111111111%"),
    height: hp("17.759562841530055%"),
    top: hp("3.494813012295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.090861002604165%")
  },
  ImageBackground_369_990: {
    width: wp("49.32869381374783%"),
    height: hp("24.260013351023524%"),
    top: hp("0.24454085553277594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.482177734375%")
  },
  ImageBackground_369_993: {
    width: wp("49.0905041164822%"),
    height: hp("24.14287087695846%"),
    top: hp("0.30315795231385323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6011962890625%")
  },
  ImageBackground_369_996: {
    width: wp("44.23611111111111%"),
    height: hp("21.755464480874316%"),
    top: hp("1.4978127401383148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.033040364583333%")
  },
  ImageBackground_369_999: {
    width: wp("50.30278099907769%"),
    height: hp("24.739072622497225%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1002: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1003: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  ImageBackground_369_1004: {
    width: wp("91.11111111111111%"),
    height: hp("29.508196721311474%"),
    top: hp("40.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_1005: {
    width: wp("53.333333333333336%"),
    top: hp("64.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%")
  },
  Text_369_1005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1006: {
    width: wp("17.22222222222222%"),
    top: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%")
  },
  Text_369_1006: {
    color: "rgba(142, 142, 142, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1007: {
    width: wp("49.166666666666664%"),
    top: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_1007: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1008: {
    width: wp("22.22222222222222%"),
    height: hp("6.557377049180328%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_369_1009: {
    width: wp("22.22222222222222%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1010: {
    width: wp("9.722222222222223%"),
    height: hp("5.191256830601093%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888889%")
  },
  View_369_1011: {
    width: wp("6.388888888888888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%")
  },
  Text_369_1011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1012: {
    width: wp("9.722222222222223%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1013: {
    width: wp("22.22222222222222%"),
    height: hp("6.557377049180328%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.77777777777779%")
  },
  ImageBackground_369_1014: {
    width: wp("22.22222222222222%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1015: {
    width: wp("13.61111111111111%"),
    height: hp("5.191256830601093%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444429%")
  },
  View_369_1016: {
    width: wp("9.722222222222223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.944444444444457%")
  },
  Text_369_1016: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1017: {
    width: wp("13.61111111111111%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1017: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1018: {
    width: wp("22.22222222222222%"),
    height: hp("6.557377049180328%"),
    top: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%")
  },
  ImageBackground_369_1019: {
    width: wp("22.22222222222222%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1020: {
    width: wp("12.5%"),
    height: hp("5.191256830601093%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.999999999999993%")
  },
  View_369_1021: {
    width: wp("6.388888888888888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%")
  },
  Text_369_1021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1022: {
    width: wp("12.5%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1022: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1023: {
    width: wp("30%"),
    top: hp("59.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.27777777777778%")
  },
  Text_369_1023: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1024: {
    width: wp("91.11111111111111%"),
    height: hp("31.830601092896178%"),
    top: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_369_1025: {
    width: wp("75.27777777777777%"),
    height: hp("0%"),
    top: hp("100.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  ImageBackground_369_1026: {
    width: wp("74.44444444444444%"),
    height: hp("0%"),
    top: hp("79.91803278688525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  ImageBackground_369_1027: {
    width: wp("74.44444444444444%"),
    height: hp("0%"),
    top: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  ImageBackground_369_1028: {
    width: wp("74.44444444444444%"),
    height: hp("0%"),
    top: hp("86.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  ImageBackground_369_1029: {
    width: wp("74.44444444444444%"),
    height: hp("0%"),
    top: hp("90.1639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  ImageBackground_369_1030: {
    width: wp("74.44444444444444%"),
    height: hp("0%"),
    top: hp("93.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  ImageBackground_369_1031: {
    width: wp("74.44444444444444%"),
    height: hp("0%"),
    top: hp("96.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  View_369_1032: {
    width: wp("38.333333333333336%"),
    top: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_1032: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1033: {
    width: wp("2.7777777777777777%"),
    top: hp("94.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%")
  },
  Text_369_1033: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1034: {
    width: wp("2.7777777777777777%"),
    top: hp("92.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  Text_369_1034: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1035: {
    width: wp("3.888888888888889%"),
    top: hp("91.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.166666666666664%")
  },
  Text_369_1035: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1036: {
    width: wp("3.888888888888889%"),
    top: hp("86.47540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.55555555555556%")
  },
  Text_369_1036: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1037: {
    width: wp("2.7777777777777777%"),
    top: hp("98.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%")
  },
  Text_369_1037: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1038: {
    width: wp("2.7777777777777777%"),
    top: hp("93.44262295081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.61111111111111%")
  },
  Text_369_1038: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1039: {
    width: wp("3.888888888888889%"),
    top: hp("98.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.44444444444444%")
  },
  Text_369_1039: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1040: {
    width: wp("4.444444444444445%"),
    top: hp("84.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%")
  },
  Text_369_1040: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1041: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.722222222222223%")
  },
  Text_369_1041: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1042: {
    width: wp("2.7777777777777777%"),
    height: hp("3.483606557377049%"),
    top: hp("96.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%")
  },
  View_369_1043: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.111111111111114%")
  },
  Text_369_1043: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1044: {
    width: wp("2.7777777777777777%"),
    height: hp("5.532786885245901%"),
    top: hp("94.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%")
  },
  View_369_1045: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22222222222222%")
  },
  Text_369_1045: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1046: {
    width: wp("2.7777777777777777%"),
    height: hp("6.898907103825136%"),
    top: hp("93.44262295081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.72222222222222%")
  },
  View_369_1047: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.61111111111111%")
  },
  Text_369_1047: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1048: {
    width: wp("2.7777777777777777%"),
    height: hp("11.816939890710383%"),
    top: hp("88.52459016393442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  View_369_1049: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  Text_369_1049: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1050: {
    width: wp("2.7777777777777777%"),
    height: hp("0.47814207650273227%"),
    top: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%")
  },
  View_369_1051: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.27777777777777%")
  },
  Text_369_1051: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1052: {
    width: wp("2.7777777777777777%"),
    height: hp("4.849726775956284%"),
    top: hp("95.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.61111111111111%")
  },
  View_369_1053: {
    width: wp("2.7777777777777777%"),
    height: hp("0.7513661202185792%"),
    top: hp("99.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_369_1054: {
    width: wp("7.5%"),
    top: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%")
  },
  Text_369_1054: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1055: {
    width: wp("13.88888888888889%"),
    height: hp("3.278688524590164%"),
    top: hp("73.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.27777777777777%")
  },
  ImageBackground_369_1056: {
    width: wp("13.88888888888889%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1057: {
    width: wp("10.055601331922743%"),
    height: hp("1.639344262295082%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.944444444444457%")
  },
  View_369_1058: {
    width: wp("6.111111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1058: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1059: {
    width: wp("2.5556262334187827%"),
    height: hp("0.7856702543998676%"),
    top: hp("0.5464314111594888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.499999999999986%")
  },
  ImageBackground_369_1060: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1061: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1062: {
    width: wp("33.88888888888889%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_1062: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1063: {
    width: wp("6.41889837053087%"),
    height: hp("3.2347621813497907%"),
    top: hp("5.486426848531421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.13682725694444%")
  },
  ImageBackground_369_1064: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1065: {
    width: wp("91.11111111111111%"),
    height: hp("125.27322404371584%"),
    top: hp("152.04918032786884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_1066: {
    width: wp("48.61111111111111%"),
    top: hp("153.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_1066: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1067: {
    width: wp("31.666666666666664%"),
    top: hp("194.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_1067: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1068: {
    width: wp("38.88888888888889%"),
    top: hp("237.2950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  Text_369_1068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1069: {
    width: wp("34.166666666666664%"),
    top: hp("32.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%")
  },
  Text_369_1069: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1070: {
    width: wp("100%"),
    height: hp("27.732240437158467%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1072: {
    width: wp("25%"),
    height: hp("17.349726775956285%"),
    top: hp("25.273224043715846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_369_1074: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("157.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_369_1075: {
    width: wp("35%"),
    height: hp("25.273224043715846%"),
    top: hp("157.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  ImageBackground_369_1077: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("165.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_369_1078: {
    width: wp("26.944444444444443%"),
    top: hp("181.14754098360655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1078: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1079: {
    width: wp("11.11111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("184.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  View_369_1080: {
    width: wp("7.777777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.94444444444445%")
  },
  Text_369_1080: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1081: {
    width: wp("11.11111111111111%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1081: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1082: {
    width: wp("10.555555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("184.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.72222222222223%")
  },
  View_369_1083: {
    width: wp("2.7777777777777777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%")
  },
  Text_369_1083: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1084: {
    width: wp("10.555555555555555%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1084: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1085: {
    width: wp("7.5%"),
    height: hp("4.644808743169399%"),
    top: hp("184.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.05555555555556%")
  },
  View_369_1086: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  Text_369_1086: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1087: {
    width: wp("7.5%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1087: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1088: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("157.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  View_369_1089: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("156.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  ImageBackground_369_1090: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1091: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("165.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  View_369_1092: {
    width: wp("10.277777777777777%"),
    top: hp("181.14754098360655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1093: {
    width: wp("11.11111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("184.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  View_369_1094: {
    width: wp("7.777777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444446%")
  },
  Text_369_1094: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1095: {
    width: wp("11.11111111111111%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1095: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1096: {
    width: wp("10.555555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("184.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.61111111111111%")
  },
  View_369_1097: {
    width: wp("2.7777777777777777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%")
  },
  Text_369_1097: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1098: {
    width: wp("10.555555555555555%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1099: {
    width: wp("7.5%"),
    height: hp("4.644808743169399%"),
    top: hp("184.4262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%")
  },
  View_369_1100: {
    width: wp("5.277777777777778%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%")
  },
  Text_369_1100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1101: {
    width: wp("7.5%"),
    top: hp("3.0054644808743376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1102: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("200.40983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  View_369_1103: {
    width: wp("35%"),
    height: hp("25.273224043715846%"),
    top: hp("200.40983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  ImageBackground_369_1105: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("207.9234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  View_369_1106: {
    width: wp("31.38888888888889%"),
    top: hp("223.7704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1107: {
    width: wp("11.38888888888889%"),
    top: hp("226.775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1108: {
    width: wp("24.72222222222222%"),
    top: hp("229.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1109: {
    width: wp("8.61111111111111%"),
    top: hp("229.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.833333333333336%")
  },
  Text_369_1109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1110: {
    width: wp("39.44444444444444%"),
    height: hp("1.092896174863388%"),
    top: hp("232.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  ImageBackground_369_1113: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("200.40983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_369_1114: {
    width: wp("35.201666090223526%"),
    height: hp("25.968443239972892%"),
    top: hp("200.5092933529713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.92583550347223%")
  },
  ImageBackground_369_1115: {
    width: wp("35.201666090223526%"),
    height: hp("25.968443239972892%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1116: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("207.9234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_369_1117: {
    width: wp("34.44444444444444%"),
    top: hp("223.7704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1118: {
    width: wp("9.722222222222223%"),
    top: hp("226.775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1119: {
    width: wp("20.27777777777778%"),
    top: hp("229.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1120: {
    width: wp("8.61111111111111%"),
    top: hp("229.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5%")
  },
  Text_369_1120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1121: {
    width: wp("39.44444444444444%"),
    height: hp("1.092896174863388%"),
    top: hp("232.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  ImageBackground_369_1124: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("243.1693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  View_369_1125: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("242.34972677595627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  ImageBackground_369_1126: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1127: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("250.6830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  View_369_1128: {
    width: wp("26.666666666666668%"),
    top: hp("266.53005464480873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1129: {
    width: wp("11.38888888888889%"),
    top: hp("269.53551912568304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1130: {
    width: wp("26.944444444444443%"),
    top: hp("272.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%")
  },
  Text_369_1130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1131: {
    width: wp("6.666666666666667%"),
    top: hp("272.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_369_1131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1132: {
    width: wp("39.44444444444444%"),
    height: hp("1.092896174863388%"),
    top: hp("274.8633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%")
  },
  ImageBackground_369_1135: {
    width: wp("39.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("243.1693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_369_1136: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("241.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  ImageBackground_369_1137: {
    width: wp("35%"),
    height: hp("25.81967213114754%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1138: {
    width: wp("39.44444444444444%"),
    height: hp("25.273224043715846%"),
    top: hp("250.6830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_369_1139: {
    width: wp("24.166666666666668%"),
    top: hp("266.53005464480873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1140: {
    width: wp("11.38888888888889%"),
    top: hp("269.53551912568304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1141: {
    width: wp("10.555555555555555%"),
    top: hp("272.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.11111111111111%")
  },
  Text_369_1141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1142: {
    width: wp("6.666666666666667%"),
    top: hp("272.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5%")
  },
  Text_369_1142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1143: {
    width: wp("39.44444444444444%"),
    height: hp("1.092896174863388%"),
    top: hp("274.8633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%")
  },
  View_2: { height: 2073 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
