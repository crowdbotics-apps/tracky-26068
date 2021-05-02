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
      <View style={styles.View_369_1225}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b748/7f7f/94063fbd4fcfb6322d62c1287ed4dce6"
          }}
          style={styles.ImageBackground_369_1226}
        />
        <View style={styles.View_369_1227}>
          <View style={styles.View_369_1228}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a773/85c5/e10a02710026b65a54fb513bc49e3ee5"
              }}
              style={styles.ImageBackground_369_1229}
            />
          </View>
          <View style={styles.View_369_1230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3c7/887e/48d6dea9f8db944f34ed18bc84558139"
              }}
              style={styles.ImageBackground_369_1231}
            />
          </View>
          <View style={styles.View_369_1232}>
            <View source={{ uri: "null" }} style={styles.View_369_1233} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b19c/86c7/4688bc2b4c402e80bf689a0c4b390642"
              }}
              style={styles.ImageBackground_369_1235}
            />
            <View style={styles.View_369_1236}>
              <Text style={styles.Text_369_1236}>For All Mankind</Text>
            </View>
          </View>
          <View style={styles.View_369_1237}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3446/a985/901527aa17aefbfca3b443ab924626c8"
              }}
              style={styles.ImageBackground_369_1238}
            />
          </View>
          <View style={styles.View_369_1239}>
            <Text style={styles.Text_369_1239}>Trending TV Shows</Text>
          </View>
          <View style={styles.View_369_1240}>
            <View style={styles.View_369_1241}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788f/3910/f090b6eb573bfd703ae52e293520c2fe"
                }}
                style={styles.ImageBackground_369_1242}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ac/2611/89bd1be1c707924bb6b1c83d2573cb3c"
              }}
              style={styles.ImageBackground_369_1243}
            />
          </View>
          <View style={styles.View_369_1244}>
            <View source={{ uri: "null" }} style={styles.View_369_1245} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ac/2611/89bd1be1c707924bb6b1c83d2573cb3c"
              }}
              style={styles.ImageBackground_369_1247}
            />
          </View>
          <View style={styles.View_369_1248}>
            <View style={styles.View_369_1249}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe9/2903/e800a7a47d24e8604d9be03fc716a65d"
                }}
                style={styles.ImageBackground_369_1250}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ac/2611/89bd1be1c707924bb6b1c83d2573cb3c"
              }}
              style={styles.ImageBackground_369_1251}
            />
          </View>
          <View style={styles.View_369_1252}>
            <View source={{ uri: "null" }} style={styles.View_369_1253} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57d8/30d9/48c09ab0b87053aa793e05753b256184"
              }}
              style={styles.ImageBackground_369_1255}
            />
            <View style={styles.View_369_1256}>
              <Text style={styles.Text_369_1256}>The Nevers</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961c/73aa/c4fc3f8f8b096aee4a887f94d55990f5"
            }}
            style={styles.ImageBackground_369_1257}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41df/8ae1/7d44c300ee3421506cac05a1e57ec19e"
          }}
          style={styles.ImageBackground_369_1258}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae28/6d41/68d9a7d3ca685a9c00dea46e20a06322"
          }}
          style={styles.ImageBackground_369_1259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b8/dd93/af89198632fdf19afde64218821eadbe"
          }}
          style={styles.ImageBackground_369_1260}
        />
        <View style={styles.View_369_1261}>
          <Text style={styles.Text_369_1261}>Search</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_369_1262} />
        <View source={{ uri: "null" }} style={styles.View_369_1263} />
        <View style={styles.View_369_1264}>
          <View style={styles.View_369_1265}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a2/b17b/25eb9b4864623c276c0c35fee10663a4"
              }}
              style={styles.ImageBackground_369_1266}
            />
            <View style={styles.View_369_1267}>
              <View style={styles.View_369_1268}>
                <Text style={styles.Text_369_1268}>Filter by genres</Text>
              </View>
              <View style={styles.View_369_1269}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/5024/f5e5310b326740a576cb08dfc3cb884d"
                  }}
                  style={styles.ImageBackground_369_1270}
                />
                <View style={styles.View_369_1271}>
                  <Text style={styles.Text_369_1271}>Action</Text>
                </View>
              </View>
              <View style={styles.View_369_1272}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f0d/f16b/4f5602b1020c03578f851c9f5bc5bbc8"
                  }}
                  style={styles.ImageBackground_369_1273}
                />
                <View style={styles.View_369_1274}>
                  <Text style={styles.Text_369_1274}>Adventure </Text>
                </View>
              </View>
              <View style={styles.View_369_1275}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56a0/3f6a/23c1286eff263f5149629cb295b6b12d"
                  }}
                  style={styles.ImageBackground_369_1276}
                />
                <View style={styles.View_369_1277}>
                  <Text style={styles.Text_369_1277}>Anime</Text>
                </View>
              </View>
              <View style={styles.View_369_1278}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a7/1c61/ad0ddf28a6b5a30d9b593095570782fb"
                  }}
                  style={styles.ImageBackground_369_1279}
                />
                <View style={styles.View_369_1280}>
                  <Text style={styles.Text_369_1280}>Comedy</Text>
                </View>
              </View>
              <View style={styles.View_369_1281}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/5024/f5e5310b326740a576cb08dfc3cb884d"
                  }}
                  style={styles.ImageBackground_369_1282}
                />
                <View style={styles.View_369_1283}>
                  <Text style={styles.Text_369_1283}>Drama</Text>
                </View>
              </View>
              <View style={styles.View_369_1284}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3a1/17a0/eeeee599a70b575536f6e80a41ae289b"
                  }}
                  style={styles.ImageBackground_369_1285}
                />
                <View style={styles.View_369_1286}>
                  <Text style={styles.Text_369_1286}>Sports</Text>
                </View>
              </View>
              <View style={styles.View_369_1287}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a7/1c61/ad0ddf28a6b5a30d9b593095570782fb"
                  }}
                  style={styles.ImageBackground_369_1288}
                />
                <View style={styles.View_369_1289}>
                  <Text style={styles.Text_369_1289}>Mystery</Text>
                </View>
              </View>
              <View style={styles.View_369_1290}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d3/b0b1/67c0b73ae8336ee9519a6b4f4fde3bf0"
                  }}
                  style={styles.ImageBackground_369_1291}
                />
                <View style={styles.View_369_1292}>
                  <Text style={styles.Text_369_1292}>Thriller</Text>
                </View>
              </View>
              <View style={styles.View_369_1293}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5df8/b16e/c1714dc131b6c34cfd70aaa03d180956"
                  }}
                  style={styles.ImageBackground_369_1294}
                />
                <View style={styles.View_369_1295}>
                  <Text style={styles.Text_369_1295}>Romance</Text>
                </View>
              </View>
              <View style={styles.View_369_1296}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d648/58ea/ff06d753d38b88a1787801b14f336066"
                  }}
                  style={styles.ImageBackground_369_1297}
                />
                <View style={styles.View_369_1298}>
                  <Text style={styles.Text_369_1298}>Racing</Text>
                </View>
              </View>
              <View style={styles.View_369_1299}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc6/10da/5bc42bfbe6ea3c41930c8c0417f6e167"
                  }}
                  style={styles.ImageBackground_369_1300}
                />
                <View style={styles.View_369_1301}>
                  <Text style={styles.Text_369_1301}>Sci-Fi</Text>
                </View>
              </View>
              <View style={styles.View_369_1302}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a1/bef2/ef6072bcb437518294dc4db3e19a9c08"
                  }}
                  style={styles.ImageBackground_369_1303}
                />
                <View style={styles.View_369_1304}>
                  <Text style={styles.Text_369_1304}>Crime</Text>
                </View>
              </View>
              <View style={styles.View_369_1305}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc60/5024/f5e5310b326740a576cb08dfc3cb884d"
                  }}
                  style={styles.ImageBackground_369_1306}
                />
                <View style={styles.View_369_1307}>
                  <Text style={styles.Text_369_1307}>Family</Text>
                </View>
              </View>
              <View style={styles.View_369_1308}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42b9/267c/bd0470e82116288f55aca2794bf61be3"
                  }}
                  style={styles.ImageBackground_369_1309}
                />
                <View style={styles.View_369_1310}>
                  <Text style={styles.Text_369_1310}>Documentary</Text>
                </View>
              </View>
              <View style={styles.View_369_1311}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae12/4f34/c04c8f7128381113b65c3895ba3427c2"
                  }}
                  style={styles.ImageBackground_369_1312}
                />
                <View style={styles.View_369_1313}>
                  <Text style={styles.Text_369_1313}>Underrated</Text>
                </View>
              </View>
              <View style={styles.View_369_1314}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7a8/7c45/c5eff55cf66225ed32ae2668f0386244"
                  }}
                  style={styles.ImageBackground_369_1315}
                />
                <View style={styles.View_369_1316}>
                  <Text style={styles.Text_369_1316}>Fantasy</Text>
                </View>
              </View>
              <View style={styles.View_369_1317}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3a1/17a0/eeeee599a70b575536f6e80a41ae289b"
                  }}
                  style={styles.ImageBackground_369_1318}
                />
                <View style={styles.View_369_1319}>
                  <Text style={styles.Text_369_1319}>Harem</Text>
                </View>
              </View>
              <View style={styles.View_369_1320}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8802/cf7b/342be57d1a8f5eeb21ea0676547e0069"
                  }}
                  style={styles.ImageBackground_369_1321}
                />
                <View style={styles.View_369_1322}>
                  <Text style={styles.Text_369_1322}>Love</Text>
                </View>
              </View>
              <View style={styles.View_369_1323}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be5a/567f/c5d9b533747d7a86141a55b59c1d72df"
                  }}
                  style={styles.ImageBackground_369_1324}
                />
                <View style={styles.View_369_1325}>
                  <Text style={styles.Text_369_1325}>Politics</Text>
                </View>
              </View>
              <View style={styles.View_369_1326}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcdd/363e/9c18a699c6ae735fc31153995010d97e"
                  }}
                  style={styles.ImageBackground_369_1327}
                />
                <View style={styles.View_369_1328}>
                  <Text style={styles.Text_369_1328}>Apply</Text>
                </View>
              </View>
              <View style={styles.View_369_1329}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d78e/ac77/cbf88ae2e427fe82ab3ecaedcca76d33"
                  }}
                  style={styles.ImageBackground_369_1330}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c5/8a2d/fb94ed990535941bfa6c11501f9568bc"
                  }}
                  style={styles.ImageBackground_369_1331}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a637/d344/944e6c101e16e89555f8b867dfdd5850"
                  }}
                  style={styles.ImageBackground_369_1332}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_369_1334}>
          <View style={styles.View_369_1335}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cabb/5558/4a0dfeaa1693bfacd64d33a82e0c2404"
              }}
              style={styles.ImageBackground_369_1336}
            />
            <View style={styles.View_369_1337}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d3/0b80/47ca1bfee26b3f9cdfef3f0281f41cac"
                }}
                style={styles.ImageBackground_369_1338}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd3/cc0b/ad2a226dbb620eb73f8eca25a949e439"
                }}
                style={styles.ImageBackground_369_1339}
              />
              <View style={styles.View_369_1342}>
                <Text style={styles.Text_369_1342}>Search by tittle</Text>
              </View>
              <View source={{ uri: "null" }} style={styles.View_369_1343} />
            </View>
            <View style={styles.View_369_1344}>
              <Text style={styles.Text_369_1344}>Recently searched</Text>
            </View>
            <View style={styles.View_369_1345}>
              <Text style={styles.Text_369_1345}>How I Met Your Mother</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_369_1346}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aef/cba6/8e72a9b81504ff53abdb9a07257789cf"
            }}
            style={styles.ImageBackground_369_1347}
          />
          <View style={styles.View_369_1348}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_1349}
            />
            <View style={styles.View_369_1350}>
              <Text style={styles.Text_369_1350}>Discover</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af5e/5edf/27f48c53e2b6309dda80e0fb5187c083"
              }}
              style={styles.ImageBackground_369_1351}
            />
          </View>
          <View style={styles.View_369_1352}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_1353}
            />
            <View style={styles.View_369_1354}>
              <Text style={styles.Text_369_1354}>Updates</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fb/c318/544a952627d642b25f8a75da5cc51eee"
              }}
              style={styles.ImageBackground_369_1355}
            />
            <View source={{ uri: "null" }} style={styles.View_369_1356} />
          </View>
          <View style={styles.View_369_1357}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_1358}
            />
            <View style={styles.View_369_1359}>
              <Text style={styles.Text_369_1359}>My Shows</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/879a/e2fa/8950a53590bdd6be682c5a55420dcac8"
              }}
              style={styles.ImageBackground_369_1360}
            />
          </View>
          <View style={styles.View_369_1362}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6075/0601/460ea643401b1c8799ee13dc340ca13c"
              }}
              style={styles.ImageBackground_369_1363}
            />
            <View style={styles.View_369_1364}>
              <Text style={styles.Text_369_1364}>Dashboard</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/046b/272a/24304de146d3cbf82db3e1d9e63452b3"
              }}
              style={styles.ImageBackground_369_1365}
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
  View_369_1225: {
    width: wp("109.72222222222223%"),
    height: hp("122.54098360655739%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1226: {
    width: wp("100%"),
    height: hp("109.28961748633881%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1227: {
    width: wp("105.55555555555556%"),
    height: hp("101.77595628415301%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%")
  },
  View_369_1228: {
    width: wp("44.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("68.98907103825138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_369_1229: {
    width: wp("44.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1230: {
    width: wp("44.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("62.97814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.94444444444444%")
  },
  ImageBackground_369_1231: {
    width: wp("44.44444444444444%"),
    height: hp("32.78688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1232: {
    width: wp("74.16666666666667%"),
    height: hp("20.491803278688526%"),
    top: hp("48.49726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888893%")
  },
  View_369_1233: {
    width: wp("74.16666666666667%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1235: {
    width: wp("60%"),
    height: hp("10.245901639344263%"),
    top: hp("10.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1236: {
    width: wp("31.38888888888889%"),
    top: hp("16.9398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  Text_369_1236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1237: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("48.49726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_369_1238: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1239: {
    width: wp("48.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  Text_369_1239: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1240: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("4.781420765027324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.49999999999999%")
  },
  View_369_1241: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1242: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1243: {
    width: wp("28.888888888888886%"),
    height: hp("10.245901639344263%"),
    top: hp("10.245901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1244: {
    width: wp("28.888888888888886%"),
    height: hp("21.174863387978142%"),
    top: hp("4.781420765027324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888893%")
  },
  View_369_1245: {
    width: wp("28.61111111111111%"),
    height: hp("21.174863387978142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  ImageBackground_369_1247: {
    width: wp("28.888888888888886%"),
    height: hp("10.245901639344263%"),
    top: hp("10.245901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1248: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("4.781420765027324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  View_369_1249: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1250: {
    width: wp("28.888888888888886%"),
    height: hp("21.311475409836063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1251: {
    width: wp("28.888888888888886%"),
    height: hp("10.245901639344263%"),
    top: hp("10.245901639344265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1252: {
    width: wp("91.11111111111111%"),
    height: hp("25.273224043715846%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777857%")
  },
  View_369_1253: {
    width: wp("91.11111111111111%"),
    height: hp("25.273224043715846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1255: {
    width: wp("91.11111111111111%"),
    height: hp("10.245901639344263%"),
    top: hp("10.245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1256: {
    width: wp("22.77777777777778%"),
    top: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%")
  },
  Text_369_1256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1257: {
    width: wp("29.166666666666668%"),
    height: hp("6.967213114754098%"),
    top: hp("62.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1258: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1259: {
    width: wp("100%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1260: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1261: {
    width: wp("21.666666666666668%"),
    top: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  Text_369_1261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1262: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1263: {
    width: wp("4.444444444444445%"),
    height: hp("87.43169398907104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.55555555555556%")
  },
  View_369_1264: {
    width: wp("96.94444444444444%"),
    height: hp("47.404371584699454%"),
    top: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333334%")
  },
  View_369_1265: {
    width: wp("96.94444444444444%"),
    height: hp("47.404371584699454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1266: {
    width: wp("96.94444444444444%"),
    height: hp("47.404371584699454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1267: {
    width: wp("93.33333333333333%"),
    height: hp("47.404371584699454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.611111111111111%")
  },
  View_369_1268: {
    width: wp("34.44444444444444%"),
    top: hp("8.743169398907101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1269: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1270: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1271: {
    width: wp("11.38888888888889%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_1271: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1272: {
    width: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.555555555555557%")
  },
  ImageBackground_369_1273: {
    width: wp("25.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1274: {
    width: wp("18.055555555555554%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_1274: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1275: {
    width: wp("17.5%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.166666666666664%")
  },
  ImageBackground_369_1276: {
    width: wp("17.5%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1277: {
    width: wp("11.38888888888889%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  Text_369_1277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1278: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("13.251366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%")
  },
  ImageBackground_369_1279: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1280: {
    width: wp("14.444444444444443%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  Text_369_1280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1281: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%")
  },
  ImageBackground_369_1282: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1283: {
    width: wp("11.666666666666666%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_1283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1284: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("35.10928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1285: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1286: {
    width: wp("11.666666666666666%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1287: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.88888888888889%")
  },
  ImageBackground_369_1288: {
    width: wp("20.833333333333336%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1289: {
    width: wp("14.166666666666666%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  Text_369_1289: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1290: {
    width: wp("19.166666666666668%"),
    height: hp("4.098360655737705%"),
    top: hp("35.10928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333336%")
  },
  ImageBackground_369_1291: {
    width: wp("19.166666666666668%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1292: {
    width: wp("12.5%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_1292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1293: {
    width: wp("23.055555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.111111111111107%")
  },
  ImageBackground_369_1294: {
    width: wp("23.055555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1295: {
    width: wp("16.666666666666664%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_1295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1296: {
    width: wp("18.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1297: {
    width: wp("18.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1298: {
    width: wp("11.944444444444445%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_1298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1299: {
    width: wp("16.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777779%")
  },
  ImageBackground_369_1300: {
    width: wp("16.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1301: {
    width: wp("10%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_1301: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1302: {
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1303: {
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1304: {
    width: wp("10.555555555555555%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_1304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1305: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333334%")
  },
  ImageBackground_369_1306: {
    width: wp("17.77777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1307: {
    width: wp("11.666666666666666%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_1307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1308: {
    width: wp("30.555555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("18.715846994535518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%")
  },
  ImageBackground_369_1309: {
    width: wp("30.555555555555557%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1310: {
    width: wp("23.333333333333332%"),
    top: hp("0.8196721311475343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_1310: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1311: {
    width: wp("26.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("35.10928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.77777777777778%")
  },
  ImageBackground_369_1312: {
    width: wp("26.38888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1313: {
    width: wp("19.444444444444446%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  Text_369_1313: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1314: {
    width: wp("20.27777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1315: {
    width: wp("20.27777777777778%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1316: {
    width: wp("13.88888888888889%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333333%")
  },
  Text_369_1316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1317: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%")
  },
  ImageBackground_369_1318: {
    width: wp("18.055555555555554%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1319: {
    width: wp("11.944444444444445%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  Text_369_1319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1320: {
    width: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    top: hp("24.18032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%")
  },
  ImageBackground_369_1321: {
    width: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1322: {
    width: wp("8.333333333333332%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_1322: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1323: {
    width: wp("19.72222222222222%"),
    height: hp("4.098360655737705%"),
    top: hp("29.644808743169392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.777777777777786%")
  },
  ImageBackground_369_1324: {
    width: wp("19.72222222222222%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1325: {
    width: wp("13.055555555555557%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  Text_369_1325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1326: {
    width: wp("20%"),
    height: hp("4.098360655737705%"),
    top: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%")
  },
  ImageBackground_369_1327: {
    width: wp("20%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1328: {
    width: wp("10.555555555555555%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111%")
  },
  Text_369_1328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1329: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_369_1330: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1331: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  ImageBackground_369_1332: {
    width: wp("5%"),
    height: hp("1.4344262295081966%"),
    top: hp("2.5956284153005473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_369_1334: {
    width: wp("91.11111111111111%"),
    height: hp("87.97814207650273%"),
    top: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_369_1335: {
    width: wp("91.11111111111111%"),
    height: hp("87.97814207650273%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1336: {
    width: wp("91.11111111111111%"),
    height: hp("87.97814207650273%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1337: {
    width: wp("80%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1338: {
    width: wp("80%"),
    height: hp("5.8743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1339: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%")
  },
  View_369_1342: {
    width: wp("26.111111111111114%"),
    top: hp("1.6393442622950811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.22222222222222%")
  },
  Text_369_1342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1343: {
    width: wp("3.3341704474555125%"),
    height: hp("1.6397559577650058%"),
    top: hp("2.1855922344603815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22263760036893%")
  },
  View_369_1344: {
    width: wp("41.11111111111111%"),
    top: hp("8.469945355191253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1345: {
    width: wp("40.27777777777778%"),
    top: hp("12.84153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_369_1345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_1346: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("101.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_1347: {
    width: wp("100%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1348: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.72222222222223%")
  },
  ImageBackground_369_1349: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1350: {
    width: wp("11.11111111111111%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.499999999999993%")
  },
  Text_369_1350: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1351: {
    width: wp("6.66584915584988%"),
    height: hp("3.2782864700901055%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444715711805543%")
  },
  View_369_1352: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.72222222222222%")
  },
  ImageBackground_369_1353: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1354: {
    width: wp("10.555555555555555%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%")
  },
  Text_369_1354: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1355: {
    width: wp("6.111111111111111%"),
    height: hp("3.2787023346280795%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%")
  },
  View_369_1356: {
    width: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%")
  },
  View_369_1357: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_369_1358: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1359: {
    width: wp("12.777777777777777%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%")
  },
  Text_369_1359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1360: {
    width: wp("6.111111111111111%"),
    height: hp("3.2792391021394987%"),
    top: hp("1.3655865778688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%")
  },
  View_369_1362: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.05555555555556%")
  },
  ImageBackground_369_1363: {
    width: wp("15.555555555555555%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_1364: {
    width: wp("13.61111111111111%"),
    top: hp("5.327868852459019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%")
  },
  Text_369_1364: {
    color: "rgba(90, 90, 90, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_369_1365: {
    width: wp("6.666667196485731%"),
    height: hp("3.2842899280819084%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444443%")
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
