import { StyleSheet } from "react-native";

export const employeestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
	fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',  // Primary color for the FAB
  },
	swipeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5252',
    width: 100,
    marginVertical: 8,
  },
  swipeText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
