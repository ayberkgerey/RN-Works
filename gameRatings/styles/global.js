import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'darkblue',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  screenContainer: {
    padding: 30,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  rating: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 27,
    height: 27,
    marginLeft: 5,
  },
  headerTitle: {
    flexDirection: 'row',
  },
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  },
};
