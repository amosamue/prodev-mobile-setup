// app/index.tsx
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";

export default function Index() {
  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Your Professional Development App</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Learn, grow, and connect with professionals around the world.
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 100 }}>
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join Now</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
