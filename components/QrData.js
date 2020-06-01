import React, { useState, useEffect } from "react";

import { StyleSheet, Dimensions } from "react-native";

import { DataTable, Text } from "react-native-paper";

function QrData(props) {
  const {
    drwtNo1,
    drwtNo2,
    drwtNo3,
    drwtNo4,
    drwtNo5,
    drwtNo6,
    bnusNo,
    scanned,
    returnValue,
  } = props;

  const [game1, setGame1] = useState(props.game1);
  const [game2, setGame2] = useState(props.game2);
  const [game3, setGame3] = useState(props.game3);
  const [game4, setGame4] = useState(props.game4);
  const [game5, setGame5] = useState(props.game5);
  const [game1Result, setGame1Result] = useState("");
  const [game2Result, setGame2Result] = useState("");
  const [game3Result, setGame3Result] = useState("");
  const [game4Result, setGame4Result] = useState("");
  const [game5Result, setGame5Result] = useState("");
  const [resultMsg, setResultMsg] = useState("");

  useEffect(() => {
    if (scanned) {
      let cnt = 0;
      for (let i = 0; i < 11; i = i + 2) {
        if (
          game1.substr(i, 2) == drwtNo1 ||
          game1.substr(i, 2) == drwtNo2 ||
          game1.substr(i, 2) == drwtNo3 ||
          game1.substr(i, 2) == drwtNo4 ||
          game1.substr(i, 2) == drwtNo5 ||
          game1.substr(i, 2) == drwtNo6
        ) {
          cnt = cnt + 1;
        }
      }
      if (cnt == 6) {
        setGame1Result("1등");
      } else if (cnt == 5) {
        for (let i = 0; i < 11; i = i + 2) {
          if (game1.substr(i, 2) == bnusNo) {
            setGame1Result("2등");
          }
        }
        setGame1Result("3등");
      } else if (cnt == 4) {
        setGame1Result("4등");
      } else if (cnt == 3) {
        setGame1Result("5등");
      } else {
        setGame1Result("꽝");
      }

      if (game2 != "") {
        cnt = 0;
        for (let i = 0; i < 11; i = i + 2) {
          if (
            game2.substr(i, 2) == drwtNo1 ||
            game2.substr(i, 2) == drwtNo2 ||
            game2.substr(i, 2) == drwtNo3 ||
            game2.substr(i, 2) == drwtNo4 ||
            game2.substr(i, 2) == drwtNo5 ||
            game2.substr(i, 2) == drwtNo6
          ) {
            cnt = cnt + 1;
          }
        }
        if (cnt == 6) {
          setGame2Result("1등");
        } else if (cnt == 5) {
          for (let i = 0; i < 11; i = i + 2) {
            if (game1.substr(i, 2) == bnusNo) {
              setGame2Result("2등");
            }
          }
          setGame2Result("3등");
        } else if (cnt == 4) {
          setGame2Result("4등");
        } else if (cnt == 3) {
          setGame2Result("5등");
        } else {
          setGame2Result("꽝");
        }
      }

      if (game3 != "") {
        cnt = 0;
        for (let i = 0; i < 11; i = i + 2) {
          if (
            game3.substr(i, 2) == drwtNo1 ||
            game3.substr(i, 2) == drwtNo2 ||
            game3.substr(i, 2) == drwtNo3 ||
            game3.substr(i, 2) == drwtNo4 ||
            game3.substr(i, 2) == drwtNo5 ||
            game3.substr(i, 2) == drwtNo6
          ) {
            cnt = cnt + 1;
          }
        }
        if (cnt == 6) {
          setGame3Result("1등");
        } else if (cnt == 5) {
          for (let i = 0; i < 11; i = i + 2) {
            if (game1.substr(i, 2) == bnusNo) {
              setGame3Result("2등");
            }
          }
          setGame3Result("3등");
        } else if (cnt == 4) {
          setGame3Result("4등");
        } else if (cnt == 3) {
          setGame3Result("5등");
        } else {
          setGame3Result("꽝");
        }
      }

      if (game4 != "") {
        cnt = 0;
        for (let i = 0; i < 11; i = i + 2) {
          if (
            game4.substr(i, 2) == drwtNo1 ||
            game4.substr(i, 2) == drwtNo2 ||
            game4.substr(i, 2) == drwtNo3 ||
            game4.substr(i, 2) == drwtNo4 ||
            game4.substr(i, 2) == drwtNo5 ||
            game4.substr(i, 2) == drwtNo6
          ) {
            cnt = cnt + 1;
          }
        }
        if (cnt == 6) {
          setGame4Result("1등");
        } else if (cnt == 5) {
          for (let i = 0; i < 11; i = i + 2) {
            if (game1.substr(i, 2) == bnusNo) {
              setGame4Result("2등");
            }
          }
          setGame4Result("3등");
        } else if (cnt == 4) {
          setGame4Result("4등");
        } else if (cnt == 3) {
          setGame4Result("5등");
        } else {
          setGame4Result("꽝");
        }
      }

      if (game5 != "") {
        cnt = 0;
        for (let i = 0; i < 11; i = i + 2) {
          if (
            game5.substr(i, 2) == drwtNo1 ||
            game5.substr(i, 2) == drwtNo2 ||
            game5.substr(i, 2) == drwtNo3 ||
            game5.substr(i, 2) == drwtNo4 ||
            game5.substr(i, 2) == drwtNo5 ||
            game5.substr(i, 2) == drwtNo6
          ) {
            cnt = cnt + 1;
          }
        }
        if (cnt == 6) {
          setGame5Result("1등");
        } else if (cnt == 5) {
          for (let i = 0; i < 11; i = i + 2) {
            if (game1.substr(i, 2) == bnusNo) {
              setGame5Result("2등");
            }
          }
          setGame5Result("3등");
        } else if (cnt == 4) {
          setGame5Result("4등");
        } else if (cnt == 3) {
          setGame5Result("5등");
        } else {
          setGame5Result("꽝");
        }
      }
    }
  }, []);

  //번호 스타일링
  const numbers = (data) => {
    let color = "";
    if (data < 11) {
      color = "#fcba03";
    } else if (data >= 11 && data < 21) {
      color = "#00cafc";
    } else if (data >= 21 && data < 31) {
      color = "#f20242";
    } else if (data >= 31 && data < 41) {
      color = "#8a8889";
    } else {
      color = "#83e36d";
    }
    return color;
  };

  const setNumbersStyle = (color) => {
    return {
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
      width: Dimensions.get("window").width * 0.05,
      height: Dimensions.get("window").width * 0.09,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 2,
      marginRight: 2,
      backgroundColor: color,
      borderWidth: 1,
      borderColor: "black",
      marginTop: 5,
    };
  };

  const dataCellStyle = (num) => {
    if (parseInt(num) < 10) {
      return "black";
    } else {
      return "red";
    }
  };

  const setColor = (data) => {
    if (data == "꽝") {
      return "#c7bebd";
    } else {
      return "red";
    }
  };

  const setWidth = (data) => {
    if (data == "꽝" || data == "") {
      return 0;
    } else {
      return 1.5;
    }
  };

  const setTitleColor = (color, width) => {
    return {
      alignItems: "center",
      justifyContent: "center",
      borderColor: color,
      borderWidth: width,
      borderRadius: "25px",
      backgroundColor: color,
      borderWidth: 1,
      borderColor: "black",
      borderRadius:
        Math.round(
          Dimensions.get("window").width + Dimensions.get("window").height
        ) / 2,
      width: Dimensions.get("window").width * 0.05,
      height: Dimensions.get("window").width * 0.09,
      marginTop: 5,
    };
  };
  return (
    <DataTable
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.32,
        backgroundColor: "#f5fffa",
      }}
    >
      <DataTable.Header style={styles.dataHaederStyle}>
        <DataTable.Title style={styles.dataTitleStyle}>순서</DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          1
        </DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          2
        </DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          3
        </DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          4
        </DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          5
        </DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          6
        </DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          보너스
        </DataTable.Title>
        <DataTable.Title
          numeric
          style={styles.dataTitleStyle}
        ></DataTable.Title>
        <DataTable.Title numeric style={styles.dataTitleStyle}>
          결과
        </DataTable.Title>
      </DataTable.Header>

      <DataTable.Row style={styles.dataRowStyle}>
        <DataTable.Cell style={styles.dataCellStyle}>1게임</DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game1.substr(0, 2))))}
        >
          {game1 != "" ? game1.substr(0, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game1.substr(2, 2))))}
        >
          {game1 != "" ? game1.substr(2, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game1.substr(4, 2))))}
        >
          {game1 != "" ? game1.substr(4, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game1.substr(6, 2))))}
        >
          {game1 != "" ? game1.substr(6, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game1.substr(8, 2))))}
        >
          {game1 != "" ? game1.substr(8, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game1.substr(10, 2))))}
        >
          {game1 != "" ? game1.substr(10, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(bnusNo)))}
        >
          {bnusNo != "" ? bnusNo : ""}
        </DataTable.Cell>
        <DataTable.Cell
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          {" "}
          ={" "}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setTitleColor(setColor(game1Result), setWidth(game1Result))}
        >
          {game1Result}
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.dataRowStyle}>
        <DataTable.Cell style={styles.dataCellStyle}>2게임</DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game2.substr(0, 2))))}
        >
          {game2 != "" ? game2.substr(0, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game2.substr(2, 2))))}
        >
          {game2 != "" ? game2.substr(2, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game2.substr(4, 2))))}
        >
          {game2 != "" ? game2.substr(4, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game2.substr(6, 2))))}
        >
          {game2 != "" ? game2.substr(6, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game2.substr(8, 2))))}
        >
          {game2 != "" ? game2.substr(8, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game2.substr(10, 2))))}
        >
          {game2 != "" ? game2.substr(10, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(bnusNo)))}
        >
          {bnusNo != "" ? bnusNo : ""}
        </DataTable.Cell>
        <DataTable.Cell
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          {" "}
          ={" "}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setTitleColor(setColor(game2Result), setWidth(game2Result))}
        >
          {game2Result}
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.dataRowStyle}>
        <DataTable.Cell style={styles.dataCellStyle}>3게임</DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game3.substr(0, 2))))}
        >
          {game3 != "" ? game3.substr(0, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game3.substr(2, 2))))}
        >
          {game3 != "" ? game3.substr(2, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game3.substr(4, 2))))}
        >
          {game3 != "" ? game3.substr(4, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game3.substr(6, 2))))}
        >
          {game3 != "" ? game3.substr(6, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game3.substr(8, 2))))}
        >
          {game3 != "" ? game3.substr(8, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game3.substr(10, 2))))}
        >
          {game3 != "" ? game3.substr(10, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(bnusNo)))}
        >
          {bnusNo != "" ? bnusNo : ""}
        </DataTable.Cell>
        <DataTable.Cell
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          {" "}
          ={" "}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setTitleColor(setColor(game3Result), setWidth(game3Result))}
        >
          {game3Result}
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.dataRowStyle}>
        <DataTable.Cell style={styles.dataCellStyle}>4게임</DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game4.substr(0, 2))))}
        >
          {game4 != "" ? game4.substr(0, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game4.substr(2, 2))))}
        >
          {game4 != "" ? game4.substr(2, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game4.substr(4, 2))))}
        >
          {game4 != "" ? game4.substr(4, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game4.substr(6, 2))))}
        >
          {game4 != "" ? game4.substr(6, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game4.substr(8, 2))))}
        >
          {game4 != "" ? game4.substr(8, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game4.substr(10, 2))))}
        >
          {game4 != "" ? game4.substr(10, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(bnusNo)))}
        >
          {bnusNo != "" ? bnusNo : ""}
        </DataTable.Cell>
        <DataTable.Cell
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          {" "}
          ={" "}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setTitleColor(setColor(game4Result), setWidth(game4Result))}
        >
          {game4Result}
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={styles.dataRowStyle}>
        <DataTable.Cell>5게임</DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game5.substr(0, 2))))}
        >
          {game5 != "" ? game5.substr(0, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game5.substr(2, 2))))}
        >
          {game5 != "" ? game5.substr(2, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game5.substr(4, 2))))}
        >
          {game5 != "" ? game5.substr(4, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game5.substr(6, 2))))}
        >
          {game5 != "" ? game5.substr(6, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game5.substr(8, 2))))}
        >
          {game5 != "" ? game5.substr(8, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(game5.substr(10, 2))))}
        >
          {game5 != "" ? game5.substr(10, 2) : ""}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setNumbersStyle(numbers(parseInt(bnusNo)))}
        >
          {bnusNo != "" ? bnusNo : ""}
        </DataTable.Cell>
        <DataTable.Cell
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          {" "}
          ={" "}
        </DataTable.Cell>
        <DataTable.Cell
          numeric
          style={setTitleColor(setColor(game5Result), setWidth(game5Result))}
        >
          {game5Result}
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  dataHaederStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  dataRowStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  dataTitleStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default QrData;
