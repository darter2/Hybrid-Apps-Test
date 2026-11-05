import React from "react";
import {View} from "react-native";
import PropTypes from "prop-types";
import styles from "./stylesheet";


export default function Column({children}) {
    return <View style={styles.column}>{children}</View>;
}

Column.propTypes = {
    children: PropTypes.node.isRequired,
};