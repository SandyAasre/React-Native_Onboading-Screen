/* eslint-disable prettier/prettier */
import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

const DotComponent =({ selected }) => {
    return (
        <View style={styles.DotComponent}>
            <View>

            </View>
        </View>
    );
};

  return (
    <Onboarding
    onSkip={() => navigation.replace('Home')}
    onDone={() => navigation.replace('Home')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assests/screen-4.png')} />,
        title: 'Cashback',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assests/screen-5.png')} />,
        title: 'Money Refund',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assests/screen-7.png')} />,
        title: 'Loyalty Program',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text',
      },
    ]}
  />
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        color: '#000',
      },
      DotComponent: {
        justifyContent: 'center',
        alignItems: 'center',
        rounded: 'full',
      },
});

export default OnboardingScreen;

