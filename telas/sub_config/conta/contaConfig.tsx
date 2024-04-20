import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Modal, ModalContent } from "react-native-modals";

function configAccount() {
  const modalDados = () => {
    return (
      <Modal
        visible={this.state.visible}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        onSwipeOut={(event) => {
          this.setState({ visible: false });
        }}
      >
        <ModalContent></ModalContent>
      </Modal>
    );
  };

  function modalSecurity() {
    return (
      <Modal
        visible={this.state.visible}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        onSwipeOut={(event) => {
          this.setState({ visible: false });
        }}
      >
        <ModalContent></ModalContent>
      </Modal>
    );
  }

  function modalNotify() {
    return (
      <Modal
        visible={this.state.visible}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        onSwipeOut={(event) => {
          this.setState({ visible: false });
        }}
      >
        <ModalContent></ModalContent>
      </Modal>
    );
  }
}
