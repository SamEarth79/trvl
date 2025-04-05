import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { 
    GoogleSignin,
    isSuccessResponse,
    isErrorWithCode,
    statusCodes
} from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default function HomeScreen() {

    const handleGoogleSignIn = async () => {
        try{
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if(isSuccessResponse(response)){
                console.log('User Info: ', response.data);
            }
        } catch (error) {

        }

    }

    useEffect(() => {
        GoogleSignin.configure({
          iosClientId: "372061854636-713f7k7q7i8p9a87bhrejjoeq6quido0.apps.googleusercontent.com",
          webClientId: "372061854636-34bo8e0jt9ma4qfd7esde2166ktibc1u.apps.googleusercontent.com",
          profileImageSize: 150,  
        })
    }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!!</ThemedText>
        <HelloWave />
      </ThemedView>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
            // initiate sign in
            handleGoogleSignIn();
        }}
        disabled={false}
        />;
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
