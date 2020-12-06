import {StyleSheet, Dimensions} from 'react-native';

export const input = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    padding: 5,
  },
  textInput: {fontSize: 20},
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export const button_outline = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#9c27b0',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  bodyContainer: {
    padding: 5,
  },
  time: {
    color: 'white',
    fontStyle: 'italic',
  },
});

export const post_input = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b0bec5',
  },
  inputContainer: {
    flex: 1,
  },
  button: {},
});

export const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#90a4ae',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78909c',
  },
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topicItemContainer: {
    padding: 10,
  },
  topicItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#78909c',
  },
});
