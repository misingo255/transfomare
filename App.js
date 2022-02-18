
import { StyleSheet, Text, View, Image } from 'react-native';
import TransformingButton from './components/Button';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appBar}>

        <View style={styles.leftContainer}>

          <View style = {styles.avatarWrapper}>

            <Image source={require('./assets/avatar.png')} resizeMode = 'cover' style = {styles.avatarImage}/>

          </View>

        </View>

        <View style={styles.rightContainer}>

          <Text style={styles.firstText}>Hellow, welcome to Transformia!</Text>
          <Text style={styles.secondText}>Select your desired transformation</Text>

        </View>

      </View>

      <View style = {styles.buttonsContainer}>

          <TransformingButton text = {'Style Transfer'}/>

          <TransformingButton text = {'Emojify'}/>

          <TransformingButton text = {'Ho do i feel'}/>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045b62',
    width: '100%',
    height: '150%',
  },

  appBar: {
    backgroundColor: 'white',
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    flexDirection: 'row',

  },

  leftContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    

  },

  rightContainer: {
    width: '70%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: '100%',
  },

  avatarImage: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: '100%',
    borderColor: '#045b62',
    borderWidth: 3,
  },

  firstText: {
    color: '#045b62',
    fontFamily: 'poppin',
    fontSize: 25,
    fontWeight: 'bold',
  },

  secondText: {
    color: '#045b62',
    fontFamily: 'poppin',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },

  buttonsContainer: {
    width: '70%',
    minHeight: '55%',
    marginLeft: '15%',
    marginRight: '15%',
    marginTop: 80,
    flexDirection: 'column',
  },

});
