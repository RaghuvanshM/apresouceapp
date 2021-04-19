import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Button from "../../controls/Button/Button";
import Images from "../../utils/Images";
import styles from "./style";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        { id: 1, title: "Occasion", values: ["occ1", "occ2", "occ3", "occ4"] },
        {
          id: 2,
          title: "Style",
          values: [
            "style1",
            "style2",
            "style3",
            "style4",
            "style5",
            "style6",
            "style7",
            "style8",
            "style9",
          ],
        },
        {
          id: 3,
          title: "Category",
          values: ["cat1", "cat2", "cat3", "cat4", "cat5"],
        },
        {
          id: 4,
          title: "Pattern",
          values: ["pattern1", "pattern2", "pattern3"],
        },
        { id: 5, title: "Fabric", values: ["fabric1", "fabric2"] },
        {
          id: 6,
          title: "Colour",
          values: [
            "begie",
            "peach",
            "navy blue",
            "begie",
            "peach",
            "navy blue",
            "begie",
            "peach",
            "navy blue",
            "begie",
            "peach",
            "navy blue",
            "begie",
            "peach",
            "navy blue",
          ],
        },
        {
          id: 7,
          title: "Collar",
          values: [
            "collar1",
            "collar2",
            "collar3",
            "collar4",
            "collar5",
            "collar6",
          ],
        },
        { id: 8, title: "Size", values: ["size1", "size2"] },
      ],
      selectedFilter: { id: 0, values: [] },
    };
  }

  componentDidMount() {
    this.setState({ selectedFilter: this.state.filters[5] });
  }

  setSelected = (i) => {
    this.setState({ selectedFilter: this.state.filters[i] });
  };
  render() {
    console.log(this.state.selectedFilter);
    return (
      <View style={styles.container}>
        <View style={styles.closeSection}>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.onClose()}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <Image source={Images.cross} style={styles.closeImg} />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <TouchableOpacity style={styles.clearBtn}>
              <Text style={styles.clearLabel}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainSection}>
          <View style={{ width: 120 }}>
            {this.state.filters.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.listItem}
                  key={index}
                  onPress={() => this.setSelected(index)}
                >
                  <View style={styles.listItem1}>
                    <Text style={styles.listItemLabel} numberOfLines={1}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.listItem2}>
                    <Image
                      source={Images.circleArrowRight}
                      style={{ width: 20, height: 20, resizeMode: "contain" }}
                    />
                  </View>
                  <View
                    style={[
                      styles.fatBorder,
                      item.id == this.state.selectedFilter.id
                        ? { backgroundColor: "transparent" }
                        : {},
                    ]}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical: 10,
            }}
          >
            {this.state.selectedFilter.values.map((item, index) => {
              return (
                <View key={index} style={{ marginLeft: 5, marginBottom: 25 }}>
                  <View style={styles.filterValueIcon} />
                  <Text style={styles.filterValueLabel}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.applyButtonSection}>
          <Button title="APPLY" style={{ paddingVertical: 12, width: "85%" }} />
        </View>
      </View>
    );
  }
}
