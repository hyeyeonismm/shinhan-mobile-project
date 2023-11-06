import React from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {LineChart} from "react-native-chart-kit";
import {Dimensions} from "react-native";

const StockModal = ({modalOpen, setModalOpen, title}) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["6월", "7월", "8월", "9월", "10월", "11월"],
    datasets: [
      {
        data: [105000, 103000, 110000, 100000, 122000, 133000],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      backgroundColor: "#fff",
    },
    propsForDots: {
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalOpen} onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{marginBottom: 30, alignSelf: "flex-start"}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{fontWeight: 600, fontSize: 28}}>69,600원</Text>
            <View style={{flexDirection: "row", margin: 5}}>
              <Text style={{color: "#c0c0c0"}}>11월6일보다</Text>
              <Text style={{color: "blue"}}>-1,200원(0.14%)</Text>
            </View>
          </View>
          <View style={{alignSelf: "center", marginBottom: 15}}>
            <LineChart data={data} width={screenWidth - 120} height={200} chartConfig={chartConfig} />
          </View>
          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={{color: "#fff"}}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {fontWeight: "bold", fontSize: 20, marginBottom: 10, alignSelf: "flex-start"},
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
});

export default StockModal;
