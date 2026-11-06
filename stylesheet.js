import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight || 0,
  },

  box: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    margin: 10,
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
    textAlign: "center",
  },

  row: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-around",
    alignSelf: "stretch", 
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
  }
});