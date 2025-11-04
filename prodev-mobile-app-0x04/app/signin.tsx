// app/signin.tsx
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/_joinstyle";
import { Link } from "expo-router";

export default function Signin() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign in.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.formControl} />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                secureTextEntry
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <Link href="/join">
            <Text style={styles.signupSubTitleText}> Join now</Text>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
