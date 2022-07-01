import { useLayoutEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

//  Route prop provided by react navigation
function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // check if params is undefined,
  const isEditing = !!editedExpenseId; // !! converts to boolean
  // True if editing otherwise false

  useLayoutEffect(() => {
    console.log("isEditing", isEditing);
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpense() {}

  function cancelHandler() {}

  function confirmHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} title="Cancel"></Button>
        <Button
          style={styles.button}
          onPress={confirmHandler}
          title={isEditing ? "Update" : "Add"}
        ></Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
